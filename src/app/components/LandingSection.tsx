"use client";
/* eslint-disable react/react-in-jsx-scope */
import { Avatar, Box, Button, Typography } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Link from "next/link";
import contentEN from "@/app/locale/en/home.json";
import { ThemeContext } from "@/app/contexts/themeContext";
import { use } from "react";
import {
  darkModeBackgroundColor,
  darkModePrimaryColor,
  darkModeTextColor,
  lightModeBackgroundColor,
  lightModePrimaryColor,
  lightModeTextColor,
} from "../style/theme";

const LandingSection: React.FC = () => {
  const { mode } = use(ThemeContext);
  const content = contentEN;

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", lg: "column" },
        backgroundColor:
          mode === "dark" ? darkModeBackgroundColor : lightModeBackgroundColor,
        px: { xs: 4, md: 8 },
        gap: 20,
      }}
    >
      {/* About Section */}
      <Box
        id="about-section"
        sx={{
          width: { xs: "100%", lg: "100%" },
          minWidth: { xs: "300px" },
          padding: 4,
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: "space-around",
          alignItems: "center",
          color: mode === "dark" ? darkModeTextColor : lightModeTextColor,
        }}
      >
        <Box sx={{ maxWidth: "600px", mb: { xs: "40px", lg: 0 } }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
            {content.about.title}
          </Typography>
          <Typography
            sx={{
              lineHeight: 1.625,
              overflowWrap: "anywhere",
              hyphens: "auto",
            }}
          >
            {content.about.body}
          </Typography>
        </Box>
        <Avatar
          src={content.about.imageSrc}
          alt={content.about.imageAlt}
          sx={{ width: 200, height: 200 }}
        />
      </Box>

      {/* Work Display */}
      <Box id="work-section">
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: mode === "dark" ? darkModeTextColor : lightModeTextColor,
          }}
        >
          {content.projects.title}
        </Typography>
        {content.projects.list.map((project, index) => (
          <Box
            key={index}
            sx={{
              color: mode === "dark" ? darkModeTextColor : lightModeTextColor,
              display: "flex",
              flexDirection: { xs: "column-reverse", lg: "row" },
              justifyContent: "space-around",
              alignItems: "center",
              mb: 15,
            }}
          >
            <Box sx={{ maxWidth: "600px" }}>
              <Typography variant="h5" sx={{ mb: 1 }}>
                {project.title}
              </Typography>
              <Typography
                sx={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 4, // lines limit
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  height: "6em",
                }}
              >
                {project.description}
              </Typography>
              <Button
                size="medium"
                sx={{
                  backgroundColor:
                    mode === "dark"
                      ? darkModePrimaryColor
                      : lightModePrimaryColor,
                  "&:hover": {
                    backgroundColor:
                      mode === "dark"
                        ? lightModePrimaryColor
                        : darkModePrimaryColor,
                  },
                }}
              >
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  {project.displayAction}
                  <OpenInNewIcon sx={{ ml: 1 }} />
                </Link>
              </Button>
            </Box>
            <Box
              sx={{
                width: { xs: 300, md: 400 },
                height: 250,
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src={project.imageSrc}
                style={{ objectFit: "contain", borderRadius: "10px" }}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default LandingSection;
