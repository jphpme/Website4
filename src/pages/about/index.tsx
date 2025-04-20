import Layout from "@/components/Layout";
import { Typography } from "@mui/material";

export default function About() {
  return (
    <Layout title="About · Pachamama Studios">
      <Typography variant="h3" gutterBottom>About Us</Typography>
      <Typography paragraph>
        Pachamama Studios is dedicated to creating immersive data‑driven experiences
        that promote climate literacy and environmental justice.
      </Typography>
    </Layout>
  );
}
