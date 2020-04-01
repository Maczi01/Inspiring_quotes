import React from "react";

export default function App() {
  return (
      <div className="App">
        <h1>Inspiring quotes</h1>
        <Quote text="To be, or not to be" author="Hamlet" />
      </div>
  );
}

const Quote = ({ text, author }) => (
    <blockquote>
      {text}
      <footer> {author} </footer>
    </blockquote>
);
