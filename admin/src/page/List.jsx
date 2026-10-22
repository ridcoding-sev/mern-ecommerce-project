import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUri, currency } from '../App'
import { toast } from 'react-toastify'

const List = ({ token }) => {

  const [list, setList] = useState([])
  const [search, setSearch] = useState('')


  // Fetch All Products
  const fetchList = async () => {

    try {

      const response = await axios.get(
        backendUri + '/api/product/list'
      )

      if (response.data.success) {
        setList(response.data.products)
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {

      console.log(error)
      toast.error(error.message)

    }

  }


  // Remove Product
  const removeProduct = async (id) => {

    if (!token) {
      toast.error('Please login first')
      return
    }

    const confirmDelete = window.confirm(
      'Are you sure you want to delete this product?'
    )

    if (!confirmDelete) return

    try {

      const response = await axios.post(
        backendUri + '/api/product/remove',
        { id },
        {
          headers: {
            authorization: `Bearer ${token}`
          }
        }
      )

      if (response.data.success) {

        toast.success(response.data.message)

        await fetchList()

      } else {

        toast.error(response.data.message)

      }

    } catch (error) {

      console.log(error)
      toast.error(error.message)

    }

  }


  // Fetch Products
  useEffect(() => {

    fetchList()

  }, [])


  // Search Products
  const filteredList = list.filter((item) => {

    const searchText = search.toLowerCase()

    return (
      item.name?.toLowerCase().includes(searchText) ||
      item.category?.toLowerCase().includes(searchText) ||
      item._id?.toLowerCase().includes(searchText)
    )

  })


  // Unique Categories
  const totalCategories = new Set(
    list.map((item) => item.category).filter(Boolean)
  ).size


  // Average Product Price
  const averagePrice = list.length
    ? list.reduce((total, item) => total + Number(item.price || 0), 0) / list.length
    : 0


  // Format Product ID
  const formatId = (id) => {

    if (!id) return 'N/A'

    return id.slice(-8).toUpperCase()

  }


  return (

    <div className="min-h-screen bg-gray-50/70 p-4 sm:p-6 lg:p-8">


      {/* Page Header */}

      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <div className="mb-2 flex items-center gap-3">

            <div className="h-9 w-1.5 rounded-full bg-indigo-600"></div>

            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Product Management
            </h1>

          </div>

          <p className="ml-4 text-sm text-gray-500">
            Manage, search and organize all your products in one place.
          </p>

        </div>


        {/* Product Count */}

        <div className="flex w-fit items-center gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-3 shadow-sm">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="h-6 w-6"
            >

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 7h12l2 13H4L6 7Z"
              />

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 9V6a3 3 0 0 1 6 0v3"
              />

            </svg>

          </div>

          <div>

            <p className="text-xs font-medium text-gray-500">
              Total Products
            </p>

            <p className="text-xl font-bold text-gray-900">
              {list.length}
            </p>

          </div>

        </div>

      </div>


      {/* Statistics Cards */}

      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">


        {/* Total Products */}

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm font-medium text-gray-500">
                Total Products
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                {list.length}
              </h2>

              <p className="mt-2 text-xs text-gray-400">
                Products in your database
              </p>

            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.7}
                stroke="currentColor"
                className="h-7 w-7"
              >

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 7h12l2 13H4L6 7Z"
                />

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 9V6a3 3 0 0 1 6 0v3"
                />

              </svg>

            </div>

          </div>

        </div>


        {/* Total Categories */}

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm font-medium text-gray-500">
                Total Categories
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                {totalCategories}
              </h2>

              <p className="mt-2 text-xs text-gray-400">
                Unique product categories
              </p>

            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-purple-600">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.7}
                stroke="currentColor"
                className="h-7 w-7"
              >

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 5h6v6H4zM14 5h6v6h-6zM4 15h6v6H4zM14 15h6v6h-6z"
                />

              </svg>

            </div>

          </div>

        </div>


        {/* Average Price */}

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:col-span-2 xl:col-span-1">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm font-medium text-gray-500">
                Average Price
              </p>

              <h2 className="mt-2 break-words text-3xl font-bold text-gray-900">
                {currency}{averagePrice.toFixed(2)}
              </h2>

              <p className="mt-2 text-xs text-gray-400">
                Average price per product
              </p>

            </div>

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-50 text-green-600">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.7}
                stroke="currentColor"
                className="h-7 w-7"
              >

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v18m4-14H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H7"
                />

              </svg>

            </div>

          </div>

        </div>

      </div>


      {/* Product List Container */}

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">


        {/* Table Header */}

        <div className="flex flex-col gap-4 border-b border-gray-200 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">

          <div>

            <h2 className="text-lg font-bold text-gray-900">
              All Products
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              View and manage your product inventory.
            </p>

          </div>


          {/* Search */}

          <div className="relative w-full sm:max-w-xs">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
            >

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-4.34-4.34M19 10.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Z"
              />

            </svg>

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-4 text-sm text-gray-700 outline-none transition-all placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-50"
            />

          </div>

        </div>


        {/* Results Information */}

        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 bg-gray-50/70 px-5 py-3 sm:px-6">

          <p className="text-xs text-gray-500">

            Showing{' '}

            <span className="font-semibold text-gray-800">
              {filteredList.length}
            </span>

            {' '}of{' '}

            <span className="font-semibold text-gray-800">
              {list.length}
            </span>

            {' '}products

          </p>

          <span className="rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">

            Inventory Active

          </span>

        </div>


        {/* Desktop Table Header */}

        <div className="hidden grid-cols-[65px_minmax(100px,1.5fr)_minmax(100px,2fr)_minmax(100px,1fr)_minmax(100px,1fr)_100px] items-center gap-4 bg-gray-50 px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 lg:grid">

          <p>SL</p>

          <p>Image</p>

          <p>Product Details</p>

          <p>Category</p>

          <p>Price</p>

          <p className="text-center">Action</p>

        </div>


        {/* Product List */}

        <div className="divide-y divide-gray-100">

          {filteredList.length === 0 ? (

            /* Empty State */

            <div className="px-6 py-16 text-center">

              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-8 w-8 text-gray-400"
                >

                  <circle cx="11" cy="11" r="7" />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16 16 4 4"
                  />

                </svg>

              </div>

              <h3 className="text-lg font-bold text-gray-800">
                No products found
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Try searching with another product name or category.
              </p>

              {search && (

                <button
                  onClick={() => setSearch('')}
                  className="mt-4 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
                >
                  Clear Search
                </button>

              )}

            </div>

          ) : (

            filteredList.map((item, index) => (

              <div
                key={item._id}
                className="group grid grid-cols-1 gap-4 p-4 transition-colors duration-200 hover:bg-indigo-50/30 sm:p-5 lg:grid-cols-[65px_minmax(100px,1.5fr)_minmax(100px,2fr)_minmax(100px,1fr)_minmax(100px,1fr)_100px] lg:items-center lg:gap-4 lg:px-6"
              >


                {/* Serial Number */}

                <div className="flex items-center justify-between lg:block">

                  <span className="text-xs font-medium text-gray-400 lg:hidden">
                    Serial Number
                  </span>

                  <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-lg bg-gray-100 px-2 text-sm font-bold text-gray-600 transition group-hover:bg-indigo-100 group-hover:text-indigo-700">

                    {index + 1}

                  </span>

                </div>


                {/* Product Image */}

                <div className="flex items-center gap-4">

                  <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-1 transition group-hover:border-indigo-200">

                    {item.image?.[0] ? (

                      <img
                        src={item.image[0]}
                        alt={item.name}
                        loading="lazy"
                        className="h-full w-full rounded-lg object-cover transition duration-300 group-hover:scale-105"
                      />

                    ) : (

                      <span className="text-xs text-gray-400">
                        No Image
                      </span>

                    )}

                  </div>

                  <div className="min-w-0 lg:hidden">

                    <p className="break-words text-sm font-bold text-gray-900">
                      {item.name}
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      ID: {formatId(item._id)}
                    </p>

                  </div>

                </div>


                {/* Product Details */}

                <div className="min-w-0">

                  <p className="hidden break-words text-sm font-bold text-gray-900 lg:block">

                    {item.name}

                  </p>

                  <p className="mt-1 break-all text-xs text-gray-400">

                    ID: {formatId(item._id)}

                  </p>

                  {item.description && (

                    <p className="mt-2 line-clamp-2 text-xs leading-5 text-gray-500">

                      {item.description}

                    </p>

                  )}

                </div>


                {/* Category */}

                <div className="flex items-center justify-between gap-3 lg:block">

                  <span className="text-xs font-medium text-gray-400 lg:hidden">
                    Category
                  </span>

                  <span className="inline-flex max-w-full items-center rounded-lg border border-purple-100 bg-purple-50 px-3 py-1.5 text-xs font-semibold text-purple-700">

                    {item.category || 'Uncategorized'}

                  </span>

                </div>


                {/* Price */}

                <div className="flex items-center justify-between gap-3 lg:block">

                  <span className="text-xs font-medium text-gray-400 lg:hidden">
                    Price
                  </span>

                  <div>

                    <p className="text-base font-bold text-gray-900">

                      {currency}{Number(item.price || 0).toFixed(2)}

                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      Per product
                    </p>

                  </div>

                </div>


                {/* Action */}

                <div className="flex items-center justify-between border-t border-gray-100 pt-4 sm:justify-end lg:justify-center lg:border-0 lg:pt-0">

                  <span className="text-xs font-medium text-gray-400 lg:hidden">
                    Actions
                  </span>

                  <button
                    type="button"
                    onClick={() => removeProduct(item._id)}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-100 bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-600 transition-all duration-200 hover:border-red-200 hover:bg-red-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-100"
                    title="Delete Product"
                  >

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.8}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 7h12m-11 0 1 13h8l1-13M9 7V4h6v3m-5 4v5m4-5v5"
                      />

                    </svg>

                    <span>Delete</span>

                  </button>

                </div>

              </div>

            ))

          )}

        </div>


        {/* Footer */}

        {filteredList.length > 0 && (

          <div className="flex flex-col gap-2 border-t border-gray-200 bg-gray-50/70 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">

            <p className="text-xs text-gray-500">

              Showing{' '}

              <span className="font-semibold text-gray-800">
                {filteredList.length}
              </span>

              {' '}products

            </p>

            <p className="text-xs font-medium text-gray-500">

              Product Inventory Management

            </p>

          </div>

        )}

      </div>

    </div>

  )

}

export default List