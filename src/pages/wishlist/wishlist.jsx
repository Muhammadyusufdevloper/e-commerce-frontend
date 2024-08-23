import { useSelector } from "react-redux"
import ProductItem from "../../components/product-list/components/product-item"
import "./wishlist.scss"
import Empty from "../../components/empty/empty"
import emptyImg from "../../assets/images/wishlist/empty.webp"
const Wishlist = () => {
    const wishlist = useSelector(state => state.wishlist.value)
    return (
        <>
            <section className="wishlist">
                <div className="container">
                    {
                        wishlist?.length ?
                            <div className="wishlist__wrapper">
                                <h1 className="wishlist__title">Wishlist</h1>
                                <div className="wishlist__card">
                                    {
                                        wishlist?.map((wishlist) => (
                                            <ProductItem key={wishlist._id} product={wishlist} />
                                        ))
                                    }
                                </div>
                            </div>
                            : <Empty image={emptyImg} subtitle={"I haven't found anything interesting for now."} text="Start with the collections on the homepage or find the desired product through the search." />
                    }
                </div>
            </section>
        </>
    )
}

export default Wishlist