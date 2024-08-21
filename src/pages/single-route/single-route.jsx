import { memo, useEffect } from "react"
import YouMayAlsoLike from "./components/you-may-also-like/you-may-also-like"
import AllReviews from "./components/all-reviews/all-reviews"
import { useParams } from "react-router-dom"
import ProductInformation from "./components/product-information/product-information"
import { useGetProductByIdQuery } from "../../context/api/productApi"
const SingleRoute = () => {
    let { id } = useParams()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [id])
    const { data: product, isLoading, isFetching, isError } = useGetProductByIdQuery(id)
    return (
        <>
            <div style={{ marginTop: "36px" }}>
                <ProductInformation product={product} isLoading={isLoading} isFetching={isFetching} isError={isError} />
                <AllReviews />
                <YouMayAlsoLike />
            </div>
        </>
    )
}

export default memo(SingleRoute)