import { lazy, memo } from 'react'
import { Outlet } from 'react-router-dom'
const Header = lazy(() => import('../components/header/header'))

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default memo(Layout)