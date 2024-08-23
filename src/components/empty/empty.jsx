import PropTypes from "prop-types";
import "./empty.scss";
import { memo } from "react";
import ProductList from "../product-list/product-list";
import { useGetProductsQuery } from "../../context/api/productApi";
import { Link } from "react-router-dom";
const Empty = ({ image, subtitle, text }) => {
    const { data: product, isLoading, isFetching, isError } = useGetProductsQuery()
    return (
        <>
            <div className="empty">
                <div className="empty__wrapper">
                    <div className="empty__content">
                        <div className="empty__image">
                            <img src={image} alt="empty img" />
                        </div>
                        <h3 className="empty__subtitle">{subtitle}</h3>
                        <p className="empty__text">{text}</p>
                        <Link className="empty__link" to="/">Home</Link>
                    </div>
                    <h1 className="empty__title">Popular products</h1>
                    <ProductList product={product?.payload} isFetching={isFetching} isLoading={isLoading} isError={isError} />
                </div>
            </div>
        </>
    );
}

Empty.propTypes = {
    image: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default memo(Empty);
