import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { createTask } from "../api";

function NewTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("Urgent");
  const [error, setError] = useState<string | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSaving(true);

    if (!title || !description) {
      setError("Please add a title and description.");
      setIsSaving(false);
      return;
    }

    try {
      await createTask({ title, description, tag });
      navigate("/tasks");
    } catch (err) {
      setError("Unable to save task. Please check your backend and try again.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="w-[1001px] mx-auto py-10">
        <form className="space-y-8" onSubmit={handleSubmit}>
          <h1 className="text-3xl font-semibold mb-8">New Task</h1>

          {error && <p className="text-red-500">{error}</p>}

          <fieldset className="border border-gray-300 rounded-md px-4 pb-4">
            <legend className="px-2 text-sm text-gray-500">Task Title</legend>
            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="E.g Project Defense, Assignment..."
              className="w-full outline-none text-sm"
            />
          </fieldset>

          <fieldset className="border border-gray-300 rounded-md px-4 pb-4">
            <legend className="px-2 text-sm text-gray-500">Description</legend>
            <textarea
              rows={6}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Briefly describe your task..."
              className="w-full outline-none resize-none text-sm"
            />
          </fieldset>

          <fieldset className="border border-gray-300 rounded-md px-4 pb-4">
            <legend className="px-2 text-sm text-gray-500">Tags</legend>
            <select
              value={tag}
              onChange={(event) => setTag(event.target.value)}
              className="w-full outline-none text-sm bg-transparent"
            >
              <option value="Urgent">Urgent</option>
              <option value="Important">Important</option>
              <option value="Personal">Personal</option>
            </select>
          </fieldset>

          <button
            type="submit"
            disabled={isSaving}
            className="w-full bg-[#974fd0] text-white py-4 rounded-md"
          >
            {isSaving ? "Saving..." : "Done"}
          </button>
        </form>
      </div>
    </>
  );
}

export default NewTask;
