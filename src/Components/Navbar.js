import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav>
         <div class="menu-icon">
            <span class="fas fa-bars"></span>
         </div>
         <div class="logo">
            TechGeek
         </div>
         <div class="nav-items">
            <li><a href="#">About</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Status</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Events</a></li>
         </div>
         <div class="search-icon">
            <span class="fas fa-search"></span>
         </div>
         <div class="cancel-icon">
            <span class="fas fa-times"></span>
         </div>
         <form action="#">
            <input type="search" class="search-data" placeholder="Search" required />
            <button type="submit" class="fas fa-search"></button>
         </form>
      </nav>
    </>
  )
}

export default Navbar
