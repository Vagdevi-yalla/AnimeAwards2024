import React from "react";

import "./Paragraph.css";

const Paragraph = ({ title, points }) => {
  return (
    <div className="paragraph">
      <h1 className="box-heading">{title}</h1>
      <ol className="points">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ol>
    </div>
  );
};

export default Paragraph;
