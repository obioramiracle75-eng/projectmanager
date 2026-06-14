import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";
import { Link } from "react-router-dom";

function Tasks() {
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

        <TaskCard
          id="1"
          tag="Urgent"
          tagColor="text-[#f38383]"
          title="FinTech Website Update"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget tellus suspendisse et viverra."
        />

        <TaskCard
          id="2"
          tag="Important"
          tagColor="text-[#4ade80]"
          title="Agro Website Update"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget tellus suspendisse et viverra."
        />

        <TaskCard
          id="3"
          tag="Urgent"
          tagColor="text-[#f38383]"
          title="FinTech Website Update"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget tellus suspendisse et viverra."
        />

        <TaskCard
          id="4"
          tag="Important"
          tagColor="text-[#4ade80]"
          title="Agro Website Update"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget tellus suspendisse et viverra."
        />
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
