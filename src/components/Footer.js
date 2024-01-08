import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const Footer = () => {
    return (
        <section className='Footer'>
            <footer className="mt-5">
                <Container>
                    <Row>
                        <p>Thank you for visitng my portfolio. 
                            <br/>
                            Have a wonderful day! :)
                        </p>
                    </Row>
                    <Row>
                        <Col xs={12} className="text-center">
                            <p>&copy; 2023 saumyasharma. All rights reserved.</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </section>
    );
};

export default Footer;
