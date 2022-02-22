import React from 'react';
import Button from "react-bootstrap/esm/Button";
import Modal from 'react-bootstrap/Modal';
import Container from "react-bootstrap/esm/Container";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SendEmailPopup(props) {
    const [emailId, setEmailId] = React.useState('');
    function submitEmailRequest(e) {
        let emailBodyHtml = "<h1>Insurance Quotation</h1><dl><dt>Plan Name</dt><dd>"
            + props.quoteData.planDetails + "</dd></dl>"
            + "<dl><dt>Premium</dt><dd>" + props.quoteData.premium + " INR </dd></dl>"
            + "<dl><dt>Validity</dt><dd>" + props.quoteData.validityInYears + " Years </dd></dl>"
            + "<dl><dt>Expiry Date</dt><dd>" + props.quoteData.expiryDateString + "</dd></dl>";
        // closeButton.click();
        props.onHide();
        var quoteData = {
            toEmailAddress: emailId,
            emailBody: emailBodyHtml,
            emailSubject: "ACME Insurance Quotation",
            emailContentType: "text/html"
        };

        fetch('https://hd5tfy764n3v5ekn5q5yua4oba.apigateway.eu-frankfurt-1.oci.customer-oci.com/acme/v1/sendEmail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(quoteData)
        })
        .then(response => response.json())
        .then((data) => { });
    }

    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Enter your email ID
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="insurance-content">
                    <Container fluid>
                        <Form >
                            <Form.Group as={Row} className="mb-3" controlId="emailId">
                                <Form.Label column sm={2}>
                                    Email ID
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="text" placeholder="abc@gmail.com"
                                        value={emailId}
                                        onChange={e => setEmailId(e.target.value)} />
                                </Col>
                            </Form.Group>
                        </Form>
                    </Container>

                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" style={{ margin: "15px" }} onClick={(e) => submitEmailRequest(e)}>
                    Email Quotation
                </Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SendEmailPopup;