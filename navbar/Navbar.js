import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="nav">
        <div className="logo">
          <img src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg" alt="" />
        </div>
        <div className="address">
        <span class="material-symbols-outlined">
location_on
</span>
<div className="txt">
  <h5>Hello</h5>
  <h4>Select your address</h4>
</div>
        </div>
        <div className="input">
          <div className="i-1">
           <h5>All</h5>
            <span class="material-symbols-outlined">
arrow_drop_down
</span>
          </div>
          <input type="text" />
          <div className="i-2">
          <span class="material-symbols-outlined">
search
</span>
          </div>
        </div>
        <div className="flag">
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/india-flag-icon.png" alt="" />
          <span class="material-symbols-outlined">
arrow_drop_down
</span>
        </div>
        <div className="acc">
          <h5>Hello,sign in</h5>
          <h4>Account & Lists</h4>
        </div>
        <div className="order">
          <h5>Return</h5>
          <h4>& Orders</h4>
        </div>
        <div className="cart">
        <span class="material-symbols-outlined">
shopping_cart
</span>
<h4>Cart</h4>
        </div>
      </div>
    </div>
  )
}

export default Navbar
