import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

export default function Hero() {
  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", gap: 4, p: 8 }}>
      {/* Replace logo.png with your actual logo in public/ */}
      <Image Public="/logo.png" alt="Logo" width={160} height={160} priority />
      <Box>
        <Typography variant="h2" gutterBottom>Pachamama Studios</Typography>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Harnessing data & storytelling for a resilient planet
        </Typography>
        <Button variant="contained" size="large" href="/products-and-services">Our Work</Button>
      </Box>
    </Box>
  );
}
