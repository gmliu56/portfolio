"use client";
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertSeverity, setAlertSeverity] = useState<'success' | 'error'>('success');
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }

    if (!recaptchaToken) {
        alert('Please complete the reCAPTCHA.');
        return;
    }

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
        setAlertSeverity('success');
        setAlertMessage('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
    } else {
        setAlertSeverity('error');
        setAlertMessage('Failed to send the message. Please check inputs or try again later.');
    }
  };

  return (
    <Box
      id='contact-section'
      component="form"
      onSubmit={handleSubmit}
      sx={{ mt: 3, mx: 'auto', width: { xs:'100%', sm: '90%', md:'60%', lg:'50%' }, textAlign: 'center', justifyContent: 'center' }}
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
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
          onChange={(token) => setRecaptchaToken(token)}
        />
      </Box>
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Send Message
      </Button>
    </Box>
  );
};

export default ContactForm;