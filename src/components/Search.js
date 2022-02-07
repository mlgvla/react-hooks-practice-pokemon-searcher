import React from "react"

function Search({ searchTerm, onSearchChange }) {
  function handleChange(e) {
    onSearchChange(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleChange} value={searchTerm} />
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
