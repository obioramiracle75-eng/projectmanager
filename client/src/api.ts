export interface Task {
  _id: string;
  title: string;
  description: string;
  tag: string;
  createdAt?: string;
  updatedAt?: string;
}

const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:5000";
const TASKS_URL = `${BASE_URL}/api/tasks`;

const handleResponse = async (response: Response) => {
  const text = await response.text();
  if (!response.ok) {
    throw new Error(text || response.statusText);
  }
  return text ? JSON.parse(text) : null;
};

export async function fetchTasks(): Promise<Task[]> {
  const response = await fetch(TASKS_URL);
  return handleResponse(response);
}

export async function getTask(id: string): Promise<Task> {
  const response = await fetch(`${TASKS_URL}/${id}`);
  return handleResponse(response);
}

export async function createTask(task: {
  title: string;
  description: string;
  tag: string;
}) {
  const response = await fetch(TASKS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });

  return handleResponse(response);
}

export async function updateTask(
  id: string,
  task: { title: string; description: string; tag: string },
) {
  const response = await fetch(`${TASKS_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });

  return handleResponse(response);
}

export async function deleteTask(id: string) {
  const response = await fetch(`${TASKS_URL}/${id}`, {
    method: "DELETE",
  });

  return handleResponse(response);
}
