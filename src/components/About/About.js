import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack"
function About(){
    return (
        <section id="about" className="page-section">

            <Container>

                <h1>
                <strong>Technical Skills</strong> 
                </h1>

                <Techstack/>
            </Container>
        </section>

    );
}
export default About;