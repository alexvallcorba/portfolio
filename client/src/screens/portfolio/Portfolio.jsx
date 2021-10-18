import React from "react"
import "./Portfolio.css"

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      
      <div className="portfolio">
        <div className="landing-page-image">
          <a className="anchor" target="_blank" href="https://kaimana-surfboards.netlify.app/">
            <img className="image-app" src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1634576444/PROJECT-4.%20KAIMANA%20SURFBOARDS%20APP/kaimana-app_auzbeq.png" alt="Kaimana Surfboards" />
          </a>
        </div>
        <div className="info">
          <p>
          Web application that allows the user to shop for surfboards from this brand and also customize their own surfboard (dimensions). Full CRUD and authentication. Utilized: React, Rubi on Rails, CSS.
          </p>
        </div>
      </div>
      <div className="portfolio">
        <div className="landing-page-image">
          <a className="anchor" target="_blank" href="https://boom-roasted.netlify.app/">
            <img className="image-app" src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1634576842/PROJECT-4.%20KAIMANA%20SURFBOARDS%20APP/boom-roasted-app_fmxuvu.png" alt="Boom! Roasted" />
          </a>
        </div>
        <div className="info">
          <p>
          Web application built in a team of fellow junior engineers that allows the user to easily navigate  coffee blends and merchandise. Full CRUD and authentication. Utilized: React, Express, Mongo DB, Mongoose, Bootstarp, CSS.
          </p>
        </div>
      </div>
      <div className="portfolio">
        <div className="landing-page-image">
          <a className="anchor" target="_blank" href="https://orwel-the-chicken-avenger.netlify.app/">
            <img className="image-app" src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1634575000/PROJECT-4.%20KAIMANA%20SURFBOARDS%20APP/orwel-app_nb8u5f.png" alt="Orwel the Chicken Avenger" />
          </a>
        </div>
        <div className="info">
          <p className="paragraph">
            ORWEL THE CHICKEN AVENGER:  Web application to promote and introduce the graphic nobel with the same name to comic book fans. The users can navigate the app to meet the characters of the comic and learn about their characteristic and they also can create and delete sggestions for new characters. Comes with a 30sec comercial of the comic made with Adobe AfterEffects. Utilized: React, CSS, Airtable.
          </p>
        </div>
      </div>
      <div className="portfolio">
        <div className="landing-page-image">
        <a className="anchor" target="_blank" href="https://cool-and-wonderful-guide-to-the-world.netlify.app/">

          <img className="image-app" src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1634578556/PROJECT-4.%20KAIMANA%20SURFBOARDS%20APP/cool-app_uo31al.png" alt="Cool Traveling Guide" />
          </a>
        </div>
        <div className="info">
          <p>
          web application for a travel guide that allows users to search anyshops, airports, hotels, restaurants, tourist locations with their address, map location and price rating all over the world. Utilized: Javascript, CSS, HTML, Yelp API.
          </p>
        </div>
      </div>
    </div>
  )
}
