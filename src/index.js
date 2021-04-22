import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from '@apollo/client/react';

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
});

render(
     <ApolloProvider client={client}>
    <App />
    </ApolloProvider>,
  document.getElementById("root"),
);
