import { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../../../../assets/images/header/logo.svg";
import { CgClose } from "react-icons/cg";
import "./header-menu.scss";

const HeaderMenu = ({ showMenu, setShowMenu }) => {
    return (
        <div className="header-menu">
            <div
                onClick={() => setShowMenu(false)}
                className={`header-menu__overlay ${showMenu && "header-menu__overlay--hidden"
                    }`}
            ></div>
            <div
                className={`header-menu__wrapper ${showMenu && "header-menu__wrapper--hidden"
                    }`}
            >
                <div className="header-menu__logo-wrapper">
                    <Link to="/" className="header-menu__logo-link">
                        <img src={logo} alt="Site logo" />
                    </Link>
                    <button
                        onClick={() => setShowMenu(false)}
                        className="header-menu__close-btn"
                    >
                        <CgClose />
                    </button>
                </div>
                <ul className="header-menu__list">
                    <li className="header-menu__item">
                        <Link to="/Shop" className="header-menu__link">
                            Shop
                        </Link>
                    </li>
                    <li className="header-menu__item">
                        <Link to="/on-sale" className="header-menu__link">
                            On Sale
                        </Link>
                    </li>
                    <li className="header-menu__item">
                        <Link to="/new-arrivals" className="header-menu__link">
                            New Arrivals
                        </Link>
                    </li>
                    <li className="header-menu__item">
                        <Link to="/brands" className="header-menu__link">
                            Brands
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

HeaderMenu.propTypes = {
    showMenu: PropTypes.bool.isRequired,
    setShowMenu: PropTypes.func.isRequired,
};

export default memo(HeaderMenu);
