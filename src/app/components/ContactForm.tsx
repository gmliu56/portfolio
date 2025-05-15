"use client";
import React, { use, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import ReCAPTCHA from "react-google-recaptcha";
import { ThemeContext } from "../contexts/themeContext";
import contentEN from "../locale/en/home.json";
import { darkModeBackgroundColor, darkModePrimaryColor, darkModeTextColor, lightModeBackgroundColor, lightModePrimaryColor, lightModeTextColor } from "../style/theme";

const ContactForm: React.FC = () => {
  const { mode } = use(ThemeContext);
  const content = contentEN;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertSeverity, setAlertSeverity] = useState<"success" | "error">(
    "success"
  );
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill in all fields");
      return;
    }

    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA.");
      return;
    }

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      setAlertSeverity("success");
      setAlertMessage("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setAlertSeverity("error");
      setAlertMessage(
        "Failed to send the message. Please check inputs or try again later."
      );
    }
  };

  return (
    <Box
      id="contact-section"
      component="form"
      onSubmit={handleSubmit}
      className="
        m-0 py-12 w-full bg-green-200 
        mx-auto text-center justify-center 
        px-[10%] xs:px-[10%] md:px-[15%] lg:px-[25%] 
        dark:bg-green-700"
      sx={{
        color: mode === "dark" ? darkModeTextColor : lightModeTextColor,
        backgroundColor: mode === "dark" ? darkModeBackgroundColor : lightModeBackgroundColor,
      }}
    >
      <Typography variant="h3" gutterBottom sx={{fontWeight: "bold"}}>
        {content.contact.title}
      </Typography>

      {alertMessage && (
        <Alert severity={alertSeverity} sx={{ mb: 2 }}>
          {alertMessage}
        </Alert>
      )}

      <TextField
        fullWidth
        margin="normal"
        label={content.contact.nameLabel}
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextField
        fullWidth
        margin="normal"
        label={content.contact.emailLabel}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextField
        fullWidth
        margin="normal"
        label={content.contact.messageLabel}
        multiline
        rows={8}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
          onChange={(token) => setRecaptchaToken(token)}
        />
      </Box>
      <Button
        type="submit"
        variant="contained"
        sx={{
          mt: 2,
          backgroundColor: mode === "dark" ? darkModePrimaryColor : lightModePrimaryColor,
          "&:hover": {
            backgroundColor: mode === "dark" ? lightModePrimaryColor : darkModePrimaryColor,
          },
        }}
      >
        {content.contact.sendButton}
      </Button>
    </Box>
  );
};

export default ContactForm;
