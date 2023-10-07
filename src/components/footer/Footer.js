import React from "react";
import FooterMenu from "./FooterMenu";
import FooterContact from "./FooterContact";
import FooterLegal from "./FooterLegal";

import githubImage from '../../assets/images/github.png'
import emailtorohit from '../../assets/images/emailtorohit.jpg'

export default class Footer extends React.Component {
  render() {
    return (
      <footer className=" flex-container flex-column txt-center txt-white pop-font">
        <FooterMenu />
        <hr />
        <FooterLegal />
        <hr />
        <FooterContact />
        <hr />
        <div className="testdib1233" >
          Design And Develop By <br /> Rohit Bhatu  <br />
          <div style={{marginTop:"20px"}}>Bhaturohit549@gmail.com</div>
          <div className="mycontact_div">
            <div className="mycontact_div_img1">
              <a href="https://github.com/Rohit1415" target="_blank"> <img src={githubImage} alt="github_logo" /> </a>
            </div>
          </div>
        </div>
      </footer> 
    );
  }
}
