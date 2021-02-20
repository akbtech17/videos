import axios from "axios";
import React from "react";
import SearchField from "./SearchField";
import youtube from "../api/youtube";
import VideoList from "../components/VideoList";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

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

  onVideoSelect = (video) => {
    // console.log("From the App!!", video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="app ui container">
        <SearchField onSubmit={this.onFormSubmit} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}

export default App;
