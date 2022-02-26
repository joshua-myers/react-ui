import { Button, Grid } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { UrlList } from "./UrlList";
export const Url = () => {
  return (
    <Grid fluid>
      <Grid item>
        <Formik
          initialValues={{ url: "", slug: "" }}
          validate={async ({ url, slug }) => {
            const errors = {};
            if (!url) {
              errors.url = "A URL is required.";
            }
            if (slug) {
              // validate slug
            }
            return errors;
          }}
          onSubmit={({ url, slug }) => {
            return true;
          }}
        >
          <Form>
            <Field name="url" placeholder="Make your links shorter" />
            <Button variant="contained" type="submit">
              Shorten URL
            </Button>
          </Form>
        </Formik>
      </Grid>
      <Grid item>
        <UrlList />
      </Grid>
    </Grid>
  );
};
