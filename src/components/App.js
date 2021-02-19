import axios from "axios";
import React from "react";
import SearchField from "./SearchField";
import youtube from "../api/youtube";

class App extends React.Component {
  onFormSubmit = (inputText) => {
    // console.log(inputText);
    youtube.get("/search", {
      params: {
        q: inputText,
      },
    });
  };

  render() {
    return (
      <div className="app ui container">
        <SearchField onSubmit={this.onFormSubmit} />
      </div>
    );
  }
}

export default App;
