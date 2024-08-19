import { memo } from "react"
import ProductCartList from "./components/product-cart-list/product-cart-list"
import OrderSummary from "./components/order-summary/order-summary"
import "./cart.scss"
const Cart = () => {
    return (
        <>
            <section className="cart">
                <div className="container">
                    <h1 className="cart__title">Your cart</h1>
                    <div className="cart__wrapper">
                        <ProductCartList />
                        <OrderSummary />
                    </div>
                </div>
            </section>
        </>
    )
}

export default memo(Cart)