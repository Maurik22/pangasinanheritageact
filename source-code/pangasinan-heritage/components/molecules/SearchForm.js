"use client";

import Button from "../atoms/Button";

export default function SearchForm({ value, onChange, onSubmit }) {
  return (
    <form className="searchForm" onSubmit={onSubmit} role="search">
      <label htmlFor="heritage-search" className="srOnly">
        Search heritage sites
      </label>
      <input
        id="heritage-search"
        className="searchInput"
        type="search"
        placeholder="Search a heritage site..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <Button type="submit">Search</Button>
    </form>
  );
}
