import React from "react";
import logo from "../images/DSC_0062.jpg";
import logoEmail from "../images/Email-logo.png";
import logoLinkedin from "../images/LinkedIn-logo.png";
import "../style.css";

export default function Info() {
    return (
        <div className="info">
            <img className="info-icon" src={logo} />
            <h2 className="info-title">Manoj Kumar Pradhan</h2>
            <h4 className="info-skill">FullStack Developer</h4>
            <p className="info-description">(website coming soon)</p>

            <div className="links">
                <a className="info-email" href="manojpradhan1803@gmail.com"><img className="icons" src={logoEmail} />Email</a>

                <a className="info-linkedin" href="https://www.linkedin.com/in/manoj-a04415221/" ><img className="icons" src={logoLinkedin} />linkedin</a>
            </div>
        </div>

    )

}