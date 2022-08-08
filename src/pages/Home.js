import React from "react";
import "./Home.css";
import Project from "./Project";
import dictionary from "./images/dictionary.png";
import weather from "./images/weather.png";

function Home() {
  return (
    <div className="Home container">
      <div className="introduction my-5">
        <p className="hi mt-5">Hi, I am</p>
        <h1>Nahid Norouzi</h1>
        <h2 className="my-5">Frontend Developer, based in Iran.</h2>
      </div>
      <div className="row projects">
        <p className="projectsOverview my-5">
          You can find a selection of the projects that I have worked on here 👇🏼
        </p>
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
    </div>
  );
}
export default Home;
