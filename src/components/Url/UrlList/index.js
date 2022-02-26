import { useQuery, gql } from "@apollo/client";
import { ArrowForward, FileCopy } from "@mui/icons-material";
import { Grid, IconButton, Link, Typography } from "@mui/material";
import CopyToClipboard from "react-copy-to-clipboard";

const GET_URLS = gql`
  query Url {
    allUrls {
      id
      url
      slug
    }
  }
`;

export const UrlList = () => {
  const { loading, error, data } = useQuery(GET_URLS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      {data.allUrls.map(({ id, url, slug }) => {
        const short = `${window.location.host}/${slug}`;
        return (
          <Grid container key={id} spacing={2} alignItems="center">
            <Grid item>
              <Grid container alignItems="center" spacing={2}>
                <Grid item>
                  <Link href={url}>{url}</Link>
                </Grid>
                <Grid item>
                  <ArrowForward />{" "}
                </Grid>
                <Grid item>
                  <Link href={`//${short}`}>{short}</Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <CopyToClipboard text={`${short}`}>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="copy"
                  sx={{ mr: 2 }}
                >
                  <FileCopy />
                </IconButton>
              </CopyToClipboard>
            </Grid>
          </Grid>
        );
      })}
    </div>
  );
};
