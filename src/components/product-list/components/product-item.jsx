import { useMemo, useState, useEffect } from "react";
import { FaCartPlus, FaHeart, FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import "./product-item.scss";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleHeart } from "../../../context/slices/wishlistSlice";
import { addToCart } from "../../../context/slices/cartSlice";
import Toast from "../../toast/toast";

const ProductItem = ({ product }) => {
    const [toast, setToast] = useState({ show: false, type: '', message: '', image: '', title: '' });
    const wishlist = useSelector(state => state.wishlist.value);
    const dispatch = useDispatch();
    let discount = product?.oldPrice ? Math.round(((product?.oldPrice - product?.price) / product?.oldPrice) * 100) : null
    const getRating = useMemo(() => (rating) => {
        let res = [];
        for (let i = 0; i < Math.trunc(rating); i++) {
            res.push(<FaStar key={`star-${i}`} />);
        }
        if (rating % 1 > 0.4) {
            res.push(<FaRegStarHalfStroke key="star-half" />);
        }
        for (let i = Math.round(rating); i < 5; i++) {
            res.push(<FaRegStar key={`star-${i}`} />);
        }
        return res;
    }, []);

    const handleToggleHeart = useMemo(() => () => dispatch(toggleHeart(product)), [dispatch, product]);

    const handleAddToCart = useMemo(() => () => {
        dispatch(addToCart(product));
        setToast({
            show: true,
            type: 'success',
            message: `${product.title} savatga qo'shildi!`,
            image: product.urls[0],
            title: 'Mahsulot savatga qo‘shildi',
        });
    }, [dispatch, product]);

    useEffect(() => {
        if (toast.show) {
            const timer = setTimeout(() => setToast({ ...toast, show: false }), 3000);
            return () => clearTimeout(timer);
        }
    }, [toast]);

    return (
        <>
            <div className="product-item">
                <div className="product-item__image-box">
                    <button onClick={handleToggleHeart} className="product-item__heart-button">
                        {wishlist?.some((el) => el._id === product?._id) ? <FaHeart /> : <FaRegHeart />}
                    </button>
                    <Link to={`/single-route/${product._id}`}>
                        <img src={product.urls[0]} alt={product?.title} />
                    </Link>
                </div>
                <div className="product-item__content">
                    <h3 className="product-item__title">{product?.title}</h3>
                    <div className="product-item__rating">
                        {getRating(product?.rating)}
                        <p className="product-item__rating-text">{product?.rating}/5</p>
                    </div>
                    <div className="product-item__bottom-box">
                        <div className="product-item__price-box">
                            <p className="product-item__price-text">${product?.price}</p>
                            {product?.oldPrice ? <p className="product-item__old-price-text">${product?.oldPrice}</p> : null}
                            {discount ? <p className="product-item__discount-text">{-discount}%</p> : null}
                        </div>
                        <button onClick={handleAddToCart} className="product-item__cart-btn"><FaCartPlus /></button>
                    </div>
                </div>
            </div>
            {toast.show && <Toast {...toast} />}
        </>
    )
}

ProductItem.propTypes = {
    product: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        oldPrice: PropTypes.number,
        urls: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
};

export default ProductItem;
