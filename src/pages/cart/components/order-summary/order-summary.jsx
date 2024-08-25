import { HiArrowSmallRight } from "react-icons/hi2";
import { IoPricetagOutline } from "react-icons/io5";
import "./order-summary.scss";
import { useSelector } from "react-redux";
import { useState } from "react";
import { memo } from "react";
import { Link } from "react-router-dom";

const OrderSummary = () => {
    const cart = useSelector((state) => state.cart.value);
    const [promoCode, setPromoCode] = useState("");
    const [promoApplied, setPromoApplied] = useState(false);

    // Subtotalni hisoblash
    const subtotal = cart.reduce((acc, product) => {
        const price = parseFloat(product.price) || 0;
        const quantity = parseFloat(product.quantity) || 0;
        return acc + price * quantity;
    }, 0);

    // Umumiy chegirmani hisoblash
    const totalDiscount = cart.reduce((acc, product) => {
        if (product.oldPrice) {
            const oldPrice = parseFloat(product.oldPrice) || 0;
            const price = parseFloat(product.price) || 0;
            const quantity = parseFloat(product.quantity) || 0;
            const discount = oldPrice - price;
            return acc + discount * quantity;
        }
        return acc;
    }, 0);

    // Promo chegirmalarini hisoblash
    let promoDiscount = 0;
    if (promoApplied && promoCode.toLowerCase() === "laylo") {
        promoDiscount = subtotal * 0.5;
    }

    // Jami narxni hisoblash
    const deliveryFee = 5; // Yetkazib berish narxi
    const total = subtotal - totalDiscount - promoDiscount + deliveryFee;

    // Promo kod o'zgarishini boshqarish
    const handlePromoCodeChange = (e) => {
        setPromoCode(e.target.value);
    };

    // Promo kodni qo'llash
    const handleApplyPromoCode = (e) => {
        e.preventDefault();
        if (promoCode.toLowerCase() === "laylo") {
            setPromoApplied(true);
        } else {
            alert("Invalid promo code");
            setPromoApplied(false);
        }
    };

    return (
        <div className="order-summary">
            <div className="order-summary__wrapper">
                <h2 className="order-summary__title">Order Summary</h2>
                <ul className="order-summary__list">
                    <li className="order-summary__item">
                        <p className="order-summary__text">Subtotal</p>
                        <span className="order-summary__price">${subtotal.toFixed(2)}</span>
                    </li>
                    {totalDiscount > 0 && (
                        <li className="order-summary__item">
                            <p className="order-summary__text">Discount</p>
                            <span className="order-summary__price order-summary__price--color">
                                -${totalDiscount.toFixed(2)} ({((totalDiscount / subtotal) * 100).toFixed(0)}%)
                            </span>
                        </li>
                    )}
                    {promoApplied && (
                        <li className="order-summary__item">
                            <p className="order-summary__text">Promo Discount</p>
                            <span className="order-summary__price order-summary__price--color">
                                -${promoDiscount.toFixed(2)} (50%)
                            </span>
                        </li>
                    )}
                    <li className="order-summary__item">
                        <p className="order-summary__text">Delivery Fee</p>
                        <span className="order-summary__price">${deliveryFee.toFixed(2)}</span>
                    </li>
                </ul>
                <div className="order-summary__item order-summary__total">
                    <p className="order-summary__total-text">Total</p>
                    <span className="order-summary__total-price">${total.toFixed(2)}</span>
                </div>
                <form className="order-summary__form" onSubmit={handleApplyPromoCode}>
                    <div className="order-summary__input-wrapper">
                        <label className="order-summary__label" htmlFor="promo-code"><IoPricetagOutline /></label>
                        <input
                            className="order-summary__input"
                            type="text"
                            id="promo-code"
                            placeholder="Add promo code"
                            value={promoCode}
                            onChange={handlePromoCodeChange}
                        />
                    </div>
                    <button className="order-summary__form-btn" type="submit">Apply</button>
                </form>
                <Link to="/checkout" className="order-summary__btn">
                    Go to Checkout <HiArrowSmallRight />
                </Link>
            </div>
        </div>
    );
};

export default memo(OrderSummary);
