import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CarQuoteForm from "../quote/CarQuoteForm";
import QuoteForm from "../quote/QuoteForm";
import configData from "../../config.json";

class ProductCategories extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            productItems: [],
            currentProductCode: 0,
            DataLoaded: false
        };
    }

    handleClick(e) {
        this.setState({currentProductCode: e.target.id});
    }    

    componentDidMount() {
        fetch(configData.PRODUCT_CATALOG_SERVICE_URL)
            .then((res) => res.json())
            .then((json) => {
                console.log(json);
                this.setState({
                    productItems: json,
                    currentProductCode: 0,
                    DataLoaded: true
                });
            })
    }

    render() {
        const { DataLoaded, productItems, currentProductCode} = this.state;
        if (!DataLoaded) return <div>
            <h1> Loading Data... </h1> </div>;

        

        
        return (
            <div>
            <div className="filter-links filterable-nav">
                {
                    productItems.map((productItem) => {
                        return <button className="fadeInRight button" key={productItem.id} id={productItem.type}
                                       onClick={(e) =>  this.handleClick(e) }
                                       data-wow-delay=".2s" style={{ margin: "5px" }}>
                            {productItem.type}
                        </button>;
                    })}
            </div>
            <QuoteForm productCode={currentProductCode}/>
            </div>
        );
    }
}

export default ProductCategories;