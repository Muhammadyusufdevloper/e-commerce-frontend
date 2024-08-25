import { memo, useState } from "react"
import { IoClose } from "react-icons/io5"
import { Link } from "react-router-dom"
import "./sap-header.scss"
const SapHeader = () => {
    const [showAdvertising, setShowAdvertising] = useState(true)
    return (
        <>
            <div className={`sap-header ${showAdvertising ? "" : "sap-header__show"}`}>
                <div className="container sap-header__wrapper">
                    <div className="sap-header__content">
                        <p className="sap-header__text">Sign up and get 20% off to your first order.</p>
                        <Link to="/login" className="sap-header__link">Sign Up Now</Link>
                    </div>
                    <button onClick={() => setShowAdvertising(false)} className="sap-header__close-btn"><IoClose /></button>
                </div>
            </div>
        </>
    )
}

export default memo(SapHeader)