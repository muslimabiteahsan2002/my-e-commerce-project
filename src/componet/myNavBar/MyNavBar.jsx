import React, { Component, Fragment } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

class MyNavBar extends Component {
    render() {
        return (
            <Fragment>
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/laser">Laser Printer Toner</Nav.Link>
                            <Nav.Link href="/inkject">DeskJet/InkJet Printer Cartridge</Nav.Link>
                            <Nav.Link href="/dot_printer">Dot Printer Ribbon</Nav.Link>
                            <Nav.Link href="/photoCopy">Photocopy Toner</Nav.Link>
                            <Nav.Link href="/information">আমাদের কথা</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        );
    }
}

export default MyNavBar;