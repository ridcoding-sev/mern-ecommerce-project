import React from 'react'
import { NavLink } from 'react-router-dom'
import { asserts } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='sticky top-[73px] min-h-[calc(100vh-73px)] w-[72px] shrink-0 border-r border-gray-200 bg-white sm:w-[18%] sm:min-w-[180px]'>

      <div className='flex flex-col gap-2 px-2 pt-6 sm:gap-3 sm:px-4 md:px-[12%]'>

        {/* Add Items */}
        <NavLink
          to="/add"
          className={({ isActive }) =>
            `group relative flex items-center gap-3 overflow-hidden rounded-xl border px-3 py-3 transition-all duration-300 sm:px-4 ${
              isActive
                ? 'border-indigo-200 bg-indigo-50 text-indigo-700 shadow-sm'
                : 'border-transparent text-gray-600 hover:border-gray-200 hover:bg-gray-50 hover:text-gray-900'
            }`
          }
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <span className='absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-indigo-600'></span>
              )}

              <img
                className='h-5 w-5 shrink-0 transition-transform duration-300 group-hover:scale-110'
                src={asserts.addIcone}
                alt="Add Items"
              />

              <p className='hidden whitespace-nowrap text-sm font-semibold md:block'>
                Add Items
              </p>
            </>
          )}
        </NavLink>

        {/* List Items */}
        <NavLink
          to="/list"
          className={({ isActive }) =>
            `group relative flex items-center gap-3 overflow-hidden rounded-xl border px-3 py-3 transition-all duration-300 sm:px-4 ${
              isActive
                ? 'border-indigo-200 bg-indigo-50 text-indigo-700 shadow-sm'
                : 'border-transparent text-gray-600 hover:border-gray-200 hover:bg-gray-50 hover:text-gray-900'
            }`
          }
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <span className='absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-indigo-600'></span>
              )}

              <img
                className='h-5 w-5 shrink-0 transition-transform duration-300 group-hover:scale-110'
                src={asserts.oderList}
                alt="List Items"
              />

              <p className='hidden whitespace-nowrap text-sm font-semibold md:block'>
                List Items
              </p>
            </>
          )}
        </NavLink>

        {/* Orders */}
        <NavLink
          to="/order"
          className={({ isActive }) =>
            `group relative flex items-center gap-3 overflow-hidden rounded-xl border px-3 py-3 transition-all duration-300 sm:px-4 ${
              isActive
                ? 'border-indigo-200 bg-indigo-50 text-indigo-700 shadow-sm'
                : 'border-transparent text-gray-600 hover:border-gray-200 hover:bg-gray-50 hover:text-gray-900'
            }`
          }
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <span className='absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-indigo-600'></span>
              )}

              <img
                className='h-5 w-5 shrink-0 transition-transform duration-300 group-hover:scale-110'
                src={asserts.oderIcone}
                alt="Orders"
              />

              <p className='hidden whitespace-nowrap text-sm font-semibold md:block'>
                Orders
              </p>
            </>
          )}
        </NavLink>
      

      {/* Contacts */}
<NavLink
  to="/contacts"
  className={({ isActive }) =>
    `group relative flex items-center gap-3 overflow-hidden rounded-xl border px-3 py-3 transition-all duration-300 sm:px-4 ${
      isActive
        ? 'border-indigo-200 bg-indigo-50 text-indigo-700 shadow-sm'
        : 'border-transparent text-gray-600 hover:border-gray-200 hover:bg-gray-50 hover:text-gray-900'
    }`
  }
>
  {({ isActive }) => (
    <>
      {isActive && (
        <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-indigo-600"></span>
      )}

      <img
        className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:scale-110"
        src={asserts.contactIcon}
        alt="Contacts"
      />

      <p className="hidden whitespace-nowrap text-sm font-semibold md:block">
        Contacts
      </p>
    </>
  )}
</NavLink>
  

      </div>
    </div>
  )
}

export default Sidebar