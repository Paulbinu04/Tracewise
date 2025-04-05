import { useEffect, useState } from "react";
import { TestCase } from "../types/testcases";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  initialData: TestCase | null;
  onSubmit: (data: TestCase) => void;
}

export default function TestCaseModal({
  isOpen,
  onClose,
  initialData,
  onSubmit,
}: Props) {
  const [formData, setFormData] = useState<TestCase>({
    id: "",
    title: "",
    description: "",
    steps: [],
    expected_result: "",
    actualResult: "",
    status: "Not Run",
    priority: "Medium",
    type: "Functional",
    automated: false,
    requirement_ids: [],
    created_by: "",
    last_updated: new Date().toISOString(),
    version: "1.0",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        requirement_ids: Array.isArray(initialData.requirement_ids)
          ? initialData.requirement_ids
          : [], // ensures it's an array
      });
    } else {
      setFormData({
        id: crypto.randomUUID(),
        title: "",
        description: "",
        steps: [],
        expected_result: "",
        actualResult: "",
        status: "Not Run",
        priority: "Medium",
        type: "Functional",
        automated: false,
        requirement_ids: [],
        created_by: "",
        last_updated: new Date().toISOString(),
        version: "1.0",
      });
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const target = e.target;

    if (target.type === "checkbox") {
      const checkbox = target as HTMLInputElement;
      setFormData((prev) => ({
        ...prev,
        [target.name]: checkbox.checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [target.name]: target.value,
      }));
    }
  };

  const handleRequirementIdsChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    const list = value.split(",").map((id) => id.trim()).filter(Boolean);
    setFormData((prev) => ({ ...prev, requirement_ids: list }));
  };

  const handleSubmit = () => {
    const updatedData = {
      ...formData,
      last_updated: new Date().toISOString(),
    };
    onSubmit(updatedData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-20 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-3xl shadow-lg space-y-4">
        <h2 className="text-xl font-semibold mb-2">
          {initialData ? "Edit Test Case" : "Add Test Case"}
        </h2>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <label className="block font-medium mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Requirement IDs (comma-separated)</label>
            <input
              type="text"
              value={formData.requirement_ids.join(", ")}
              onChange={handleRequirementIdsChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div className="col-span-2">
            <label className="block font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              rows={2}
            />
          </div>

          <div className="col-span-2">
            <label className="block font-medium mb-1">Steps</label>
            <textarea
              name="steps"
              value={formData.steps}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              rows={2}
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Expected Result</label>
            <input
              type="text"
              name="expected_result"
              value={formData.expected_result}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Actual Result</label>
            <input
              type="text"
              name="actualResult"
              value={formData.actualResult}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="Not Run">Not Run</option>
              <option value="Pass">Pass</option>
              <option value="Fail">Fail</option>
              <option value="Blocked">Blocked</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Priority</label>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="Functional">Functional</option>
              <option value="Regression">Regression</option>
              <option value="Integration">Integration</option>
              <option value="System">System</option>
              <option value="Performance">Performance</option>
            </select>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <input
              type="checkbox"
              name="automated"
              checked={formData.automated}
              onChange={handleChange}
              className="h-4 w-4"
            />
            <label className="font-medium">Automated</label>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-400 rounded hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {initialData ? "Update" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
}
