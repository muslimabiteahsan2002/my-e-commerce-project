import React, { Component, Fragment } from 'react';
import { Container } from 'react-bootstrap';

class MyLeaser extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <div className='My_table'>
                        <table></table>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default MyLeaser;