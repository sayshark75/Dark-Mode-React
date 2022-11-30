import React from "react";
import BarChartIcon from "@mui/icons-material/BarChart";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ApiIcon from "@mui/icons-material/Api";
import AssistantIcon from "@mui/icons-material/Assistant";
import SettingsIcon from "@mui/icons-material/Settings";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { ThemeContext } from "../Contexts/ThemeProvider";
import { useContext } from "react";


const SidebarSubMenu = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="sidebarCenterContainer">
      <BarChartIcon sx={{ fontSize: 30, color:theme? "#2196F3":"#0D47A1" }} />
      <AccountBalanceWalletIcon sx={{ fontSize: 30, color:theme? "#2196F3":"#0D47A1" }} />
      <ApiIcon sx={{ fontSize: 30, color:theme? "#2196F3":"#0D47A1" }} />
      <AssistantIcon sx={{ fontSize: 30, color:theme? "#2196F3":"#0D47A1" }} />
      <AutoAwesomeIcon sx={{ fontSize: 30, color:theme? "#2196F3":"#0D47A1" }} />
      <SettingsIcon sx={{ fontSize: 30, color:theme? "#2196F3":"#0D47A1" }} />
    </div>
  );
};

export default SidebarSubMenu;
