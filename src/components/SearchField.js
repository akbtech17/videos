import React from "react";

class SearchField extends React.Component {

  onInputChange = (e) => {
    console.log(e.target.value);
  };
  render() {
    return (
      <div className="search-field">
        <form>
          <input
            type="text"
            placeholder="Search Videos..."
            onChange={this.onInputChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchField;
