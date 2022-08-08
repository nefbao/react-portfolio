import React from "react";
import Footer from "./Footer";
import "./About.css";
import profile from "./images/nahidnorouzi.jpeg";
import basics from "./images/basics.png";
import plus from "./images/plus.png";
import responsive from "./images/responsive.png";
import react from "./images/react.png";

function About() {
  return (
    <div className="About container">
      <div className="row introduceNahid">
        <div className="col">
          <h1>Hi I am Nahid Norouzi</h1>
          <h2>Frontend Developer, based in Iran</h2>
          <p>
            However I have studied Industrial Engineering at university, I have
            decided to attend front-end development courses at{" "}
            <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer">
              SheCodes
            </a>
            . This is mostly because I have been coding in other languages, such
            as Python, during my career as a Data and Business Analyst and was
            familiar with the core concepts and, more importantly, I am fund of
            Coding. I have been graduated from{" "}
            <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer">
              SheCodes
            </a>{" "}
            courses and the most recent one is React developmen. Ever since, I
            have been trying to advance my React skills while doing projects. At
            the moment, I am looking forward to working as a Front-End Developer
            in an international company.
          </p>
        </div>
        <div className="col picture">
          <img src={profile} alt="Nahid Norouzi" />
        </div>
      </div>
      <div className="row certificates mb-5">
        <h2>You can find my certificates here 👇🏼</h2>
        <div className="row">
          <div className="col">
            <a
              href="https://www.shecodes.io/certificates/93dc7f450b33ec971da30cfc0b96a289"
              target="_blank"
              rel="noreferrer"
            >
              <img src={react} alt="react" />
            </a>
          </div>
          <div className="col">
            <a
              href="https://www.shecodes.io/certificates/ee4da0bb67637531febd896614e951bc"
              target="_blank"
              rel="noreferrer"
            >
              <img src={responsive} alt="responsive" />
            </a>
          </div>
          <div className="col">
            <a
              href="https://www.shecodes.io/certificates/d744551f725fe4222f284ab92ec94a86"
              target="_blank"
              rel="noreferrer"
            >
              <img src={plus} alt="plus" />
            </a>
          </div>
          <div className="col">
            <a
              href="https://www.shecodes.io/certificates/42428eaf920a406327b82f6bc06a48e6"
              target="_blank"
              rel="noreferrer"
            >
              <img src={basics} alt="basics" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default About;
