import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import React from 'react';
import QuoteDetailsPopup from "./QuoteDetailsPopup";
import SendEmailPopup from "./SendEmailPopup";

function QuoteData(props) {
    const [quoteModalShow, setQuoteModalShow] = React.useState(false);
    const [emailModalShow, setEmailModalShow] = React.useState(false);
    const [seletedQuote, setSeletedQuote] = React.useState({});


    

    if (props.quoteData.dataAvailable) {
        let quoteItems = props.quoteData['data'];
        return (
            <div>
            <Container  >
                <Row>
                    {
                        quoteItems.map((quoteItem) => {
                            return <Col className="insurance-item filterable-item" key={quoteItem.planDetails}>
                                <div className="insurance-content">
                                    <h3 className="insurance-title">{quoteItem.planDetails}</h3>
                                    <Container>
                                        <Row>
                                            <Col >
                                            <p className="widget-title"><b>{quoteItem.validityInYears} Years</b></p>
                                            </Col>
                                            <Col >
                                                <p className="widget-title"><b>{quoteItem.premium} INR</b></p>
                                            </Col>
                                        </Row>
                                    </Container>

                                    <Button variant="primary" style={{ margin: "10px" }} onClick={(e) => {
                                        setSeletedQuote(quoteItem);
                                        setQuoteModalShow(true);
                                        }}>
                                        View Details
                                    </Button>


                                    <Button variant="primary" style={{ margin: "10px" }} onClick={(e) => {
                                        setSeletedQuote(quoteItem);
                                        setEmailModalShow(true);
                                        }}>
                                        Send Email
                                    </Button>
                                </div>
                            </Col>
                        })
                    }
                </Row>
            </Container>
            <QuoteDetailsPopup key="{quoteItem.planDetails}"
                                        show={quoteModalShow}
                                        onHide={() => setQuoteModalShow(false)}
                                        quoteData={seletedQuote}
                                    />
            <SendEmailPopup key="{quoteItem.planDetails}"
                                        show={emailModalShow}
                                        onHide={() => setEmailModalShow(false)}
                                        quoteData={seletedQuote}
                                    />                                    
                                    </div>
        );
    }
    else {
        return (<div></div>);
    }
}
export default QuoteData;