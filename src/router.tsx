import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

const router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/weather" />} />
      <Route path="/weather" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default router;
