"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import ReCAPTCHA from "react-google-recaptcha";
import { useThemeContext } from "../contexts/themeContext";

const ContactForm: React.FC = () => {
  const { mode } = useThemeContext();
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
        color: mode === "light" ? "#2D2D2D" : "#E0E0E0",
        backgroundColor: mode === "light" ? "#F8F9FA" : "#5f5f5f",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>

      {alertMessage && (
        <Alert severity={alertSeverity} sx={{ mb: 2 }}>
          {alertMessage}
        </Alert>
      )}

      <TextField
        fullWidth
        margin="normal"
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextField
        fullWidth
        margin="normal"
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextField
        fullWidth
        margin="normal"
        label="Message"
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
          backgroundColor: mode === "light" ? "#2563EB" : "#3B82F6",
          "&:hover": {
            backgroundColor: mode === "light" ? "#3B82F6" : "#2563EB",
          },
        }}
      >
        Send Message
      </Button>
    </Box>
  );
};

export default ContactForm;
