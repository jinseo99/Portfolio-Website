import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { content } from "../../Content";

function Home() {
    const { home } = content;

    return (
      <section id="home" className="page-section">
              {/* <Col md={5}>  
                <img
                  src={home.image}
                  alt="home pic"
                  className="profile-image"
                />
              </Col> */}

              {/* <Col md={7} className="my-auto"> */}
  
                <h1>
                  Hi, I am <strong> {home.firstName} {home.LastName}</strong>.
                </h1>
                <h1>
                     A <strong>{home.title}</strong>.
                </h1>
                <h3>
                    Welcome to my Portfolio website!

                </h3>
                <p style={{"font-size":"1.2rem"}}>
                I have completed BSc in Software Engineering at the University of Calgary.<br/>
                I have 2 years of Experience in IT and currently seeking new opportunities.

                </p>

      </section>
    );
  }
  
  export default Home;