import React from 'react';

import {Navbar, Container, Col} from 'react-bootstrap';

class Footer extends React.Component {
    render() {
        let ano = new Date().getFullYear();

        return (
            <Navbar fixed="bottom" bg="dark" variant="dark">
                <Container>
                    <Col lg={12} className="text-center text-muted">
                        <div>{ano}-{ano+1}, André Costa</div>
                    </Col>
                </Container>
            </Navbar>
        );
    }
}

export default Footer;