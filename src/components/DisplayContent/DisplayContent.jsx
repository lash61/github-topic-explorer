import React, { useEffect, useState } from "react";
import { SearchResult } from "../../components";

export const DisplayContent = (props) => {
  const { search } = props;
  const [searchTerm, setSearchTerm] = useState(search);

  useEffect(() => {
    setSearchTerm(search);

    return () => {};
  }, [search]);

  const handleChange = (value) => {
    if (value !== searchTerm) {
      setSearchTerm(value);
    }
  };

  return (
    <div>
      <h3 className="display-4" title="topic of search term">
        TOPIC: <span className="badge badge-secondary">{searchTerm}</span>
      </h3>

      <SearchResult searchTerm={searchTerm} onChange={handleChange} />
    </div>
  );
};
