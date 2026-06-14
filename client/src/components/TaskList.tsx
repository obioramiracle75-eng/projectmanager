import TaskCard from "./TaskCard";

function TaskList() {
  return (
    <div className="mt-8">
      <TaskCard
        id="1"
        className="border border-[#b8b6b6] rounded-md"
        tag="Urgent"
        tagColor="text-[#f38383]"
        title="FinTech Website Update"
        description="Lorem ipsum dolor sit amet..."
        category="Urgent"
      />
      <TaskCard
        id="2"
        tag="Important"
        tagColor="text-[#73c3ac]"
        title="Agro Website Update"
        description="Lorem ipsum dolor sit amet..."
        category="Important"
      />
      <TaskCard
        id="3"
        tag="Urgent"
        tagColor="text-[#f38383]"
        title="FinTech Website Update"
        description="Lorem ipsum dolor sit amet..."
        category="Urgent"
      />
      <TaskCard
        id="4"
        tag="Important"
        tagColor="text-[#73c3ac]"
        title="Agro Website Update"
        description="Lorem ipsum dolor sit amet..."
        category="Important"
      />
    </div>
  );
}

export default TaskList;
