import React from 'react'
import '../index.css';
import myImage from '../myImage.png'

function Header() {
  return (
    <div className="flex justify-between bg-white-200 shadow-lg">
      <div className='w-24 p-2'>
        <img  src={myImage} alt='Logo'/>
      </div>
        <ul className="flex m-4 p-4">
        <li className="px-4 ">🔍 Serach</li>
        <li className="px-4">🍻 Offers</li>
        <li className="px-4">💁🏻 Help</li>
        <li className="px-4">🛒Cart</li>
        </ul>
   
    </div>
  )
}

export default Header
