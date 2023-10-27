import React from "react";
import "../Categories/Categories.css";
import { Link, useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  const handleScienceClick = () => {
    // Defining a click handler for the "Science" link
    navigate("/categories/science"); // Using navigate to change the route
  };
  const handleTechnologyClick = () => {
    navigate("/categories/technology");
  };
  const handleHumanitiesClick = () => {
    navigate("/categories/humanities");
  };
  const handleArchitectureClick = () => {
    navigate("/categories/architecture");
  };
  const handleMedicalClick = () => {
    navigate("/categories/medical");
  };
  const handlePhilosophyClick = () => {
    navigate("/categories/philosophy");
  };
  const handleBusinessClick = () => {
    navigate("/categories/business");
  };
  const handleLawClick = () => {
    navigate("/categories/law");
  };

  return (
    <>
      <div className="categories">
        <div className="categories-one">
          <Link to="science" onClick={handleScienceClick}>
            <div className="categories-science">
              <h1>SCIENCE</h1>
            </div>
          </Link>
          <Link to="technology" onClick={handleTechnologyClick}>
            <div className="categories-tech">
              <h1>TECHNOLOGY</h1>
            </div>
          </Link>
          <Link to="humanities" onClick={handleHumanitiesClick}>
            <div className="categories-humanities">
              <h1>HUMANITIES</h1>
            </div>
          </Link>
          <Link to="architecture" onClick={handleArchitectureClick}>
            <div className="categories-architecture">
              <h1>ARCHITECTURE</h1>
            </div>
          </Link>
        </div>
        <div className="categories-two">
          <Link to="medical" onClick={handleMedicalClick}>
            <div className="categories-medical">
              <h1>MEDICAL</h1>
            </div>
          </Link>
          <Link to="philosophy" onClick={handlePhilosophyClick}>
          <div className="categories-philosophy">
            <h1>PHILOSOPHY</h1>
          </div>
          </Link>
          <Link to="business" onClick={handleBusinessClick}>
          <div className="categories-business">
            <h1>BUSINESS</h1>
          </div>
          </Link>
          <Link to="law" onClick={handleLawClick}>
          <div className="categories-law">
            <h1>LAW</h1>
          </div>
          </Link>

       
        
      
        </div>
      </div>
    </>
  );
}

export default Categories;
