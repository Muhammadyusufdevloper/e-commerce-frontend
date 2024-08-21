import { memo } from "react"
import ProductCartList from "./components/product-cart-list/product-cart-list"
import OrderSummary from "./components/order-summary/order-summary"
import "./cart.scss"
import { useSelector } from "react-redux"
import Empty from "../../components/empty/empty"
import emptyImg from "../../assets/images/cart/empty.webp"
const Cart = () => {
    const cart = useSelector(state => state.cart.value)
    return (
        <>
            <section className="cart">
                <div className="container">
                    {
                        cart?.length ?
                            <>
                                <h1 className="cart__title">Your cart</h1>
                                <div className="cart__wrapper">
                                    <ProductCartList cart={cart} />
                                    <OrderSummary cart={cart} />
                                </div>
                            </>
                            : <Empty image={emptyImg} />
                    }
                </div>
            </section>
        </>
    )
}

export default memo(Cart)