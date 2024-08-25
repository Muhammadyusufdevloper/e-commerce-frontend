import { memo, useEffect, useState } from "react"
import ShopProducts from "./components/shop-products/shop-products"
import ShopSidebar from "./components/shop-sidebar/shop-sidebar"
import "./shop.scss"
const Shop = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const [sideBarMenu, setSideBarMenu] = useState(false)
    return (
        <>
            <section className="shop">
                <div className="container">
                    <div className="shop__wrapper">
                        <ShopSidebar setSideBarMenu={setSideBarMenu} sideBarMenu={sideBarMenu} />
                        <ShopProducts setSideBarMenu={setSideBarMenu} sideBarMenu={sideBarMenu} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default memo(Shop)