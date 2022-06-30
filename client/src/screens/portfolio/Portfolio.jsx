import React from "react"
import "./Portfolio.css"
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
<div>
      <h1 className="portfolio-title">WEB DEVELOPMENT</h1>

      
      <div className="portfolio-container">
      <div className="project-description">
        <h3 className="project-name">ORWEL THE CHICKEN AVENGER</h3>
          <p className="Info-project">
            App for promotion of  the graphic nobel with the same name to comic book and culinary fans. The users can navigate the app to meet the characters of the comic and learn about their characteristic and they also can create and delete sggestions for new characters. Comes with recipes that the user can download. Has a 30sec comercial of the comic made with Adobe AfterEffects. Utilized: React, CSS, Airtable.
          </p>
          <h4 className="click">Click on image to go to website</h4>
      </div>
      <div className="portfolio">
        <div className="landing-page-image">
          <a className="anchor" target="_blank" href="https://orwel-the-chicken-avenger.netlify.app/">
            <img className="image-app" src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1634575000/PROJECT-4.%20KAIMANA%20SURFBOARDS%20APP/orwel-app_nb8u5f.png" alt="Orwel the Chicken Avenger" />
          </a>
        </div>
          <div className="info">
         <p className="link-github-code" >View project's code</p>
        <a className="anchor1" target="_blank" href="https://github.com/alexvallcorba/orwel-the-chicken-avenger">
            <img className="github-logo" src="https://res.cloudinary.com/dhkeoqhmp/image/upload/e_sepia:80/v1634583817/PROJECT-4.%20KAIMANA%20SURFBOARDS%20APP/github-logo-blue_bmcetd.png" alt="Github logo" />
            
          </a>
          
        </div>
        </div>
        <div className="project-description">
          <h3 className="project-name">KAIMANA SURFBOARDS</h3>
          <p className="Info-project">
          Web application that allows the user to shop for surfboards and create their custom surfboards. Full CRUD and authentication. Utilized: React, Rubi on Rails, CSS. (WORK IN PROGRESS)
          </p>
          <h4 className="click">Click on image to go to website</h4>

      </div>
      <div className="portfolio">
        <div className="landing-page-image">
          <a className="anchor" target="_blank" href="https://kaimana-surfboards.netlify.app/">
            <img className="image-app" src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1634576444/PROJECT-4.%20KAIMANA%20SURFBOARDS%20APP/kaimana-app_auzbeq.png" alt="Kaimana Surfboards" />
          </a>
        </div>
        <div className="info">
        <p className="link-github-code" >View project's code </p>
        <a className="anchor1" target="_blank" href="https://github.com/alexvallcorba/kaimana-surfboards">
            <img className="github-logo" src="https://res.cloudinary.com/dhkeoqhmp/image/upload/e_sepia:80/v1634583817/PROJECT-4.%20KAIMANA%20SURFBOARDS%20APP/github-logo-blue_bmcetd.png" alt="Github logo" />
          </a>
          
        </div>
        </div>
        <div className="project-description">
          <h3 className="project-name">BOOM!ROASTED</h3>
          <p className="Info-project">
            Web application built in a team of fellow junior engineers that allows the user to easily navigate  coffee blends and merchandise. Full CRUD and authentication. Utilized: React, Express, Mongo DB, Mongoose, Bootstarp, CSS.
          </p>
          <h4 className="click">Click on image to go to website</h4>

      </div>
      <div className="portfolio">
        <div className="landing-page-image">
          <a className="anchor" target="_blank" href="https://boom-roasted.netlify.app/">
            <img className="image-app" src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1634576842/PROJECT-4.%20KAIMANA%20SURFBOARDS%20APP/boom-roasted-app_fmxuvu.png" alt="Boom! Roasted" />
          </a>
        </div>
        <div className="info">
        <p className="link-github-code" >View project's code</p>
        <a className="anchor1" target="_blank" href="https://github.com/alexvallcorba/boom-roasted">
            <img className="github-logo" src="https://res.cloudinary.com/dhkeoqhmp/image/upload/e_sepia:80/v1634583817/PROJECT-4.%20KAIMANA%20SURFBOARDS%20APP/github-logo-blue_bmcetd.png" alt="Github logo" />
          </a>
          
        </div>
        </div>
       
        <div className="project-description">
          <h3 className="project-name">COOL & WONDERFUL GUIDE 2 THE WORLD</h3>
          <p className="Info-project">
            Travel guide that allows users to search anyshops, airports, hotels, restaurants, tourist locations with their address, map location and price rating all over the world. Utilized: Javascript, CSS, HTML, Yelp API.
          </p>
          <h4 className="click">Click on image to go to website</h4>

      </div>
      <div className="portfolio">
        <div className="landing-page-image">
        <a className="anchor" target="_blank" href="https://cool-and-wonderful-guide-to-the-world.netlify.app/">

          <img className="image-app" src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1634578556/PROJECT-4.%20KAIMANA%20SURFBOARDS%20APP/cool-app_uo31al.png" alt="Cool Traveling Guide" />
          </a>
        </div>
        <div className="info">
        <p className="link-github-code" >View project's code</p>
        <a className="anchor1" target="_blank" href="https://github.com/alexvallcorba/Cool-and-Wonderful-Guide-to-the-World">
            <img className="github-logo" src="https://res.cloudinary.com/dhkeoqhmp/image/upload/e_sepia:80/v1634583817/PROJECT-4.%20KAIMANA%20SURFBOARDS%20APP/github-logo-blue_bmcetd.png" alt="Github logo" />
            
          </a>
        </div>
      </div>
      </div>
      </div>
  )
}
