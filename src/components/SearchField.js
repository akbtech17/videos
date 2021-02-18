import React from "react";

class SearchField extends React.Component {
  render() {
    return (
      <div className="search-field">
        <form>
          <input type="text" placeholder="Search Videos..." />
        </form>
      </div>
    );
  }
}

export default SearchField;
