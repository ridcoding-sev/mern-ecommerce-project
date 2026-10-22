import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContex";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);

  const navigate = useNavigate();
  const { token, setToken, setCartItems, getCartCount } =
    useContext(ShopContext);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "COLLECTION", path: "/collection" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    setProfileMenu(false);
    navigate("/login");
  };

  return (
    <nav className="relative z-40 border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/">
          <img
            src={assets.Logo}
            alt="Logo"
            className="w-15 cursor-pointer sm:w-20 md:w-20"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-6 text-sm font-medium text-gray-700 md:flex lg:gap-8">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `group relative flex flex-col items-center gap-1 py-2 transition-colors duration-300 ${
                    isActive
                      ? "text-indigo-600"
                      : "text-gray-700 hover:text-indigo-600"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.name}</span>

                    <span
                      className={`h-[2px] rounded-full bg-indigo-600 transition-all duration-300 ${
                        isActive ? "w-3/5" : "w-0 group-hover:w-3/5"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Logged Out */}
          {!token && (
            <button
              onClick={() => navigate("/login")}
              className="hidden rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:bg-indigo-600 sm:block md:px-7"
            >
              Create Account
            </button>
          )}

          {/* Logged In: Cart */}
          {token && (
            <Link to="/cart" className="relative">
              <img
                src={assets.CartIcon}
                alt="Cart"
                className="w-6 min-w-6"
              />

              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>
          )}

          {/* Logged In: Profile Menu */}
          {token && (
            <div className="relative">
              <button
                onClick={() => setProfileMenu(!profileMenu)}
                className="flex items-center gap-1"
                aria-label="Profile menu"
                aria-expanded={profileMenu}
              >
                <img
                  src={assets.profileIcone}
                  alt="Profile"
                  className="w-6 min-w-6"
                />
              </button>

              {profileMenu && (
                <div className="absolute right-0 top-full z-50 mt-3 w-40 rounded-lg bg-white py-2 text-sm text-gray-600 shadow-lg">
                  <button
                    onClick={() => {
                      setProfileMenu(false);
                      navigate("/orders");
                    }}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                  >
                    My Orders
                  </button>

                  <button
                    onClick={logout}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Mobile Login */}
          {!token && (
            <button
              onClick={() => navigate("/login")}
              className="rounded-full bg-indigo-500 px-4 py-2 text-xs font-medium text-white transition hover:bg-indigo-600 sm:hidden"
            >
              Login
            </button>
          )}

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setVisible(true)}
            className="flex items-center justify-center md:hidden"
            aria-label="Open menu"
            aria-expanded={visible}
          >
            <img
              src={assets.MobileManu}
              alt=""
              className="w-7 cursor-pointer"
            />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 bg-black/30 transition-opacity duration-300 md:hidden ${
          visible
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setVisible(false)}
      >
        <div
          className={`absolute right-0 top-0 h-full w-[82%] max-w-sm overflow-y-auto bg-white shadow-xl transition-transform duration-300 ${
            visible ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          {/* Sidebar Header */}
          <div className="flex items-center justify-between border-b p-5">
            <Link to="/" onClick={() => setVisible(false)}>
              <img src={assets.Logo} alt="Logo" className="w-32" />
            </Link>

            <button
              onClick={() => setVisible(false)}
              aria-label="Close menu"
            >
              <img
                src={assets.CrossDropdown}
                alt=""
                className="w-5 cursor-pointer"
              />
            </button>
          </div>

          {/* Mobile Navigation */}
          <ul className="flex flex-col px-5 py-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => setVisible(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between border-b border-gray-100 py-4 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-indigo-600"
                        : "text-gray-700 hover:text-indigo-600"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.name}</span>

                      <span
                        className={`h-[2px] rounded-full bg-indigo-600 transition-all duration-300 ${
                          isActive ? "w-10" : "w-0"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Logged Out: Mobile Create Account */}
          {!token && (
            <div className="px-5 pt-4">
              <button
                onClick={() => {
                  setVisible(false);
                  navigate("/login");
                }}
                className="w-full rounded-full bg-indigo-500 py-3 font-medium text-white transition hover:bg-indigo-600"
              >
                Create Account
              </button>
            </div>
          )}

          {/* Logged In: Mobile Orders and Logout */}
          {token && (
            <div className="space-y-2 px-5 pt-4">
              <Link
                to="/orders"
                onClick={() => setVisible(false)}
                className="block rounded-lg px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
              >
                My Orders
              </Link>

              <button
                onClick={() => {
                  setVisible(false);
                  logout();
                }}
                className="w-full rounded-lg px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;