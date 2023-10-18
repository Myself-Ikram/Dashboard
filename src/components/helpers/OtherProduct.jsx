import React from "react";
import { Box } from "@mui/material";
import COLORS, { products } from "../../constants/constants";
function OtherProduct() {
  return (
    // Device other than Mobile
    <table>
      {/* Heading */}
      <Box
        component={"tr"}
        sx={{
          fontSize: { sm: 8, lg: 10 },
          opacity: 0.5,
          textAlign: "center",
        }}
      >
        <th align="start" width="60%">
          Product Name
          <hr color={COLORS.BLUE} />
        </th>
        <td width="10%">
          Stock <hr />
        </td>
        <td width="10%">
          Price
          <hr />
        </td>
        <td width="10%">
          Total Sales <hr />
        </td>
      </Box>
      {/* Loop for all data */}
      {products.map((item) => (
        <Box
          component={"tr"}
          sx={{
            textAlign: "center",
            fontSize: { sm: 8, lg: 10 },
          }}
        >
          <td align="start" style={{ display: "flex", height: 50 }}>
            <Box style={styles.block}>
              <img
                alt={item.name}
                src={item.img}
                height={"100%"}
                width={"100%"}
                style={{ borderRadius: 5 }}
              />
            </Box>
            <div>
              <Box
                component={"h5"}
                sx={{ marginY: 0, fontSize: { sm: 12, lg: 14 } }}
              >
                {item.name}
              </Box>
              <Box
                component={"p"}
                sx={{
                  fontSize: { sm: 8, lg: 10 },
                  opacity: 0.5,
                  marginTop: 0,
                }}
              >
                {item.desc}
              </Box>
            </div>
          </td>
          <td>{item.stock} in stock</td>
          <td style={{ fontWeight: "bold", color: "green" }}>$ {item.price}</td>
          <td>{item.sales}</td>
        </Box>
      ))}
    </table>
  );
}

export default OtherProduct;

const styles = {
  block: {
    height: 30,
    width: 50,
    marginRight: "2.5%",
  },
};
