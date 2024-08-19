import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { GitHub, LinkedIn } from '@mui/icons-material';

const Header: React.FC = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Title */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
          >
            Guanming Liu (Nicholas)&apos;s Portfolio
          </Typography>

          {/* Social Icons */}
          <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <IconButton
              aria-label="GitHub"
              href="https://github.com/gmliu56"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <GitHub fontSize="large"/>
            </IconButton>
            <IconButton
              aria-label="LinkedIn"
              href="https://linkedin.com/in/gmliu56"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <LinkedIn fontSize="large"/>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;