import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <section>
        <div className="footer">
            <h3> Developed by Jinseo Lee</h3>
            <h3>Copyright © {year} JL.</h3>
        </div>
    </section>
  );
}

export default Footer;