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
                        cart?.map(cart => (
                            <div key={cart?._id} className="product-cart-list__item">
                                <Link to={`/single-route/${cart?._id}`}>
                                    <div className="product-cart-list__image-box">
                                        <img src={cart.urls[0]} alt={cart?.title} />
                                    </div>
                                </Link>
                                <div className="product-cart-list__info-box">
                                    <div className="product-cart-list__left-box">
                                        <div className="product-cart-list__content">
                                            <h3 className="product-cart-list__title">{cart?.title}</h3>
                                            <p className="product-cart-list__size">Size: <span>Large</span> </p>
                                            <p className="product-cart-list__color">Color: <span>White</span> </p>
                                        </div>
                                        <span className="product-cart-list__price">${cart?.price}</span>
                                    </div>
                                    <div className="product-cart-list__right-box">
                                        <button onClick={() => dispatch(removeFromCart(cart?._id))} className="product-cart-list__remove-btn">
                                            <img src={remove} alt="remove icon" />
                                        </button>
                                        <div className="product-cart-list__count-box">
                                            <button disabled={cart?.quantity <= 1} onClick={() => dispatch(decrementCart(cart))} className="product-cart-list__count-btn">
                                                <FaMinus />
                                            </button>
                                            <span className="product-cart-list__count">{cart?.quantity}</span>
                                            <button disabled={cart?.stock === cart?.quantity} onClick={() => dispatch(addToCart(cart))} className="product-cart-list__count-btn">
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
