import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const stats = [
    {
      title: 'Total Products',
      value: '—',
      description: 'Products in your store',
      icon: '📦',
      color: 'from-blue-500 to-indigo-600',
      light: 'bg-blue-50',
    },
    {
      title: 'Total Orders',
      value: '—',
      description: 'Orders received',
      icon: '🛍️',
      color: 'from-violet-500 to-purple-600',
      light: 'bg-violet-50',
    },
    {
      title: 'Categories',
      value: '—',
      description: 'Product categories',
      icon: '🗂️',
      color: 'from-emerald-500 to-teal-600',
      light: 'bg-emerald-50',
    },
    {
      title: 'Total Revenue',
      value: '৳ —',
      description: 'Revenue overview',
      icon: '💰',
      color: 'from-orange-400 to-rose-500',
      light: 'bg-orange-50',
    },
  ]

  const quickActions = [
    {
      title: 'Add New Product',
      description: 'Add a new item to your store.',
      icon: '＋',
      link: '/add',
      color: 'bg-indigo-100 text-indigo-700',
    },
    {
      title: 'View All Products',
      description: 'Manage your existing products.',
      icon: '▤',
      link: '/list',
      color: 'bg-emerald-100 text-emerald-700',
    },
    {
      title: 'Manage Orders',
      description: 'Review and update customer orders.',
      icon: '🛒',
      link: '/order',
      color: 'bg-orange-100 text-orange-700',
    },
  ]

  return (
    <div className='min-h-screen bg-slate-50 px-4 py-6 sm:px-6 lg:px-8'>

      <div className='mx-auto max-w-7xl'>

        {/* Welcome Section */}
        <div className='relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-700 via-indigo-600 to-violet-600 p-6 text-white shadow-xl shadow-indigo-100 sm:p-8 lg:p-10'>

          {/* Decorative Background */}
          <div className='absolute -right-10 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl'></div>
          <div className='absolute -bottom-24 right-1/4 h-52 w-52 rounded-full bg-violet-300/20 blur-3xl'></div>

          <div className='relative z-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-center'>

            <div>
              <div className='mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium backdrop-blur-md'>
                <span className='h-2 w-2 animate-pulse rounded-full bg-emerald-300'></span>
                Admin Dashboard
              </div>

              <h1 className='text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl'>
                Welcome Back, Admin! 👋
              </h1>

              <p className='mt-3 max-w-xl text-sm leading-6 text-indigo-100 sm:text-base'>
                Manage your store, organize products, and keep track of your
                orders — everything you need in one place.
              </p>

              <div className='mt-6 flex flex-wrap gap-3'>
                <Link
                  to='/add'
                  className='inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-indigo-700 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-indigo-50'
                >
                  <span className='text-lg'>＋</span>
                  Add New Product
                </Link>

                <Link
                  to='/order'
                  className='inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-white/20'
                >
                  View Orders
                  <span>→</span>
                </Link>
              </div>
            </div>

            <div className='hidden shrink-0 items-center justify-center sm:flex'>
              <div className='flex h-36 w-36 items-center justify-center rounded-full border border-white/20 bg-white/10 text-7xl shadow-2xl backdrop-blur-md lg:h-44 lg:w-44 lg:text-8xl'>
                🏪
              </div>
            </div>

          </div>
        </div>

        {/* Section Heading */}
        <div className='mb-5 flex flex-wrap items-end justify-between gap-3'>
          <div>
            <h2 className='text-xl font-extrabold tracking-tight text-slate-800 sm:text-2xl'>
              Dashboard Overview
            </h2>

            <p className='mt-1 text-sm text-slate-500'>
              A quick overview of your store.
            </p>
          </div>

          <div className='rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600 shadow-sm'>
            Store Overview
          </div>
        </div>

        {/* Statistics Cards */}
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4'>

          {stats.map((item, index) => (
            <div
              key={index}
              className='group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-100/50 sm:p-6'
            >
              <div className='flex items-start justify-between gap-3'>

                <div>
                  <p className='text-sm font-semibold text-slate-500'>
                    {item.title}
                  </p>

                  <h3 className='mt-3 text-3xl font-extrabold tracking-tight text-slate-800'>
                    {item.value}
                  </h3>

                  <p className='mt-2 text-xs text-slate-400'>
                    {item.description}
                  </p>
                </div>

                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${item.light} text-2xl transition-transform duration-300 group-hover:scale-110`}
                >
                  {item.icon}
                </div>
              </div>

              <div
                className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${item.color} transition-all duration-500 group-hover:w-full`}
              ></div>
            </div>
          ))}

        </div>

        {/* Main Content Grid */}
        <div className='mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3'>

          {/* Quick Actions */}
          <div className='rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6 lg:col-span-2'>

            <div className='mb-6'>
              <h2 className='text-lg font-extrabold text-slate-800'>
                Quick Actions ⚡
              </h2>

              <p className='mt-1 text-sm text-slate-500'>
                Shortcuts to manage your store.
              </p>
            </div>

            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3'>

              {quickActions.map((action, index) => (
                <Link
                  key={index}
                  to={action.link}
                  className='group rounded-2xl border border-slate-100 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:bg-indigo-50/40 hover:shadow-lg hover:shadow-indigo-100/50'
                >
                  <div className='flex items-center justify-between'>
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl transition-transform duration-300 group-hover:scale-110 ${action.color}`}
                    >
                      {action.icon}
                    </div>

                    <span className='text-xl text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-indigo-600'>
                      →
                    </span>
                  </div>

                  <h3 className='mt-5 text-sm font-bold text-slate-800'>
                    {action.title}
                  </h3>

                  <p className='mt-2 text-xs leading-5 text-slate-500'>
                    {action.description}
                  </p>
                </Link>
              ))}

            </div>
          </div>

          {/* Store Status */}
          <div className='relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100'>

            <div className='absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-50'></div>

            <div className='relative'>
              <div className='flex items-center justify-between'>
                <h2 className='text-lg font-extrabold text-slate-800'>
                  Store Status
                </h2>

                <span className='text-xl'>🏪</span>
              </div>

              <p className='mt-2 text-sm leading-6 text-slate-500'>
                Your store management shortcuts.
              </p>

              <div className='mt-6 space-y-4'>

                <div className='flex items-center gap-3 rounded-xl bg-slate-50 p-3'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-lg'>
                    📦
                  </div>

                  <div className='min-w-0 flex-1'>
                    <p className='text-sm font-bold text-slate-700'>
                      Product Management
                    </p>

                    <Link
                      to='/list'
                      className='mt-1 inline-block text-xs font-semibold text-indigo-600 hover:text-indigo-800'
                    >
                      Manage products →
                    </Link>
                  </div>
                </div>

                <div className='flex items-center gap-3 rounded-xl bg-slate-50 p-3'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-lg'>
                    🛍️
                  </div>

                  <div className='min-w-0 flex-1'>
                    <p className='text-sm font-bold text-slate-700'>
                      Order Management
                    </p>

                    <Link
                      to='/order'
                      className='mt-1 inline-block text-xs font-semibold text-indigo-600 hover:text-indigo-800'
                    >
                      Manage orders →
                    </Link>
                  </div>
                </div>

              </div>

              <div className='mt-6 rounded-xl border border-indigo-100 bg-indigo-50 p-4'>
                <p className='text-sm font-bold text-indigo-800'>
                  💡 Dashboard Tip
                </p>

                <p className='mt-2 text-xs leading-5 text-indigo-700'>
                  Keep your product information updated and review new orders
                  regularly to manage your store efficiently.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Footer */}
        <div className='mt-8 flex flex-col items-center justify-between gap-2 border-t border-slate-200 py-5 text-center sm:flex-row sm:text-left'>
          <p className='text-xs text-slate-500'>
            © {new Date().getFullYear()} Admin Dashboard. All rights reserved.
          </p>

          <p className='text-xs font-medium text-slate-400'>
            Built for better store management ✨
          </p>
        </div>

      </div>
    </div>
  )
}

export default Home