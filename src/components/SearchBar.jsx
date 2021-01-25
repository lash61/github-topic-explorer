import { useState } from "react";

function SearchBar(props) {
  const { title, initSearch, onSearchChange } = props;
  const [searchTerm, setSearchTerm] = useState(initSearch);

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="navbar-brand">Github GraphQL Demo {title}</div>
      <div className="form-inline">
        <input
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              onSearchChange(searchTerm);
            }
          }}
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          type="submit"
          onClick={() => onSearchChange(searchTerm)}
        >
          Search
        </button>
      </div>
    </nav>
  );
}

export default SearchBar;
