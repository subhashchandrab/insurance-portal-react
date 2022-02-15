import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";

function QuoteData(props) { 
    if(props.quoteData.dataAvailable){
        let quoteItems = props.quoteData['data'];
        return (
            <Container  >
                <Row>
                {
                    quoteItems.map((quoteItem) => {
                        return <Col className="insurance-item filterable-item">
                        <div className="insurance-content">
                            <h3 className="insurance-title">{quoteItem.planDetails}</h3>
                            <h3 className="widget-title">{quoteItem.tenure} Years</h3>
                            <Button variant="primary"  onClick={(e) =>  this.getQuote(e) }>
                                 {quoteItem.premium}
                            </Button> 
                        </div>
                     </Col>
                    })
                }
                </Row>
            </Container>
        );
    }
    else {
        return (<div></div>);
    }
}
export default QuoteData;