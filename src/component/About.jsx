import React from "react";
import { NavLink } from "react-router-dom";
import image from "/Users/kumar/OneDrive/Desktop/4 React project/E-commrce/emart/src/image.png";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
              odio quasi dolorem perspiciatis alias eius corrupti. Sequi illo,
              reiciendis voluptatem aut adipisci nisi corrupti nesciunt esse
              harum ipsam quis iure a nihil maiores debitis ad, voluptate
              suscipit totam nulla nostrum? Provident nihil ad consequuntur
              dolor, obcaecati nulla odio magni perspiciatis dolores est ratione
              illum beatae, eum voluptate officiis, nesciunt exercitationem
              nisi. Non optio tempore, voluptatum sequi neque quam possimus ad
              dolorem maxime repellendus voluptatem ducimus magnam sit sed,
              veritatis dignissimos quibusdam? Laboriosam enim temporibus iusto
              obcaecati repellendus consequuntur quod illo sequi unde quis nemo,
              assumenda consequatur, illum minima dolorum laborum.
            </p>
            <NavLink to="/contact" className="btn 
            btn-outline-primary px-3">Contact US</NavLink>
          </div>
           <div className="col-md-6 d-flex justify-content-center">
            <img src ={image} alt="About Us"
            height="400px" width="400px"/>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;
