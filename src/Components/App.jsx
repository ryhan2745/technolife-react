import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import Header from "./Layout/Header"
import HomePage from "./Pages/HomePage";
import CategoriesPage from "./Pages/CategoriesPage";
import ProductCard from "./Modules/Products/ProductCard";
import Footer from "./Layout/Footer";
import AllBrandTemp from "./Templates/AllBrandTemp";
import TechnooffPage from "./Pages/TechnooffPage";
import ShopingPage from "./Pages/ShopingPage";
import LoginPage from "./Pages/LoginPage"
import SignUpPage from "./Pages/SignUpPage"
import Layout from "./Layout/Layout";
import AllBrandsPage from "./Pages/AllBrandsPage";
const App = () => {
    return<>
       <Router>
        <Routes>
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/categories/:key" element={<Layout><CategoriesPage /></Layout>} />
          <Route path="/products/:key" element={<Layout><ProductCard /></Layout>} />
          <Route path="/brands/:brandkey/:categorykey" element={<Layout><AllBrandsPage /></Layout>} />
          <Route path="/technooff" element={<Layout><TechnooffPage /></Layout>}/>
          <Route path="/shoping" element={<Layout><ShopingPage /></Layout>}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/signup" element={<SignUpPage />}/>
        </Routes>
      </Router>
    </>
}
export default App