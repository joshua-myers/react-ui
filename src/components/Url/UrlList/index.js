import { gql, useQuery } from "@apollo/client";
import { FileCopy } from "@mui/icons-material";
import {
  Alert,
  IconButton,
  Link,
  Paper,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow
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
    <>
      <TableContainer component={Paper} size="small">
        <Table>
          <TableBody>
            {data.allUrls.map(({ id, url, slug }) => {
              const short = `${window.location.host}/${slug}`;
              return (
                <TableRow key={id}>
                  <TableCell component="th" scope="row">
                    <Link href={url}>{url}</Link>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <Link href={`//${short}`}>{short}</Link>
                  </TableCell>
                  <TableCell component="th" scope="row">
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
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Snackbar
        open={!!copied}
        onClose={() => setCopied("")}
        autoHideDuration={3000}
      >
        <Alert severity="success" variant="filled">
          Successfully Copied {copied}
        </Alert>
      </Snackbar>
    </>
  );
};
