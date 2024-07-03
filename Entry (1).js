import React, { useState } from "react";

const Entry = ({ action }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    action(input);
  };

  return (
    <form onSubmit={handleSubmit} className="entry-form">
      <input
        type="number"
        min="1950"
        max="2024"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter Year"
        required
      />
      <button type="submit">Get Standings</button>
    </form>
  );
};

export default Entry;
