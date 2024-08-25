import { TfiMenuAlt } from "react-icons/tfi"
import { useGetProductsQuery } from "../../../../context/api/productApi"
import ShopProductItem from "./components/shop-product-item"
import "./shop-products.scss"
import LoadingProduct from "../../../../components/loading/loading-product"
const ShopProducts = ({ setSideBarMenu, sideBarMenu }) => {
    const { data: product, isLoading, isFetching, isError } = useGetProductsQuery({ limit: 15, skip: 1 })
    console.log(product?.payload);
    return (
        <>
            <>
                <div className="shop-products">
                    <div className="shop-products__wrapper">
                        <div className="shop-products__header">
                            <h1 className="shop-products__title">Casual</h1>
                            <button onClick={() => setSideBarMenu(true)} className="shop-products__menu-btn"><TfiMenuAlt /></button>
                        </div>
                        <div className="shop-products__cards">
                            {
                                isFetching || isError || isLoading ? <>
                                    <LoadingProduct />
                                    <LoadingProduct />
                                    <LoadingProduct />
                                    <LoadingProduct />
                                    <LoadingProduct />
                                </> : product?.payload?.map(product => <ShopProductItem key={product?._id} product={product} />)
                            }
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}

export default ShopProducts