import { Col, Nav, Row, Container, Tab, TabContainer } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorsharp2 from "../assets/img/gradient (1).png"
import projimg1 from "../assets/img/htmlcss.jpeg"
import projimg2 from "../assets/img/portf.jpeg"
import projimg3 from "../assets/img/hbt.jpg"
import projimg4 from "../assets/img/healthcare.png"
import projimg5 from "../assets/img/proj2.jpeg"
export const Projects = () => {
    const projects = [
        
        {
            title: "React Personal Portfolio",
            Description: "A React based portfolio to highlight my skills",
            imgurl: projimg2,
        },
        {
            title: "EduSprint",
            Description: "A responsive web based educational platform frontend with HTML,CSS, JS and backend with PHP and MYSQL",
            imgurl: projimg1,
            url: ""
        },
        
        {
            title: "Healr",
            Description: "A web based project helps people to connect with doctors with their symptoms, made with HTML, CSS, JAVASCRIPT, PHP MYSQL along with integration of Bing MAP API",
            imgurl: projimg4,
        },
        {
            title: "Dincharya",
            Description: "A habit tracker written in cpp that uses Graphs, Trees, Mukti List, File handling etc.",
            imgurl: projimg3,
        },
        {
            title: "Car Rental System",
            Description: "A CPP based project that manages the Cars rental uses file handling and structures etc.",
            imgurl: projimg5,
        },
    ]
    return (
        <section className="Project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Here's a list of several projects that I've created personally or in group and uploaded on github</p>
                        <TabContainer id="projects-tab" defaultActiveKey="first">
                            <Nav variant="pills" defaultActiveKey="/home">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Project Summary</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="two">Github Links</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        More Github Links
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />

                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="two">
                                <p style={{ color: 'white', fontSize: '16px', fontFamily: 'Arial, sans-serif' }}>
                                        My Github Account Link <a href="https://github.com/saumyasharma03">here</a>
                                        <br />
                                        <ul>
                                        <li>
                                                React-Personal-Portfolio: My personal portfolio using REACT.JS framework for showcasing my skills and projects. Along with React, React-Bootstrap and  packages like nodemailer,cors and express to create servers that helps to user to get in touch with me.
                                                Fully funcitonal and Responsive, find it <a href="https://github.com/saumyasharma03/React-Personal-Portfolio">here</a>
                                            </li>
                                            <br/>
                                            <li>
                                                EduSprint- an educational platform: A personal project to help users share resources, create flashcards and make quizzes for better learning.
                                                It also connects user's info to the bckend and lets them login with their credentials, user validation implemented through php and MySQL database used.
                                                Find it <a href="https://github.com/saumyasharma03/EduSprint-project-educational-platform">here</a>
                                            </li>
                                            
                                        </ul>

                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                <p style={{ color: 'white', fontSize: '16px', fontFamily: 'Arial, sans-serif' }}>
                                        <br />
                                        <ul>
                                            <li>
                                                Dincharya: made in a group of 2, Dincharya is a habit tracker that lets you create events and stores them in backend using file handlig'. It helps you to plan your important events by allowing you to find locations through use of Graphs, Trees, MultiList etc.
                                                Find it <a href="">here</a>
                                            </li>
                                            <br/>
                                            <li>
                                                Healr: Built for Bitbox 3.0 in healthcare track in a team of 2, Healr helps you identify your symptoms and allows you to connect withyour doctors.
                                                It stores your data in backend using PHP,MySQL and also use Bing MAP API integration.
                                                Find it <a href="">here</a>
                                            </li>
                                        </ul>
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </TabContainer>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}