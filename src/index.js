import React from "react";
import ReactDOM from "react-dom";
import env from "react-dotenv";
import { InMemoryCache, ApolloClient, ApolloProvider } from "@apollo/client";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

import App from "./App";
import "./index.css";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${env.REACT_APP_GITHUB_API_TOKEN}`,
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,

  document.getElementById("root")
);
