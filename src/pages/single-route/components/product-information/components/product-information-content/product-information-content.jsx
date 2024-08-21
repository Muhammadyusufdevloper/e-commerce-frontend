import PropTypes from "prop-types";
import { memo, useMemo, useState } from "react";
import { FaHeart, FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FiMinus, FiPlus } from "react-icons/fi";
import "./product-information-content.scss";
import { IoCheckmark } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toggleHeart } from "../../../../../../context/slices/wishlistSlice";
import { addToCart, decrementCart } from "../../../../../../context/slices/cartSlice";
import Loading from "../../../../../../components/loading/loading";

const colors = ["#4F4631", "#314F4A", "#31344F"];
const sizes = ["Small", "Medium", "Large", "X-Large"];

const ProductInformationContent = ({ product, isLoading, isFetching, isError }) => {
    const discount = product?.payload?.oldPrice
        ? Math.round(
            ((product?.payload?.oldPrice - product?.payload?.price) / product?.payload?.oldPrice) *
            100
        )
        : null;

    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const [selectedSize, setSelectedSize] = useState(sizes[0]);

    const getRating = (rating) => {
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
    };

    const dispatch = useDispatch();
    const handleToggleHeart = useMemo(() => () => dispatch(toggleHeart(product?.payload)), [dispatch, product?.payload]);
    const handleAddToCart = useMemo(() => () => dispatch(addToCart(product?.payload)), [dispatch, product?.payload]);
    const handleDecrementCart = useMemo(() => () => dispatch(decrementCart(product?.payload)), [dispatch, product?.payload]);

    const wishlist = useSelector((state) => state.wishlist.value);
    const cart = useSelector((state) => state.cart.value);

    return (
        <div className="product-information-content">
            <div className="product-information-content__info-box">
                <h1 className="product-information-content__title">
                    {isError || isLoading || isFetching ? (
                        <Loading width={"100%"} height={"48px"} />
                    ) : (
                        product?.payload?.title
                    )}
                </h1>
                <div className="product-information-content__rating-box">
                    <div className="product-information-content__rating-icon">
                        {isError || isLoading || isFetching ? (
                            <Loading width={"153px"} height={"25px"} />
                        ) : (
                            getRating(product?.payload?.rating)
                        )}
                    </div>
                    <p className="product-information-content__rating-text">
                        {isError || isLoading || isFetching ? (
                            <Loading width={"43px"} height={"25px"} />
                        ) : (
                            product?.payload?.rating + "/5"
                        )}
                    </p>
                </div>
                <div className="product-information-content__prices-box">
                    <p className="product-information-content__price">
                        {isError || isLoading || isFetching ? (
                            <Loading width={"67px"} height={"43px"} />
                        ) : (
                            "$" + product?.payload?.price
                        )}
                    </p>
                    {product?.payload?.oldPrice !== 0 && (
                        <p className="product-information-content__old-price">
                            {isError || isLoading || isFetching ? (
                                <Loading width={"67px"} height={"43px"} />
                            ) : (
                                "$" + product?.payload?.oldPrice
                            )}
                        </p>
                    )}
                    {discount && (
                        <p className="product-information-content__discount">
                            {isError || isLoading || isFetching ? (
                                <Loading width={"67px"} height={"43px"} />
                            ) : (
                                -discount + "%"
                            )}
                        </p>
                    )}
                </div>
                <p className="product-information-content__text">
                    {isError || isLoading || isFetching ? (
                        <Loading width={"100%"} height={"66px"} />
                    ) : (
                        product?.payload?.desc
                    )}
                </p>
            </div>
            <div className="product-information-content__colors-box">
                <p className="product-information-content__colors-text">Select Colors</p>
                <div className="product-information-content__colors-cards">
                    {isError || isLoading || isFetching ? (
                        Array(3).fill(null).map((_, i) => (
                            <Loading key={i} width={"37px"} height={"37px"} borderRadius={"50%"} />
                        ))
                    ) : (
                        colors.map((color, index) => (
                            <button
                                key={index}
                                className={`product-information-content__color-card ${selectedColor === color ? "selected" : ""}`}
                                style={{ backgroundColor: color }}
                                onClick={() => setSelectedColor(color)}
                            >
                                {selectedColor === color && <IoCheckmark />}
                            </button>
                        ))
                    )}
                </div>
            </div>
            <div className="product-information-content__sizes-box">
                <p className="product-information-content__sizes-text">Choose Size</p>
                <div className="product-information-content__sizes-buttons">

                    {isError || isLoading || isFetching ? (
                        Array(4).fill(null).map((_, i) => (
                            <Loading key={i} width={"88px"} height={"46px"} borderRadius={"20px"} />
                        ))
                    ) : (
                        sizes.map((size, index) => (
                            <button
                                key={index}
                                className={`product-information-content__size-btn ${selectedSize === size ? "product-information-content__size-btn--selected" : ""}`}
                                onClick={() => setSelectedSize(size)}
                            >
                                {size}
                            </button>
                        ))
                    )
                    }
                </div>
            </div>
            <div className="product-information-content__cart-like--box">
                <button onClick={handleToggleHeart} className="product-information-content__like-btn">
                    {wishlist?.some((el) => el._id === product?.payload?._id) ? <FaHeart /> : <FaRegHeart />}
                </button>
                <div className="product-information-content__cart-wrapper">
                    {cart?.some((el) => el._id === product?.payload?._id) ? (
                        <div className="product-information-content__cart-counter">
                            <button
                                disabled={cart?.find((el) => el._id === product?.payload?._id)?.quantity <= 0}
                                onClick={handleDecrementCart}
                                className="product-information-content__counter-btn"
                            >
                                <FiMinus />
                            </button>
                            <span>{cart?.find((el) => el._id === product?.payload?._id)?.quantity}</span>
                            <button
                                disabled={cart?.find((el) => el._id === product?.payload?._id)?.quantity >= product?.payload?.stock}
                                onClick={handleAddToCart}
                                className="product-information-content__counter-btn"
                            >
                                <FiPlus />
                            </button>
                        </div>
                    ) : (
                        <button onClick={handleAddToCart} className="product-information-content__cart-btn">
                            Add To Cart
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

ProductInformationContent.propTypes = {
    product: PropTypes.shape({
        payload: PropTypes.shape({
            title: PropTypes.string,
            rating: PropTypes.number,
            price: PropTypes.number,
            oldPrice: PropTypes.number,
            desc: PropTypes.string,
            _id: PropTypes.string,
            stock: PropTypes.number,
        }),
    }),
    isLoading: PropTypes.bool,
    isFetching: PropTypes.bool,
    isError: PropTypes.bool,
};

export default memo(ProductInformationContent);
