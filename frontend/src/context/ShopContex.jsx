// ShopContext.jsx

import React, { createContext, useState, useEffect } from "react";
import { toast } from 'react-toastify';
import {useNavigate} from "react-router-dom"
import axios from 'axios'

// create context
export const ShopContext = createContext();

// provider component
const ShopContextProvider = (props) => {

  const currency = "$";
  const delivery_fee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();
  const [products,setProducts] = useState([])
   const [token,setToken] = useState('')
  // ---------------- Add to Cart ----------------
const addToCart = async (itemId, size) => {

  if (!size) {
    toast.error('Select Product Size');
    return;
  }

  let cartData = structuredClone(cartItems);

  if (cartData[itemId]) {
    if (cartData[itemId][size]) {
      cartData[itemId][size] += 1;
    } else {
      cartData[itemId][size] = 1;
    }
  } else {
    cartData[itemId] = {};
    cartData[itemId][size] = 1;
  }
   
  setCartItems(cartData);

  if (token) {
    try {

      await axios.post(
        backendUrl + '/api/cart/add',
        { itemId, size },
        { headers: { token } }
      )

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
};

  // ---------------- Get Cart Count ----------------
  const getCartCount = () => {
    let totalCount = 0;

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          console.log(error);
        toast.error(error.message);
        }
      }
    }

    return totalCount;
  };


    const updateQuantity = async (itemId,size,quantity) => {
    
    let cartData = structuredClone(cartItems);

    cartData[itemId][size] = quantity;

    setCartItems(cartData);
if (token) {
    try {
        await axios.post(backendUrl + '/api/cart/update', { itemId, size, quantity }, { headers: { token } });
    } catch (error) {
        console.log(error);
        toast.error(error.message);
    }
}

}

// Get User Cart
const getUserCart = async (token) => {
    try {
        const response = await axios.post(
            backendUrl + '/api/cart/get',
            {},
            {
                headers: { token }
            }
        );

        if (response.data.success) {
            setCartItems(response.data.cartData);
        } else {
            toast.error(response.data.message);
        }

    } catch (error) {
        console.error('Get User Cart Error:', error);

        const message =
            error.response?.data?.message ||
            error.message ||
            'Failed to fetch cart data';

        toast.error(message);
    }
};




// Cart total component control
 const getCartAmount = async () => {
    let totalAmount = 0;

    for (const items in cartItems) {           
        let itemInfo = products.find( (product) => product._id === items);

        if (itemInfo) {
            for (const item in cartItems[items]) {   // item = size (S, M, L, XL ইত্যাদি)
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                } catch (error) {
                    console.log("Error calculating cart amount:", error);
                }
            }
        }
    }

    return totalAmount;
};

const getProductsData = async () => {
  try {

    const response = await axios.get(backendUrl + '/api/product/list')
    if(response.data.success){
      setProducts(response.data.products)
    } else {
      toast.error(response.data.message)
    }

  } catch (error) {
    console.log(error)
    toast.error(error.message)
  }
}

useEffect(() => {
  getProductsData()
}, [])


useEffect(()=>{
 if(!token && localStorage.getItem('token')){
  setToken(localStorage.getItem('token'))
  getUserCart(localStorage.getItem('token'))
 }
},[])

  // ---------------- Context Value ----------------
  const value = {
    products,
    currency,
    delivery_fee,
    search, setSearch,
    showSearch, setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    backendUrl,
    token,setToken,
    setCartItems,
    

  };


  // ---------------- Provider Return which we store in value ----------------
  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;