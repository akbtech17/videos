import React from "react";

class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputText: "" };
  }

  onInputChange = (e) => {
    this.setState({ inputText: e.target.value });
    // console.log(this.state.inputText);
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.inputText);
    this.props.onSubmit(this.state.inputText);
  };

  render() {
    return (
      <div className="search-field">
        <form onSubmit={this.onFormSubmit}>
          <input
            type="text"
            value={this.state.inputText}
            placeholder="Search Videos..."
            onChange={this.onInputChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchField;
