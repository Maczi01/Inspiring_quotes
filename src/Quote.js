import React from "react";

function Quote({text, author}) {
    return (
        <blockquote>
            {text}
            <footer>{author}</footer>
        </blockquote>
    );
}
export default Quote;