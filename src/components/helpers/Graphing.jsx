import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import {
  BarChart,
  XAxis,
  Bar,
  LineChart,
  PieChart,
  Pie,
  Cell,
  Line,
} from "recharts";
import {
  COLORS,
  overviewData,
  customerData,
  salesData,
} from "../../constants/constants";

function Graphing() {
  const C = [COLORS.DARKBLUE, COLORS.GREY];
  const [mobile, setMobile] = useState(window.innerWidth <= 600 ? true : false);
  return (
    <Grid
      container
      sx={{ paddingX: { xs: "7.5%", lg: "5%" }, marginBottom: "3%" }}
    >
      {/* Overview */}
      <Grid item xs={12} lg={6}>
        <Box
          sx={{
            marginBottom: { xs: "7.5%", lg: "auto" },
            borderRadius: 2,
          }}
          style={styles.overview}
        >
          {/* Heading */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingX: "2%",
            }}
          >
            <Box>
              <h3 style={{ marginBottom: 0 }}>Overview</h3>
              <Box
                component={"p"}
                sx={{
                  fontSize: { xs: 7, sm: 12, lg: 10 },
                  opacity: 0.5,
                  marginTop: 0,
                }}
              >
                Monthly Earning
              </Box>
            </Box>
            <Box
              sx={{
                opacity: 0.5,
                fontSize: { xs: 7, sm: 12, lg: 10 },
                backgroundColor: COLORS.GREY,
                padding: "1%",
                borderRadius: 1,
              }}
            >
              Quaterly ↓
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {/* Linechart */}
            <LineChart
              width={mobile ? 220 : 400}
              height={mobile ? 100 : 180}
              data={overviewData}
            >
              <XAxis dataKey="name" fontSize={10} />
              <Line dataKey="uv" fill={COLORS.BLUE} />
            </LineChart>
          </Box>
        </Box>
      </Grid>
      {/* CUSTOMERS */}
      <Grid
        item
        xs={7}
        lg={4}
        sx={{
          display: "flex",
          justifyContent: { xs: "flex-start", lg: "center" },
        }}
      >
        <Box
          style={styles.customers}
          sx={{
            paddingX: "2%",
            borderRadius: 2,
            width: { xs: "90%", lg: "65%" },
          }}
        >
          <Box>
            <h3 style={{ marginBottom: 0 }}>Customers</h3>
            <Box
              component={"p"}
              sx={{
                fontSize: { xs: 7, sm: 12, lg: 10 },
                opacity: 0.5,
                marginTop: 0,
              }}
            >
              Customers that buy products
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {/* Piechart */}
            <PieChart
              width={mobile ? 100 : 200}
              height={mobile ? 90 : 180}
              style={{ padding: 0 }}
            >
              <Pie
                data={customerData}
                dataKey="value"
                nameKey="name"
                cx={mobile ? 50 : 100}
                cy={mobile ? 40 : 80}
                outerRadius={mobile ? 30 : 75}
                fill={["blue", "pink", "red"]}
              >
                {customerData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={C[index % C.length]} />
                ))}
              </Pie>
            </PieChart>
          </Box>
        </Box>
      </Grid>
      {/* SALES */}
      <Grid
        item
        xs={5}
        lg={2}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Box
          style={styles.sales}
          sx={{
            width: { xs: "75%", lg: "100%" },
            borderRadius: 2,
            paddingX: { xs: "2%", lg: "3.5%" },
          }}
        >
          <Box>
            <h3 style={{ marginBottom: 0 }}>Sales</h3>
            <Box
              component={"p"}
              sx={{
                fontSize: { xs: 7, sm: 12, lg: 10 },
                opacity: 0.5,
                marginTop: 0,
              }}
            >
              Previous year sales
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <BarChart
              width={mobile ? 65 : 100}
              height={mobile ? 100 : 160}
              data={salesData}
            >
              <XAxis dataKey="name" fontSize={10} />
              <Bar dataKey="uv" fill={COLORS.BLUE} />
            </BarChart>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Graphing;

const styles = {
  overview: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  },
  customers: {
    height: "100%",
    backgroundColor: "white",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  },
  sales: {
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    backgroundColor: "white",
    height: "100%",
  },
};
