import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { backendUri, currency } from "../App";
import { asserts } from "../assets/assets";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  // All order are fetch here
  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }

    try {
      const response = await axios.post(
        backendUri + "/api/order/list",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (response.data.success) {
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  //Handle the status of the order
  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUri + "/api/order/status",
        {
          orderId,
          status: event.target.value,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // Delete Order
  const deleteOrder = async (orderId) => {
    if (!token) {
      toast.error("Please login first");
      return;
    }

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this order?",
    );

    if (!confirmDelete) return;

    try {
      const response = await axios.post(
        backendUri + "/api/order/delete",
        { orderId },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      );

      if (response.data.success) {
        toast.success(response.data.message);

        // Refresh order list
        await fetchAllOrders();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);

      toast.error(error.response?.data?.message || "Failed to delete order");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  // Status badge color
  const getStatusStyle = (status) => {
    switch (status) {
      case "Order Placed":
        return "bg-blue-50 text-blue-700 border-blue-200";

      case "Packing":
        return "bg-amber-50 text-amber-700 border-amber-200";

      case "Shipped":
        return "bg-purple-50 text-purple-700 border-purple-200";

      case "Out for delivery":
        return "bg-orange-50 text-orange-700 border-orange-200";

      case "Delivered":
        return "bg-green-50 text-green-700 border-green-200";

      default:
        return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/70 p-4 sm:p-6 lg:p-8">
      {/* Page Header */}

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <span className="h-8 w-1.5 rounded-full bg-indigo-600"></span>

            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Order Management
            </h1>
          </div>

          <p className="ml-3.5 text-sm text-gray-500">
            Manage and track all customer orders in one place.
          </p>
        </div>

        {/* Total Orders */}

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
                d="M8 7V3m8 4V3M4 11h16M5 5h14a1 1 0 0 1 1 1v13H4V6a1 1 0 0 1 1-1Z"
              />
            </svg>
          </div>

          <div>
            <p className="text-xs font-medium text-gray-500">Total Orders</p>

            <p className="text-xl font-bold text-gray-900">{orders.length}</p>
          </div>
        </div>
      </div>

      {/* Orders List */}

      <div className="space-y-5">
        {orders.length === 0 ? (
          /* Empty State */

          <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-8 w-8 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l2.5 12.5a2 2 0 0 0 2 1.5h7a2 2 0 0 0 2-1.5L20 8H6"
                />

                <circle cx="10" cy="20" r="1" />

                <circle cx="17" cy="20" r="1" />
              </svg>
            </div>

            <h2 className="text-lg font-semibold text-gray-800">
              No orders found
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Customer orders will appear here when available.
            </p>
          </div>
        ) : (
          orders.map((order, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-indigo-200 hover:shadow-lg"
            >
              {/* Card Header */}

              <div className="flex flex-col gap-3 border-b border-gray-100 bg-gray-50/80 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-indigo-100">
                    <img
                      src={asserts.parcel_icon}
                      alt="Order"
                      className="h-6 w-6 object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">
                      Order #{order._id?.slice(-8).toUpperCase()}
                    </h3>

                    <p className="mt-0.5 text-xs text-gray-500">
                      {new Date(order.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {/* Current Status */}

                <span
                  className={`w-fit rounded-full border px-3 py-1.5 text-xs font-semibold ${getStatusStyle(order.status)}`}
                >
                  <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-current"></span>

                  {order.status}
                </span>
              </div>

              {/* Card Body */}

              <div className="grid grid-cols-1 gap-6 p-5 sm:p-6 lg:grid-cols-2">
                {/* Left Side: Items */}

                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <h4 className="text-sm font-bold text-gray-800">
                      Order Items
                    </h4>

                    <span className="rounded-lg bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                      {order.items?.length || 0} Items
                    </span>
                  </div>

                  <div className="space-y-3">
                    {order.items?.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between gap-3 rounded-xl border border-gray-100 bg-gray-50/70 p-3"
                      >
                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold text-gray-800">
                            {item.name}
                          </p>

                          <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-gray-500">
                            <span>Qty: {item.quantity}</span>

                            {item.size && (
                              <>
                                <span className="text-gray-300">|</span>

                                <span>Size: {item.size}</span>
                              </>
                            )}
                          </div>
                        </div>

                        <div className="shrink-0 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-gray-600 shadow-sm">
                          × {item.quantity}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Payment Information */}

                  <div className="mt-5 rounded-xl border border-indigo-100 bg-indigo-50/60 p-4">
                    <p className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-500">
                      Payment Summary
                    </p>

                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm text-gray-600">
                        Payment Method
                      </span>

                      <span className="text-sm font-semibold text-gray-800">
                        {order.paymentMethod}
                      </span>
                    </div>

                    <div className="mt-3 flex items-center justify-between gap-3">
                      <span className="text-sm text-gray-600">
                        Payment Status
                      </span>

                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                          order.payment
                            ? "bg-green-100 text-green-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {order.payment ? "Paid" : "Pending"}
                      </span>
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-indigo-100 pt-4">
                      <span className="text-sm font-semibold text-gray-700">
                        Total Amount
                      </span>

                      <span className="text-xl font-bold text-indigo-700">
                        {currency}
                        {order.amount}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Customer Information */}

                <div>
                  <h4 className="mb-4 text-sm font-bold text-gray-800">
                    Customer Information
                  </h4>

                  {/* Customer Name */}

                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.7}
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 19.128a9.38 9.38 0 0 0 3.75.872c1.036 0 2.03-.168 2.96-.476M15 19.128v-.003c0-1.76-.7-3.35-1.84-4.52M15 19.128v.003A9.38 9.38 0 0 1 9 21a9.38 9.38 0 0 1-6-2.165v-.003c0-1.76.7-3.35 1.84-4.52M15 19.128a9.38 9.38 0 0 0 3.75.872M15 19.128c0-1.76-.7-3.35-1.84-4.52M15 19.128v.003M9 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm9-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
                        />
                      </svg>
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-gray-500">Customer Name</p>

                      <p className="mt-1 break-words text-sm font-semibold text-gray-800">
                        {order.address?.firstName} {order.address?.lastName}
                      </p>
                    </div>
                  </div>

                  {/* Address */}

                  <div className="mt-5 flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.7}
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"
                        />

                        <circle cx="12" cy="10" r="2.5" />
                      </svg>
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-gray-500">Delivery Address</p>

                      <div className="mt-1 space-y-1 text-sm leading-6 text-gray-700">
                        <p className="break-words">{order.address?.street}</p>

                        <p className="break-words">
                          {[
                            order.address?.city,
                            order.address?.state,
                            order.address?.country,
                            order.address?.zipcode,
                          ]
                            .filter(Boolean)
                            .join(", ")}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}

                  <div className="mt-5 flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.7}
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.09l-4.423-.906a1.125 1.125 0 0 0-1.173.417l-.97 1.294a1.125 1.125 0 0 1-1.21.402 12.035 12.035 0 0 1-7.214-7.214 1.125 1.125 0 0 1 .402-1.21l1.294-.97c.367-.275.54-.738.417-1.173L7.115 3.102a1.125 1.125 0 0 0-1.09-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                        />
                      </svg>
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-gray-500">Phone Number</p>

                      <p className="mt-1 break-words text-sm font-semibold text-gray-800">
                        {order.address?.phone || "Not provided"}
                      </p>
                    </div>
                  </div>

                  {/* Order Status Update */}

                  <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <label
                      htmlFor={`status-${order._id}`}
                      className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500"
                    >
                      Update Order Status
                    </label>

                    <select
                      id={`status-${order._id}`}
                      onChange={(e) => statusHandler(e, order._id)}
                      value={order.status}
                      className="w-full cursor-pointer rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-800 outline-none transition-all hover:border-indigo-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                    >
                      <option value="Order Placed">Order Placed</option>

                      <option value="Packing">Packing</option>

                      <option value="Shipped">Shipped</option>

                      <option value="Out for delivery">Out for delivery</option>

                      <option value="Delivered">Delivered</option>
                    </select>

                    <p className="mt-2 text-xs text-gray-500">
                      Select a status to update the order.
                    </p>
                  </div>
                </div>
              </div>
              {/* Delete Order Button */}

              <div className="flex justify-end px-5 pb-5 sm:px-6">
                <button
                  onClick={() => deleteOrder(order._id)}
                  className="flex items-center gap-2 rounded-xl bg-red-50 px-5 py-2.5 text-sm font-semibold text-red-600 border border-red-200 transition-all duration-200 hover:bg-red-600 hover:text-white hover:border-red-600 active:scale-95"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 7h12m-10 0V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2m-8 0 1 13h6l1-13M10 11v5m4-5v5"
                    />
                  </svg>
                  Delete Order
                </button>
              </div>

              {/* Card Footer */}

              <div className="flex flex-col gap-2 border-t border-gray-100 bg-gray-50/60 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <p className="text-xs text-gray-500">Order ID: {order._id}</p>

                <p className="text-xs font-medium text-gray-600">
                  Thank you for your order management.
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Orders;
