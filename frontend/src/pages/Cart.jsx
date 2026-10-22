import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContex';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const {
    products,
    currency,
    cartItems,
    updateQuantity,
    navigate,
  } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  // Load cart items
  useEffect(() => {
    const tempData = [];

    if (products.length > 0) {
      for (const productId in cartItems) {
        for (const size in cartItems[productId]) {
          if (cartItems[productId][size] > 0) {
            tempData.push({
              _id: productId,
              size,
              quantity: cartItems[productId][size],
            });
          }
        }
      }
    }

    setCartData(tempData);
  }, [cartItems, products]);

  const totalItems = cartData.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Empty cart
  if (products.length > 0 && cartData.length === 0) {
    return (
      <div className="min-h-[65vh] bg-[#faf9f6] px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-lg rounded-2xl border border-gray-200 bg-white px-6 py-12 text-center shadow-sm">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#f5f0e8]">
            <svg
              className="h-9 w-9 text-[#a88961]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.5l2.4 11.25a2 2 0 001.96 1.58h9.67a2 2 0 001.96-1.58L21 7H5"
              />
              <circle cx="9" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>
          </div>

          <h2 className="mt-5 text-2xl font-semibold text-gray-900">
            Your cart is empty
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Add something you love to get started.
          </p>

          <button
            onClick={() => navigate('/collection')}
            className="mt-6 rounded-lg bg-[#292720] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#a88961]"
          >
            Explore Collection
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#faf9f6] px-4 py-7 sm:px-6 sm:py-10 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Compact Header */}
        <div className="mb-7 flex items-center justify-between border-b border-gray-200 pb-5">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
              Shopping Cart
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              {totalItems} {totalItems === 1 ? 'item' : 'items'}
            </p>
          </div>

          <button
            onClick={() => navigate('/collection')}
            className="text-sm font-medium text-[#a88961] transition hover:text-gray-900"
          >
            Continue Shopping →
          </button>
        </div>

        {/* Cart Layout */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[1fr_350px] lg:gap-8">

          {/* Cart Products */}
          <section className="min-w-0">
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">

              {/* Product List Header */}
              <div className="hidden grid-cols-[1fr_100px_130px] gap-4 border-b border-gray-100 bg-gray-50 px-5 py-3 text-xs font-medium uppercase tracking-wider text-gray-500 sm:grid">
                <span>Product</span>
                <span className="text-center">Price</span>
                <span className="text-center">Quantity</span>
              </div>

              {/* Products */}
              <div className="divide-y divide-gray-100">
                {cartData.map((item) => {
                  const productData = products.find(
                    (product) => product._id === item._id
                  );

                  if (!productData) return null;

                  const productImage = Array.isArray(productData.image)
                    ? productData.image[0]
                    : productData.image;

                  return (
                    <article
                      key={`${item._id}-${item.size}`}
                      className="p-4 transition hover:bg-[#fdfcf9] sm:p-5"
                    >
                      <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-[1fr_100px_130px] sm:gap-4">

                        {/* Product Info */}
                        <div className="flex min-w-0 items-center gap-4">
                          <div className="h-24 w-20 shrink-0 overflow-hidden rounded-lg bg-gray-100 sm:h-28 sm:w-24">
                            <img
                              src={productImage}
                              alt={productData.name}
                              className="h-full w-full object-cover"
                              loading="lazy"
                            />
                          </div>

                          <div className="min-w-0 flex-1">
                            <h2 className="line-clamp-2 text-sm font-semibold leading-6 text-gray-900 sm:text-base">
                              {productData.name}
                            </h2>

                            <p className="mt-1 text-sm text-gray-500">
                              Size: <span className="font-medium text-gray-800">{item.size}</span>
                            </p>

                            <p className="mt-2 text-sm font-semibold text-gray-900 sm:hidden">
                              {currency}{productData.price}
                            </p>

                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(item._id, item.size, 0)
                              }
                              className="mt-2 inline-flex items-center gap-1.5 text-xs text-gray-400 transition hover:text-red-500"
                            >
                              <img
                                src={assets.deleteIcon}
                                alt=""
                                className="h-3.5 w-3.5"
                              />
                              Remove
                            </button>
                          </div>
                        </div>

                        {/* Desktop Price */}
                        <div className="hidden text-center sm:block">
                          <p className="text-sm font-medium text-gray-800">
                            {currency}{productData.price}
                          </p>
                        </div>

                        {/* Quantity Control */}
                        <div className="flex items-center justify-between sm:justify-center">
                          <span className="text-xs text-gray-500 sm:hidden">
                            Quantity
                          </span>

                          <div className="flex items-center overflow-hidden rounded-lg border border-gray-200">
                            <button
                              type="button"
                              disabled={item.quantity <= 1}
                              onClick={() =>
                                updateQuantity(
                                  item._id,
                                  item.size,
                                  Math.max(1, item.quantity - 1)
                                )
                              }
                              aria-label="Decrease quantity"
                              className="flex h-9 w-9 items-center justify-center text-gray-600 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-30"
                            >
                              −
                            </button>

                            <span className="flex h-9 w-10 items-center justify-center border-x border-gray-200 text-sm font-medium text-gray-900">
                              {item.quantity}
                            </span>

                            <button
                              type="button"
                              onClick={() =>
                                updateQuantity(
                                  item._id,
                                  item.size,
                                  item.quantity + 1
                                )
                              }
                              aria-label="Increase quantity"
                              className="flex h-9 w-9 items-center justify-center text-gray-600 transition hover:bg-gray-100"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Item Subtotal */}
                      <div className="mt-3 flex justify-end border-t border-gray-100 pt-3">
                        <p className="text-xs text-gray-500">
                          Subtotal:{' '}
                          <span className="font-semibold text-gray-900">
                            {currency}
                            {(productData.price * item.quantity).toFixed(2)}
                          </span>
                        </p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Order Summary */}
          <aside className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 lg:sticky lg:top-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Order Summary
            </h2>

            <div className="mt-4 flex items-center justify-between border-b border-gray-100 pb-4 text-sm">
              <span className="text-gray-500">Total items</span>
              <span className="font-medium text-gray-900">{totalItems}</span>
            </div>

            {/* Existing CartTotal functionality */}
            <div className="pt-4">
              <CartTotal />
            </div>

            <button
              type="button"
              onClick={() => navigate('/place-order')}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-[#292720] px-5 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#a88961]"
            >
              Proceed to Checkout
              <span className="text-lg">→</span>
            </button>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-400">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11V7a3 3 0 016 0v4m-9 0h12v9H9v-9z"
                />
              </svg>
              Secure checkout
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
};

export default Cart;