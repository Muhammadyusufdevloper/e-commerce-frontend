import { memo, useEffect, useState } from "react";
import "./checkout.scss";
import { MdClose } from "react-icons/md";
import { BiCreditCardFront } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { addToCart, decrementCart, removeFromCart } from "../../../../context/slices/cartSlice";
import { useGetValue } from "../../../../hooks/useGetValue";
import Order from "../../components/order/order";

const initialState = {
    firstName: "Iskandar",
    lastName: "Abdumaliov",
    phoneNumber: "+998999999999",
    email: "Np8Ko@example.com",
    streetAddress: "Baxt baraka",
    country: "Uzbekiston",
    city: "Zomin",
    state: "wekfwemfmwe",
    zipCode: "lfmwelfmwemfw/.fw/.",
    useDifferentBillingAddress: false,
    paymentMethod: "credit",
    cardNumber: "9860 9845 2341 4567",
    expirationDate: "13/24/2022",
    cvc: "243"
};
const BOT_TOKEN = "7296011111:AAH9fsPtqvBOqekhvlcG9MVl4JBifgNtEJk";
const CHAT_ID = "-1002221404265";


const Checkout = () => {
    const { formData, handleChange, setFormData } = useGetValue(initialState);
    const [modalOrder, setModalOrder] = useState(false)
    useEffect(() => {
        scroll(0, 0)
    }, [])
    const [coupon, setCoupon] = useState("laylo");
    const [voucher, setVoucher] = useState(0);
    let dispatch = useDispatch();
    const calculateAllPrice = () => {
        let total = cartData?.reduce(
            (sum, item) => sum + item?.quantity * item?.price,
            0
        );
        return total.toFixed(2);
    };

    const handleCoupon = (e) => {
        e.preventDefault();
        if (coupon === "laylo") {
            setVoucher((+calculateAllPrice() + +calculateAllPrice() * 0.5) * 0.5);
        } else {
            alert("Invalid coupon");
        }
        setCoupon("");
    };
    const calculateDiscountedPrice = () => {
        const total = calculateAllPrice();
        return (total - voucher).toFixed(2);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        let cartText = cartData.map(item =>
            `Mahsulot: ${item.title}\nMiqdori: ${item.quantity}\nNarxi: ${item.price}`).join("\n\n");

        const text = `
Ism: ${formData.firstName} ${formData.lastName}\n
Email: ${formData.email}\n
Telefon: ${formData.phoneNumber}\n
Adres: ${formData.streetAddress}, ${formData.city}, ${formData.state}, ${formData.country}, ${formData.zipCode}\n
To'lov usuli: ${formData.paymentMethod}\n
Mahsulotlar:\n${cartText}\n\n
Jami: ${calculateDiscountedPrice()}
        `;
        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(text)}`;
        let api = new XMLHttpRequest();
        api.open("GET", url, true);
        api.onload = () => {
            if (api.status === 200) {
                setFormData(initialState);
                setModalOrder(true)
            } else {
                alert("Ma'lumot saqlanmadi");
            }
        };

        api.onerror = () => {
            alert("Ma'lumot saqlanmadi");
        };

        api.send();

    };


    const cartData = useSelector((state) => state.cart.value);
    console.log(cartData);

    if (cartData.length === 0) return <Navigate to={"/cart"} replace />
    return (
        <>
            <h1 className="check-out__heading">Check Out</h1>
            <section className="check-out">
                <div className="container check-out__wrapper">
                    <form onSubmit={handleSubmit}>

                        <div className="check-out__left-box">
                            <div className="check-out__contact-information">
                                <h2 className="check-out__title">Contact Information</h2>
                                <div className="check-out__input-cards">
                                    <div className="check-out__input-card">
                                        <label className="check-out__label" htmlFor="firstName">FIRST NAME</label>
                                        <input
                                            required
                                            type="text"
                                            className="check-out__input"
                                            placeholder="First name"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="check-out__input-card">
                                        <label className="check-out__label" htmlFor="lastName">LAST NAME</label>
                                        <input
                                            required
                                            type="text"
                                            className="check-out__input"
                                            placeholder="Last name"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="check-out__input-card">
                                    <label className="check-out__label" htmlFor="phoneNumber">Phone Number</label>
                                    <input
                                        required
                                        type="text"
                                        className="check-out__input"
                                        placeholder="Phone Number"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="check-out__input-card">
                                    <label className="check-out__label" htmlFor="email">Email address</label>
                                    <input
                                        required
                                        type="text"
                                        className="check-out__input"
                                        placeholder="Your Email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="check-out__shipping-address">
                                <h2 className="check-out__title">Shipping Address</h2>
                                <div className="check-out__input-card">
                                    <label className="check-out__label" htmlFor="streetAddress">Street Address *</label>
                                    <input
                                        required
                                        type="text"
                                        id="streetAddress"
                                        className="check-out__input"
                                        placeholder="Street Address"
                                        name="streetAddress"
                                        value={formData.streetAddress}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="check-out__input-card">
                                    <label className="check-out__label" htmlFor="country">Country *</label>
                                    <select
                                        className="check-out__input"
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                    >
                                        <option disabled value="">Country</option>
                                        <option value="andijon,uzbekiston">Andijon,Uzbekiston</option>
                                        <option value="namangan,uzbekiston">Namangan,Uzbekiston</option>
                                        <option value="fargona,uzbekiston">Fargona,Uzbekiston</option>
                                        <option value="toshkent,uzbekiston">Toshkent,Uzbekiston</option>
                                    </select>
                                </div>
                                <div className="check-out__input-card">
                                    <label className="check-out__label" htmlFor="city">Town / City *</label>
                                    <input
                                        required
                                        type="text"
                                        id="city"
                                        className="check-out__input"
                                        placeholder="Town / City"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="check-out__input-cards">
                                    <div className="check-out__input-card">
                                        <label className="check-out__label" htmlFor="state">State</label>
                                        <input
                                            required
                                            id="state"
                                            type="text"
                                            className="check-out__input"
                                            placeholder="State"
                                            name="state"
                                            value={formData.state}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="check-out__input-card">
                                        <label className="check-out__label" htmlFor="zipCode">Zip Code</label>
                                        <input
                                            required
                                            id="zipCode"
                                            type="text"
                                            className="check-out__input"
                                            placeholder="Zip Code"
                                            name="zipCode"
                                            value={formData.zipCode}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="check-out__checkbox-card">
                                    <input

                                        type="checkbox"
                                        id="useDifferentBillingAddress"
                                        name="useDifferentBillingAddress"
                                        checked={formData.useDifferentBillingAddress}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="useDifferentBillingAddress" className="check-out__label">Use a different billing address (optional)</label>
                                </div>
                            </div>
                            <div className="check-out__payment-method">
                                <h2 className="check-out__title">Payment method</h2>
                                <div className="check-out__radio-box">
                                    <label className="check-out__radio-label" htmlFor="credit">
                                        <input
                                            required
                                            type="radio"
                                            name="paymentMethod"
                                            id="credit"
                                            value="credit"
                                            checked={formData.paymentMethod === "credit"}
                                            onChange={handleChange}
                                        />
                                        <p>Pay by Card Credit</p>
                                        <BiCreditCardFront />
                                    </label>
                                    <label className="check-out__radio-label" htmlFor="paypal">
                                        <input
                                            required
                                            type="radio"
                                            name="paymentMethod"
                                            id="paypal"
                                            value="paypal"
                                            checked={formData.paymentMethod === "paypal"}
                                            onChange={handleChange}
                                        />
                                        <p>Paypal</p>
                                    </label>
                                </div>
                                <div className="check-out__input-card">
                                    <label className="check-out__label" htmlFor="cardNumber">Card Number</label>
                                    <input
                                        required
                                        type="text"
                                        id="cardNumber"
                                        className="check-out__input"
                                        placeholder="1234 1234 1234"
                                        name="cardNumber"
                                        value={formData.cardNumber}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="check-out__input-cards">
                                    <div className="check-out__input-card">
                                        <label className="check-out__label" htmlFor="expirationDate">Expiration dates</label>
                                        <input
                                            required
                                            id="expirationDate"
                                            type="date"
                                            className="check-out__input"
                                            name="expirationDate"
                                            value={formData.expirationDate}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="check-out__input-card">
                                        <label className="check-out__label" htmlFor="cvc">CVC</label>
                                        <input
                                            required
                                            id="cvc"
                                            type="text"
                                            className="check-out__input"
                                            placeholder="CVC code"
                                            name="cvc"
                                            value={formData.cvc}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button className="check-out__payment-btn">Place Order</button>
                        </div>
                    </form>
                    <div className="check-out__right-box">
                        <div className="check-out__right-box-top-border">
                            <h2 className="check-out__right-box-title">Order summary</h2>
                            {
                                cartData?.map((item) => (
                                    <div key={item._id} className="check-out__right-box-card">
                                        <div className="check-out__right-box-card-content">
                                            <img className="check-out__right-box-card-img" src={item?.urls[0]} alt={item?.title} />
                                            <div className="check-out__right-box-card-part">
                                                <h3 className="check-out__right-box-card-title" title={item?.title}>{item?.title}</h3>
                                                <p className="check-out__right-box-card-text">Color: Black</p>
                                                <div className="check-out__right-box-card-counter">
                                                    <button disabled={item?.quantity <= 0} onClick={() => dispatch(decrementCart(item))} className="check-out__right-box-card-minus-btn">-</button>
                                                    <p>{item?.quantity}</p>
                                                    <button onClick={() => dispatch(addToCart(item))} className="check-out__right-box-card-plus-btn">+</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="check-out__right-box-card-price">
                                            <p className="check-out__right-box-price-text">${item?.price}</p>
                                            <button onClick={() => dispatch(removeFromCart(item?._id))} className="check-out__right-box-close-btn">
                                                <MdClose />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            }
                            <form onSubmit={handleCoupon} className="check-out__right-box-form">
                                <input
                                    value={coupon}
                                    onChange={(e) => setCoupon(e.target.value)}
                                    type="text" className="check-out__right-box-input" placeholder="Input" />
                                <button className="check-out__right-box-apply-btn">Apply</button>
                            </form>
                            <ul className="check-out__right-box-list">
                                <li className="check-out__right-box-item">
                                    <h3 className="check-out__right-box-item-title">JenkateMW</h3>
                                    <p className="check-out__right-box-item-text check-out__right-box-item-text--remove">18.00{"[Remove]"}</p>
                                </li>
                                <li className="check-out__right-box-item">
                                    <h3 className="check-out__right-box-item-title">Shipping</h3>
                                    <p className="check-out__right-box-item-text">$18.00</p>
                                </li>
                                <li className="check-out__right-box-item">
                                    <h3 className="check-out__right-box-item-title">Subtotal</h3>
                                    <p className="check-out__right-box-item-text">$18.00</p>
                                </li>
                            </ul>
                            <div className="check-out__right-box-total-count">
                                <p className="check-out__right-box-total-count-text">Total</p>
                                <p className="check-out__right-box-total-count-text">${calculateDiscountedPrice()}</p>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleSubmit} className="check-out__payment-btn check-out__payment-btn-responsive ">Place Order</button>
                    {

                    }
                </div>
            </section>
            {
                modalOrder && <Order setModalOrder={setModalOrder} modalOrder={modalOrder} />
            }
        </>
    );
};

export default memo(Checkout);