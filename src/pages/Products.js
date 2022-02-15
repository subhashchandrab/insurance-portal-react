import React from 'react'
import ProductCategories from '../components/product/ProductCategories'

function ProductsPage() {

    return (
    <div className="container">
    <h3 className="entry-title">Choose your own insurance plan</h3>
    <p>
        Right from offering comprehensive car insurance to a wide range of health insurance plans, we at ACME insurance always take a Customer First Approach. Our fferings mainly include car insurance, two wheeler insurance, home insurance, travel insurance, health insurance and other commercial products. Backed by a super strong customer support team and seamless service driven claims operation, we ensure 360 degree customer happiness.
    </p>

    <ProductCategories/>

   
    </div> 
    );
}

export default ProductsPage;