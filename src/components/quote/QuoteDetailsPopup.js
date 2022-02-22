
import React from 'react';
import Button from "react-bootstrap/esm/Button";
import Modal from 'react-bootstrap/Modal';
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function QuoteDetailsPopup(props) {

    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Insurance Quotation
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="insurance-content">
                    <h3 className="insurance-title"></h3>
                    <Container>
                        <Row>
                            <Col >
                                <p className="widget-title">Plan Name </p>
                            </Col>
                            <Col >
                                <p className="widget-title"><b>{props.quoteData.planDetails}</b></p>
                            </Col>
                        </Row>
                        <Row>
                            <Col >
                                <p className="widget-title">Premium </p>
                            </Col>
                            <Col >
                                <p className="widget-title"><b>{props.quoteData.premium} INR</b></p>
                            </Col>
                        </Row>  
                        <Row>
                            <Col >
                                <p className="widget-title">Validity </p>
                            </Col>
                            <Col >
                                <p className="widget-title"><b>{props.quoteData.validityInYears} Years</b></p>
                            </Col>
                        </Row>
                        <Row>
                            <Col >
                                <p className="widget-title">Expiry Date </p>
                            </Col>
                            <Col >
                                <p className="widget-title"><b> {props.quoteData.expiryDateString} </b></p>
                            </Col>
                        </Row>                                                                      
                    </Container>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default QuoteDetailsPopup;