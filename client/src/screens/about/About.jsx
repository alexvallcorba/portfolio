import React from 'react'
import './About.css'

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
      <p>As a former executive chef and entrepreneur turned Full-Stack Developer, I rely on my exceptional interpersonal skills, leadership abilities, and time management expertise to meet challenges head-on. Together with my background in graphic design, I’m able to engineer solutions to complex problems using creativity and innovation. Avid painter and amateur surfer!</p>
    </div>
  </div>
  )
}

export default About
