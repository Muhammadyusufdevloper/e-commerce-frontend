import { memo, useEffect } from "react"
import ProductCartList from "./components/product-cart-list/product-cart-list"
import OrderSummary from "./components/order-summary/order-summary"
import "./cart.scss"
import { useSelector } from "react-redux"
import Empty from "../../components/empty/empty"
import emptyImg from "../../assets/images/cart/empty.webp"

const Cart = () => {
    const cart = useSelector(state => state.cart.value)
    console.log(cart);
    const validCart = cart?.filter(cartItem => cartItem && cartItem._id);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [cart])
    return (
        <>
            <section className="cart">
                <div className="container">
                    {
                        validCart?.length ?
                            <>
                                <h1 className="cart__title">Your cart</h1>
                                <div className="cart__wrapper">
                                    <ProductCartList cart={validCart} />
                                    <OrderSummary cart={validCart} />
                                </div>
                            </>
                            : <Empty image={emptyImg} subtitle={"There are no products in the cart yet."} text="Start with the collections on the homepage or find the desired product through the search." />
                    }
                </div>
            </section>
        </>
    )
}

export default memo(Cart)
