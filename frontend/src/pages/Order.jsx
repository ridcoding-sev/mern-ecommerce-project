import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContex';
import Title from '../components/Title';
import axios from 'axios';
import { toast } from 'react-toastify';

const Orders = () => {

  const { products, currency, backendUrl, token } = useContext(ShopContext);

  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load Order Data
  const loadOrderData = async () => {
    try {

      if (!token) {
        setLoading(false);
        return null;
      }

      setLoading(true);

      const response = await axios.post(
        backendUrl + '/api/order/userorders',
        {},
        { headers: { token } }
      );

      if (response.data.success) {

        let allOrdersItem = [];

        response.data.orders.map((order) => {

          order.items.map((item) => {

            item['status'] = order.status;
            item['payment'] = order.payment;
            item['paymentMethod'] = order.paymentMethod;
            item['date'] = order.date;

            allOrdersItem.push(item);

          });

        });

        setOrderData(allOrdersItem.reverse());

      }

    } catch (error) {

      console.log(error);
      toast.error(error.message);

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  // Status Color
  const getStatusStyle = (status) => {

    const currentStatus = status?.toLowerCase();

    if (currentStatus === 'delivered') {
      return {
        dot: 'bg-emerald-500',
        badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      };
    }

    if (currentStatus === 'cancelled' || currentStatus === 'canceled') {
      return {
        dot: 'bg-red-500',
        badge: 'bg-red-50 text-red-700 border-red-200',
      };
    }

    if (currentStatus === 'shipped' || currentStatus === 'out for delivery') {
      return {
        dot: 'bg-blue-500',
        badge: 'bg-blue-50 text-blue-700 border-blue-200',
      };
    }

    if (currentStatus === 'processing' || currentStatus === 'packing') {
      return {
        dot: 'bg-amber-500',
        badge: 'bg-amber-50 text-amber-700 border-amber-200',
      };
    }

    return {
      dot: 'bg-orange-500',
      badge: 'bg-orange-50 text-orange-700 border-orange-200',
    };

  };

  return (

    <main className="min-h-screen bg-[#f8f7f4]">

      {/* =========================
          PAGE HEADER
      ========================== */}

      <section className="relative overflow-hidden border-b border-[#e8e3da] bg-white">

        {/* Background Decorations */}
        <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-[#e9dfcf]/40 blur-3xl" />

        <div className="pointer-events-none absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-[#f0e8dc]/60 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">

            {/* Heading */}
            <div>

              <div className="mb-5 flex items-center gap-3">

                <span className="h-px w-9 bg-[#a88961]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#a88961] sm:text-xs">
                  Your Shopping Journey
                </p>

              </div>

              <h1 className="text-3xl font-semibold tracking-tight text-[#26241f] sm:text-4xl md:text-5xl">

                My

                <span className="ml-3 font-serif font-normal italic text-[#a88961]">
                  Orders.
                </span>

              </h1>

              <p className="mt-4 max-w-lg text-sm leading-7 text-gray-500 sm:text-base">

                Keep track of your purchases, check order status,
                and revisit the products you love.

              </p>

            </div>

            {/* Order Summary */}
            <div className="flex items-center gap-4 self-start border border-[#e8e0d5] bg-[#faf8f4] px-5 py-4 md:self-auto">

              <div className="flex h-12 w-12 items-center justify-center bg-[#eee6d9] text-xl text-[#a88961]">
                ♧
              </div>

              <div>

                <p className="text-xs text-gray-500">
                  Total Order Items
                </p>

                <p className="mt-1 text-2xl font-semibold text-[#26241f]">
                  {orderData.length.toString().padStart(2, '0')}
                </p>

              </div>

            </div>

          </div>

          {/* Breadcrumb */}
          <div className="mt-8 flex items-center gap-2 text-xs text-gray-400">

            <span>Home</span>

            <span>/</span>

            <span className="text-[#a88961]">
              My Orders
            </span>

          </div>

        </div>

      </section>


      {/* =========================
          ORDER LIST
      ========================== */}

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:px-12">

        {/* Section Title */}
        <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">

          <div>

            <h2 className="text-xl font-semibold text-[#26241f] sm:text-2xl">
              Order History
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Your recent purchases and their current status.
            </p>

          </div>

          <button
            onClick={loadOrderData}
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 self-start border border-[#ded6ca] bg-white px-4 py-2.5 text-sm font-medium text-[#555047] transition-all duration-300 hover:border-[#a88961] hover:text-[#a88961] disabled:cursor-not-allowed disabled:opacity-50 sm:self-auto"
          >

            <span className={loading ? 'animate-spin' : ''}>
              ↻
            </span>

            Refresh Orders

          </button>

        </div>


        {/* Loading State */}
        {loading ? (

          <div className="space-y-5">

            {[1, 2, 3].map((item) => (

              <div
                key={item}
                className="animate-pulse border border-[#eae5dd] bg-white p-5 sm:p-7"
              >

                <div className="flex gap-5">

                  <div className="h-28 w-24 shrink-0 bg-[#eeeae3] sm:h-32 sm:w-28" />

                  <div className="flex-1 space-y-4 py-2">

                    <div className="h-4 w-2/3 bg-[#eeeae3]" />

                    <div className="h-3 w-1/3 bg-[#eeeae3]" />

                    <div className="h-3 w-1/2 bg-[#eeeae3]" />

                    <div className="h-3 w-1/4 bg-[#eeeae3]" />

                  </div>

                </div>

              </div>

            ))}

          </div>

        ) : orderData.length === 0 ? (

          /* Empty State */
          <div className="border border-[#e9e3d9] bg-white px-5 py-16 text-center sm:px-10 sm:py-24">

            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#f5f0e8] text-4xl text-[#a88961]">
              ♡
            </div>

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.25em] text-[#a88961]">
              Your Journey Starts Here
            </p>

            <h3 className="mt-3 text-2xl font-semibold text-[#26241f] sm:text-3xl">
              No Orders Yet
            </h3>

            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-gray-500">

              You haven't placed an order yet. Explore our collection
              and discover something that matches your style.

            </p>

            <a
              href="/collection"
              className="mt-8 inline-flex items-center gap-4 bg-[#292720] px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-[#a88961]"
            >

              Explore Collection

              <span className="text-lg">
                →
              </span>

            </a>

          </div>

        ) : (

          /* Orders */
          <div className="space-y-5">

            {orderData.map((item, index) => {

              const statusStyle = getStatusStyle(item.status);

              return (

                <article
                  key={index}
                  className="group relative overflow-hidden border border-[#e9e4dc] bg-white transition-all duration-300 hover:border-[#d5c3a9] hover:shadow-xl hover:shadow-[#4a3824]/5"
                >

                  {/* Top Accent */}
                  <div className="h-1 w-full bg-gradient-to-r from-[#a88961] via-[#dfcdb2] to-transparent" />

                  <div className="p-5 sm:p-7">

                    {/* Order Header */}
                    <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-[#eeeae3] pb-5">

                      <div>

                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                          Order Item
                        </p>

                        <p className="mt-1 text-sm font-semibold text-[#26241f]">
                          #{String(index + 1).padStart(4, '0')}
                        </p>

                      </div>

                      <div className="flex flex-wrap items-center gap-2">

                        {/* Status Badge */}
                        <span
                          className={`inline-flex items-center gap-2 border px-3 py-2 text-xs font-medium ${statusStyle.badge}`}
                        >

                          <span
                            className={`h-2 w-2 rounded-full ${statusStyle.dot}`}
                          />

                          {item.status || 'Pending'}

                        </span>

                        <span className="border border-[#eee8de] bg-[#faf8f4] px-3 py-2 text-xs text-gray-600">
                          {item.paymentMethod || 'Payment'}
                        </span>

                      </div>

                    </div>


                    {/* Main Order Content */}
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                      {/* Product Information */}
                      <div className="flex min-w-0 flex-1 gap-4 sm:gap-6">

                        {/* Product Image */}
                        <div className="relative h-32 w-24 shrink-0 overflow-hidden bg-[#f4f0e9] sm:h-40 sm:w-32">

                          <img
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            src={
                              Array.isArray(item.image)
                                ? item.image[0]
                                : item.image
                            }
                            alt={item.name || 'Product'}
                            loading="lazy"
                          />

                        </div>

                        {/* Product Details */}
                        <div className="flex min-w-0 flex-1 flex-col justify-center">

                          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#a88961]">
                            Fashion Collection
                          </p>

                          <h3 className="mt-2 break-words text-base font-semibold leading-snug text-[#26241f] transition-colors duration-300 group-hover:text-[#a88961] sm:text-xl">

                            {item.name}

                          </h3>

                          {/* Price */}
                          <p className="mt-3 text-lg font-semibold text-[#292720] sm:text-xl">

                            {currency}{item.price}

                          </p>

                          {/* Product Variants */}
                          <div className="mt-3 flex flex-wrap items-center gap-2">

                            <span className="border border-[#e9e2d8] bg-[#faf8f4] px-3 py-1.5 text-xs text-gray-600">

                              Qty: {item.quantity}

                            </span>

                            <span className="border border-[#e9e2d8] bg-[#faf8f4] px-3 py-1.5 text-xs text-gray-600">

                              Size: {item.size || 'N/A'}

                            </span>

                          </div>

                        </div>

                      </div>


                      {/* Order Meta */}
                      <div className="grid grid-cols-2 gap-4 border-t border-[#eeeae3] pt-5 sm:grid-cols-3 lg:w-[310px] lg:shrink-0 lg:grid-cols-2 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">

                        {/* Order Date */}
                        <div>

                          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400">
                            Order Date
                          </p>

                          <p className="mt-2 text-sm font-medium text-[#39362f]">

                            {item.date
                              ? new Date(item.date).toLocaleDateString()
                              : 'N/A'}

                          </p>

                        </div>

                        {/* Payment */}
                        <div>

                          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400">
                            Payment
                          </p>

                          <p className="mt-2 text-sm font-medium text-[#39362f]">

                            {item.paymentMethod || 'N/A'}

                          </p>

                          <p
                            className={`mt-1 text-xs ${
                              item.payment
                                ? 'text-emerald-600'
                                : 'text-amber-600'
                            }`}
                          >

                            {item.payment ? 'Payment Completed' : 'Payment Pending'}

                          </p>

                        </div>

                        {/* Track Button */}
                        <div className="col-span-2 flex items-center sm:col-span-1 lg:col-span-2">

                          <button
                            onClick={loadOrderData}
                            className="group/btn inline-flex w-full items-center justify-center gap-3 border border-[#d9cbb8] px-4 py-3 text-sm font-medium text-[#292720] transition-all duration-300 hover:border-[#292720] hover:bg-[#292720] hover:text-white"
                          >

                            Track Order

                            <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                              →
                            </span>

                          </button>

                        </div>

                      </div>

                    </div>

                  </div>

                </article>

              );

            })}

          </div>

        )}


        {/* Bottom Note */}
        {!loading && orderData.length > 0 && (

          <div className="mt-8 flex flex-col items-start justify-between gap-3 border border-[#e9e3d9] bg-white px-5 py-5 sm:flex-row sm:items-center sm:px-7">

            <div className="flex items-start gap-3">

              <span className="mt-0.5 text-lg text-[#a88961]">
                ♡
              </span>

              <div>

                <p className="text-sm font-medium text-[#292720]">
                  Need help with an order?
                </p>

                <p className="mt-1 text-xs leading-6 text-gray-500">
                  Contact our support team if you have any questions about your purchase.
                </p>

              </div>

            </div>

            <a
              href="/contact"
              className="shrink-0 text-sm font-semibold text-[#a88961] transition-colors hover:text-[#292720]"
            >
              Contact Support →
            </a>

          </div>

        )}

      </section>

    </main>

  );

};

export default Orders;