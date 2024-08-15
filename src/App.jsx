import { lazy, memo } from "react"
import { Route, Routes } from "react-router-dom"
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
        </Route>
      </Routes>
    </>
  )
}

export default memo(App)