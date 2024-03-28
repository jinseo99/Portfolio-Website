import { Container, Row, Col } from "react-bootstrap";
import { content } from "../../Content";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ProjectModal from "./ProjectModal";
import React, { useEffect, useRef, useState} from 'react';
import Masonry from 'masonry-layout';
function Projects(){
    const {projects, project_icon} = content;

    const [modalShows, setModalShows] = useState([false, false, false]);

    const toggleModal = (index) => {
        const newModalShows = [...modalShows];
        newModalShows[index] = !newModalShows[index];
        setModalShows(newModalShows);
      };
    
    const masonryRef = useRef(null);

    useEffect(() => {
        const masonry = new Masonry(masonryRef.current, {
            itemSelector: '.masonry-item',
            columnWidth: '.grid-sizer',
            percentPosition: true,
        });

        // Layout Masonry when component mounts
        masonry.layout();

        // Destroy Masonry when component unmounts
        return () => {
            masonry.destroy();
        };
    }, []);

    return (
        <section id="projects">
            <Container>
                <h1>
                <strong>Projects</strong>
                </h1>
                <Row className="masonry-grid" ref={masonryRef} style={{ justifyContent: "center" , "margin-top":"50px"}}>
                <div className="grid-sizer col-lg-4"></div>

                    {projects.map((project, i) => (
                        <Col className="masonry-item project_card_col" lg={4}>
                            <Card className="card_shadow" >
                            <Card.Img className="project_image" variant="top" src={project.image} />
                            <Card.Body>
                            <Card.Title>{project.name}</Card.Title>
                            <div>
                                {project.tools.map((tool, i) => (
                                    <Button variant="outline-dark" size="sm" style={{"margin":"3px"}}>{tool}</Button>
                                ))}
                            </div>
                            <Card.Text style={{"margin-top":"10px", "text-align":"left"}}>
                                {project.description}
                            </Card.Text>
                            <div style={{"font-size":"1.8rem"}}>
                                {project.source &&(
                                    <a
                                        href={project.source}
                                        aria-label='source code'
                                        style={{"margin-right":"10px"}}
                                    >
                                    <project_icon.github/>

                                    </a>
                                )}
                                {(project.preview || project.video) && (
                                    <project_icon.launch style={{"cursor":"pointer"}} onClick={() => toggleModal(i)}/>
                            )}

                            </div>
                            </Card.Body>
                            </Card>
                            <ProjectModal
                                show={modalShows[i]}
                                onHide={() => toggleModal(i)}
                                title = {project.name}
                                preview = {project.preview}
                                video ={project.video}
                            />

                        </Col>

                    ))}

                </Row>

            </Container>
        </section>
    );
}
export default Projects;