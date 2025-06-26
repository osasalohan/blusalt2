"use-client";

import Panel from "@/components/Panel";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  return (
    <div className="bg-white flex min-h-screen">
      <Sidebar />
      <div className="grow xl:ml-[14.125rem]">
        <Navbar />
        <div className="xl:p-7.5 xl:pt-6 p-4 flex flex-col xl:flex-row gap-3.5">
          <Dashboard />
          <Panel />
        </div>
      </div>
    </div>
  );
}
