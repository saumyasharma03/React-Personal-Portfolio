
import html from "../assets/img/logostech/html.png"
import css from "../assets/img/logostech/css.png"
import javascript from "../assets/img/logostech/js2.png"
import mysql from "../assets/img/logostech/mysql.png"
import react from "../assets/img/logostech/react.png"
import c from "../assets/img/logostech/C.jpg"
import sql from "../assets/img/logostech/sql.jpeg"
import cpp from "../assets/img/logostech/cpp.png"
import ProgressBar from 'react-bootstrap/ProgressBar';
import React from 'react';
import { Badge, Container, Row, Col } from 'react-bootstrap';


export const TechStack =()=>{
    const tags = ['React', 'Bootstrap', 'JavaScript', 'CSS', 'HTML', 'Web Development', 'Responsive'];
return (
        
    <section className="TechStack">
    <Container>
      <Row className="tag-cloud">
        {tags.map((tag, index) => (
          <Col key={index} className="tag">
            <Badge variant="primary">{tag}</Badge>
          </Col>
        ))}
      </Row>
    </Container>

        {/* <Container className="hexagon">
        <h2>Tech Stack</h2>
        <Row className="hex-row">
        <Col xs={3} className="tech-item">
        <button className="btn">
            <img className="techimg" src={html} alt="img"/>
            <h5>HTML</h5>
        </button >
        <ProgressBar now={60} />
        </Col>
        <Col xs={3} className="tech-item">
        <button className="btn">
            <img className="techimg" src={css} alt="img"/>
            <h5>HTML</h5>
            
        </button>
        <ProgressBar now={60} />
        </Col>
        <Col xs={3} className="tech-item">
        <button className="btn">
            <img className="techimg" src={javascript} alt="img"/>
            <h5>HTML</h5>
            
        </button>
        <ProgressBar now={60} />
        </Col>
        <Col xs={3} className="tech-item">
        <button className="btn">
            <img className="techimg" src={javascript} alt="img"/>
            <h5>HTML</h5>
            
        </button>
        </Col>
      </Row>
      
        </Container> */}
    </section>
);
};