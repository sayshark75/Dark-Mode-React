import React from "react";
import SidebarSubMenu from "./SidebarSubMenu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { ThemeContext } from "../Contexts/ThemeProvider";
import { useContext } from "react";

const Sidebar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="sidebar"
      style={{
        background: theme ? "white" : "#202020",
        color: theme ? "black" : "white",
        transition:"1000ms",
      }}
    >
      <AccountCircleIcon sx={{ fontSize: 100, color: theme?"#2196F3":"#0D47A1" }} />
      <SidebarSubMenu />
      <AddCircleIcon sx={{ fontSize: 60, color: theme?"#64DD17":"#00C853" }} />
    </div>
  );
};

export default Sidebar;
