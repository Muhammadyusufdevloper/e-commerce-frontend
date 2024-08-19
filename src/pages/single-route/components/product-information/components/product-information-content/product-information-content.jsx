import { memo, useState } from "react";
import { FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FiMinus, FiPlus } from "react-icons/fi";
import "./product-information-content.scss";
import { IoCheckmark } from "react-icons/io5";

const colors = [
    "#4F4631",
    "#314F4A",
    "#31344F",
];

const sizes = ["Small", "Medium", "Large", "X-Large"];

const ProductInformationContent = () => {
    let price = 120;
    let oldPrice = 150;
    let discount = -50;

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
    return (
        <div className="product-information-content">
            <div className="product-information-content__info-box">
                <h1 className="product-information-content__title">One Life Graphic T-shirt</h1>
                <div className="product-information-content__rating-box">
                    <div className="product-information-content__rating-icon">
                        {getRating(4.5)}
                    </div>
                    <p className="product-information-content__rating-text">4.5/5</p>
                </div>
                <div className="product-information-content__prices-box">
                    <p className="product-information-content__price">${price}</p>
                    {oldPrice !== 0 && <p className="product-information-content__old-price">${oldPrice}</p>}
                    {discount !== 0 && <p className="product-information-content__discount">{discount}%</p>}
                </div>
                <p className="product-information-content__text">
                    This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
                </p>
            </div>
            <div className="product-information-content__colors-box">
                <p className="product-information-content__colors-text">Select Colors</p>
                <div className="product-information-content__colors-cards">
                    {colors.map((color, index) => (
                        <button
                            key={index}
                            className={`product-information-content__color-card ${selectedColor === color ? 'selected' : ''}`}
                            style={{ backgroundColor: color }}
                            onClick={() => setSelectedColor(color)}
                        >
                            {selectedColor === color && <IoCheckmark />}
                        </button>
                    ))}
                </div>
            </div>
            <div className="product-information-content__sizes-box">
                <p className="product-information-content__sizes-text">Choose Size</p>
                <div className="product-information-content__sizes-buttons">
                    {sizes.map((size, index) => (
                        <button
                            key={index}
                            className={`product-information-content__size-btn ${selectedSize === size ? 'product-information-content__size-btn--selected' : ''}`}
                            onClick={() => setSelectedSize(size)}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </div>
            <div className="product-information-content__cart-like--box">
                <button className="product-information-content__like-btn"><FaRegHeart /></button>
                <div className="product-information-content__cart-wrapper">
                    <button className="product-information-content__cart-btn">Add To Cart</button>
                    {/* <div className="product-information-content__cart-counter">
                        <button className="product-information-content__counter-btn"><FiMinus /></button>
                        <span>0</span>
                        <button className="product-information-content__counter-btn"><FiPlus /></button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default memo(ProductInformationContent);
