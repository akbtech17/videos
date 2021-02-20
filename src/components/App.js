import axios from "axios";
import React from "react";
import SearchField from "./SearchField";
import youtube from "../api/youtube";

class App extends React.Component {
  state = { videos: [] };

  onFormSubmit = async (inputText) => {
    // console.log(inputText);
    const response = await youtube.get("/search", {
      params: {
        q: inputText,
      },
    });
    // console.log(response);
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="app ui container">
        <SearchField onSubmit={this.onFormSubmit} />I have{" "}
        {this.state.videos.length} videos
      </div>
    );
  }
}

export default App;
