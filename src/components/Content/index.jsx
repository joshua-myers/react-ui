import { Grid, Typography } from "@mui/material";
import tools from "../../assets/tools.png";

export const Content = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ display: { xs: "none", sm: "none", md: "block" } }}
    >
      <Grid item>
        <Typography variant="h4">
          Rebrandly connects to the tools you already use
        </Typography>
      </Grid>
      <Grid item>
        <img src={tools} alt="tools" />
      </Grid>
      <Grid item>
        <Typography variant="caption">Discover 100+ integrations</Typography>
      </Grid>
    </Grid>
  );
};
