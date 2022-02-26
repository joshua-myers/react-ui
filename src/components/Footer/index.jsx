import { AppBar, Box, Grid, Link, Toolbar } from "@mui/material";

export const Footer = () => {
  return (
    <AppBar position="sticky" color="primary" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar>
        <Grid container justifyContent="space-between">
          <Grid container item xs={12} sm="auto" spacing={{ xs: 0, sm: 4 }}>
            <Grid item xs={12} sm="auto">
              <Link color="inherit" underline="hover" href="/terms">
                Terms &amp; Conditions
              </Link>
            </Grid>
            <Grid item xs={12} sm="auto">
              <Link color="inherit" underline="hover" href="/privacy">
                Privacy
              </Link>
            </Grid>
            <Grid item xs={12} sm="auto">
              <Link color="inherit" underline="hover" href="/cookie">
                Cookie Policy
              </Link>
            </Grid>
          </Grid>
          <Grid item xs={12} sm="auto">
            <Link color="inherit" underline="hover" href="/about">
              Rebrandly &copy; Copyright 2020
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
