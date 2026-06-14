import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="border border-[#b8b6b6]">
      <div className="w-[1000px] h-[70px] mx-auto px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded  flex items-center justify-center">
            <img src="/images/task-logo.png" alt="TaskDuty logo" />
          </div>

          <span className="font-semibold">TaskDuty</span>
        </div>

        <div className="flex gap-8 text-sm">
          <Link to="/new-task">New Task</Link>
          <Link to="/tasks">All Tasks</Link>
          <img
            src="/images/profile.png"
            alt="User profile"
            className="w-6 h-6 rounded-full"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
