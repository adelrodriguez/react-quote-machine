import { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import './App.css';

function App() {
  const [content, setContent] = useState('Loading...');
  const [author, setAuthor] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#15202c');

  async function fetchQuote() {
    try {
      const response = await fetch(
        `https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand&_=${Date.now()}`
      );

      if (response.status !== 200) {
        throw new Error('Sorry, there was an issue while fetching the quote');
      }

      const [quote] = await response.json();

      // Sanitize input
      const sanitizedContent = DOMPurify.sanitize(quote?.content?.rendered);
      const sanitizedTitle = DOMPurify.sanitize(quote?.title?.rendered);
      setContent(sanitizedContent);
      setAuthor(sanitizedTitle);
    } catch (error) {
      alert(error.message);
    }
  }
  
  function tweetQuote() {
    const text = document.getElementById('text');
    const quote = `"${text?.innerText}" — ${author}`;

    return quote;
  }

  function changeBackgroundColor() {
    // chose random red, green and blue hues
    // 200 set for readability of white text
    const colors = Array.from(Array(3)).map(() => Math.floor(Math.random() * 200));
    
    setBackgroundColor(`rgb(${colors.join(',')})`);
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  useEffect(() => {
    changeBackgroundColor();
  }, [content]);

  return (
    <div className="App" style={{ backgroundColor }}>
      <main id="quote-box">
        <i className="fa fa-quote-left" aria-hidden="true"></i>
        <div id="text" dangerouslySetInnerHTML={{ __html: content }} />
        <i className="fa fa-quote-right" aria-hidden="true"></i>
        <div id="author">— {author}</div>
        <div id="buttons">
          <a
            className="button"
            id="tweet-quote"
            target="_blank"
            rel="noreferrer"
            title="Tweet this quote!"
            href={`https://twitter.com/intent/tweet?text=${tweetQuote()}`}
          >
            <i className="fa fa-twitter" aria-hidden="true"></i> Tweet
          </a>
          <button className="button" id="new-quote" onClick={fetchQuote}>
            New Quote
          </button>
        </div>
      </main>
      <footer>
        <p>
          Made by{' '}
          <a href="http://www.adelrodriguez.com/" target="_blank" rel="noreferrer">
            Adel Rodríguez
          </a>
        </p>
        <p>
          Quotes from{' '}
          <a href="http://quotesondesign.com/" target="_blank" rel="noreferrer">
            Quotes on Design
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
