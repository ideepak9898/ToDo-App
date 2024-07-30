export const ColorPalette = {
  fontDark: "#101727",
  fontLight: "#f0f0f0",
  darkMode: "#383838", // TODO: add dark and light mode colors
  lightMode: "#ffffff",
  purple: "#b624ff",
  red: "#ff3131",
  orange: "#ff9318",
  Cyan: "#069696",
} as const;

export const themeConfig: { [key: string]: { primaryColor: string; secondaryColor?: string } } = {
  Cyan: {
    // Default dark theme
    primaryColor: ColorPalette.Cyan,
  },
  "Light Cyan": {
    // Default light theme
    primaryColor: ColorPalette.Cyan,
    secondaryColor: "#edeef6",
  },
  Blue: {
    primaryColor: "#2a93d5",
  },
  "Minty Fresh": {
    primaryColor: "#26C6DA",
    secondaryColor: "#E0F7FA",
  },
  
  // Add new themes here
};
