import { useLocation } from "react-router-dom";

export default function Topbar() {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Dashboard";
      case "/requirements":
        return "Requirements";
      case "/testcases":
        return "Test Cases";
      case "/traceability":
        return "Traceability Map";
      case "/changelog":
        return "Change Log";
      default:
        return "TraceWise";
    }
  };

  return (
    <div className="w-full h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shadow-sm">
      <div className="text-xl font-semibold text-gray-800 tracking-wide">
        {getTitle()}
      </div>
      <div className="flex items-center gap-4">
        {/* user | settings */}
        <div className="w-8 h-8 bg-gray-300 rounded-full" />
      </div>
    </div>
  );
}
