import { memo, useState } from "react";
import PropTypes from 'prop-types';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import "./product-information-image-item.scss";
import Loading from "../../../../../../components/loading/loading";

const ProductInformationImageItem = ({ product, isLoading, isFetching, isError }) => {
    const [index, setIndex] = useState(0);
    console.log(product?.payload?.urls);

    return (
        <div className="product-information-image-item">
            <div className="product-information-image-item__small-image">
                {
                    isLoading || isFetching || isError
                        ? (
                            <>
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="product-information-image-item__small-image-item">
                                        <Loading width="100%" height="100%" />
                                    </div>
                                ))}
                            </>
                        )
                        : product?.payload?.urls?.map((item, i) => (
                            <div key={i} className={
                                `product-information-image-item__small-image-item ${i === index ? "product-information-image-item__small-image-item--active" : ""}`}>
                                <img src={item} onClick={() => setIndex(i)} alt="Small Image" />
                            </div>
                        ))
                }
            </div>
            <div className="product-information-image-item__big-image">
                <Zoom>
                    <img src={product?.payload?.urls[index]} alt="Big Image" />
                </Zoom>
            </div>
        </div>
    );
};

ProductInformationImageItem.propTypes = {
    product: PropTypes.shape({
        payload: PropTypes.shape({
            urls: PropTypes.arrayOf(PropTypes.string),
        }),
    }),
    isLoading: PropTypes.bool,
    isFetching: PropTypes.bool,
    isError: PropTypes.bool,
};

export default memo(ProductInformationImageItem);
