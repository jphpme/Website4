import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

export default function Nav() {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <IconButton edge="start" sx={{ mr: 2 }} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Link href="/" passHref legacyBehavior>
          <Typography variant="h6" component="a" sx={{ textDecoration: 'none', color: 'inherit' }}>
            Pachamama Studios
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
