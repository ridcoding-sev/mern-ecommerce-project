import React from 'react'
import { asserts } from '../assets/assets'

const Navbar = ({ setToken }) => {
  return (

    <div className='sticky top-0 z-50 border-b border-gray-200/80 bg-white/90 shadow-sm backdrop-blur-xl'>

      <div className='flex items-center justify-between gap-4 px-4 py-3 sm:px-6 md:px-[4%] lg:py-4'>

        {/* Left Side: Logo and Title */}

        <div className='flex min-w-0 items-center gap-3 sm:gap-4'>

          {/* Logo */}

          <div className='flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm sm:h-14 sm:w-14'>

            <img
              className='h-full w-full rounded-xl object-contain p-1.5 transition-transform duration-300 hover:scale-105'
              src={asserts.logo}
              alt="Logo"
            />

          </div>


          {/* Brand Information */}

          <div className='min-w-0'>

            <h1 className='truncate text-base font-extrabold tracking-tight text-gray-900 sm:text-xl'>

              Admin Dashboard

            </h1>

            <div className='mt-1 flex items-center gap-2'>

              <span className='relative flex h-2 w-2 shrink-0'>

                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60'></span>

                <span className='relative inline-flex h-2 w-2 rounded-full bg-green-500'></span>

              </span>

              <p className='truncate text-[10px] font-medium text-gray-500 sm:text-xs'>

                Management Panel

              </p>

            </div>

          </div>

        </div>


        {/* Right Side: Admin Status and Logout */}

        <div className='flex shrink-0 items-center gap-2 sm:gap-4'>

          {/* Admin Badge */}

          <div className='hidden items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-2 sm:flex'>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className='h-4 w-4 text-indigo-600'
            >

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
              />

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06-1.8 3.12-.08-.02a1.65 1.65 0 0 0-1.75.36l-.06.06h-3.6l-.06-.06a1.65 1.65 0 0 0-1.75-.36l-.08.02-1.8-3.12.06-.06A1.65 1.65 0 0 0 9.2 15l-.08-.02v-3.96l.08-.02a1.65 1.65 0 0 0-.33-1.82l-.06-.06 1.8-3.12.08.02a1.65 1.65 0 0 0 1.75-.36l.06-.06h3.6l.06.06a1.65 1.65 0 0 0 1.75.36l.08-.02 1.8 3.12-.06.06A1.65 1.65 0 0 0 19.4 11l.08.02v3.96l-.08.02Z"
              />

            </svg>

            <span className='text-xs font-semibold text-indigo-700'>

              Administrator

            </span>

          </div>


          {/* Divider */}

          <div className='hidden h-9 w-px bg-gray-200 sm:block'></div>


          {/* Logout Button */}

          <button
            onClick={() => setToken('')}
            className='group inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-red-100 bg-red-50 px-3 py-2.5 text-xs font-bold text-red-600 transition-all duration-300 hover:border-red-600 hover:bg-red-600 hover:text-white hover:shadow-lg hover:shadow-red-200 active:scale-95 sm:gap-2.5 sm:px-5 sm:py-3 sm:text-sm'
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 sm:h-5 sm:w-5'
            >

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15"
              />

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 15l3-3m0 0-3-3m3 3H9"
              />

            </svg>

            <span>

              Logout

            </span>

          </button>

        </div>

      </div>

    </div>

  )
}

export default Navbar