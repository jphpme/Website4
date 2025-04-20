import Layout from "@/components/Layout";
import { Typography } from "@mui/material";

export default function Products() {
  return (
    <Layout title="Products & Services · Pachamama Studios">
      <Typography variant="h3" gutterBottom>Products & Services</Typography>
      <Typography paragraph>
        Choose your audience segment on the left to explore tailored solutions.
      </Typography>
    </Layout>
  );
}
