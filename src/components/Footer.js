import React from "react";
import "../style.css";
import logoLinkedin from "../images/LinkedIn-logo.png";
import logoGithub from "../images/Github-logo.png";
import logoInstagram from "../images/Instagram-logo.png";
import logoTwitter from "../images/Twitter-logo.png";

export default function Footer() {
    return (
        <div className="footer">

            <a class="footer-link" href="https://twitter.com/mxnoj03"><img className="img-footer" src={logoTwitter} /></a>

            <a class="footer-link" href="https://www.linkedin.com/in/manoj-a04415221/"><img className="img-footer" src={logoLinkedin} /></a>

            <a class="footer-link" href="https://www.instagram.com/mxnoj18/"><img className="img-footer" src={logoInstagram} /></a>

            <a class="footer-link" href="https://github.com/manojku1803/"><img className="img-footer" src={logoGithub} /></a>


            <p class="copyright ">©️ 2022 Manoj</p>
        </div>
    )
}