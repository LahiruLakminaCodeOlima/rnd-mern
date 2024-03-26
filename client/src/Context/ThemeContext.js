import {createContext} from "react";

export const themes = {
    light: {
      type: "LIGHT",
      foreground: '#000000',
      background: '#eeeeee',
      btnBackground: '#222222'
    },
    dark: {
      type: "DARK",
      foreground: '#ffffff',
      background: '#222222',
      btnBackground: '#eeeeee'
    },
};

export const MyThemeContext = createContext(themes);