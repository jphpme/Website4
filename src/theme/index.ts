import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: { main: "#2a9d8f" },
    secondary: { main: "#264653" },
    background: { default: "#f8fafc" },
  },
  typography: {
    fontFamily: ["Inter", "Helvetica", "Arial", "sans-serif"].join(","),
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
  },
});
