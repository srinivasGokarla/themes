import React, { useState, useContext } from "react";
import "./styles.css";

const themes = {
  light: {
    color: "black",
    background: "white"
  },
  dark: {
    color: "white",
    background: "black"
  }
};

const ThemeContext = React.createContext(themes.dark);

function Comp1() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <h1>Current Theme: {theme.background}</h1>
      {/* <Comp2/> */}
    </div>
  );
}

function Comp2() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={() => setTheme(themes.light)}>Light</button>
      <button onClick={() => setTheme(themes.dark)}>Dark</button>
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState(themes.light);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }} className="App">
      <div
        style={{
          backgroundColor: theme.background,
          color: theme.color,
          height: "100vh",
          width: "100vw"
        }}
      >
        <Comp1 />
        <Comp2 />
      </div>
    </ThemeContext.Provider>
  );
}
