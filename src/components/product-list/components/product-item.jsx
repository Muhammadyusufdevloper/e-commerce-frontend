import { useMemo } from "react";
import { FaCartPlus, FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import "./product-item.scss"
import { Link } from "react-router-dom";
const ProductItem = () => {
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
    let oldPrice = 120;
    let discount = 50;
    return (
        <>
            <div className="product-item">
                <Link to={`/single-route/${"product._id"}`}>
                    <div className="product-item__image-box">
                        <button className="product-item__heart-button"><FaRegHeart /></button>
                        <img src="" alt="" />
                    </div>
                </Link>
                <div className="product-item__content">
                    <h3 className="product-item__title">T-SHIRT WITH TAPE DETAILS</h3>
                    <div className="product-item__rating">
                        {getRating(4.5)}
                        <p className="product-item__rating-text">4.5/5</p>
                    </div>
                    <div className="product-item__bottom-box">
                        <div className="product-item__price-box">
                            <p className="product-item__price-text">$120</p>
                            {
                                oldPrice ? <p className="product-item__old-price-text">${oldPrice}</p> : null
                            }
                            {
                                discount ? <p className="product-item__discount-text">{discount}%</p> : null
                            }
                        </div>
                        <button className="product-item__cart-btn"><FaCartPlus /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductItem