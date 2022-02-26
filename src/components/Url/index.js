import { Grid } from "@mui/material";
import { UrlList } from "./UrlList";

export const Url = () => {
  return (
    <Grid fluid>
      <Grid item></Grid>
      <Grid item>
        <UrlList />
      </Grid>
    </Grid>
  );
};
