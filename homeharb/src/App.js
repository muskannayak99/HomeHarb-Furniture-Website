// import logo from './logo.png';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Home from './components/HomePage/Home';
import About from './components/AboutPage/About';
import Contact from './components/ContactPage/Contact';
import Blogs from './components/BlogPage/Blogs';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import ShopCatagory from './components/ShopPage/ShopCatagory';
import Product from './components/ShopPage/Product';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className='container-fluid w-100 bg-black p-0 m-0'>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/shop' element={<ShopCatagory category="Shop" />} />
          <Route path='/living' element={<ShopCatagory category="Living" />} />
          <Route path='/bedroom' element={<ShopCatagory category="BedRoom" />} />
          <Route path='/dinning' element={<ShopCatagory category="DinningRoom" />} />
          <Route path='/office' element={<ShopCatagory category="Office" />} />
          <Route path='/blog' element={<Blogs catagory="Blogs" />} />
          
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/product' element={<Product />} />


          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
          <Route path="/resetpassword/:token" element={<ResetPassword />}></Route>
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;












// import Navbar from './components/Navbar/Navbar';
// import Living_Details from './components/LivingPage/Living_Details';
// import Footer from './components/FooterPage/Footer';
// import Newsletter from './components/NewaletterPage/Newsletter';
// import Choose_Us from './components/ChooseUsPage/Choose_Us';
// import Testimonials from './components/TestimonialsPage/Testimonials';
// import Catagories from './components/CatagoriesPage/Catagories'
// import Collections from './components/CollectionsPage/Collections'
// import Contact_Us from './components/ContactPage/Contact_Us';
// import About_Us from './components/AboutPage/About_Us';
// import Our_Blog from './components/BlogPage/Our_Blog';
// import Shop_Details from './components/ShopPage/Shop_Details';
// import Home from './Components/Home';

/* <Navbar />
<Home />
<About_Us />
<Collections />
<Testimonials />
<Catagories />
<Choose_Us />
<Our_Blog />
<Contact_Us />
<Newsletter />
<Footer /> */
/*
<Living/>
<Living_Details />
<Shop_Details />
<About />
<Contact />  */