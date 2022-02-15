import CarQuoteForm from "./CarQuoteForm";
import HomeQuoteForm from "./HomeQuoteForm";

function QuoteForm(props) {
    if(props.productCode == 100){
        return <CarQuoteForm/>
    }
    else if(props.productCode == 200){
        return <HomeQuoteForm/>
    }
    return <CarQuoteForm/>
}

export default QuoteForm;