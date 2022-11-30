import React, { useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);
  const toggleTheme = () => {
    console.log(theme ? "Light" : "Dark");
    setTheme(!theme);
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
export { ThemeContext };
