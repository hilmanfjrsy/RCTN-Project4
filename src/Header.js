import React, { Component } from "react";
import Search from "./Search";

export default function Header({ onSearch = () => {} }) {
  return (
    <header class="p-3 mb-3 mt-n1 border-bottom bg-primary">
      <div class="container-fluid">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
          >
            <h5 class="tx-1">Kelompok 2 Movie App</h5>
          </a>
          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"></ul>
          <Search onSearch={onSearch} />
        </div>
      </div>
    </header>
  );
}
