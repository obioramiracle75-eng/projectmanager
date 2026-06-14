import { Link } from "react-router-dom";

interface TaskCardProps {
  id: string;
  category?: string;
  title: string;
  description?: string;
  tag: string;
  tagColor: string;
  className?: string;
}

const TaskCard = ({ id, title, description, tag, tagColor }: TaskCardProps) => {
  return (
    // <div className="border border-gray-200 rounded-md bg-white mb-8">
    //   {/* Top Row */}
    //   <div className="flex justify-between items-center px-4 py-3">
    //     <p className={`text-xs ${tagColor}`}>{tag}</p>

    //     <Link to={`/edit-task/${id}`}>
    //       <button className="bg-[#974fd0] text-white text-xs px-4 py-1 rounded">
    //         Edit
    //       </button>
    //     </Link>

    //     <Link to={`/delete-task/${id}`}>
    //       <button className="border border-[#974fd0] text-[#974fd0] text-xs px-4 py-1 rounded">
    //         Delete
    //       </button>
    //     </Link>
    //   </div>

    //   {/* Content */}
    //   <div className="px-4 py-4">
    //     <h3 className="text-lg font-semibold text-[#292929] mb-2">{title}</h3>
    //     {description && <p className="text-gray-600 text-sm">{description}</p>}
    //   </div>
    // </div>
    
<div className="border border-gray-200 rounded-lg bg-white mb-6 overflow-hidden">
  {/* Top Row */}
  <div className="flex items-center justify-between px-6 py-4">
    <span className={`text-sm font-medium ${tagColor}`}>
      {tag}
    </span>

    <div className="flex items-center gap-3">
      <button className="bg-[#974FD0] text-white px-4 py-1 rounded-md text-sm">
        Edit
      </button>

      <button className="border border-[#974FD0] text-[#974FD0] px-4 py-1 rounded-md text-sm">
        Delete
      </button>
    </div>
  </div>

  {/* Faint Line */}
  <div className="h-px bg-gray-200"></div>

  {/* Content */}
  <div className="px-6 py-5">
    <h2 className="text-2xl font-medium text-[#292929] mb-3">
      {title}
    </h2>

    <p className="text-[#737171] leading-7 text-sm">
      {description}
    </p>
  </div>
</div>


    
  );
};

export default TaskCard;
