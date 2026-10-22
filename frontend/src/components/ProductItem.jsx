import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContex'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (   
    <Link
      className='text-gray-700 cursor-pointer group'
      to={`/product/${id}`}
    >

      {/* Product Card */}
      <div className='bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-1'>

        {/* Product Image */}
        <div className='overflow-hidden bg-gray-100 flex items-center justify-center'>
          <img
            className='w-full h-44 sm:h-56 object-contain group-hover:scale-105 transition-transform duration-500 ease-in-out'
            src={image[0]}
            alt={name}
          />
        </div>

        {/* Product Details */}
        <div className='p-3'>

          <p className='text-xs sm:text-sm font-medium text-gray-800 truncate'>
            {name}
          </p>

          <p className='text-sm sm:text-base font-bold text-black mt-1'>
            {currency}{price}
          </p>

          {/* Button */}
          <button className='mt-2 w-full bg-black text-white text-xs sm:text-sm py-1.5 rounded-md hover:bg-gray-800 transition-all duration-300 cursor-pointer'>
            View Product
          </button> 

        </div>
      </div>

    </Link>
  )
}

export default ProductItem;