import { NavLink } from "react-router-dom";
import {
  FileText,
  ListChecks,
  Share2,
  History,
  Network
} from "lucide-react";

const navItems = [
  {
    label: "Requirements",
    icon: FileText,
    path: "/requirements",
  },
  {
    label: "Test Cases",
    icon: ListChecks,
    path: "/testcases",
  },
  {
    label: "Traceability",
    icon: Share2,
    path: "/traceability",
  },
  {
    label: "Change Log",
    icon: History,
    path: "/changelog",
  },
];

export default function Sidebar() {
  return (
    <div className="w-64 h-full bg-gray-900 text-white flex flex-col shadow-md">
    <NavLink to={"/"}>
      <div className="p-6 font-bold text-xl flex items-center gap-2">
        <Network className="w-6 h-6" />
        TraceWise
      </div>
      </NavLink>
      <nav className="flex flex-col gap-1 px-2 mt-4">
        {navItems.map(({ label, icon: Icon, path }) => (
          <NavLink
            to={path}
            key={label}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                isActive
                  ? "bg-gray-800 text-white"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`
            }
          >
            <Icon className="w-5 h-5" />
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
