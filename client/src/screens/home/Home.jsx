import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="box">
        {/* <h1 className="name1">Àlex Vallcorba</h1>
        <h3 className="title">full-stack web developer</h3> */}
    <div>
      <h1 className="portfolio-title">PROJECTS</h1>

      
    <div className="portfolio-container">
        <div className="project-description">
          <h3 className="project-name">KAIMANA SURFBOARDS</h3>
          <p>
          Web application that allows the user to shop for surfboards and create their custom surfboards. Full CRUD and authentication. Utilized: React, Rubi on Rails, CSS. (WORK IN PROGRESS)
          </p>
      </div>
      <div className="portfolio">
        <div className="landing-page-image">
          <a className="anchor" target="_blank" href="https://kaimana-surfboards.netlify.app/">
            <img className="image-app" src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1634576444/PROJECT-4.%20KAIMANA%20SURFBOARDS%20APP/kaimana-app_auzbeq.png" alt="Kaimana Surfboards" />
          </a>
        </div>
        <div className="info">
        <p className="c" >View project's code </p>
        <a className="anchor1" target="_blank" href="https://github.com/alexvallcorba/kaimana-surfboards">
            <img className="github-logo" src="https://res.cloudinary.com/dhkeoqhmp/image/upload/e_sepia:80/v1634583817/PROJECT-4.%20KAIMANA%20SURFBOARDS%20APP/github-logo-blue_bmcetd.png" alt="Github logo" />
          </a>
          
        </div>
        </div>
        <div className="project-description">
          <h3 className="project-name">BOOM!ROASTED</h3>
          <p>
            Web application built in a team of fellow junior engineers that allows the user to easily navigate  coffee blends and merchandise. Full CRUD and authentication. Utilized: React, Express, Mongo DB, Mongoose, Bootstarp, CSS.
          </p>
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
        <h3 className="project-name">ORWEL THE CHICKEN AVENGER</h3>
          <p>
            App for promotion of  the graphic nobel with the same name to comic book and culinary fans. The users can navigate the app to meet the characters of the comic and learn about their characteristic and they also can create and delete sggestions for new characters. Comes with recipes that the user can download. Has a 30sec comercial of the comic made with Adobe AfterEffects. Utilized: React, CSS, Airtable.
          </p>
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
          <h3 className="project-name">COOL & WONDERFUL GUIDE 2 THE WORLD</h3>
          <p>
            Travel guide that allows users to search anyshops, airports, hotels, restaurants, tourist locations with their address, map location and price rating all over the world. Utilized: Javascript, CSS, HTML, Yelp API.
          </p>
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
      <h1 className="portfolio-title">SNEAKERS</h1>
        
      <div className="sneakers-list">
      
    
        
          <div className="sneaker-container">
            
        <div>
          <h2 className=" sneaker-name">Vans The Slab</h2>
        </div>
        <div className="sneaker">
          <img
            className="sneaker-image"
            src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1635358803/portfolio/thesklab-shoe_htrbed.png"
            alt="Vans The Slab sneaker"
          />
        </div>
      </div>
      <div className="sneaker-container">
        <div>
          <h2 className=" sneaker-name">Adidas Greek God</h2>
        </div>
        <div className="sneaker">
          <img
            className="sneaker-image"
            src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1635357120/portfolio/greek-shoe_lrq50y.png"
            alt="Vans The Slab sneaker"
          />
        </div>
      </div>
      <div className="sneaker-container">
        <div>
          <h2 className=" sneaker-name">Vans Flower Garden</h2>
        </div>
        <div className="sneaker">
          <img
            className="sneaker-image"
            src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1635357120/portfolio/flowers-shoe-3_gfaewp.png"
            alt="Vans The Slab sneaker"
          />
        </div>
      </div>
      <div className="sneaker-container">
        <div>
          <h2 className=" sneaker-name">Vans Iron Man</h2>
        </div>
        <div className="sneaker">
          <img
            className="sneaker-image"
            src="https://res.cloudinary.com/dhkeoqhmp/image/upload/c_scale,h_1000/v1635357120/portfolio/ironman-shoe_zffha1.png"
            alt="Vans Iron Man"
          />
        </div>
      </div>
        </div>
        <div>
      <h1 className="portfolio-title">DESIGN</h1>

      <div className="design-container">
        <h2 className="design-name">T-shirt Design</h2>
        <div className="design-description">
          <p>Client: 2amys Neapolitan Pizzeria. Washington, DC.</p>
        </div>
        <div className="t-shirt">
        <div className="tshirt-page-image">
            <img
              className="image2"
              src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1634921755/portfolio/chocvie-can_saamx5.png"
              alt="Anchovie can t-shirt"
            />
          </div>
          <div className="tshirt-page-image">
            <img
              className="image2"
              src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1634913304/portfolio/poli_pizzeria_t2_wi4wfs.png"
              alt="Poli t-shirt"
            />
          </div>
          <div className="tshirt-page-image">
            <img
              className="image2"
              src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1634913304/portfolio/2a-truck_cnyxbg.png"
              alt="Truck t-shirt"
            />
          </div><div className="tshirt-page-image">
            <img
              className="image2"
              src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1634913304/portfolio/2a_tshirt_evoqxo.png"
              alt="Flag t-shirt"
            />
          </div>
        </div>

        <h2 className="design-name">T-shirt Design</h2>
        <div className="design-description">
          <p>Client: Anxo Ciderie and Pintxos Bar. Washington, DC.</p>
        </div>
        <div className="t-shirt">
          <div className="tshirt-page-image">
            <img
              className="image2"
              src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1634913799/portfolio/anxo-t_qqpiqh.png"
              alt="Anxo t-shirt"
            />
          </div>
        </div>
        <h2 className="design-name">Label Design</h2>
        <div className="design-description">
          <p>Client: Piedrasassi Wine & Bread. Lompoc, CA</p>
        </div>
        <div className="label">
          <div className="label-page-image">
            <img
              className="image2"
              src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1634922378/portfolio/vinsanto-piedrassasi_goxgoi.png"
              alt="Piedrassasi label"
            />
          </div>
        </div>
        <h2 className="design-name">Logo Design and Mural</h2>
        <div className="design-description">
          <p>Client: Green Almond Pantry. Washington, DC</p>
        </div>
        <div className="logo-cagla">
          <div className="logo-page-image">
            <img
              className="image2"
              src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1634923371/portfolio/green-almpond-pantry_psnc86.png"
              alt="Green Almond"
            />
          </div>
        </div>
        <h2 className="design-name">Poster</h2>
        <div className="design-description">
          <p>Client: Anxo Ciderie and Pintxos Bar. Washington, DC</p>
        </div>
        <div className="poster">
          <div className="poster-page-image">
            <img
              className="image2"
              src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1634924170/portfolio/shroom_poster_wl6qd0.png"
              alt="shroom poster"
            />
          </div>
        </div>
        <h2 className="design-name">Skateboards</h2>
        <div className="design-description">
          <p>Client: Catalist Skateboards. Washington, DC</p>
        </div>
        <div className="sk8">
          <div className="sk8-page-image">
            <img
              className="image2"
              src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1634924625/portfolio/catalist-sk8_zqccap.png"
              alt="choco ity sk8s"
            />
          </div>
        </div>
        <div className="design-description">
          <p>Client: Kickballers. Washington, DC</p>
        </div>
        <div className="sk8">
          <div className="sk8-page-image">
            <img
              className="image2"
              src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1634924942/portfolio/money-cash_wlrljq.png"
              alt="money and cash sk8s"
            />
          </div>
        </div>
        <div className="design-description">
          <p>Client: Shut Skateboards. New York,NY</p>
        </div>
        <div className="sk8">
          <div className="sk8-page-image">
            <img
              className="image2"
              src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1634923934/portfolio/Screen_Shot_2021-10-22_at_1.31.54_PM_xhhzqh.png"
              alt="Chuck Brown sk8s"
            />
          </div>
      </div>
      </div>
        </div>
        

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
          <div className="art-container">
        <div class-name="art-description">
              <h2 className=" piece-name">Edu's Conga</h2>
              <p> Art work on conga. Acrylic, Epoxy resin. Personal collection</p>
              
        </div>
        <div className="piece">
          <img
            className="piece-image"
            src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1638900477/conga-4_c5abon.png"
            alt="Edu's Conga"
          />
        </div>
          </div>
          <div className="art-container">
        <div class-name="art-description">
              <h2 className=" piece-name">Orwel the Chicken avenger Graphic Novel</h2>
              <p> Graphic Novel self publish</p>
              
        </div>
        <div className="piece">
          <img
            className="piece-image"
            src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1638901178/orwel_o2x0rg.png"
            alt="Orwel Comic"
          />
        </div>
          </div>
          <div className="art-container">
        <div class-name="art-description">
              <h2 className=" piece-name">Chalk Art</h2>
              <p> Art work on chalk for 2amys pizzeria Washington, DC</p>
              
        </div>
        <div className="piece">
          <img
            className="piece-image1"
            src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1638902551/2a-chalk_fxrn2y.png"
            alt="Chalk Art 2a"
          />
        </div>
          </div>
          <div className="art-container">
        <div class-name="art-description">
              <h2 className=" piece-name">Chalk Art</h2>
              <p> Art work on chalk for Black Salt Restaurant Washington, DC</p>
              
        </div>
        <div className="piece">
          <img
            className="piece-image"
            src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1638903063/blksalt_gjhvks.png"
            alt="Chalk Art blk salt"
          />
        </div>
      </div>
        </div>
        <div>

        </div>
      </div>

    </div>
  );
}

export default Home;
