import { useState } from "react";
import "./SearchBar.css";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      console.log(searchTerm);
      window.scrollTo(0, 0);
      window.location.href = `/search/${searchTerm}/1`;
    }
  }

  return (
    <div className="custom_input">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="svg_icon bi-search"
        viewBox="0 0 16 16"
      >
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
      </svg>
      <input
        className="input"
        type="text"
        placeholder="Search a game..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
