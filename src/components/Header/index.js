import { Grid, Link } from "@mui/material";
import logo from "../../assets/logo.png";

export const Header = () => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <img src={logo} alt="logo" />
      </Grid>
      <Grid item>
        <Link href="/Features">Features</Link>
        <Link href="/Domains">Domains</Link>
        <Link href="/Pricing">Pricing</Link>
      </Grid>
    </Grid>
  );
};
