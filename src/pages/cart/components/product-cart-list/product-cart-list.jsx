import { FaMinus, FaPlus } from "react-icons/fa"
import remove from "../../../../assets/images/cart/remove.svg"
import "./product-cart-list.scss"
import { Link } from "react-router-dom"
const ProductCartList = () => {
    return (
        <>
            <div className="product-cart-list">
                <div className="product-cart-list__wrapper">
                    <div className="product-cart-list__item">
                        <Link to={"/single-route/:id"}>
                            <div className="product-cart-list__image-box">
                                <img src="" alt="" />
                            </div>
                        </Link>
                        <div className="product-cart-list__info-box">
                            <div className="product-cart-list__left-box">
                                <div className="product-cart-list__content">
                                    <h3 className="product-cart-list__title">Gradient Graphic T-shirt</h3>
                                    <p className="product-cart-list__size">Size: <span>Large</span> </p>
                                    <p className="product-cart-list__color">Color: <span>White</span> </p>
                                </div>
                                <span className="product-cart-list__price">$120</span>
                            </div>
                            <div className="product-cart-list__right-box">
                                <button className="product-cart-list__remove-btn"><img src={remove} alt="remove icon" /></button>
                                <div className="product-cart-list__count-box">
                                    <button className="product-cart-list__count-btn"><FaMinus /></button>
                                    <span className="product-cart-list__count">1</span>
                                    <button className="product-cart-list__count-btn"><FaPlus /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCartList