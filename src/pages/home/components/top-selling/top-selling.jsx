import { Link } from "react-router-dom"
import ProductList from "../../../../components/product-list/product-list"
import "./top-selling.scss"
import { memo } from "react"
import { useGetProductsQuery } from "../../../../context/api/productApi"
const TopSelling = () => {
    const { data: product, isLoading, isFetching, isError } = useGetProductsQuery({ limit: 15, skip: 1 })
    return (
        <>
            <section className="top-selling">
                <div className="container">
                    <div className="top-selling__wrapper">
                        <h2 className="top-selling__title">TOP SELLING</h2>
                        <ProductList product={product?.payload} isFetching={isFetching} isLoading={isLoading} isError={isError} />
                        <div className="top-selling__link-wrapper">
                            <Link to="/shop" className="top-selling__link">View All</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default memo(TopSelling)