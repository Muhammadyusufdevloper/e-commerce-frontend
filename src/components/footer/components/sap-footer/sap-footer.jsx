import { MdOutlineMail } from "react-icons/md"
import './sap-footer.scss'
import { memo } from "react"
const SapFooter = () => {
    return (
        <>
            <div className="sap-footer">
                <div className="container">
                    <div className="sap-footer__wrapper">
                        <h2 className="sap-footer__title">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
                        <form className="sap-footer__form">
                            <div className="sap-footer__input-wrapper">
                                <label className="sap-footer__label" htmlFor="email"><MdOutlineMail /></label>
                                <input id="email" className="sap-footer__input" type="email" placeholder="Enter your email address" />
                            </div>
                            <button type="button" className="sap-footer__btn">Subscribe to Newsletter</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(SapFooter)