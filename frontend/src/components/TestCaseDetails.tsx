import { TestCase } from "../types/testcases";

interface Props {
  selected: TestCase | null;
  onEdit: () => void;
}

export default function TestCaseDetails({ selected, onEdit }: Props) {
  if (!selected)
    return <p className="text-gray-500">Select a test case to view details.</p>;

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-semibold mb-2 border-b pb-1">Test Case Details</h2>
      <div className="space-y-1 text-sm">
        <p><span className="font-semibold">ID:</span> {selected.id}</p>
        <p><span className="font-semibold">Title:</span> {selected.title}</p>
        <p><span className="font-semibold">Description:</span> {selected.description}</p>
        <p><span className="font-semibold">Steps:</span> {selected.steps.join(", ")}</p>
        <p><span className="font-semibold">Expected Result:</span> {selected.expected_result}</p>
        <p><span className="font-semibold">Actual Result:</span> {selected.actualResult || "N/A"}</p>
        <p><span className="font-semibold">Status:</span> {selected.status}</p>
        <p><span className="font-semibold">Priority:</span> {selected.priority}</p>
        <p><span className="font-semibold">Type:</span> {selected.type}</p>
        <p><span className="font-semibold">Automated:</span> {selected.automated ? "Yes" : "No"}</p>
        <p><span className="font-semibold">Requirement IDs:</span> {selected.requirement_ids.join(", ")}</p>
        <p><span className="font-semibold">Created By:</span> {selected.created_by}</p>
        <p><span className="font-semibold">Last Updated:</span> {selected.last_updated}</p>
        <p><span className="font-semibold">Version:</span> {selected.version}</p>
      </div>

      <button
        onClick={onEdit}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Edit
      </button>
    </div>
  );
}
