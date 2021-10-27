import React from "react";
import "./Sneakers.css";

function Sneakers() {
  return (
    <>
      {/* <div>
      <img
        className="work-sign1"
        alt="work in progress sign"
        src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1635268988/portfolio/work-in-progress-sign_jo26pf.png"
        />
        </div> */}
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
      </>
  );
}

export default Sneakers;
