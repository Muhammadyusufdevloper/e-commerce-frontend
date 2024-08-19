import { memo } from "react"
import ProductList from "../../../../components/product-list/product-list"
import "./you-may-also-like.scss"
const YouMayAlsoLike = () => {
    return (
        <>
            <section className="you-may-also-like">
                <div className="container">
                    <div className="you-may-also-like__wrapper">
                        <h2 className="you-may-also-like__title">You might also like</h2>
                        <ProductList />
                    </div>
                </div>
            </section>
        </>
    )
}

export default memo(YouMayAlsoLike)