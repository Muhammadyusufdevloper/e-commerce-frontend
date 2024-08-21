import PropTypes from 'prop-types';
import { memo } from "react";
import ProductInformationImageItem from "./components/product-information-image-item/product-information-image-item";
import ProductInformationContent from "./components/product-information-content/product-information-content";
import "./product-information.scss";

const ProductInformation = ({ product, isLoading, isFetching, isError }) => {
    return (
        <>
            <div className="product-information">
                <div className="container">
                    <div className="product-information__wrapper">
                        <ProductInformationImageItem
                            product={product}
                            isLoading={isLoading}
                            isFetching={isFetching}
                            isError={isError}
                        />
                        <ProductInformationContent
                            product={product}
                            isLoading={isLoading}
                            isFetching={isFetching}
                            isError={isError}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

ProductInformation.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        title: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.string,
    }),
    isLoading: PropTypes.bool,
    isFetching: PropTypes.bool,
    isError: PropTypes.bool,
};

ProductInformation.defaultProps = {
    product: null,
    isLoading: false,
    isFetching: false,
    isError: false,
};

export default memo(ProductInformation);
