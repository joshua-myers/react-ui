import { gql, useMutation } from "@apollo/client";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import { UrlList } from "./UrlList";
import "./index.css";
import { useLocation } from "react-router";
import { useMemo } from "react";

const CREATE_URL = gql`
  mutation CreateUrl($url: String!, $slug: String) {
    createUrl(url: $url, slug: $slug) {
      url
      slug
    }
  }
`;
function useQueryParams() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}
export const Url = () => {
  const slug = useQueryParams().get("slug") || "";
  const [createUrl, { data, loading, error, reset }] = useMutation(CREATE_URL, {
    refetchQueries: ["Url"]
  });

  console.log(error);

  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item xs={12}>
        <Formik
          initialValues={{ url: "", slug: slug }}
          validate={async ({ url, slug }) => {
            const errors = {};
            if (!url) {
              errors.url = "A URL is required.";
            }
            return errors;
          }}
          onSubmit={({ url, slug }) => {
            return createUrl({
              variables: {
                url,
                slug
              }
            }).catch(() => ({}));
          }}
        >
          <Form>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              spacing={2}
              className="form"
            >
              <Grid
                item
                container
                justifyContent="space-evenly"
                alignItems="center"
                spacing={2}
              >
                <Grid item xs={12} sm={12} md={8}>
                  <Field
                    className="field"
                    name="url"
                    placeholder="Make your links shorter"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md="auto">
                  <Field name="slug" placeholder="Custom Slug" />
                </Grid>
                <Grid item xs={12} md="auto">
                  <Button variant="contained" type="submit">
                    Shorten URL
                  </Button>
                </Grid>
              </Grid>
              <Grid item>
                <Typography className="disclaimer">
                  By clicking shorten URL, you agree to Rebrandly's Terms of Use
                  and Privacy Policy.
                </Typography>
              </Grid>
            </Grid>
          </Form>
        </Formik>
        <Dialog open={error} onClose={reset}>
          <DialogTitle>Error Encountered</DialogTitle>
          <DialogContent>
            <pre>
              {error?.graphQLErrors?.map(({ message }, i) => (
                <span key={i}>{message}</span>
              ))}
            </pre>
          </DialogContent>
          <DialogActions>
            <Button onClick={reset}>close</Button>
          </DialogActions>
        </Dialog>
      </Grid>
      <Grid item>
        <UrlList />
      </Grid>
    </Grid>
  );
};
