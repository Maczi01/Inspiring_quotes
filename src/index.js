import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import {
    ApolloClient,
    HttpLink,
    InMemoryCache,
    ApolloProvider
} from "@apollo/client";


const URL = "https://examples.devmastery.pl/random-stuff/graphql";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: URL
    }),
    queryDeduplication: false
});

const rootElement = document.getElementById("root");
ReactDOM.render(
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>,
    rootElement
);
