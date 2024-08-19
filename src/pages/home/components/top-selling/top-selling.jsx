import { Link } from "react-router-dom"
import ProductList from "../../../../components/product-list/product-list"
import "./top-selling.scss"
import { memo } from "react"
const TopSelling = () => {
    return (
        <>
            <section className="top-selling">
                <div className="container">
                    <div className="top-selling__wrapper">
                        <h2 className="top-selling__title">TOP SELLING</h2>
                        <ProductList />
                        <div className="top-selling__link-wrapper">
                            <Link className="top-selling__link">View All</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default memo(TopSelling)