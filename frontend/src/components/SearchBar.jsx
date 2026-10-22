import React, { useContext ,useEffect,useState} from 'react';
import { ShopContext } from '../context/ShopContex';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext); 
  const [visible,setVisible] =useState(false);
  const location = useLocation();

  //if in url exist collection then searchbar remain vissible
  useEffect(()=>{
    if (location.pathname.includes('collection') ) {
      setVisible(true);
    }
    else {
      setVisible(false)
    }
  },[location])

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center py-3">

      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 rounded-full w-3/4 sm:w-1/2">

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-transparent text-sm placeholder-gray-500"
          placeholder="Search products..."
        />

        <img
          onClick={() => setShowSearch(true)}
          src={assets.SearchIcon}
          className="w-5 cursor-pointer"
          alt=""
        />

      </div>

      {/* Close Button */}
      <img
        onClick={() => {
          setShowSearch(false);
          setSearch("");
        }}
        className="inline w-3 cursor-pointer ml-4 hover:scale-110 transition"
        src={assets.Cross}
        alt="close"
      />

    </div>
  ) : null;
};

export default SearchBar;