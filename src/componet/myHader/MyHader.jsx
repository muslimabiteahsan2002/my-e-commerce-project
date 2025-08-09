import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from "../../picture/pic.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';

class MyHader extends Component {
    render() {
        return (
            <Fragment>
                <Container className='header'>
                    <Row xs={3} md={4} lg={4}>
                        <Col>
                            <img src={logo} className='hear_logo'/>
                        </Col>
                        <Col>
                            <p className='header_title'>যোগাযোগ করুন</p>
                            <Row xs="auto">
                                <Col>
                                    <FontAwesomeIcon icon={faPhone} className='header_box'/>
                                </Col>
                                <Col>
                                    <p>01715-29-8047</p>
                                    <p>01713-74-2345</p>
                                </Col>
                            </Row>                            
                        </Col>
                        <Col>
                            <p className='header_title'>যোগাযোগ করুন</p>
                            <Row xs="auto">
                                <Col>
                                    <FontAwesomeIcon icon={faPhone} className='header_box'/>
                                </Col>
                                <Col>
                                    <p>01715-29-8047</p>
                                    <p>01713-74-2345</p>
                                </Col>
                            </Row>                            
                        </Col>
                        <Col>
                            <p className='header_title'>ইমেইল করুন</p>
                            <Row xs="auto">
                                <Col>
                                    <FontAwesomeIcon icon={faEnvelope} className='header_box'/>
                                </Col>
                                <Col>
                                    <p>tonershopbd@gmail.com</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default MyHader;