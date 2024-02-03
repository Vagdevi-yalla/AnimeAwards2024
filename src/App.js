import React from "react";

import Header from "./components/Header";

import VideoBackground from "./components/VideoBckground";
import "./App.css";
import Paragraph from "./components/Paragraph";
import CategorySlider from "./components/CategorySlider";

function App() {
  const Points1 = [
    "Create an account on our website",
    "Browse through the different categories and nominees.",
    "Vote for your favorite anime series, characters, and more.",
    "Share the voting link with your fellow anime fans to spread the excitement.",
  ];

  const Points2 = [
    "Each registered user can only vote once in each category.",
    "Make sure to review the nominees before casting your vote.",
    "Any attempt to manipulate the voting system will result in disqualification.",
    "Voting will close at midnight on the specified date.",
  ];

  return (
    <div className="container">
      <div className="App">
        <Header />
      </div>
      <VideoBackground></VideoBackground>
      <Paragraph
        title="How to Participate in the Voting"
        points={Points1}
      ></Paragraph>
      <Paragraph
        title="Voting Rules and Guidelines"
        points={Points2}
      ></Paragraph>
      <div className="categories-container">
        <h1 className="Category-styles">Categories and Nomination</h1>
        <CategorySlider className="slider" />
      </div>
    </div>
  );
}

export default App;
