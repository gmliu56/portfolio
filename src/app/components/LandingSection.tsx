import { Avatar, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Paper, Typography } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Link from "next/link";
import styles from "./landingSection.module.css";

const LandingSection: React.FC = () => {
    return (
        <Container maxWidth={false} className={styles.container} sx={{display: "flex", flexDirection: {xs: "column", md: "row"}}}>
            <Paper 
                variant="outlined"
                className={styles.profileCard}
                sx={{ width: { xs: "100%", md: "40%" } }}
            >
                <Avatar src="" alt="Guanming Liu" sx={{ width: 80, height: 80, mb: 2 }}/>
                <Typography variant="h5" className={styles.profileTitle}>
                    About Me
                </Typography>
                <Typography>
                    My name is Guanming (Nicholas) Liu and 
                    I am a Software/Web Developer based in Vancouver, BC, Canada.
                    You can find my work on this portfolio website.
                </Typography>
            </Paper>
            <Grid container spacing={0}>
                <Grid item xs={12} sx={{ textAlign: "center", height: 40 }}>
                    <Typography fontSize={30} className={styles.workTitle}>
                        My Work
                    </Typography>
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Card variant="outlined" className={styles.workCard}>
                            <CardMedia 
                                component="img"
                                src="/promatch.png"
                                title="Promatch landing page"
                                className={styles.workCardImage}
                            />
                            <CardContent>
                                <Typography variant="h6" className={styles.workCardTitle}>
                                    ProMatch Landing Page
                                </Typography>
                                <Typography className={styles.workCardParagraph}>
                                    The marketing landing page for an AI recruiting company ProMatch.
                                    Includes features such as localization and SSR from Sanity.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="medium">
                                    <Link 
                                        href="https://promatch.ai" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Website 
                                        <OpenInNewIcon sx={{ml:1}} />
                                    </Link>
                                </Button>
                            </CardActions>
                        </Card> 
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default LandingSection;