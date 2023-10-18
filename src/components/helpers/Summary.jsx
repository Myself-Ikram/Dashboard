import React from "react";
import DashBox from "../helpers/DashBox";
import { Grid, Box } from "@mui/material";
import { DASHDATA1, DASHDATA2 } from "../../constants/constants";
function Summary() {
  return (
    <Grid
      container
      sx={{
        paddingTop: 2,
        marginBottom: { xs: -1, lg: -5 },
        paddingX: "2.75%",
      }}
    >
      <Grid item xs={12} lg={6} sx={{ marginBottom: "7.5%" }}>
        {/* Summary container */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            height: "100%",
          }}
        >
          {/* Summary Element 1-2 */}
          {DASHDATA1.map((item) => (
            <DashBox data={item} />
          ))}
        </Box>
      </Grid>
      <Grid item xs={12} lg={6} sx={{ marginBottom: "7.5%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            height: "100%",
          }}
        >
          {/* Summary Element 304 */}
          {DASHDATA2.map((item) => (
            <DashBox data={item} />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}

export default Summary;
