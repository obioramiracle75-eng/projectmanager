import { Link } from "react-router-dom";

interface TaskCardProps {
  id: string;
  title: string;
  description?: string;
  tag: string;
  tagColor: string;
  onDelete?: (id: string) => void;
}

const TaskCard = ({
  id,
  title,
  description,
  tag,
  tagColor,
  onDelete,
}: TaskCardProps) => {
  return (
    <div className="border border-gray-200 rounded-lg bg-white mb-6 overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4">
        <span className={`text-sm font-medium ${tagColor}`}>{tag}</span>

        <div className="flex items-center gap-3">
          <Link to={`/edit/${id}`}>
            <button className="bg-[#974FD0] text-white px-4 py-1 rounded-md text-sm">
              Edit
            </button>
          </Link>

          <button
            type="button"
            onClick={() => onDelete?.(id)}
            className="border border-[#974FD0] text-[#974FD0] px-4 py-1 rounded-md text-sm"
          >
            Delete
          </button>
        </div>
      </div>

      <div className="h-px bg-gray-200"></div>

      <div className="px-6 py-5">
        <h2 className="text-2xl font-medium text-[#292929] mb-3">{title}</h2>
        <p className="text-[#737171] leading-7 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default TaskCard;
