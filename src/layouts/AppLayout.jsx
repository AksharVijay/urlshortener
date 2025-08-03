import Auth from "@/pages/Auth";
import Dashboard from "@/pages/Dashboard";
import LandingPage from "@/pages/LandingPage";
import Link from "@/pages/Link";
import RedirectLink from "@/pages/RedirectLink";
import React from "react";
import { Route, Routes } from "react-router-dom";


const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container px-4 max-w-7xl mx-auto">
        <>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/link/:id" element={<Link />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/:id" element={<RedirectLink />} />
          </Routes>
        </>
      </main>
            <div className="p-10 text-center bg-gray-700 mt-10">
        Made by Akshar Vijay
      </div>
    </div>
  );
};

export default AppLayout;
