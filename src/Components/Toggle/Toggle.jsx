import { useContext, useTransition } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { themeContext } from "../../Context";
import "./Toggle.css";

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
  };

  return (
    <div className="toggle" onClick={handleClick}>
      <MdDarkMode />
      <MdLightMode />
      <div
        className="t-button"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
