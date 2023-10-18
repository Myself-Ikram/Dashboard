import { Box } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { COLORS, menu } from "../constants/constants";
import { RiAdminLine } from "react-icons/ri";
function Sidebar() {
  const [active, setActive] = useState(1);
  const [mobile, setMobile] = useState(window.innerWidth <= 600 ? true : false);

  return (
    // SideBar
    <Box
      style={styles.sidebar}
      sx={{
        width: { xs: "14vw", sm: "27vw", lg: "18vw" },
      }}
    >
      {/* Admin */}
      <Box
        component={"h2"}
        style={styles.admin}
        sx={{ marginX: "5%", borderRadius: 10 }}
      >
        <RiAdminLine />
        {!mobile && <p>Admin Portal</p>}
      </Box>
      {/* SideBar Container */}
      <Box style={styles.sidebarContainer}>
        {/* Elements */}
        <Box
          style={styles.dashboard}
          sx={{ alignItems: { xs: "center", sm: "start" }, marginX: 3 }}
        >
          {menu.map((item) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", sm: "flex-start" },
                paddingX: { sm: 3 },
                marginY: { xs: 2, sm: 0 },
                borderRadius: { xs: 2, sm: 15 },
                backgroundColor: active === item.id ? COLORS.DARKBLUE : "",
                opacity: active === item.id ? 1 : 0.5,
                width: { xs: 30, sm: 120, lg: 150 },
              }}
            >
              <Link
                onClick={() => setActive(item.id)}
                to={item.to}
                style={styles.link}
              >
                <i style={{ fontSize: 20 }}>{item.icon}</i>
                {!mobile && (
                  <p style={{ marginLeft: 20, fontSize: 15 }}>{item.name}</p>
                )}
              </Link>
            </Box>
          ))}
        </Box>
        {/* User */}
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "flex-start" },
            alignItems: "center",
            backgroundColor: { sm: COLORS.DARKBLUE },
            marginBottom: { xs: "100%", sm: "10%", lg: "20%" },
            marginX: "5%",
            paddingX: "5%",
            borderRadius: { xs: 2, sm: 15 },
          }}
        >
          <img src="/images/profile.png" height={30} width={30} />
          {!mobile && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 1,
              }}
            >
              <p style={{ fontSize: 15, marginBottom: 0 }}>Ikram</p>
              <p style={{ fontSize: 8, marginTop: 0, opacity: 0.5 }}>
                Project Manager
              </p>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;

const styles = {
  sidebar: {
    backgroundColor: COLORS.BLUE,
    height: "100vh",
    position: "sticky",
    top: 0,
    left: 0,
    color: "white",
  },
  admin: {
    display: "flex",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    color: COLORS.BLUE,
    backgroundColor: "white",
  },
  sidebarContainer: {
    height: "88vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  dashboard: {
    display: "flex",
    flexDirection: "column",
  },
  link: {
    color: "white",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
  },
};
