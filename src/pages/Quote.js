import GetQuoteForm from '../components/quote/GetQuoteForm';
import QuoteInputForm from '../components/quote/QuoteInputForm';

function QuotePage() {
    return (
      <div className="container">
        <h3 className="entry-title">Generate quote for insurance</h3>
        <p>
            Quickly get the quotation for the insurance by choosing the product of your interest and  providing very minimal information.
        </p>
          <QuoteInputForm />
        </div>
      );
}

export default QuotePage;
