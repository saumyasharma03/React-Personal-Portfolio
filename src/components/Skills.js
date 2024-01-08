import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import html from "../assets/img/logostech/html.png"
import css from "../assets/img/logostech/css.png"
import javascript from "../assets/img/logostech/js2.png"
import mysql from "../assets/img/logostech/mysql.png"
import react from "../assets/img/logostech/react.png"
import c from "../assets/img/logostech/C.jpg"
import sql from "../assets/img/logostech/sql.jpeg"
import cpp from "../assets/img/logostech/cpp.png"
import node from "../assets/img/logostech/node.png"
import ProgressBar from 'react-bootstrap/ProgressBar';
import "react-multi-carousel/lib/styles.css";

import colorSharp from "../assets/img/color-sharp.png"
export const Skills=()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
        return(
            <section className="skill" id="skills">
            <Container>
            <Row>
            <Col>
            <div className="skill-bx">
            <h2>Tech Stack</h2>
            <p>
              I have built projects and showcased problem solving skills in the tech stack given below.<br/>
              Frontend: HTML, CSS, Javascript, React, Node <br/>
              Backend: Node, Express, PHP, MySQL, SQL, PL/SQL<br/>
              Programming Languages: C++, C, Java(Novice)<br/>
            </p>
            <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={1000} className="skill-slider">
            <div className="item">
            <img src={html} alt="img"/>
            <h5>HTML</h5>
            </div>
            <div className="item">
            <img src={css} alt="img"/>
            <h5>CSS</h5>
            </div>
            <div className="item">
            <img id="js"src={javascript} alt="img"/>
            <h5>Javascript</h5>
            </div>
            <div className="item">
            <img src={react} alt="img"/>
            <h5>React</h5>
            </div>
            <div className="item">
            <img src={mysql} alt="img"/>
            <h5>MySql</h5>
            </div>
            <div className="item">
            <img id="sql" src={sql} alt="img"/>
            <h5>SQL</h5>
            </div>
            <div className="item">
            <img id ="cpp" src={cpp} alt="img"/>
            <h5>C++</h5>
            </div>
            <div className="item">
            <img src={c} alt="img"/>
            <h5>C</h5>
            </div>
            <div className="item">
            <img src={node} alt="img"/>
            <h5>Node</h5>
            </div>
            </Carousel>
            </div>
            </Col>
            </Row>
            </Container>
            {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
            </section>
        );
}