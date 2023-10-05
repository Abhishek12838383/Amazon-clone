import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <div className="first">
        <h4>All</h4>
        <span class="material-symbols-outlined">
keyboard_arrow_down
</span>
      </div>
      <div className="sec">
        <h4>Amazon miniTV</h4>
        <h4>Sell Best</h4>
        <h4>Sellers</h4>
        <h4>Mobiles</h4>
        <h4>Today's Deals</h4>
        <h4>Customers</h4>
        <h4>Service</h4>
        <h4>Electronics</h4>
        <h4>Prime</h4>
      </div>
      <div className="thi">
        <img src="https://im.indiatimes.in/content/2021/Mar/AMP---2021-03-03T122216768_603f326167f31.jpg?w=1200&h=900&cc=1" alt="" />
        <h4>Shopping made easy |</h4>
        <h5>Download the app</h5>
      </div>
    </div>
  )
}

export default Header
