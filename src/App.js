
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";
import AddProduct from "./admin/AddProduct";
import SignUp from "./components/SignUp";
import Services from "./pages/Services";
function App() {
  return (
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/React-Ecommerce" element={<Home />} /> */}

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        {/* params */}
        
        <Route path="/:id" element={<ProductDetails />} />
        <Route path="/SignUp" element={<SignUp/>} />

        {/* admin */}
        <Route path="/admin/product/add" element={<AddProduct />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;


//mysite.com  -----root router-----home page
//mysite.com ----about,services,profile,contact
