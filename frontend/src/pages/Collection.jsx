import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContex';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  // CATEGORY TOGGLE
  const toggleCategory = (e) => {
    const value = e.target.value;

    if (category.includes(value)) {
      setCategory((prev) => prev.filter((item) => item !== value));
    } else {
      setCategory((prev) => [...prev, value]);
    }
  };

  // SUBCATEGORY TOGGLE
  const toggleSubCategory = (e) => {
    const value = e.target.value;

    if (subCategory.includes(value)) {
      setSubCategory((prev) => prev.filter((item) => item !== value));
    } else {
      setSubCategory((prev) => [...prev, value]);
    }
  };

  // MAIN FILTER + SEARCH + SORT (FIXED)
  useEffect(() => {
    let result = [...products];

    // 🔥 SEARCH FIX (IMPORTANT)
    if (showSearch && search) {
      result = result.filter(item =>
        (item.name + item.category + item.subCategory)
          .toLowerCase()
          .replace(/-/g, '')
          .includes(search.toLowerCase().replace(/-/g, ''))
      );
    }

    // CATEGORY FILTER
    if (category.length > 0) {
      result = result.filter((item) =>
        category.includes(item.category)
      );
    }

    // SUBCATEGORY FILTER
    if (subCategory.length > 0) {
      result = result.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    // SORT
    if (sortType === 'low-high') {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortType === 'high-low') {
      result.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(result);
  }, [products, category, subCategory, sortType, search, showSearch]);

  // INITIAL LOAD
  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* LEFT FILTER */}
      <div className="min-w-60">

        <p
          onClick={() => setShowFilter(!showFilter)}  //when filter is not show --onclick and then show
          className='my-2 text-xl flex items-center cursor-pointer gap-2 '
        >
          Filter
          <img
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
            src={assets.CrossDropdown}
            alt=""
          />
        </p>

        {/* CATEGORY */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block `}> {/* only show all sceen but in small sceen its shown in togggle  */}
          <p className='mb-3 text-sm font-medium '>CATEGORIES</p>  

          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>

            <p className='flex gap-2'>
              <input type="checkbox" value="Men" onChange={toggleCategory} />
              Men
            </p>

            <p className='flex gap-2'>
              <input type="checkbox" value="Women" onChange={toggleCategory} />
              Women
            </p>

            <p className='flex gap-2'>
              <input type="checkbox" value="Kids" onChange={toggleCategory} />
              Kids
            </p>

            <p className='flex gap-2'>
              <input type="checkbox" value="Accessories" onChange={toggleCategory} />
              Accessories
            </p>

          </div>
        </div>

        {/* SUB CATEGORY */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block `}>
          <p className='mb-3 text-sm font-medium '>Type</p>

          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>

            <p className='flex gap-2'>
              <input type="checkbox" value="Topwear" onChange={toggleSubCategory} />
              Topwear
            </p>

            <p className='flex gap-2'>
              <input type="checkbox" value="Bottomwear" onChange={toggleSubCategory} />
              Bottomwear
            </p>

            <p className='flex gap-2'>
              <input type="checkbox" value="Summerwear" onChange={toggleSubCategory} />
              Summerwear
            </p>

            <p className='flex gap-2'>
              <input type="checkbox" value="WinterWear" onChange={toggleSubCategory} />
              WinterWear
            </p>

          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className='flex-1'>

        {/* TITLE + SORT */}
        <div className='flex justify-between items-center text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />

          <select
            onChange={(e) => setSortType(e.target.value)}
            className='border-2 border-gray-300 text-sm px-2 py-1 rounded'
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* PRODUCTS */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {filteredProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>

      </div>

    </div>
  );
};

export default Collection;