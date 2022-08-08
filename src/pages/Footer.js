import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="row email">
        <a
          href="mailto:nahidnorouzi@hotmail.com"
          class="d-block text-center text-decoration-none text-dark"
          title="Send an email to Nahid Norouzi"
        >
          nahidnorouzi@hotmail.com
        </a>
      </div>
      <div className="row text-center my-5">
        <p>
          <a
            href="https://github.com/nefbao"
            target="_blank"
            rel="noreferrer"
            title="Nahid Norouzi's GitHub"
          >
            <i className="fa-brands fa-github github mx-2"></i>
          </a>
          <a
            href="https://twitter.com/NahidNorouzi_"
            target="_blank"
            rel="noreferrer"
            title="Nahid Norouzi's Twitter"
          >
            <i className="fa-brands fa-twitter twitter mx-2"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/nahid-norouzi-97145456/"
            target="_blank"
            rel="noreferrer"
            title="Nahid Norouzi's Linkedin"
          >
            <i className="fa-brands fa-linkedin-in linkedin mx-2"></i>
          </a>
        </p>
      </div>
      <div className="source text-center mb-5">
        This website is coded by Nahid Norouzi, and is
        <a
          className="sourceLink"
          href="https://github.com/nefbao/react-portfolio"
          target="_blank"
          rel="noreferrer"
          title="Nahid Norouzi's Github"
        >
          {" "}
          open-sourced
        </a>
        .
      </div>
    </div>
  );
}
