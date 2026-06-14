import { useEffect, useState, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getTask, updateTask } from "../api";

function EditTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("Urgent");
  const [error, setError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      if (!id) return;
      setError(null);
      setIsLoading(true);

      try {
        const task = await getTask(id);
        setTitle(task.title);
        setDescription(task.description);
        setTag(task.tag);
      } catch (err) {
        setError(
          "Unable to load that task. Please check the backend or the task ID.",
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadTask();
  }, [id]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!id) return;

    setError(null);
    setIsSaving(true);

    try {
      await updateTask(id, { title, description, tag });
      navigate("/tasks");
    } catch (err) {
      setError("Unable to update the task. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="max-w-2xl mx-auto py-10 px-6">
        <h1 className="text-3xl font-semibold mb-8">Edit Task</h1>

        {isLoading ? (
          <p className="text-gray-500">Loading task details...</p>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && <p className="text-red-500">{error}</p>}

            <div>
              <label className="block mb-2 font-medium">Task Title</label>
              <input
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Description</label>
              <textarea
                rows={6}
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Tag</label>
              <select
                value={tag}
                onChange={(event) => setTag(event.target.value)}
                className="w-full border rounded-lg p-3"
              >
                <option value="Urgent">Urgent</option>
                <option value="Important">Important</option>
                <option value="Personal">Personal</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isSaving}
              className="w-full bg-[#974fd0] text-white py-3 rounded-lg"
            >
              {isSaving ? "Saving..." : "Save Changes"}
            </button>
          </form>
        )}
      </div>
    </>
  );
}

export default EditTask;
