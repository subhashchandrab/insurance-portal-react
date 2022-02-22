import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import QuoteData from './QuoteData';

const { REACT_APP_QUOTE_SERVICE_URL } = process.env;
class QuoteInputForm extends Component {

  state = {
    brandName: "",
    regCity: "",
    thirdPartyChecked: false,
    compChecked: false,
    previousPolicyExpired: false,
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
    console.log('event' + event);
    var quoteData = {
      productType: 1,
      isComprehensive: this.state.compChecked,
      previousPolicyExpired: this.state.previousPolicyExpired
    };

    console.log(quoteData);

    fetch(REACT_APP_QUOTE_SERVICE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(quoteData)
    })
      .then(response => response.json())
      .then((data) => { console.log('hi'); this.loadQuoteData(data) });
  }

  render() {
    if (this.state.quoteData['dataAvailable']) 
      return (<QuoteData quoteData={this.state.quoteData} />);
    else {
      return (
        <div>
          <Container fluid>
            <Form >
              <Form.Group as={Row} className="mb-3" controlId="brandName">
                <Form.Label column sm={2}>
                  Brand Name
                </Form.Label>
                <Col sm={10}>
                  <Form.Select aria-label="Default select example" size="sm-7" 
                              value={this.state.brandName}
                              onChange={e => this.setState({ brandName: e.target.value })}>
                    <option >Select the brand for your car</option>
                    <option value="1">Hyundai</option>
                    <option value="2">Maruti</option>
                    <option value="3">TATA</option>
                    <option value="1">Ford</option>
                    <option value="2">Kia</option>
                    <option value="3">Volkswagen</option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="registrationCity">
                <Form.Label column sm={2}>
                  Registration City
                </Form.Label>
                <Col sm={10}>
                  <Form.Select aria-label="Default select example" size="sm-10" 
                            value={this.state.regCity} onChange={e => this.setState({ regCity: e.target.value })}>
                    <option >Select the registration city</option>
                    <option value="1">Bengaluru</option>
                    <option value="2">Hyderabad</option>
                    <option value="3">Chennai</option>
                    <option value="1">Delhi</option>
                    <option value="2">Kolkata</option>
                    <option value="3">Mumbai</option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <fieldset>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label as="legend" column sm={2}>
                    Policy Cover
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Check
                      type="radio" value={this.state.compChecked}
                      onChange={e => this.setState({ compChecked: e.target.value })}
                      label="Comprehensive"
                      name="formHorizontalRadios"
                      id="compCheck"
                    />
                    <Form.Check
                      type="radio" value={this.state.thirdPartyChecked}
                      onChange={e => this.setState({ thirdPartyChecked: e.target.value })}
                      label="Third party protection"
                      name="formHorizontalRadios"
                      id="thirdPartyCheck"
                    />
                  </Col>
                </Form.Group>
              </fieldset>
              <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                <Col sm={{ span: 10, offset: 2 }}>
                  <Form.Check label="Previous Policy expired" checked={this.state.previousPolicyExpired} 
                  onChange={(e) => {
                    console.log("prev policy check" + e.target.value);
                    let currentVal = e.target.value =='on' ? true : false;
                    this.setState({ previousPolicyExpired: currentVal })}
                   } />
                </Col>
              </Form.Group>
              <Button variant="primary" onClick={(e) => this.getQuote(e)}>
                Get Quote
              </Button>
            </Form>
          </Container>
          
        </div>
      );
    }

  }

}

export default QuoteInputForm;