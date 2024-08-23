import { AiFillProduct } from "react-icons/ai"
import { BiSolidCategory } from "react-icons/bi"
import { FaFolderPlus } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import "./side-bar.scss"
import { useSelector } from "react-redux"
const SideBar = () => {
    let adminMenu = useSelector(state => state.adminMenu.value)
    return (
        <>
            <div className={`side-bar ${adminMenu ? "" : "side-bar--active"}`}>
                <div className="side-bar__wrapper">
                    <ul className="side-bar__list">
                        <li className="side-bar__item">
                            <NavLink to={"/admin/product-manage"} className={`side-bar__link ${adminMenu ? "" : "side-bar__link--active"}`}>
                                <div className="side-bar__icon">
                                    <AiFillProduct />
                                </div>
                                <span className="side-bar__text">Products</span>
                            </NavLink>
                        </li>
                        <li className="side-bar__item">
                            <NavLink to={"/admin/product-create"} className={`side-bar__link ${adminMenu ? "" : "side-bar__link--active"}`}>
                                <div className="side-bar__icon">
                                    <FaFolderPlus />
                                </div>
                                <span className="side-bar__text">Products-create</span>
                            </NavLink>
                        </li>
                        <li className="side-bar__item">
                            <NavLink to={"/admin/category-manage"} className={`side-bar__link ${adminMenu ? "" : "side-bar__link--active"}`}>
                                <div className="side-bar__icon">
                                    <BiSolidCategory />
                                </div>
                                <span className="side-bar__text">Category</span>
                            </NavLink>
                        </li>
                        <li className="side-bar__item">
                            <NavLink to={"/admin/category-create"} className={`side-bar__link ${adminMenu ? "" : "side-bar__link--active"}`}>
                                <div className="side-bar__icon">
                                    <FaFolderPlus />
                                </div>
                                <span className="side-bar__text">Category-create</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div >
        </>
    )
}

export default SideBar