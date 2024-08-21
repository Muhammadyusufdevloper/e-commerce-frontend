import Loading from "./loading"
import "./loading-product.scss"
const LoadingProduct = () => {
    return (
        <>
            <div className="loading-product">
                <div className="loading-product__images">
                    <Loading width="100%" height="100%" />
                </div>
                <div className="loading-product__content">
                    <Loading width="70%" height="27px" />
                    <Loading width="55%" height="19px" />
                    <Loading width="100%" height="40px" />
                </div>
            </div>
        </>
    )
}

export default LoadingProduct