import { HiArrowSmallRight } from "react-icons/hi2";
import { IoPricetagOutline } from "react-icons/io5";
import "./order-summary.scss";
import { useSelector } from "react-redux";
import { useState } from "react";
import { memo } from "react";
const OrderSummary = () => {
    const cart = useSelector((state) => state.cart.value);
    const [promoCode, setPromoCode] = useState("");
    const [promoApplied, setPromoApplied] = useState(false);

    const subtotal = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

    const totalDiscount = cart.reduce((acc, product) => {
        if (product.oldPrice) {
            const discount = product.oldPrice - product.price;
            return acc + discount * product.quantity;
        }
        return acc;
    }, 0);

    let promoDiscount = 0;
    if (promoApplied && promoCode === "laylo") {
        promoDiscount = subtotal * 0.5;
    }
    const total = subtotal - totalDiscount - promoDiscount + 5;

    const handlePromoCodeChange = (e) => {
        setPromoCode(e.target.value);
    };

    const handleApplyPromoCode = (e) => {
        e.preventDefault();
        if (promoCode === "laylo") {
            setPromoApplied(true);
        } else {

            alert("Invalid promo code");
            setPromoApplied(false);
        }
    };

    return (
        <>
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
                                    -${totalDiscount.toFixed(0)} ({Math.round((totalDiscount / subtotal) * 100)}%)
                                </span>
                            </li>
                        )}
                        {promoApplied && (
                            <li className="order-summary__item">
                                <p className="order-summary__text">Promo Discount</p>
                                <span className="order-summary__price order-summary__price--color">
                                    -${promoDiscount.toFixed(0)} (50%)
                                </span>
                            </li>
                        )}
                        <li className="order-summary__item">
                            <p className="order-summary__text">Delivery Fee</p>
                            <span className="order-summary__price">$5.00</span>
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
                    <button className="order-summary__btn">
                        Go to Checkout <HiArrowSmallRight />
                    </button>
                </div>
            </div>
        </>
    );
};

export default memo(OrderSummary);
