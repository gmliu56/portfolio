import React from 'react';
import { Container, Typography, Box, Link, IconButton, Grid } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          {/* About Me Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              About Me
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
              I am a passionate developer with experience in building modern web
              applications. I love to create clean and responsive designs using the latest
              technologies.
            </Typography>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom >
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }} >
              <Link href="#" color="inherit" underline="hover" sx={{ mb: 1 }}>
                Home
              </Link>
              <Link href="#contact-section" color="inherit" underline="hover" sx={{ mb: 1 }}>
                Contact
              </Link>
            </Box>
          </Grid>

          {/* Social Media Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Connect with Me
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, gap: 2 }} >
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
              <IconButton
                aria-label="Email"
                href="mailto:bz86nick@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                color="inherit"
              >
                <Email />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Guanming Liu. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;