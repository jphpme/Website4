import Layout from "@/components/Layout";
import { Box, Button, TextField, Typography } from "@mui/material";

export default function Contact() {
  return (
    <Layout title="Contact · Pachamama Studios">
      <Typography variant="h3" gutterBottom>Contact Us</Typography>

      <Typography paragraph>
        Have a question or want to collaborate? Send us a note and we’ll get back to you within 2 business days.
      </Typography>

      <Box component="form" sx={{ maxWidth: 480, display: "grid", gap: 2 }}>
        <TextField label="Name" fullWidth required />
        <TextField label="Email" type="email" fullWidth required />
        <TextField label="Message" multiline rows={4} fullWidth required />
        <Button variant="contained" size="large" disabled>
          Send (coming soon)
        </Button>
      </Box>
    </Layout>
  );
}
