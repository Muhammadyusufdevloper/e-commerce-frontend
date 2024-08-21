import { lazy, memo } from "react"
import { Route, Routes } from "react-router-dom"
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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default memo(App)