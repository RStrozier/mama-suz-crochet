import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "../pages/Homepage"
import AboutPage from "../pages/AboutPage"
import ShopPage from "../pages/ShopPage"
import PageNotFound from "../pages/PageNotFound"
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import ScrollToTop from "../components/ScrollTopTop"

const AppRouter = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
  )
}

export default AppRouter