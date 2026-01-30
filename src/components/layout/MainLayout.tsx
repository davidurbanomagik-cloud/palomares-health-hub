import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="ml-[250px] min-h-screen p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
