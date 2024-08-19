import ProductItem from "./components/product-item"
import "./product-list.scss"
const ProductList = () => {
    return (
        <>
            <div className="product-list">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
        </>
    )
}

export default ProductList