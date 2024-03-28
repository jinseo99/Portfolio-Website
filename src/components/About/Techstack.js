import { Row, Col } from "react-bootstrap";
import { content } from "../../Content";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import React, { useState } from 'react';

function Techstack(){
    const { techstack } = content;
    return (
        <Row style={{ justifyContent: "center" }}>

            {techstack.map((skill, i) => (
                <Col className="card_col" xs={4} lg={3} xxl={2}>
                    <Card className="card_shadow" >
                        <Card.Img className="skill_image" variant="top"  src={skill.logo} />
                        <Card.ImgOverlay >
                            <Card.Text className="skill_text">
                                {skill.description}
                            </Card.Text> 
                        </Card.ImgOverlay>

                        <Card.Body>
                        <Card.Title>{skill.name}</Card.Title>
                        <ListGroup className="list-group-flush">
                            {skill.projects.map((project,i) => (
                                <ListGroup.Item>{project}</ListGroup.Item>
                            ))}
                        </ListGroup>          

                        </Card.Body>
                    </Card>

                </Col>
        ))}

        </Row>
    );
}
export default Techstack;