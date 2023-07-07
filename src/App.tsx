import { useEffect, useState } from "react";
import "./app.css";

function refreshPage() {
  window.location.reload();
}

function App() {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);
  const quoteID: number = Math.floor(Math.random() * 1643 + 1);
  useEffect(() => {
    fetch("https://type.fit/api/quotes", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setQuote(data[quoteID].text);
        setAuthor(data[quoteID].author);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <main>
      <button onClick={refreshPage}>new quote</button>
      <h2>
        <span>“</span>
        {quote}
        <span>“</span>
      </h2>
      <h3>- {author}</h3>
    </main>
  );
}

export default App;
