import { lazy, memo } from "react"
import { Route, Routes } from "react-router-dom"
import Admin from "./pages/admin/admin"
import Auth from "./pages/auth/auth"
import ProductManage from "./pages/admin/pages/product-manage/product-manage"
import ProductCreate from "./pages/admin/pages/product-create/product-create"
import CategoryManage from "./pages/admin/pages/category-manage/category-manage"
import CategoryCreate from "./pages/admin/pages/category-create/category-create"
import Profile from "./pages/admin/pages/profile/profile"
const Wishlist = lazy(() => import("./pages/wishlist/wishlist"))
const NoteFound = lazy(() => import("./pages/note-found/note-found"))
const Cart = lazy(() => import("./pages/cart/cart"))
const Login = lazy(() => import("./pages/login/login"))
const Register = lazy(() => import("./pages/register/register"))
const Home = lazy(() => import("./pages/home/home"))
const SingleRoute = lazy(() => import("./pages/single-route/single-route"))
const Layout = lazy(() => import("./layout/layout"))

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="single-route/:id" element={<SingleRoute />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="*" element={<NoteFound />} />
        </Route>
        <Route path="/" element={<Auth />}>
          <Route path="admin" element={<Admin />} >
            <Route path="product-manage" element={<ProductManage />} />
            <Route path="product-create" element={<ProductCreate />} />
            <Route path="category-manage" element={<CategoryManage />} />
            <Route path="category-create" element={<CategoryCreate />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default memo(App)