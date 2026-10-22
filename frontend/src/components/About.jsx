import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-white via-[#faf7f2] to-[#f0e8dc] px-5 py-16 sm:px-8 md:px-12 md:py-20 lg:px-20">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-[#e7d7c2]/40 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#e8d9c5]/40 blur-3xl" />

      <div className="pointer-events-none absolute right-[15%] top-10 h-40 w-40 rounded-full border border-[#c9b79e]/20" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-20">

        {/* Left Image */}
        <div className="relative mx-auto w-full max-w-lg md:mx-0 md:max-w-none">

          {/* Decorative Border */}
          <div className="absolute -bottom-4 -right-4 h-full w-full border border-[#b9a080]/70 transition-transform duration-500 sm:-bottom-5 sm:-right-5" />

          {/* Main Image */}
          <div className="group relative overflow-hidden bg-[#e9e2d8] shadow-xl shadow-[#4a3824]/10">

            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
              alt="About us"
              className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[400px] md:h-[460px] lg:h-[520px]"
            />

            {/* Image Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#17130f]/65 via-black/5 to-transparent" />

            {/* Image Caption */}
            <div className="absolute bottom-5 left-5 text-white sm:bottom-7 sm:left-7">

              <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-white/80">
                Our Philosophy
              </p>

              <h3 className="font-serif text-2xl italic sm:text-3xl">
                Style with purpose.
              </h3>

              <div className="mt-4 h-px w-16 bg-[#d7bd98]" />

            </div>

          </div>

          {/* Floating Label */}
          <div className="absolute -left-2 top-6 border border-[#eee5d9] bg-white/95 px-4 py-3 shadow-xl shadow-[#4a3824]/10 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 sm:-left-4 sm:top-8 sm:px-6 sm:py-4">

            <p className="text-[10px] uppercase tracking-[0.2em] text-[#927651]">
              Our Promise
            </p>

            <p className="mt-1 text-sm font-semibold text-[#25231f]">
              Quality & Comfort
            </p>

          </div>

        </div>

        {/* Right Content */}
        <div className="relative pt-2 text-center md:text-left">

          {/* Small Title */}
          <div className="mb-6 flex items-center justify-center gap-3 md:justify-start">

            <span className="h-px w-10 bg-[#a88b65]" />

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#927651]">
              About Us
            </p>

            <span className="h-px w-10 bg-[#a88b65] md:hidden" />

          </div>

          {/* Main Heading */}
          <h2 className="mb-6 text-3xl font-semibold leading-tight tracking-tight text-[#25231f] sm:text-4xl md:text-4xl lg:text-5xl">

            More Than Fashion,
            <br />

            <span className="font-serif font-normal italic text-[#a88b65]">
              It's Your Identity.
            </span>

          </h2>

          {/* Heading Decoration */}
          <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-gradient-to-r from-[#a88b65] to-[#e6d6bf] md:mx-0" />

          {/* Description */}
          <p className="mx-auto mb-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base md:mx-0">

            We are a modern eCommerce brand focused on providing high-quality
            products with affordable prices. Our goal is to make your shopping
            experience simple, fast, and enjoyable.

          </p>

          <p className="mx-auto mb-8 max-w-xl text-sm leading-7 text-gray-600 sm:text-base md:mx-0">

            From fashion to lifestyle products, we carefully select items that
            match your style and needs. Customer satisfaction is our top
            priority.

          </p>

          {/* Brand Values */}
          <div className="mb-9 grid grid-cols-1 gap-5 border-y border-[#dcd0c0]/80 py-6 sm:grid-cols-3 sm:gap-4">

            <div className="group rounded-lg px-3 py-2 transition-all duration-300 hover:bg-white/70">

              <p className="mb-1 font-serif text-xl italic text-[#a88b65] transition-transform duration-300 group-hover:-translate-y-1">
                01.
              </p>

              <h3 className="text-sm font-semibold text-[#25231f]">
                Quality First
              </h3>

              <p className="mt-1 text-xs leading-5 text-gray-500">
                Carefully selected products
              </p>

            </div>

            <div className="group rounded-lg px-3 py-2 transition-all duration-300 hover:bg-white/70">

              <p className="mb-1 font-serif text-xl italic text-[#a88b65] transition-transform duration-300 group-hover:-translate-y-1">
                02.
              </p>

              <h3 className="text-sm font-semibold text-[#25231f]">
                Your Comfort
              </h3>

              <p className="mt-1 text-xs leading-5 text-gray-500">
                Shopping made simple
              </p>

            </div>

            <div className="group rounded-lg px-3 py-2 transition-all duration-300 hover:bg-white/70">

              <p className="mb-1 font-serif text-xl italic text-[#a88b65] transition-transform duration-300 group-hover:-translate-y-1">
                03.
              </p>

              <h3 className="text-sm font-semibold text-[#25231f]">
                Your Style
              </h3>

              <p className="mt-1 text-xs leading-5 text-gray-500">
                Fashion that feels like you
              </p>

            </div>

          </div>

          {/* Button */}
          <div className="flex justify-center md:justify-start">

            <Link
              to="/about"
              className="group inline-flex items-center gap-4 bg-[#25231f] px-7 py-4 text-sm font-medium text-white shadow-lg shadow-[#25231f]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#a88b65] hover:shadow-xl hover:shadow-[#a88b65]/20 sm:px-8"
            >
              Learn More

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;