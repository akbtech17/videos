import axios from "axios";
import React from "react";
import SearchField from "./SearchField";

class App extends React.Component {
  onFormSubmit = (inputText) => {
    console.log(inputText);
  };

  render() {
    return (
      <div className="app">
        <SearchField onSubmit={this.onFormSubmit} />
      </div>
    );
  }
}

export default App;
