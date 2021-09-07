import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "💖": "sparkling-heart",
  "😀": "Grinning-Face",
  "🍈": "Melon",
  "🥭": "Mango",
  "🍓": "Strawberry"
};
var emojiWeKnow = Object.keys(emojiDictionary);
export default function App() {
  var [meaning, setMeaning] = useState("");

  function inputChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "This is not in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>inside outt</h1>
      <input onChange={inputChangeHandler}></input>
      <div style={{ margin: "1rem", fontSize: "1.5rem", fontWeight: "bolder" }}>
        {meaning}
      </div>
      <h3>Emoji's we know</h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
