import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { CssBaseline } from "@mui/material";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const client = new ApolloClient({
  uri: "https://t57tl7.sse.codesandbox.io/",
  cache: new InMemoryCache()
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CssBaseline />
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </StrictMode>,
  rootElement
);
