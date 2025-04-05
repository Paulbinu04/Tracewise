import { Requirement } from "../types/requirement";
import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";

export default function RequirementModal({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Requirement) => void;
  initialData: Requirement | null;
}) {
  const [form, setForm] = useState<Requirement>({
    id: "",
    title: "",
    description: "",
    priority: "Medium",
    type: "Functional",
    status: "Proposed",
    created_by: "",
    last_updated: new Date().toISOString(),
    version: "1.0",
    tags: [],
  });

  useEffect(() => {
    if (initialData) setForm(initialData);
    else
      setForm((prev) => ({
        ...prev,
        last_updated: new Date().toISOString(),
      }));
  }, [initialData, isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-6 space-y-4">
          <Dialog.Title className="text-xl font-bold">
            {initialData ? "Edit Requirement" : "Add Requirement"}
          </Dialog.Title>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">ID</label>
              <input
                name="id"
                value={form.id}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Priority</label>
              <select
                name="priority"
                value={form.priority}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Type</label>
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              >
                <option>Functional</option>
                <option>Non-Functional</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Status</label>
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              >
                <option>Proposed</option>
                <option>Approved</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Version</label>
              <input
                name="version"
                value={form.version}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium mb-1">Created By</label>
              <input
                name="created_by"
                value={form.created_by}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-sm font-medium mb-1">Tags (comma-separated)</label>
              <input
                name="tags"
                value={form.tags.join(", ")}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    tags: e.target.value.split(",").map((tag) => tag.trim()),
                  }))
                }
                className="w-full border rounded px-3 py-2"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 text-sm"
            >
              Cancel
            </button>
            <button
              onClick={() => onSubmit(form)}
              className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white text-sm"
            >
              {initialData ? "Update" : "Add"}
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
