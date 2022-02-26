import { AppBar, Button, Grid, Link, Toolbar, IconButton } from "@mui/material";
import logo from "../../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";

export const Header = () => {
  return (
    <AppBar position="sticky" color="inherit" sx={{ top: 0 }}>
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <img src={logo} alt="logo" />
          </Grid>
          <Grid item sx={{ display: { md: "block", sm: "none", xs: "none" } }}>
            <Grid container spacing={4}>
              <Grid item>
                <Link color="inherit" underline="hover" href="/features">
                  Features
                </Link>
              </Grid>
              <Grid item>
                <Link color="inherit" underline="hover" href="/domains">
                  Domains
                </Link>
              </Grid>
              <Grid item>
                <Link color="inherit" underline="hover" href="/Pricing">
                  Pricing
                </Link>
              </Grid>
              <Grid item>
                <Link color="inherit" underline="hover" href="/enterprise">
                  Enterprise
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{ display: { md: "block", sm: "none", xs: "none" } }}>
            <Grid container spacing={4}>
              <Grid item>
                <Link color="inherit" underline="hover" href="/login">
                  Login
                </Link>
              </Grid>
              <Grid item>
                <Link color="inherit" underline="hover" href="/signup">
                  Sign Up
                </Link>
              </Grid>
              <Grid item>
                <Button color="inherit" variant="outlined">
                  Get a Quote
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{ display: { md: "none", sm: "block", xs: "block" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
