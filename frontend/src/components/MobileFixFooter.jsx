import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";

const MobileFixFooter = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menus = [
    {
      name: "Home",
      icon: assets.HomeIcone,
      path: "/",
    },
    {
      name: "Collection",
      icon: assets.collectionIcon,
      path: "/collection",
    },
    {
      name: "Cart",
      icon: assets.CartIcon,
      path: "/cart",
    },
    {
      name: "Profile",
      icon: assets.profileIcone,
      path: "/login",
    },
  ];

  return (
    <div
      className="
      md:hidden
      fixed
      bottom-0
      left-0
      right-0
      bg-white
      border-t
      border-gray-200
      shadow-[0_-2px_20px_rgba(0,0,0,0.08)]
      z-50
      "
    >
      <div className="grid grid-cols-4 h-16">
        {menus.map((item) => (
          <div
            key={item.name}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center justify-center cursor-pointer transition-all duration-300
              
              ${
                location.pathname === item.path
                  ? "text-indigo-600"
                  : "text-gray-500"
              }
            `}
          >
            <img
              src={item.icon}
              alt=""
              className="w-6 h-6 object-contain mb-1"
            />

            <p className="text-[11px] font-medium">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileFixFooter;