import React, { useState } from "react";
import "./ParagraphWordCounter.css";
function Counter() {
  const [text, setText] = useState("");
  const words = text.split(/\s+/).filter(Boolean);

  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="container">
      <h1>Paragraph Word Counter</h1>
      <div className="textareacontainer">
        <textarea
          className="text-area-input"
          placeholder="Enter Your Paragraph here"
          rows={10}
          value={text}
          onChange={handleChange}
        ></textarea>
        <p className="word-count">
          {words.length} {words.length === 1 ? "Word" : "Words"}
        </p>
      </div>
    </div>
  );
}

export default Counter;