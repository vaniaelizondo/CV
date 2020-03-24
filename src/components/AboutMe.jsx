import React from "react";

const AboutMe = ({ bio }) => {
  return (
    <div>
      <div className="TwoColumns">
        <h3>About Me</h3>
        <div className="SecondColumn">
          <div className="block">{bio}</div>
        </div>
      </div>
      <div className="HorizontalLine">
        <hr />
      </div>
    </div>
  );
};

export default AboutMe;
