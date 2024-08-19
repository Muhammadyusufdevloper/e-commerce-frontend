import { memo } from "react"
import ProductInformationImageItem from "./components/product-information-image-item/product-information-image-item"
import ProductInformationContent from "./components/product-information-content/product-information-content"
import "./product-information.scss"
const ProductInformation = () => {
    return (
        <>
            <div className="product-information">
                <div className="container">
                    <div className="product-information__wrapper">
                        <ProductInformationImageItem />
                        <ProductInformationContent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(ProductInformation)