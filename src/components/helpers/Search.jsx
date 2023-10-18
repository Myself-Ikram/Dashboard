import React from "react";
import { Grid, Box } from "@mui/material";

function Search() {
  return (
    <Grid
      container
      sx={{
        paddingTop: 2,
        paddingX: { xs: "7.5%", lg: "5%" },
      }}
    >
      {/* Greetings */}
      <Grid item xs={12} sm={8}>
        <p>Hi Ikram👋🏻,</p>
      </Grid>
      {/* SearchBox */}
      <Grid
        item
        xs={12}
        sm={4}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center", sm: "flex-end" },
        }}
      >
        <Box
          component={"input"}
          placeholder="🔍Search"
          sx={{
            borderRadius: 2,
            outline: "none",
          }}
          style={styles.search}
        />
      </Grid>
    </Grid>
  );
}

export default Search;

const styles = {
  search: {
    height: 30,
    border: "none",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  },
};
