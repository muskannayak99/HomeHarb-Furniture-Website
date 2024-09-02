import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { List } from 'phosphor-react';
import { ShopContext } from '../Context/ShopContext';

function Navbar() {

  const { getTotalCartItems } = useContext(ShopContext)

  const [toggle, setToggle] = useState(false);

  function openNav() {
    setToggle(!toggle);
  }

  return (
    <nav className='navbar navbar-expand-lg navbar-black bg-black'>
      <div className='container p-0  '>

        <Link className='navbar-brand d-flex flex-column align-items-center' to='/'>
          <i className="icon bi bi-house-door h3 px-3 m-0"></i>
          <span className='text text-light m-0 p-0'>HOMEHARB</span>
        </Link>
        <button className='navbar-toggler' type='button' onClick={openNav}>
          <List size={32} className='toggler text-light' />
        </button>

        <div className={`collapse navbar-collapse ${toggle ? 'show' : ''}`}>
          <ul className='navbar-nav me-auto mb-lg-0 custom-navbar '>
            <li className='nav-item '>
              <NavLink to="/" className='nav-link text-light' onClick={openNav}>Home</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="/shop" className='nav-link text-light' onClick={openNav}>Shop</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="/living" className='nav-link text-light' onClick={openNav}>Living</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/bedroom' className='nav-link text-light' onClick={openNav}>Bed</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/dinning' className='nav-link text-light' onClick={openNav}>Dinning</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/office' className='nav-link text-light' onClick={openNav}>Office</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="/about" className='nav-link text-light' onClick={openNav}>About Us</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="/contact" className='nav-link text-light' onClick={openNav}>Contact</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="/blog" className='nav-link text-light' onClick={openNav}>Blog</NavLink>
            </li>
          </ul>

        </div>
        <div className='nav-item d-flex align-items-center text-light  gap-3 ms-lg-5'>
          <NavLink to="/cart" className='nav-link text-light ' onClick={openNav}><i className="bi bi-cart text-light fs-5"></i></NavLink>
          <div className='nav-cart-count'>{getTotalCartItems()}</div>
          <NavLink to="/signup" className='nav-link text-light ' onClick={openNav}><i className="bi bi-person-circle text-light fs-5"></i></NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

{/* <div className='container p-0'>
<div className='row m-0 w-100'>
  <div className='col-lg-1 col-md-1 col-sm-2 col-3 m-0 p-0 d-flex flex-column justify-content-center'>
    <i className=" icon bi bi-house-door h3 px-3 m-0"></i>
    <h6 className='text text-light m-0 p-0'>HOMEHARB</h6>

    <span onClick={openNav} className="nav-btn"><List size={32} /></span>
  </div>

  <div className='nav col-lg-10 col-md-7 col-sm-8 col-5 d-flex g-col-3 m-0 p-0 align-items-center text-light justify-content-evenly'>
    <div className={` right animate  ${toggle ? "nav-open" : "nav-close"} `}>
      <NavLink to="/"> <span>Home</span></NavLink>
      <NavLink to="/shop"><span>Shop</span></NavLink>
      <NavLink to="/living"><span>Living</span></NavLink >
      <NavLink to='/bedroom'><span>Bed</span></NavLink >
      <NavLink to='/dinning'> <span>Dinning</span></NavLink >
      <NavLink to='/office'> <span>Office</span> </NavLink >
      <NavLink to="/about"><span>About Us</span></NavLink >
      <NavLink to="/contact"><span>Contact</span></NavLink >
      <NavLink to="/blog"><span>Blog</span></NavLink >
    </div>

    <div className=" col-lg-1 col-md-4 col-sm-2 col-4 d-flex align-items-center gap-3 m-0 p-0 hover">
      <span><i className="bi bi-cart text-light">Cart</i></span>
      <NavLink to="/signup"> <span><i className="bi bi-person-circle text-light"></i></span></NavLink >
    </div>

  </div>
</div>
</div> */}