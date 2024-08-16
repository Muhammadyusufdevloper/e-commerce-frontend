import { memo } from "react"
import "./home.scss"
import Hero from "./components/hero/hero"
const Home = () => {
    return (
        <>
            <Hero />
        </>
    )
}

export default memo(Home)