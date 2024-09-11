import React from "react";
import "./ReelDisplay.css"; // import the CSS file

const ReelDisplay = ({ reels }) => {
  return (
    <div className="reel-container">
      {reels.map((reel, index) => (
        <div key={index} className="reel">
          <video controls autoPlay muted loop playsInline width="100%">
            <source src={reel} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  );
};

export default ReelDisplay;

