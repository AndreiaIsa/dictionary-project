import React, { useState } from "react";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`searching for ${keyword}`);
  }

  function handleKeywordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  return (
    <div classname="dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          autofocus={true}
          onChange={handleKeywordChange}
          placeholder="Look for a word..."
        />
      </form>
    </div>
  );
}
