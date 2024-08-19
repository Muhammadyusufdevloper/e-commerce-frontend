import { memo } from "react"
import "./home.scss"
import Hero from "./components/hero/hero"
import DressStyleExplorer from "./components/dress-style-explorer/dress-style-explorer"
import HappyCustomers from "./components/happy-customers/happy-customers"
import NewArrivals from "./components/new-arrivals/new-arrivals"
import TopSelling from "./components/top-selling/top-selling"
const Home = () => {
    return (
        <>
            <Hero />
            <NewArrivals />
            <TopSelling />
            <DressStyleExplorer />
            <HappyCustomers />
        </>
    )
}

export default memo(Home)