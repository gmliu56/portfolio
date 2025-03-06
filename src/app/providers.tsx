import React from "react";
import CssBaseline from "@mui/material/CssBaseline";

import { ThemeProvider } from "./contexts/themeContext";
export default function Providers({ children }: { children: React.ReactNode }) {

  return (
    <ThemeProvider>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
