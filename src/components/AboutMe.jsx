import React from "react";

const AboutMe = ({bio}) => {
  return (
    <div>
      <h3>About Me</h3>
      <div className="SecondColumn">{bio}</div>
      <div className="HorizontalLine">
        <hr />
      </div>
    </div>
  );
};

export default AboutMe;
