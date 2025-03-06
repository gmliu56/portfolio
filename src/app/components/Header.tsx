"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { DarkMode, GitHub, LightMode, LinkedIn } from "@mui/icons-material";
import { useThemeContext } from "../contexts/themeContext";

const Header: React.FC = () => {
  const { mode, toggleMode } = useThemeContext();
  return (
    <AppBar
      position="sticky"
      sx={{
        color: mode === "light" ? "#2D2D2D" : "#E0E0E0",
        backgroundColor: mode === "light" ? "#F8F9FA" : "#121212",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Title */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            Guanming Liu (Nicholas)&apos;s Portfolio
          </Typography>

          {/* Social Icons */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              aria-label="GitHub"
              href="https://github.com/gmliu56"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <GitHub fontSize="large" />
            </IconButton>
            <IconButton
              aria-label="LinkedIn"
              href="https://linkedin.com/in/gmliu56"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <LinkedIn fontSize="large" />
            </IconButton>
            <IconButton
              aria-label="Toggle Theme"
              onClick={toggleMode}
              color="inherit"
            >
              {mode === "dark" ? (
                <LightMode fontSize="large" />
              ) : (
                <DarkMode fontSize="large" sx={{color:"#121212"}} />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
