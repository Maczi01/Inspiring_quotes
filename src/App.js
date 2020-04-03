import React from "react";
import {useQuery, gql} from "@apollo/client";
import "./styles.css";
import Quote from "./Quote";

export default function App() {
    return (
        <div className="App">
            <h1>Inspiring quote</h1>
            <RandomQuote/>
            <RandomQuote/>
            <RandomQuote/>
        </div>
    );
}

const RANDOM_QUOTE_QUERY = gql`
    query getRandomQuote {
        randomQuote {
            text
            author
        }
    }
`;

function RandomQuote() {
    const {data, loading, error, refetch} = useQuery(RANDOM_QUOTE_QUERY, {
            onError: error => {
                console.log("Error")
            },
            errorPolicy: "all",
            fetchPolicy: "no-cache"
        },
    );
    if (loading) {
        return "Quote is loading...";
    }
    if (error) {
        return "Couldn't load data..."
    }
    const {text, author} = data.randomQuote;
    return (
        <>
            <Quote text={text} author={author}/>
            <button onClick={() => refetch()}> "Get new quote"</button>
        </>
    )


}

