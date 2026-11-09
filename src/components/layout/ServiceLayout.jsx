import { Outlet } from "react-router-dom";

export default function ServiceLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-purple-950 to-black">
      <Outlet />
    </div>
  );
}