import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import QuoteData from './QuoteData';
import configData from "../../config.json";

const { REACT_APP_QUOTE_SERVICE_URL } = process.env;
class CarQuoteForm extends Component {

  state = {
    carNumber: "",
    mobileNumber: "",
    quoteData: {
      dataAvailable: false,
      data: {}
    }
  };

  loadQuoteData(json) {
    var updatedData = {};
    updatedData['dataAvailable'] = true;
    updatedData['data'] = json;
    this.setState({ quoteData: updatedData });
  }

  getQuote(event) {
    console.log('event'+event);
    var quoteData = {
      vehicleNumber : this.state.carNumber,
      mobileNumber : this.state.mobileNumber
    }

    fetch(REACT_APP_QUOTE_SERVICE_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(quoteData)    
        })
        .then(response => response.json())
        .then((data) => { console.log('hi');this.loadQuoteData(data) });    
  }

  render() {
    return (
      <div>
      <Container fluid>
      <Form >
        <Row >
          <Col md>
          <FloatingLabel controlId="floatingInput" label="Enter Your Car Registration number" >
            <Form.Control type="text" placeholder="Eg KA03XX1234 " 
                          value={this.state.carNumber} 
                          onChange={e => this.setState({ carNumber: e.target.value })}/>
          </FloatingLabel>
          </Col>
          <Col md>
              <InputGroup>
              <InputGroup.Text id="in-prefix">+91</InputGroup.Text>
                <Form.Control placeholder="Enter Mobile Number" aria-label="mobilenum" aria-describedby="in-prefix" />
              </InputGroup>
          </Col>
          <Col md>
          <Button variant="primary"  onClick={(e) =>  this.getQuote(e) }>
            Get Quote
          </Button>              
          </Col>       
        </Row>        
      </Form>
    </Container>
    <QuoteData quoteData={this.state.quoteData} />
    </div>
    );
  }
       
}

export default CarQuoteForm;