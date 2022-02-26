import { useQuery, gql } from "@apollo/client";
import { ArrowForward, FileCopy } from "@mui/icons-material";
import {
  Alert,
  Dialog,
  DialogTitle,
  Grid,
  IconButton,
  Link,
  Snackbar,
  Typography
} from "@mui/material";
import { useState } from "react";
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
  const [copied, setCopied] = useState();

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
              <CopyToClipboard text={`${short}`} onCopy={setCopied}>
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
      <Snackbar
        open={copied}
        onClose={() => setCopied("")}
        autoHideDuration={3000}
      >
        <Alert severity="success">Successfully Copied {copied}</Alert>
      </Snackbar>
    </div>
  );
};
