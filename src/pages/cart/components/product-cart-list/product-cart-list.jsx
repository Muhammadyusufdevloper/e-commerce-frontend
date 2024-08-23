import PropTypes from 'prop-types';
import { FaMinus, FaPlus } from "react-icons/fa";
import remove from "../../../../assets/images/cart/remove.svg";
import "./product-cart-list.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, decrementCart, removeFromCart } from "../../../../context/slices/cartSlice";

const ProductCartList = ({ cart }) => {
    let dispatch = useDispatch();

    return (
        <>
            <div className="product-cart-list">
                <div className="product-cart-list__wrapper">
                    {
                        cart?.map((cartItem, index) => (
                            <div key={cartItem?._id || index} className="product-cart-list__item">
                                <Link to={`/single-route/${cartItem?._id}`}>
                                    <div className="product-cart-list__image-box">
                                        <img
                                            src={Array.isArray(cartItem?.urls) && cartItem.urls.length > 0 ? cartItem.urls[0] : ""}
                                            alt={cartItem?.title || "Product Image"}
                                        />
                                    </div>
                                </Link>
                                <div className="product-cart-list__info-box">
                                    <div className="product-cart-list__left-box">
                                        <div className="product-cart-list__content">
                                            <h3 className="product-cart-list__title">{cartItem?.title}</h3>
                                            <p className="product-cart-list__size">Size: <span>Large</span> </p>
                                            <p className="product-cart-list__color">Color: <span>White</span> </p>
                                        </div>
                                        <span className="product-cart-list__price">${cartItem?.price}</span>
                                    </div>
                                    <div className="product-cart-list__right-box">
                                        <button onClick={() => dispatch(removeFromCart(cartItem?._id))} className="product-cart-list__remove-btn">
                                            <img src={remove} alt="remove icon" />
                                        </button>
                                        <div className="product-cart-list__count-box">
                                            <button disabled={cartItem?.quantity <= 1} onClick={() => dispatch(decrementCart(cartItem))} className="product-cart-list__count-btn">
                                                <FaMinus />
                                            </button>
                                            <span className="product-cart-list__count">{cartItem?.quantity}</span>
                                            <button disabled={cartItem?.stock === cartItem?.quantity} onClick={() => dispatch(addToCart(cartItem))} className="product-cart-list__count-btn">
                                                <FaPlus />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

ProductCartList.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            urls: PropTypes.arrayOf(PropTypes.string).isRequired,
            price: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired,
            stock: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default ProductCartList;
