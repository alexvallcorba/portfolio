import React from "react";
import "./About.css";

function About() {
  return (
    <div className="details-container">
      <div className="image-container">
        <img
          class="alex-image"
          id="image"
          src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1634602812/PROJECT-4.%20KAIMANA%20SURFBOARDS%20APP/head-shot_pyv5iy.png"
          alt="Alex image"
        />
      </div>

      <div className="about-paragraph">
        <h1 className="about-title">ABOUT</h1>
        <p>
          As a former executive chef and entrepreneur turned Full-Stack
          Developer, I rely on my exceptional interpersonal skills, leadership
          abilities, and time management expertise to meet challenges head-on.
          Together with my background in graphic design, I’m able to engineer
          solutions to complex problems using creativity and innovation. Avid
          painter and amateur surfer!
          Technical Skills: HTML, Javascript, CSS, React, Ruby on Rails,Adobe Illustrator.
          Other Skills: Production planning, hiring and training staff members, business developing,
          leadership, multi-lingual: Catalan, Spanish,English.
        </p>
        <div className="resume-link">
          <a
            className="anchor1"
            target="_blank"
            href="https://drive.google.com/file/d/1zeHwEeoroXEhxfavGTZ1nfGat3ZEYLcW/view?usp=sharing"
          >
            <h3 className="resume-about">View my RESUME </h3>
          </a>

          <div className="logos">
            <a
              className="anchor2"
              target="_blank"
              href="https://www.linkedin.com/in/alex-vallcorba-70a158208/"
            >
              <img
                className="logo"
                src="https://res.cloudinary.com/dhkeoqhmp/image/upload/e_sepia:80/v1634583816/PROJECT-4.%20KAIMANA%20SURFBOARDS%20APP/linkedin-logo-blue-1_korqtj.png"
                alt="Linkedin logo"
              />
            </a>

            <a
              className="anchor2"
              target="_blank"
              href="https://github.com/alexvallcorba"
            >
              <img
                className="logo"
                src="https://res.cloudinary.com/dhkeoqhmp/image/upload/e_sepia:80/v1634583817/PROJECT-4.%20KAIMANA%20SURFBOARDS%20APP/github-logo-blue_bmcetd.png"
                alt="Github logo"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
