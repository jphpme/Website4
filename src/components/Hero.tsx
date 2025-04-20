import { Box, Button, Typography, Stack } from "@mui/material";
import Link from "next/link";          // ⬅️ new
export default function Hero() {
  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", gap: 4, p: 8 }}>
      {/* logo ... */}
      <Box>
        <Typography variant="h2" gutterBottom>Pachamama Studios</Typography>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Harnessing data & storytelling for a resilient planet
        </Typography>
        {/* put the two buttons side‑by‑side on desktop, stacked on mobile */}
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Button
            variant="contained"
            size="large"
            component={Link}
            href="/products-and-services"
          >
            Our Work
          </Button>
          <Button
            variant="outlined"
            size="large"
            component={Link}
            href="/contact"
          >
            Contact Us
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
