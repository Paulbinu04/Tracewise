import { Requirement } from "../types/requirement";

export default function RequirementDetails({
  selected,
  onEdit,
}: {
  selected: Requirement | null;
  onEdit: () => void;
}) {
  if (!selected) return <p className="text-gray-500">Click a row to view details.</p>;

  return (
    <>
      <h2 className="text-xl font-semibold mb-2">Requirement Details</h2>
      <p><strong>ID:</strong> {selected.id}</p>
      <p><strong>Title:</strong> {selected.title}</p>
      <p><strong>Description:</strong> {selected.description}</p>
      <p><strong>Priority:</strong> {selected.priority}</p>
      <p><strong>Type:</strong> {selected.type}</p>
      <p><strong>Status:</strong> {selected.status}</p>
      <p><strong>Created By:</strong> {selected.created_by}</p>
      <p><strong>Last Updated:</strong> {new Date(selected.last_updated).toLocaleString()}</p>
      <p><strong>Version:</strong> {selected.version}</p>
      <p><strong>Tags:</strong> {selected.tags.join(", ")}</p>
      <div className="mt-4">
        <button
          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
          onClick={onEdit}
        >
          Edit
        </button>
      </div>
    </>
  );
}
