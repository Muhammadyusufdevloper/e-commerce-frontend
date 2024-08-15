import { memo } from "react"
import { IoClose } from "react-icons/io5"
import { Link } from "react-router-dom"
import "./header.scss"
const Header = () => {
    return (
        <>

            <div className="sap-header">
                <div className="container sap-header__wrapper">
                    <div className="sap-header__content">
                        <p className="sap-header__text">Sign up and get 20% off to your first order.</p>
                        <Link to="/sign-up" className="sap-header__link">Sign Up Now</Link>
                    </div>
                    <button className="sap-header__close-btn"><IoClose /></button>
                </div>
            </div>
            <header className="header">
                <div className="container">
                    <nav className="header__nav">

                    </nav>
                </div>
            </header>
        </>
    )
}

export default memo(Header)