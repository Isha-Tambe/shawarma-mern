import React from "react";
import "./Contact.css";
import contactImg from "./shawarma-pic3.png";

function Contact() {
 return (
   <div className="contact">
      <div className="contact-left">
        <h2><strong>For any ENQUIRY or FEEDBACK 👇🏼</strong></h2>
        <p><strong>Email: </strong>shawarmazin98@gmail.com</p>
        <p><strong>Contact No. 1: </strong>9807612534</p>
        <p><strong>Contact No. 2: </strong>9021345687</p>
        <p><strong>Website: </strong>www.shawarmazincoindia.com</p>
      </div>
      <div className="contact-right">
        <img src={contactImg} alt="Shawarma" />
      </div>
    </div>
 );
}

export default Contact;