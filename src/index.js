import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { CssBaseline } from "@mui/material";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import { ProcessSlug } from "./components/ProcessSlug";

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
        <Routes>
          <Route path="/:slug" element={<ProcessSlug />} />
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  </StrictMode>,
  rootElement
);
