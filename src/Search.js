import React, { Component, useState } from "react";

export default function Search({ onSearch = () => {} }) {
  const [search, setSearch] = useState("");
  return (
    <>
      <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 row">
        <input
          onChange={v => setSearch(v.target.value)}
          type="search"
          class="form-control"
          placeholder="Search..."
          aria-label="Search"
        />
      </form>
      <div class="text-end">
        <button
          onClick={() => onSearch(search)}
          type="button"
          class="btn btn-warning mt-n2"
        >
          Search
        </button>
      </div>
    </>
  );
}
