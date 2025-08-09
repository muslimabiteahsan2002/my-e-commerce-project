import React, { Component, Fragment } from 'react';
import { Col, Container, Row, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

class MyFooder extends Component {
    render() {
        return (
            <Fragment>
                <div  className="footer_all">
                    <Container>
                        <Row xs={3} md={4} lg={4}>
                            <Col>
                                <h2>আমাদের সম্পর্কে</h2>
                                <h6>Laser Printer Toner, Desk Jet Printer Cartridge, বাংলাদেশে আমদানিকৃত যেকোনো Printer এর Professional Toner এর বাজার মূল্য জানতে ও Printer ও Professional, Toner যেকোনো সমস্যার সমাধান পেতে যোগাযোগ করুন ফোনে।</h6>
                                <h6>Printer Toner Price in Bangladesh, Toner Cartridge Price in Bangladesh, Original & China Toner Price in Bangladesh.</h6>
                                <h6>Dot Matrix Printer Ribbon, Photocopy Machine Toner, Total Solution! Any Brand & Any Type in Bangladesh</h6>
                            </Col>
                            <Col>
                                <h2>আমাদের পন্য সমুহ</h2>
                                <h4><Nav.Link href="/">Home</Nav.Link></h4>
                                <h4><Nav.Link href="/laser">Laser Printer Toner</Nav.Link></h4>
                                <h4><Nav.Link href="/inkject">DeskJet/InkJet Printer Cartridge</Nav.Link></h4>
                                <h4><Nav.Link href="/dot_printer">Dot Printer Ribbon</Nav.Link></h4>
                                <h4><Nav.Link href="/photoCopy">Photocopy Toner</Nav.Link></h4>
                                <h4><Nav.Link href="/information">আমাদের কথা</Nav.Link></h4>
                            </Col>
                            <Col>
                                <h2>যোগাযোগ করুন</h2>
                                <Row>
                                    <Col>
                                        <FontAwesomeIcon icon={faAddressCard}/>
                                    </Col>
                                    <Col xs={10}>
                                        <h5>Office: Shop No #312-313, Level-3Sheltech Sierra Computer Market, New Elephant Road, (বাটা সিগনাল মোড়)Dhaka-1205</h5>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FontAwesomeIcon icon={faPhone}/>
                                    </Col>
                                    <Col xs={10}>
                                        <p>01715-298047</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FontAwesomeIcon icon={faPhone}/>
                                    </Col>
                                    <Col xs={10}>
                                        <p>01713-588267</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FontAwesomeIcon icon={faPhone}/>
                                    </Col>
                                    <Col xs={10}>
                                        <p>01713-875635</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <FontAwesomeIcon icon={faEnvelope}/>
                                    </Col>
                                    <Col xs={10}>
                                        <p>tonershopbd@gmail.com</p>
                                    </Col>
                                </Row>
                                <Row xs="auto">
                                    <Col>
                                        <a href='https://www.facebook.com/'><FontAwesomeIcon icon={faFacebook} className='fooder_box'/></a>
                                    </Col>
                                    <Col>
                                        <a href="https://www.youtube.com/channel/UCsIqmHn-lMDGA71TyZblrNw"><FontAwesomeIcon icon={faYoutube} className='fooder_box'/></a>
                                    </Col>
                                    <Col>
                                        <FontAwesomeIcon icon={faEnvelope} className='fooder_box'/>
                                    </Col>
                                </Row>
                            </Col>
                            </Row>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default MyFooder;