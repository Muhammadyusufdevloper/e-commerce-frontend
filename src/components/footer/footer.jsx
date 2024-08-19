import { Link } from "react-router-dom"
import logo from "../../assets/images/header/logo.svg"
import { IoLogoTwitter } from "react-icons/io"
import { ImFacebook } from "react-icons/im"
import { SiInstagram } from "react-icons/si"
import { VscGithubInverted } from "react-icons/vsc"
import visa from "../../assets/images/footer/visa.svg"
import masterCard from "../../assets/images/footer/master-card.svg"
import payPal from "../../assets/images/footer/pay-pal.svg"
import aPay from "../../assets/images/footer/pay.svg"
import gPay from "../../assets/images/footer/g-pay.svg"
import './footer.scss'
import SapFooter from "./components/sap-footer/sap-footer"
import { memo } from "react"
const Footer = () => {
    return (
        <>
            <SapFooter />
            <footer className="footer">
                <div className="container">
                    <div className="footer__wrapper">
                        <div className="footer__top-box">
                            <div className="footer__left-box">
                                <Link to="/" className="footer__logo-link">
                                    <img src={logo} alt="Site logo" />
                                </Link>
                                <p className="footer__top-text">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                                <div className="footer__top-social-networks">
                                    <a className="footer__top-social-network" target="_blank" href="https://www.twitter.com"><IoLogoTwitter /></a>
                                    <a className="footer__top-social-network" target="_blank" href="https://www.facebook.com"><ImFacebook /></a>
                                    <a className="footer__top-social-network" target="_blank" href="https://www.instagram.com"><SiInstagram /></a>
                                    <a className="footer__top-social-network" target="_blank" href="https://www.github.com"><VscGithubInverted /></a>
                                </div>
                            </div>
                            <div className="footer__right-box">
                                <ul className="footer__list">
                                    <li className="footer__item">
                                        <h3 className="footer__title">Company</h3>
                                    </li>
                                    <li className="footer__item">
                                        <Link to="/about" className="footer__link">About</Link>
                                    </li>
                                    <li className="footer__item">
                                        <Link to="/features" className="footer__link">Features</Link>
                                    </li>
                                    <li className="footer__item">
                                        <Link to="/works" className="footer__link">Works</Link>
                                    </li>
                                    <li className="footer__item">
                                        <Link to="/career" className="footer__link">Career</Link>
                                    </li>
                                </ul>
                                <ul className="footer__list">
                                    <li className="footer__item">
                                        <h3 className="footer__title">Help</h3>
                                    </li>
                                    <li className="footer__item">
                                        <Link to="/customer-support" className="footer__link">Customer Support</Link>
                                    </li>
                                    <li className="footer__item">
                                        <Link to="/delivery" className="footer__link">Delivery Details</Link>
                                    </li>
                                    <li className="footer__item">
                                        <Link to="/terms" className="footer__link">Terms & Conditions</Link>
                                    </li>
                                    <li className="footer__item">
                                        <Link to="/privacy" className="footer__link">Privacy Policy</Link>
                                    </li>
                                </ul>
                                <ul className="footer__list">
                                    <li className="footer__item">
                                        <h3 className="footer__title">FAQ</h3>
                                    </li>
                                    <li className="footer__item">
                                        <Link to="/account" className="footer__link">Account</Link>
                                    </li>
                                    <li className="footer__item">
                                        <Link to="/manage-deliveries" className="footer__link">Manage Deliveries</Link>
                                    </li>
                                    <li className="footer__item">
                                        <Link to="/orders" className="footer__link">Orders</Link>
                                    </li>
                                    <li className="footer__item">
                                        <Link to="/payments" className="footer__link">Payments</Link>
                                    </li>
                                </ul>
                                <ul className="footer__list">
                                    <li className="footer__item">
                                        <h3 className="footer__title">Resources</h3>
                                    </li>
                                    <li className="footer__item">
                                        <Link to="/about" className="footer__link">Free eBooks</Link>
                                    </li>
                                    <li className="footer__item">
                                        <Link to="/features" className="footer__link">Development Tutorial</Link>
                                    </li>
                                    <li className="footer__item">
                                        <Link to="/works" className="footer__link">How to - Blog</Link>
                                    </li>
                                    <li className="footer__item">
                                        <Link to="/career" className="footer__link">Youtube Playlist</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer__bottom-box">
                            <p className="footer__bottom-text">Shop.co © 2000-2023, All Rights Reserved</p>
                            <div className="footer__bottom-payments">
                                <button className="footer__bottom-payment-btn">
                                    <img src={visa} alt="visa logo" />
                                </button>
                                <button className="footer__bottom-payment-btn">
                                    <img src={masterCard} alt="Master Card logo" />
                                </button>
                                <button className="footer__bottom-payment-btn">
                                    <img src={payPal} alt="Pay pal logo" />
                                </button>
                                <button className="footer__bottom-payment-btn">
                                    <img src={aPay} alt="A pay logo" />
                                </button>
                                <button className="footer__bottom-payment-btn">
                                    <img src={gPay} alt="G pay logo" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer >
        </>
    )
}

export default memo(Footer)