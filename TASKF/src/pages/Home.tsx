import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />

      <section className="max-w-6xl mx-auto px-10 py-20">
        <div className="grid md:grid-cols-2 items-center gap-16">
          <div>
            <h1 className="text-5xl font-bold leading-tight">
              Manage your Tasks on
              <span className="block text-purple-600">TaskDuty</span>
            </h1>

            <p className="mt-6 text-gray-500">
              Keep track of your daily tasks and stay organized.
            </p>

            <Link
              to="/tasks"
              className="inline-block mt-8 bg-purple-600 text-white px-6 py-3 rounded"
            >
              Go To My Tasks
            </Link>
          </div>

          <div>
            <img src="/images/task-book.png" alt="" className="w-full" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
