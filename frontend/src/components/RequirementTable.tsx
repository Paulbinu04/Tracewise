import { Requirement } from "../types/requirement";

export default function RequirementTable({
  requirements,
  onDelete,
  onSelect
}: {
  requirements: Requirement[];
  onDelete: (id: string) => void;
  onSelect: (r: Requirement) => void;
}) {
  return (
    <table className="w-full text-left border">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 border">ID</th>
          <th className="p-2 border">Title</th>
          <th className="p-2 border">Priority</th>
          <th className="p-2 border">Type</th>
          <th className="p-2 border">Status</th>
          <th className="p-2 border">Actions</th>
        </tr>
      </thead>
      <tbody>
        {requirements.map((req) => (
          <tr
            key={req.id}
            className="hover:bg-blue-50 cursor-pointer"
            onClick={() => onSelect(req)}
          >
            <td className="p-2 border">{req.id}</td>
            <td className="p-2 border">{req.title}</td>
            <td className="p-2 border">{req.priority}</td>
            <td className="p-2 border">{req.type}</td>
            <td className="p-2 border">{req.status}</td>
            <td className="p-2 border">
              <button
                className="text-sm text-red-600 hover:underline"
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(req.id);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
