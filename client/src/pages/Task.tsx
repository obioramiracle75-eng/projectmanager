import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";
import { fetchTasks, deleteTask, Task } from "../api";

function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadTasks = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchTasks();
      setTasks(data);
    } catch (err) {
      setError("Unable to load tasks from the backend.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteTask(id);
      setTasks((current) => current.filter((task) => task._id !== id));
    } catch (err) {
      setError("Unable to delete task. Please try again.");
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <>
      <Navbar />

      <div className="w-[1001px] mx-auto px-8 py-10">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-5xl font-medium text-[#292929]">My Tasks</h1>

          <Link to="/new-task" className="text-[#974fd0] text-sm">
            + Add New Task
          </Link>
        </div>

        {loading && <p className="text-gray-500">Loading tasks...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && tasks.length === 0 && (
          <p className="text-gray-600">
            No tasks found. Add a new task to get started.
          </p>
        )}

        {tasks.map((task) => (
          <TaskCard
            key={task._id}
            id={task._id}
            tag={task.tag}
            tagColor={
              task.tag === "Urgent" ? "text-[#f38383]" : "text-[#4ade80]"
            }
            title={task.title}
            description={task.description}
            onDelete={handleDelete}
          />
        ))}

        <div className="text-center mt-10">
          <a href="#" className="text-[#974fd0] text-sm">
            Back To Top
          </a>
        </div>
      </div>
    </>
  );
}

export default Tasks;
