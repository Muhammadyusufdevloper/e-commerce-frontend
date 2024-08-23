import { Outlet } from "react-router-dom"
import AdminHeader from "../admin/components/admin-header/admin-header"

const Auth = () => {
    return (
        <>
            <AdminHeader />
            <Outlet />
        </>
    )
}

export default Auth