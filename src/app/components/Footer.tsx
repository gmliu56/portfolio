"use client";
import React from "react";
import {
  Container,
  Typography,
  Box,
  Link,
  IconButton,
  Grid2 as Grid,
} from "@mui/material";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { useThemeContext } from "../contexts/themeContext";

const Footer: React.FC = () => {
  const { mode } = useThemeContext();
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: 3,
        backgroundColor: mode === "light" ? "#2563EB" : "#3B82F6",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          {/* Quick Links Section */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Link href="#" color="inherit" underline="hover" sx={{ mb: 1 }}>
                Home
              </Link>
              <Link
                href="#contact-section"
                color="inherit"
                underline="hover"
                sx={{ mb: 1 }}
              >
                Contact
              </Link>
            </Box>
          </Grid>

          {/* Social Media Section */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom>
              Connect with Me
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
                gap: 2,
              }}
            >
              <IconButton
                aria-label="GitHub"
                href="https://github.com/gmliu56"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
              >
                <GitHub />
              </IconButton>
              <IconButton
                aria-label="LinkedIn"
                href="https://linkedin.com/in/gmliu56"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
              >
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Guanming Liu. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
