import { lazy, memo } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer/footer'
const Header = lazy(() => import('../components/header/header'))

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default memo(Layout)