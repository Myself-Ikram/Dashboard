import React from "react";
import { Box } from "@mui/material";
import { products, COLORS } from "../../constants/constants";
function MobileProduct() {
  return (
    <>
      {/* Mobile Products */}
      <div
        style={{
          color: COLORS.BLUE,
          opacity: 0.5,
          fontSize: 10,
          marginTop: "2.5%",
        }}
      >
        All Products
        <hr />
      </div>
      {products.map((item) => (
        <div style={styles.product}>
          <div style={styles.block}>
            <img
              alt={item.name}
              src={item.img}
              height={"100%"}
              width={"100%"}
              style={{ borderRadius: 5 }}
            />
          </div>
          <div style={{ width: "100%" }}>
            {/* Product name */}
            <Box component={"h5"} sx={{ marginY: 0 }}>
              {item.name}
            </Box>
            {/* Description */}
            <Box
              component={"p"}
              sx={{ marginTop: 0, fontSize: 8, opacity: 0.5 }}
            >
              {" "}
              {item.desc}
            </Box>
            {/* Table (Stock, Price, Sales) */}
            <table style={{ width: "100%", fontSize: 8 }}>
              {/* Heading */}
              <tr style={{ fontSize: 10, opacity: 0.5, textAlign: "center" }}>
                <td width={"33%"} style={{ color: COLORS.BLUE, opacity: 1 }}>
                  Stock
                  <hr color={COLORS.DARKBLUE} />
                </td>
                <td width={"33%"}>
                  Price <hr />
                </td>
                <td width={"33%"}>
                  Total Sales <hr />
                </td>
              </tr>
              {/* Data */}
              <tr style={{ textAlign: "center" }}>
                <td>{item.stock} in stock</td>
                <td style={{ fontWeight: "bold", color: "green" }}>
                  $ {item.price}
                </td>
                <td>{item.sales}</td>
              </tr>
            </table>
          </div>
        </div>
      ))}
    </>
  );
}

export default MobileProduct;

const styles = {
  product: {
    display: "flex",
    margin: "4%",
    borderBottom: "1px solid ",
    borderColor: COLORS.GREY,
  },
  block: {
    height: 30,
    width: 60,
    marginRight: "2%",
  },
};
