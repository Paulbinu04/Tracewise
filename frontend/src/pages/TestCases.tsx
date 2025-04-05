import { useState } from "react";
import data from "../data/testcases.json";
import { TestCase } from "../types/testcases";
import TestCaseTable from "../components/TestCaseTable";
import TestCaseDetails from "../components/TestCaseDetails";
import TestCaseModal from "../components/TestCaseModal";

export default function TestCases() {
  const [testCases, setTestCases] = useState<TestCase[]>(data);
  const [selected, setSelected] = useState<TestCase | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [editTestCase, setEditTestCase] = useState<TestCase | null>(null);

  const deleteTestCase = (id: string) => {
    setTestCases((prev) => prev.filter((t) => t.id !== id));
    if (selected?.id === id) setSelected(null);
  };

  const handleModalSubmit = (data: TestCase) => {
    if (editTestCase) {
      // Edit existing
      setTestCases((prev) =>
        prev.map((t) => (t.id === data.id ? data : t))
      );
      setSelected(data);
    } else {
      // Add new
      setTestCases((prev) => [...prev, data]);
      setSelected(data);
    }
    setEditTestCase(null);
    setShowModal(false);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Test Cases</h1>
        <button
          onClick={() => {
            setEditTestCase(null);
            setShowModal(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + Add Test Case
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <TestCaseTable
            testCases={testCases}
            onDelete={deleteTestCase}
            onSelect={(t) => setSelected(t)}
          />
        </div>
        <div className="col-span-1 border rounded p-4 bg-gray-50">
          <TestCaseDetails
            selected={selected}
            onEdit={() => {
              if (selected) {
                setEditTestCase(selected);
                setShowModal(true);
              }
            }}
          />
        </div>
      </div>

      <TestCaseModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setEditTestCase(null);
        }}
        initialData={editTestCase}
        onSubmit={handleModalSubmit}
      />
    </div>
  );
}
