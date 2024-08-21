import PropTypes from 'prop-types';
import ProductItem from "./components/product-item";
import "./product-list.scss";
import LoadingProduct from '../loading/loading-product';

const ProductList = ({ product, isLoading, isFetching, isError }) => {
    return (
        <>
            <div className="product-list">
                {
                    isLoading || isFetching || isError
                        ? <>
                            {[...Array(14)].map((_, i) => (
                                <LoadingProduct key={i} />
                            ))}
                        </>
                        :
                        product?.map((item, index) => (
                            <ProductItem
                                product={item}
                                key={index}
                            />
                        ))
                }
            </div>
        </>
    );
}

ProductList.propTypes = {
    product: PropTypes.arrayOf(
        PropTypes.shape({
            // id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            title: PropTypes.string,
            price: PropTypes.number,
            image: PropTypes.string,
        })
    ),
    isLoading: PropTypes.bool,
    isFetching: PropTypes.bool,
    isError: PropTypes.bool,
};

export default ProductList;
