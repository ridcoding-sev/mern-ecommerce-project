import React, { useState, useContext } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContex';
import { toast } from 'react-toastify';
import axios from 'axios';

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');

  const {
    navigate,
    backendUrl,
    products,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
  } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: '',
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      let orderItems = [];

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const productData = products.find(
              (product) => product._id === items
            );

            if (productData) {
              const itemInfo = structuredClone(productData);

              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];

              orderItems.push(itemInfo);
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: (await getCartAmount()) + delivery_fee,
        paymentMethod: method,
      };

      switch (method) {
        // COD Payment
        case 'cod': {
          const response = await axios.post(
            backendUrl + '/api/order/place',
            orderData,
            { headers: { token } }
          );

          if (response.data.success) {
            setCartItems({});
            toast.success('Order Placed Successfully');
            navigate('/orders');
          } else {
            toast.error(response.data.message);
          }

          break;
        }

        // bKash Practice Payment
        case 'bkash': {
          const response = await axios.post(
            backendUrl + '/api/order/bkash',
            orderData,
            { headers: { token } }
          );

          if (response.data.success) {
            toast.success('bKash Test Order Created');

            navigate('/orders', {
              state: {
                orderId: response.data.orderId,
                paymentMethod: 'bkash',
              },
            });
          } else {
            toast.error(response.data.message);
          }

          break;
        }

        // Nagad Practice Payment
        case 'nogod': {
          const response = await axios.post(
            backendUrl + '/api/order/nogod',
            orderData,
            { headers: { token } }
          );

          if (response.data.success) {
            toast.success('Nagad Test Order Created');

            navigate('/orders', {
              state: {
                orderId: response.data.orderId,
                paymentMethod: 'nogod',
              },
            });
          } else {
            toast.error(response.data.message);
          }

          break;
        }

        default:
          toast.error('Please select a payment method');
          break;
      } 
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  const inputClass =
    'w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 hover:border-gray-300 focus:border-[#a88961] focus:ring-2 focus:ring-[#a88961]/10';

  const labelClass =
    'mb-2 block text-xs font-semibold tracking-wide text-gray-600';

  return (
    <main className="min-h-screen bg-[#faf9f6] px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Page Heading */}
        <div className="mb-8 border-b border-gray-200 pb-6">
          <div className="mb-3 flex items-center gap-2 text-xs text-gray-400">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="transition hover:text-[#a88961]"
            >
              Home
            </button>

            <span>/</span>

            <button
              type="button"
              onClick={() => navigate('/cart')}
              className="transition hover:text-[#a88961]"
            >
              Cart
            </button>

            <span>/</span>

            <span className="text-gray-700">Checkout</span>
          </div>

          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                Checkout
              </h1>

              <p className="mt-2 text-sm text-gray-500">
                Complete your details to place your order.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-500">
              <svg
                className="h-4 w-4 text-[#a88961]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11V7a3 3 0 016 0v4m-9 0h12v9H9v-9z"
                />
              </svg>

              Secure Checkout
            </div>
          </div>
        </div>

        {/* Checkout Form */}
        <form onSubmit={onSubmitHandler}>
          <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-[1fr_370px] xl:grid-cols-[1fr_400px]">

            {/* LEFT: DELIVERY AND PAYMENT */}
            <div className="min-w-0 space-y-6">

              {/* Delivery Information */}
              <section className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

                <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-5 sm:px-7">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f5f0e8] text-[#a88961]">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5v-9Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m3.5 7.7 8.5 4.8 8.5-4.8M12 12.5V21"
                      />
                    </svg>
                  </div>

                  <div>
                    <h2 className="text-base font-semibold text-gray-900 sm:text-lg">
                      Delivery Information
                    </h2>

                    <p className="mt-1 text-xs text-gray-500">
                      Where should we deliver your order?
                    </p>
                  </div>
                </div>

                <div className="p-5 sm:p-7">

                  {/* First and Last Name */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className={labelClass}>
                        First Name *
                      </label>

                      <input
                        onChange={onChangeHandler}
                        name="firstName"
                        value={formData.firstName}
                        className={inputClass}
                        type="text"
                        placeholder="Enter first name"
                        autoComplete="given-name"
                        required
                      />
                    </div>

                    <div>
                      <label className={labelClass}>
                        Last Name *
                      </label>

                      <input
                        onChange={onChangeHandler}
                        name="lastName"
                        value={formData.lastName}
                        className={inputClass}
                        type="text"
                        placeholder="Enter last name"
                        autoComplete="family-name"
                        required
                      />
                    </div>
                  </div>

                  {/* Email and Phone */}
                  <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className={labelClass}>
                        Email Address *
                      </label>

                      <input
                        onChange={onChangeHandler}
                        name="email"
                        value={formData.email}
                        className={inputClass}
                        type="email"
                        placeholder="you@example.com"
                        autoComplete="email"
                        required
                      />
                    </div>

                    <div>
                      <label className={labelClass}>
                        Phone Number *
                      </label>

                      <input
                        onChange={onChangeHandler}
                        name="phone"
                        value={formData.phone}
                        className={inputClass}
                        type="tel"
                        inputMode="tel"
                        placeholder="01XXXXXXXXX"
                        autoComplete="tel"
                        required
                      />
                    </div>
                  </div>

                  {/* Street */}
                  <div className="mt-5">
                    <label className={labelClass}>
                      Street Address *
                    </label>

                    <input
                      onChange={onChangeHandler}
                      name="street"
                      value={formData.street}
                      className={inputClass}
                      type="text"
                      placeholder="House, road and area"
                      autoComplete="street-address"
                      required
                    />
                  </div>

                  {/* City and State */}
                  <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className={labelClass}>
                        City *
                      </label>

                      <input
                        onChange={onChangeHandler}
                        name="city"
                        value={formData.city}
                        className={inputClass}
                        type="text"
                        placeholder="Enter city"
                        autoComplete="address-level2"
                        required
                      />
                    </div>

                    <div>
                      <label className={labelClass}>
                        State / Division
                      </label>

                      <input
                        onChange={onChangeHandler}
                        name="state"
                        value={formData.state}
                        className={inputClass}
                        type="text"
                        placeholder="Enter state or division"
                        autoComplete="address-level1"
                      />
                    </div>
                  </div>

                  {/* Zip and Country */}
                  <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className={labelClass}>
                        Postal Code
                      </label>

                      <input
                        onChange={onChangeHandler}
                        name="zipcode"
                        value={formData.zipcode}
                        className={inputClass}
                        type="text"
                        placeholder="Postal code"
                        autoComplete="postal-code"
                      />
                    </div>

                    <div>
                      <label className={labelClass}>
                        Country
                      </label>

                      <input
                        onChange={onChangeHandler}
                        name="country"
                        value={formData.country}
                        className={inputClass}
                        type="text"
                        placeholder="Bangladesh"
                        autoComplete="country-name"
                      />
                    </div>
                  </div>

                </div>
              </section>

              {/* Payment Method */}
              <section className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

                <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-5 sm:px-7">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f5f0e8] text-[#a88961]">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        x="2.5"
                        y="5"
                        width="19"
                        height="14"
                        rx="2"
                      />
                      <path d="M2.5 10h19" />
                    </svg>
                  </div>

                  <div>
                    <h2 className="text-base font-semibold text-gray-900 sm:text-lg">
                      Payment Method
                    </h2>

                    <p className="mt-1 text-xs text-gray-500">
                      Choose how you want to pay.
                    </p>
                  </div>
                </div>

                <div className="space-y-3 p-5 sm:p-7">

                  {/* bKash */}
                  <button
                    type="button"
                    onClick={() => setMethod('bkash')}
                    className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all duration-200 ${
                      method === 'bkash'
                        ? 'border-[#a88961] bg-[#faf7f1] ring-1 ring-[#a88961]'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                        method === 'bkash'
                          ? 'border-[#a88961]'
                          : 'border-gray-300'
                      }`}
                    >
                      {method === 'bkash' && (
                        <span className="h-2.5 w-2.5 rounded-full bg-[#a88961]" />
                      )}
                    </span>

                    <div className="flex h-10 w-14 items-center justify-center rounded-lg border border-gray-100 bg-white p-2">
                      <img
                        src={assets.bkash}
                        alt="bKash"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900">
                        bKash
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        Mobile financial service
                      </p>
                    </div>

                    {method === 'bkash' && (
                      <span className="text-xs font-medium text-[#a88961]">
                        Selected
                      </span>
                    )}
                  </button>

                  {/* Nagad */}
                  <button
                    type="button"
                    onClick={() => setMethod('nogod')}
                    className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all duration-200 ${
                      method === 'nogod'
                        ? 'border-[#a88961] bg-[#faf7f1] ring-1 ring-[#a88961]'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                        method === 'nogod'
                          ? 'border-[#a88961]'
                          : 'border-gray-300'
                      }`}
                    >
                      {method === 'nogod' && (
                        <span className="h-2.5 w-2.5 rounded-full bg-[#a88961]" />
                      )}
                    </span>

                    <div className="flex h-10 w-14 items-center justify-center rounded-lg border border-gray-100 bg-white p-2">
                      <img
                        src={assets.nogod}
                        alt="Nagad"
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900">
                        Nagad
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        Mobile financial service
                      </p>
                    </div>

                    {method === 'nogod' && (
                      <span className="text-xs font-medium text-[#a88961]">
                        Selected
                      </span>
                    )}
                  </button>

                  {/* Cash on Delivery */}
                  <button
                    type="button"
                    onClick={() => setMethod('cod')}
                    className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all duration-200 ${
                      method === 'cod'
                        ? 'border-[#a88961] bg-[#faf7f1] ring-1 ring-[#a88961]'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                        method === 'cod'
                          ? 'border-[#a88961]'
                          : 'border-gray-300'
                      }`}
                    >
                      {method === 'cod' && (
                        <span className="h-2.5 w-2.5 rounded-full bg-[#a88961]" />
                      )}
                    </span>

                    <div className="flex h-10 w-14 items-center justify-center rounded-lg bg-gray-100 text-gray-700">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          x="2"
                          y="5"
                          width="20"
                          height="14"
                          rx="2"
                        />
                        <path
                          strokeLinecap="round"
                          d="M2 10h20M7 15h3"
                        />
                      </svg>
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-900">
                        Cash on Delivery
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        Pay when your order arrives
                      </p>
                    </div>

                    {method === 'cod' && (
                      <span className="text-xs font-medium text-[#a88961]">
                        Selected
                      </span>
                    )}
                  </button>

                </div>
              </section>
            </div>

            {/* RIGHT: ORDER SUMMARY */}
            <aside className="lg:sticky lg:top-6">
              <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

                <div className="border-b border-gray-100 px-5 py-5 sm:px-6">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Order Summary
                  </h2>

                  <p className="mt-1 text-xs text-gray-500">
                    Review your order before confirming.
                  </p>
                </div>

                <div className="p-5 sm:p-6">

                  {/* Existing CartTotal component */}
                  <CartTotal />

                  {/* Delivery Fee */}
                  <div className="mt-4 flex items-start justify-between gap-3 border-t border-gray-100 pt-4">
                    <div>
                      <p className="text-sm text-gray-600">
                        Delivery
                      </p>

                      <p className="mt-1 text-xs text-gray-400">
                        Delivery charges
                      </p>
                    </div>

                    <p className="text-sm font-medium text-gray-900">
                      {delivery_fee === 0 ? 'Free' : `৳${delivery_fee}`}
                    </p>
                  </div>

                  {/* Selected Payment */}
                  <div className="mt-4 flex items-center justify-between gap-3 rounded-lg bg-[#faf9f6] p-3">
                    <span className="text-xs text-gray-500">
                      Payment
                    </span>

                    <span className="text-xs font-semibold text-gray-800">
                      {method === 'cod'
                        ? 'Cash on Delivery'
                        : method === 'bkash'
                        ? 'bKash'
                        : 'Nagad'}
                    </span>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group mt-6 flex w-full items-center justify-center gap-3 rounded-lg bg-[#292720] px-5 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#a88961] focus:outline-none focus:ring-2 focus:ring-[#a88961] focus:ring-offset-2"
                  >
                    Place Order

                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14m-6-6 6 6-6 6"
                      />
                    </svg>
                  </button>

                  <p className="mt-4 text-center text-xs leading-5 text-gray-400">
                    Please confirm that your delivery information is correct.
                  </p>
                </div>
              </div>

              {/* Small Trust Card */}
              <div className="mt-4 flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f5f0e8] text-[#a88961]">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3 5 6v5c0 4.5 3 7.5 7 10 4-2.5 7-5.5 7-10V6l-7-3Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m9 12 2 2 4-4"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-800">
                    Safe & Simple Checkout
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Review your details before placing your order.
                  </p>
                </div>
              </div>
            </aside>

          </div>
        </form>
      </div>
    </main>
  );
};

export default PlaceOrder;