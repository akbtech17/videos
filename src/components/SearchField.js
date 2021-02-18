import React from "react";

class SearchField extends React.Component {
  state = { inputText: "" };

  onInputChange = (e) => {
    this.setState({ inputText: e.target.value });
    console.log(this.state.inputText);
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
