import React from "react";
import { Box, Grid } from "@mui/material";
function DashBox({ data }) {
  return (
    <Grid
      container
      sx={{ borderRadius: 2, paddingY: "5%", paddingX: "2%" }}
      style={styles.elementContainer}
    >
      <Grid item xs={5}>
        {data.img}
      </Grid>
      <Grid item xs={7}>
        {/* Title */}
        <Box
          component={"p"}
          sx={{
            fontSize: { xs: 7, sm: 12, lg: 10 },
            marginBottom: 0,
            opacity: 0.5,
          }}
        >
          {data.title}
        </Box>
        {/* Price */}
        <Box
          component={"h2"}
          sx={{
            fontSize: { xs: 15, sm: 24 },
            marginTop: 0,
            marginBottom: 0,
          }}
        >
          {data.price}
        </Box>
        {/* Description */}
        <Box
          component={"p"}
          sx={{ fontSize: { xs: 7, sm: 12, lg: 10 }, marginTop: 0 }}
        >
          <e
            style={{
              color: data.status === "high" ? "#00b894" : "#d63031",
              fontWeight: "bold",
            }}
          >
            {data.status === "low" ? "↓" : "↑"}
            {data.desc}{" "}
          </e>
          this month
        </Box>
      </Grid>
    </Grid>
  );
}

export default DashBox;

const styles = {
  elementContainer: {
    backgroundColor: "white",
    width: "40%",
    display: "flex",
    alignItems: "flex-end",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  },
};
