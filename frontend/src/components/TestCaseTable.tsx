import { TestCase } from "../types/testcases";

interface Props {
  testCases: TestCase[];
  onSelect: (t: TestCase) => void;
  onDelete: (id: string) => void;
}

export default function TestCaseTable({ testCases, onSelect, onDelete }: Props) {
  return (
    <table className="w-full border">
      <thead>
        <tr className="bg-gray-100 text-left">
          <th className="p-2">Title</th>
          <th className="p-2">Requirement IDs</th>
          <th className="p-2">Status</th>
          <th className="p-2">Priority</th>
          <th className="p-2">Type</th>
          <th className="p-2">Automated</th>
          <th className="p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {testCases.map((t) => (
          <tr key={t.id} className="border-t hover:bg-gray-50">
            <td className="p-2">{t.title}</td>
            <td className="p-2">{t.requirement_ids.join(", ")}</td>
            <td className="p-2">{t.status}</td>
            <td className="p-2">{t.priority}</td>
            <td className="p-2">{t.type}</td>
            <td className="p-2">{t.automated ? "Yes" : "No"}</td>
            <td className="p-2 space-x-2">
              <button onClick={() => onSelect(t)} className="text-blue-600 hover:underline">
                View
              </button>
              <button onClick={() => onDelete(t.id)} className="text-red-600 hover:underline">
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
