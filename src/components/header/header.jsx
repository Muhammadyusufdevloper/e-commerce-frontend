import { memo, useState } from "react"
import "./header.scss"
import SapHeader from "./components/sap-header/sap-header"
import { Link } from "react-router-dom"
import logo from "../../assets/images/header/logo.svg"
import HeaderSearch from "./components/header-search/header-search"
import { CgShoppingCart } from "react-icons/cg"
import { FaRegHeart, FaUserCircle } from "react-icons/fa"
import { GrSearch } from "react-icons/gr"
import { HiMenu } from "react-icons/hi"
import HeaderMenu from "./components/header-menu/header-menu"
import { useSelector } from "react-redux"
import { MdLogin } from "react-icons/md"
const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const [headerShrink, setHeaderShrink] = useState(false)
    document.addEventListener("scroll", () => {
        setHeaderShrink(window.scrollY)
    })
    let wishlist = useSelector(state => state.wishlist.value)
    let cart = useSelector(state => state.cart.value)
    let login = useSelector(state => state.auth.token)
    return (
        <>
            <SapHeader />
            <header className={`header ${headerShrink > 35 ? "header--shrink" : ""}`}>
                <div className="container">
                    <nav className="header__navbar">
                        <div className="header__logo-wrapper">
                            <button onClick={() => setShowMenu(true)} className="header__menu-btn"><HiMenu /></button>
                            <Link to="/" className="header__logo-link">
                                <img src={logo} alt="Site logo" />
                            </Link>
                        </div>
                        <ul className="header__list">
                            <li className="header__item">
                                <Link to="/Shop" className="header__link">
                                    Shop
                                </Link>
                            </li>
                            <li className="header__item">
                                <Link to="/new-arrivals" className="header__link">
                                    New Arrivals
                                </Link>
                            </li>
                            <li className="header__item">
                                <Link to="/brands" className="header__link">
                                    Brands
                                </Link>
                            </li>
                        </ul>
                        <HeaderSearch showSearch={showSearch} setShowSearch={setShowSearch} />
                        <div className="header__right-wrapper">
                            <button onClick={() => setShowSearch(true)} className="header__search-btn"><GrSearch /></button>
                            <Link to="/cart" className="header__icon-link">
                                <CgShoppingCart />
                                {
                                    cart?.length ? <span>{cart?.length}</span> : null
                                }
                            </Link>
                            <Link to="/wishlist" className="header__icon-link">
                                <FaRegHeart />
                                {
                                    wishlist?.length > 0 ? <span>{wishlist?.length}</span> : null
                                }
                            </Link>
                            <Link to={`${login ? "/admin/product-manage" : "/login"}`} className="header__icon-link">
                                {
                                    login ? <FaUserCircle /> :
                                        <MdLogin />
                                }
                            </Link>
                        </div>
                    </nav>
                </div>
            </header>
            <HeaderMenu showMenu={showMenu} setShowMenu={setShowMenu} />
        </>
    )
}

export default memo(Header)