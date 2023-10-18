import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import COLORS, { products } from "../../constants/constants";
import MobileProduct from "./MobileProduct";
import OtherProduct from "./OtherProduct";
function Products() {
  const [mobile, setMobile] = useState(window.innerWidth <= 600 ? true : false);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        borderRadius: 2,
        marginX: { xs: "7.5%", lg: "5%" },
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        paddingX: "1%",
        marginY: { xs: "6%", lg: "3%" },
      }}
    >
      <Grid container>
        <Grid item xs={12} sm={6} sx={{ width: "100%" }}>
          <h3>Products</h3>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: { xs: "center", sm: "flex-end" },
              alignItems: "center",
              opacity: 0.5,
              fontSize: { xs: 7, sm: 9, lg: 10 },
            }}
          >
            <input
              style={{
                outline: "none",
                border: "none",
                backgroundColor: COLORS.GREY,
                marginRight: "1%",
                padding: "1%",
              }}
              placeholder="Search"
            />
            <Box
              component={"p"}
              sx={{
                backgroundColor: COLORS.GREY,
                padding: "1%",
              }}
            >
              Last 30 days
            </Box>
          </Box>
        </Grid>
      </Grid>
      {mobile ? <MobileProduct /> : <OtherProduct />}
    </Box>
  );
}

export default Products;
