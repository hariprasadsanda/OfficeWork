
import React, { useState } from "react";
import "../Navbar/Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      navigate(`/${selectedValue}`);
      setSelectedOption(""); // Reset the dropdown after navigation
    }
  };

  return (
    <div>
      <div className="nav-back">
        <div className="nav-align">
          <div>
            <img
              src="https://oralhealthevents.com/wp-content/uploads/2024/07/Dental-logo-2.png"
              alt="Logo"
              className="logo"
            />
          </div>
          <div>
            <ul className="nav">
              <li className="nav-li">
                <Link to="/" className="link">HOME</Link>
              </li>
              <li className="nav-li">
                <select id="downbar" className="nav-select" value={selectedOption} onChange={handleSelectChange}>
                  <option value="" disabled hidden>UP COMMING EVENTS</option>
                  <option value="Dentaloral">Dental Oral Health Conference</option>
                  <option value="Orthodontics">Orthodontics Conference</option>
                  <option value="Pediatric">Pediatric Dentistry Conference</option>
                  <option value="Modern">Modern Dentistry Conference</option>
                  <option value="Dentalresearch">Dental Research Oral Health Conference</option>
                  <option value="Astheic">Aesthetic Dentistry Conference</option>
                  <option value="Dentalpharmacology">Dental Pharmacology Conference</option>
                </select>
              </li>
              <li className="nav-li">
                <Link to="/Venue" className="link">VENUE</Link>
              </li>
              <li className="nav-li">
                <Link to="/Speaker" className="link">SPEAKER GUIDELINES</Link>
              </li>
              <li className="nav-li">
                <Link to="/Contact" className="link">CONTACT</Link>
              </li>
              <button className="register">
                <Link to="/Register">REGISTER NOW</Link>
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

