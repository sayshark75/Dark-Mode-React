import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ThemeContext } from "../Contexts/ThemeProvider";
import { useContext } from "react";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className="navbar"
      style={{
        background: theme ? "white" : "#202020",
        color: theme ? "black" : "white",
        transition:"1000ms"
      }}
    >
      <h1>My Dashboard</h1>
      {theme ? <DarkModeIcon onClick={() => toggleTheme()} sx={{ fontSize: 40 }} /> : <LightModeIcon onClick={() => toggleTheme()} sx={{ fontSize: 40 }} />}
    </div>
  );
};

export default Navbar;
