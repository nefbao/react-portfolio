import React from "react";
import Footer from "./Footer";
import dictionary from "./images/dictionary.png";
import weather from "./images/weather.png";
import "./Work.css";
import Project from "./Project";

function Work() {
  return (
    <div className="Work container">
      <h1>Take a look at what I've been working on!</h1>
      <div className="row">
        <Project
          title={"Dictionary App"}
          image={dictionary}
          text={
            "The dictionary app is developed using React. This application calls API from dictionaryapi to load the information about the searched word."
          }
          link={"https://aesthetic-panda-e236b2.netlify.app/"}
          direction={"row Project d-flex flex-row-reverse"}
        />
        <Project
          title={"Weather App"}
          image={weather}
          text={
            "React is used to develope this weather application, which is capable of demonstrating the current weather and the forecast for five days."
          }
          link={"https://superlative-sfogliatella-ef7ff8.netlify.app/"}
          direction={"row Project d-flex flex-row"}
        />
      </div>
      <Footer />
    </div>
  );
}
export default Work;
