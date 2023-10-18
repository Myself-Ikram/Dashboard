import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./routes/Dashboard";
import Products from "./routes/Products";
import Customers from "./routes/Customers";
import Income from "./routes/Income";
import Help from "./routes/Help";
import Sidebar from "./Sidebar";
import { Box } from "@mui/material";
import COLORS from "../constants/constants";

function App() {
  return (
    <BrowserRouter>
      <Box style={{ display: "flex", backgroundColor: COLORS.GREY }}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/income" element={<Income />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
