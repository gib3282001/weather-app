import React from "react";

interface Props {
  search: () => void;
  setCity: (cityName: string) => void;
}
function SearchBar({ search, setCity }: Props) {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="City"
        aria-label="City"
        aria-describedby="button-addon2"
        onChange={(e) => setCity(e.target.value)}
      ></input>
      <button
        className="btn btn-secondary"
        type="button"
        id="button-addon2"
        onClick={search}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
