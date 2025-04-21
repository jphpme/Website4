import Layout from "@/components/Layout";
import { Box, Button, TextField, Typography } from "@mui/material";

export default function Contact() {
  return (
    <Layout title="Contact · Pachamama Studios">
      <Typography variant="h3" gutterBottom>Contact Us</Typography>

      <Typography paragraph>
        Have a question or want to collaborate? Send us a note and we’ll get back to you within 2 business days.
      </Typography>

      <Box component="form" action="/api/contact" method="POST" sx={{ maxWidth: 480, display: "grid", gap: 2 }}>
        <TextField name="name" label="Name" fullWidth required />
        <TextField name="email" label="Email" type="email" fullWidth required />
        <TextField name="message" label="Message" multiline rows={4} fullWidth required />
        <Button variant="contained" size="large" type="submit">
          Send
        </Button>
      </Box>
    </Layout>
  );
}
