import { Button, Grid, Typography } from "@mui/material";
import person from "../../assets/person.png";

export const Main = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={6}>
        <Grid container>
          <Grid item>
            <Typography variant="h2" component="div" gutterBottom>
              Your Brand on Your Links
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" component="div" gutterBottom>
              Rebrandly is the industry-leading link management platform to
              brand, track and share short URLs using a custom domain name.
            </Typography>
          </Grid>
          <Grid
            item
            container
            spacing={4}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item>
              <Button variant="contained">Sign up free</Button>
            </Grid>
            <Grid item>
              <Button variant="outlined">Request a demo</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <img src={person} alt="person" />
      </Grid>
    </Grid>
  );
};
