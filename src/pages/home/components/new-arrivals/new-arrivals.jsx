import { Link } from "react-router-dom"
import ProductList from "../../../../components/product-list/product-list"
import "./new-arrivals.scss"
import { memo } from "react"
const NewArrivals = () => {
    return (
        <>
            <section className="new-arrivals">
                <div className="container">
                    <div className="new-arrivals__wrapper">
                        <h2 className="new-arrivals__title">NEW ARRIVALS</h2>
                        <ProductList />
                        <div className="new-arrivals__link-wrapper">
                            <Link className="new-arrivals__link">View All</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default memo(NewArrivals)