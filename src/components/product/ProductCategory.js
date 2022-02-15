
function ProductCategory(props) {
    const productCategories = props.productCategories;
    return <div class="filter-links filterable-nav">
                {productCategories.map((product) => {
          return <button class="fadeInRight button" data-wow-delay=".2s" style={{margin: "5px"}}>{product.name}</button>;
        })}
        </div>
}

export default ProductCategory;