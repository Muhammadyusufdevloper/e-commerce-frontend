import { memo, useEffect } from "react"
import YouMayAlsoLike from "./components/you-may-also-like/you-may-also-like"
import AllReviews from "./components/all-reviews/all-reviews"
import { useParams } from "react-router-dom"
import ProductInformation from "./components/product-information/product-information"
const SingleRoute = () => {
    let { id } = useParams()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [id])
    return (
        <>
            <div style={{ marginTop: "36px" }}>
                <ProductInformation />
                <AllReviews />
                <YouMayAlsoLike />
            </div>
        </>
    )
}

export default memo(SingleRoute)