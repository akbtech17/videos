import React from "react";

class SearchField extends React.Component {
  state = { inputText: "" };

  onInputChange = (e) => {
    this.setState({ inputText: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputText);
  };

  render() {
    return (
      <div className="search-field ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              ref={this.inputRef}
              value={this.state.inputText}
              placeholder="Search Videos..."
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchField;
