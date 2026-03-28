
import React from 'react'

const Navbar = ({cartCount}) => {
  return (
    <div className='flex justify-between p-4 bg-white shadow'>
       <h1 className="text-xl font-bold">🍬 Sweet Shop</h1>
       <button className="bg-green-500 text-white px-4 py-2 rounded">
         Cart({cartCount})
       </button>
    </div>
  )
}

export default Navbar
