import React, { createContext, useState, useEffect } from "react";
import {
  THEME_DARK,
  THEME_LIGHT,
  THEME_BG_COLOR,
  THEME_BG_ELEMENT_COLOR,
  THEME_BG_INPUT_COLOR,
  THEME_TEXT_COLOR,
  THEME_BOX_SHADOW_COLOR,
} from "./constants";

const ThemeContext = createContext();

const _themes = {
  light: {
    [THEME_BG_COLOR]: "hsl(0, 0%, 98%)",
    [THEME_BG_ELEMENT_COLOR]: "hsl(0, 0%, 100%)",
    [THEME_BG_INPUT_COLOR]: "hsl(0, 0%, 52%)",
    [THEME_TEXT_COLOR]: "hsl(200, 15%, 8%)",
    [THEME_BOX_SHADOW_COLOR]: "17, 21, 23",
  },
  dark: {
    [THEME_BG_COLOR]: "hsl(207, 26%, 17%)",
    [THEME_BG_ELEMENT_COLOR]: "hsl(209, 23%, 22%)",
    [THEME_TEXT_COLOR]: "hsl(0, 0%, 100%)",
    [THEME_BOX_SHADOW_COLOR]: "255, 255, 255",
  },
};

const _setSassColorSchema = (themeObject) => {
  // logic for global sass variables
  for (let sassVariable in themeObject) {
    document.documentElement.style.setProperty(
      sassVariable,
      themeObject[sassVariable]
    );
  }
};

export function Theme({ children }) {
  const [_theme, _setTheme] = useState(THEME_LIGHT);

  const isDarkTheme = _theme === THEME_DARK;

  const isLightTheme = _theme === THEME_LIGHT;

  const changeTheme = () => {
    const newTheme = isDarkTheme ? THEME_LIGHT : THEME_DARK;
    _setTheme(newTheme);
  };
  useEffect(() => _setSassColorSchema(_themes[_theme]), [_theme]);

  const provide = {
    changeTheme,
    isDarkTheme,
    isLightTheme,
  };

  return (
    <ThemeContext.Provider value={provide}>{children}</ThemeContext.Provider>
  );
}

export default ThemeContext;
