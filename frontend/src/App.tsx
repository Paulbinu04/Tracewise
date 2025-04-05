import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./layouts/Sidebar";
import Topbar from "./layouts/Topbar";
import Requirements from "./pages/Requirements";
import TestCases from "./pages/TestCases";
import Traceability from "./pages/Traceability";
import ChangeLog from "./pages/ChangeLog"
import Dashboard from "./pages/Dashboard";

function App() {

  return (
    <Router>
      <div className="flex h-screen w-screen">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Topbar />
          <main className="flex-1 p-4 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/requirements" element={<Requirements />} />
              <Route path="/testcases" element={<TestCases />} />
              <Route path="/traceability" element={<Traceability />} />
              <Route path="/changelog" element={<ChangeLog />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App
