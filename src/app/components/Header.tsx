"use client";
import React, { use } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { DarkMode, GitHub, LightMode, LinkedIn } from "@mui/icons-material";
import { ThemeContext } from "../contexts/themeContext";
import contentEN from "../locale/en/header.json";
import {
  darkModeBackgroundColor,
  darkModeTextColor,
  lightModeBackgroundColor,
  lightModeTextColor,
} from "../style/theme";
import { Link } from "@mui/material";

const Header: React.FC = () => {
  const { mode, toggleMode } = use(ThemeContext);
  const content = contentEN;
  return (
    <AppBar
      position="sticky"
      sx={{
        color: mode === "dark" ? darkModeTextColor : lightModeTextColor,
        backgroundColor:
          mode === "dark" ? darkModeBackgroundColor : lightModeBackgroundColor,
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
            {content.title}
          </Typography>

          {/* Links to Sections */}
          <Link
            href="#about-section"
            color="inherit"
            underline="hover"
            sx={{ mx: "10px" }}
          >
            <Typography>About</Typography>
          </Link>
          <Link
            href="#work-section"
            color="inherit"
            underline="hover"
            sx={{ mx: "10px" }}
          >
            <Typography>Work</Typography>
          </Link>
          <Link
            href="#contact-section"
            color="inherit"
            underline="hover"
            sx={{ mx: "10px" }}
          >
            <Typography>Contact</Typography>
          </Link>

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
                <DarkMode fontSize="large" sx={{ color: "#121212" }} />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
