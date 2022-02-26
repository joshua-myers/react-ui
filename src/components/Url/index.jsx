import { gql, useMutation } from "@apollo/client";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import { UrlList } from "./UrlList";
import "./index.css";

const CREATE_URL = gql`
  mutation CreateUrl($url: String!, $slug: String) {
    createUrl(url: $url, slug: $slug) {
      url
      slug
    }
  }
`;

export const Url = () => {
  const [createUrl, { data, loading, error, reset }] = useMutation(CREATE_URL, {
    refetchQueries: ["Url"]
  });

  console.log(error);

  return (
    <Grid fluid>
      <Grid item className="form">
        <Formik
          initialValues={{ url: "", slug: "" }}
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
            <Field name="url" placeholder="Make your links shorter" />
            <Field name="slug" placeholder="Custom Slug" />
            <Button variant="contained" type="submit">
              Shorten URL
            </Button>
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
