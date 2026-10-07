import React from "react";
import "./About.css";
import aboutImg from "./shawarma-pic2.png";

function About() {
  return (
    <div className="about">
      <div className="about-left">
        <img src={aboutImg} alt="Shawarma" />
      </div>
      <div className="about-right">
        <h2>Learn About Shawarma.........</h2>
        <p>☙ The dish shown in the picture beside is Shawarma.</p>
        <p>☙ It is a popular street food in the Middle East.</p>
        <p>☙ It originated in the Levant during the Ottoman Empire.</p>
        <p>☙ It consists of meat cut into thin slices, stacked in an inverted cone, and roasted on a slow-turning vertical spit.</p>
        <p>☙ Traditionally made with lamb or mutton, it may also be made with chicken, turkey meat, beef, falafel or veal.</p>
        <p>☙ The surface of the rotisserie meat is routinely shaved off once it cooks and is ready to be served.</p>
      </div>
    </div>
  );
}

export default About;