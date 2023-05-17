import React, { useState } from "react";
import style from "./RandomQuotes.module.css";
const quotes = [
  "I'm not here to be perfect, I'm here to be real. - Lady Gaga",
  "I'm not interested in money. I just want to be wonderful. - Marilyn Monroe",
  "The only thing that feels better than winning is winning when nobody thought you could. - Hank Aaron",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "If you can dream it, you can do it.- Walt Disney",
  "If you want something done, ask a busy person to do it. - Laura Ingalls Wilder",
  "In order to be truly happy, you must pursue your dreams and goals. - Oprah Winfrey",
  "You can have anything you want if you are willing to give up everything you have. - Oprah Winfrey",
  "Don't let anyone tell you what you can't do. Follow your dreams and persist.- Barack Obama",
  "Life is what we make it and how we make it – whether we realize it or not. - Napoleon Hill"
];
function RandomQuotes() {
  const [quote, setQoute] = useState("");
  function RandomGenerator() {
    let quoteIndex = Math.floor(Math.random() * quotes.length);
    setQoute(quotes[quoteIndex]);
  }
  return (
    <div className={style.container}>
      <h1>Random Qoutes</h1>
      <hr />
      <p>{quote}</p>
      <button onClick={RandomGenerator}>Click me</button>
    </div>
  );
}
export default RandomQuotes;
