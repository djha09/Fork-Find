import './header.css';
import React from 'react';
import chef from '/src/assets/chef.png';
function Header() {
  return (
    <header>
        <nav>
      <img src={chef} alt="Chef logo" />
      <h1>Fork & Find</h1>
      </nav>
    </header>
  )
}
export default Header;
