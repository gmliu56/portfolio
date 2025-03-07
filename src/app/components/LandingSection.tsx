"use client";
/* eslint-disable react/react-in-jsx-scope */
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid2 as Grid,
  Paper,
  Typography,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Link from "next/link";
import contentEN from "@/app/locale/en/home.json";
import { ThemeContext } from "@/app/contexts/themeContext";
import { use } from "react";

const LandingSection: React.FC = () => {
  const { mode } = use(ThemeContext);
  const content = contentEN;

  return (
    <Container
      maxWidth={"xl"}
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        backgroundColor: mode === "light" ? "#F8F9FA" : "#121212",
        width: "100%",
        py: 8,
        px: { sm: 8 },
        gap: 10,
      }}
    >
      {/* About Card */}
      <Paper
        variant="elevation"
        sx={{
          width: { xs: "100%", lg: "80%" },
          minWidth: { xs: "300px" },
          padding: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: mode === "light" ? "#2D2D2D" : "#E0E0E0",
          backgroundColor: mode === "light" ? "#F8F9FA" : "#121212",
          transform: "translateY(0)",
          transition: "transform 200ms ease-in-out",
          "&:hover": {
            transform: "translateY(-10px)",
            boxShadow: 6,
          },
          background:
            mode === "light"
              ? "rgba(255, 255, 255, 0.7)"
              : "rgba(30, 30, 30, 0.7)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          borderRadius: "0.375rem",
        }}
      >
        <Avatar
          src={content.about.imageSrc}
          alt={content.about.imageAlt}
          sx={{ width: 100, height: 100, mb: 2 }}
        />
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          {content.about.title}
        </Typography>
        <Typography
          sx={{ lineHeight: 1.625, overflowWrap: "anywhere", hyphens: "auto" }}
        >
          {content.about.body}
        </Typography>
      </Paper>

      {/* Work Display */}
      <Grid container spacing={4} sx={{ marginBottom: 4 }}>
        <Grid
          size={{ xs: 12 }}
          sx={{
            textAlign: "center",
            height: 40,
            background: mode === "light" ? "#8B5CF6" : "#7c3aed",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid gray",
            borderRadius: "0.375rem",
            boxShadow: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: 30,
              color: mode === "light" ? "#2D2D2D" : "#E0E0E0",
            }}
          >
            {content.projects.title}
          </Typography>
        </Grid>
        {content.projects.list.map((project, index) => (
          <Grid size={{ xs: 12, md: 6 }} key={index}>
            <Card
              variant="outlined"
              sx={{
                padding: 2,
                borderRadius: "0.375rem",
                transition: "transform 300ms cubic-bezier(0.22, 1, 0.36, 1)",
                "&:hover": {
                  scale: 1.03,
                  boxShadow: 8,
                },
                color: mode === "light" ? "#2D2D2D" : "#E0E0E0",
                background:
                  mode === "light"
                    ? "rgba(255, 255, 255, 0.2)"
                    : "rgba(30, 30, 30, 0.3)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardMedia
                component="img"
                src={project.imageSrc}
                title={project.title}
                sx={{ height: 200, objectFit: "contain" }}
              />
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
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
              </CardContent>
              <CardActions>
                <Button
                  size="medium"
                  sx={{
                    backgroundColor: mode === "light" ? "#2563EB" : "#3B82F6",
                    "&:hover": {
                      backgroundColor: mode === "light" ? "#3B82F6" : "#2563EB",
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
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default LandingSection;
