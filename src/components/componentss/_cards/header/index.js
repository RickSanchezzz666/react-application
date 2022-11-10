import React, { useState } from 'react';
import './style.css';

function Header () {

 const [item1Display, setItem1Display] = useState('none');
 /**
  * ==
  * 45 == 45 => true
  * 45 == "45" => true
  * 
  * ===
  *  45 === 45 => true
  *  45 === "45" => false
  */
 const openMenu = () => {
  if (item1Display == 'none') {
   setItem1Display('block');
  } else {
   setItem1Display('none');
  }
 };

 return (
  <header>
   <ul className='menu'>
    {/* <li onClick={() => openMenu(1,23)}> */}
    <li onClick={openMenu}>item 1
     <ul className='submenu' style={{
      display: item1Display
     }}>
      <li>item 1.1</li>
      <li>item 1.2</li>
      <li>item 1.3</li>
     </ul>

    </li>
    <li>item 2</li>
    <li>item 3</li>
    <li>item 4</li>
   </ul>
  </header>
 );
}

export default Header;