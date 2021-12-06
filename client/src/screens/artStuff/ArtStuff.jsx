import React from 'react'
import './ArtStuff.css'


function ArtStuff() {
  return (
    <>
    <h1 className="portfolio-title">ART STUFF</h1>
        
      <div className="art-stuff">
      
    
        
          <div className="art-container">
            
        <div class-name="art-description">
              <h2 className=" piece-name">Anxo Mural</h2>
              <p> Mural for Anxo Cider in  Brightwood</p>
        </div>
        <div className="piece">
          <img
            className="piece-image"
            src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1638813491/PROJECT-4.%20KAIMANA%20SURFBOARDS%20APP/anxo-mural-2_zjwqmb.png"
            alt="Anxo mural"
          />
        </div>
      </div>
      <div className="art-container">
        <div class-name="art-description">
              <h2 className=" piece-name">Virgen de Guadalupe</h2>
              <p> Painting for El Camino restaurant, Washington, DC</p>
              
        </div>
        <div className="piece">
          <img
            className="piece-image"
            src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1638819079/PROJECT-4.%20KAIMANA%20SURFBOARDS%20APP/guadalupe_c3ey4m.png"
            alt="Virgen de Guadalupe painting"
          />
        </div>
      </div>
      <div className="art-container">
        <div class-name="art-description">
              <h2 className=" piece-name">Flor de Lotto </h2>
              <p> Toy for Toy Expo at Kickballers, Washington, DC</p>
              
        </div>
        <div className="piece">
          <img
            className="piece-image"
            src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1638819079/PROJECT-4.%20KAIMANA%20SURFBOARDS%20APP/lotto_r2zvno.png"
            alt="Flor de Lotto toy"
          />
        </div>
      </div>
      <div className="art-container">
        <div class-name="art-description">
              <h2 className=" piece-name">Mother Nature</h2>
              <p> Painting. Acrylic on wood. Personal collection</p>
              
        </div>
        <div className="piece">
          <img
            className="piece-image"
            src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1638819080/PROJECT-4.%20KAIMANA%20SURFBOARDS%20APP/butterfly_j85bea.png"
            alt="Mother Nature painting"
          />
        </div>
      </div>
        </div>
        <div>

      </div>
      </>
  )
}

export default ArtStuff