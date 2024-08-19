import { HiArrowSmallRight } from "react-icons/hi2"
import { IoPricetagOutline } from "react-icons/io5"
import "./order-summary.scss"
const OrderSummary = () => {
    return (
        <>
            <div className="order-summary">
                <div className="order-summary__wrapper">
                    <h2 className="order-summary__title">Order Summary</h2>
                    <ul className="order-summary__list">
                        <li className="order-summary__item">
                            <p className="order-summary__text">Subtotal</p>
                            <span className="order-summary__price">$230</span>
                        </li>
                        <li className="order-summary__item">
                            <p className="order-summary__text">Discount (-20%)</p>
                            <span className="order-summary__price order-summary__price--color">$230</span>
                        </li>
                        <li className="order-summary__item">
                            <p className="order-summary__text">Delivery Fee</p>
                            <span className="order-summary__price">$230</span>
                        </li>
                    </ul>
                    <div className="order-summary__item order-summary__total">
                        <p className="order-summary__total-text">Total</p>
                        <span className="order-summary__total-price">$467</span>
                    </div>
                    <form className="order-summary__form">
                        <div className="order-summary__input-wrapper">
                            <label className="order-summary__label" htmlFor="promo-code"><IoPricetagOutline /></label>
                            <input className="order-summary__input" type="text" id="promo-code" placeholder="Add promo code" />
                        </div>
                        <button className="order-summary__form-btn">Apply</button>
                    </form>
                    <button className="order-summary__btn">
                        Go to Checkout <HiArrowSmallRight />
                    </button>
                </div>
            </div>
        </>
    )
}

export default OrderSummary