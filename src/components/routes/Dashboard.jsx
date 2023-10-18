import React from "react";
import { Box } from "@mui/material";
import Summary from "../helpers/Summary";
import Graphing from "../helpers/Graphing";
import Search from "../helpers/Search";
import Products from "../helpers/Products";
function Dashboard() {
  return (
    <Box>
      <Search />
      <Summary />
      <Graphing />
      <Products />
    </Box>
  );
}

export default Dashboard;
