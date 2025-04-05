import { useState } from "react";
import data from "../data/requirements.json";
import { Requirement } from "../types/requirement";
import RequirementTable from "../components/RequirementTable";
import RequirementDetails from "../components/RequirementDetails";
import RequirementModal from "../components/RequirementModal";

export default function Requirements() {
  const [requirements, setRequirements] = useState<Requirement[]>(data);
  const [selected, setSelected] = useState<Requirement | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [editRequirement, setEditRequirement] = useState<Requirement | null>(null);

  const deleteRequirement = (id: string) => {
    setRequirements((prev) => prev.filter((r) => r.id !== id));
    if (selected?.id === id) setSelected(null);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Requirements</h1>
        <button
          onClick={() => {
            setEditRequirement(null);
            setShowModal(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Add Requirement
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <RequirementTable
            requirements={requirements}
            onDelete={deleteRequirement}
            onSelect={(r) => setSelected(r)}
          />
        </div>
        <div className="col-span-1 border rounded p-4 bg-gray-50">
          <RequirementDetails
            selected={selected}
            onEdit={() => {
              setEditRequirement(selected);
              setShowModal(true);
            }}
          />
        </div>
      </div>

      <RequirementModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        initialData={editRequirement}
        onSubmit={(data: Requirement) => {
          if (editRequirement) {
            setRequirements((prev) =>
              prev.map((req) => (req.id === data.id ? data : req))
            );
            setSelected(data);
          } else {
            setRequirements((prev) => [...prev, data]);
          }
        }}
      />
    </div>
  );
}
