import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const images = [
  "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85",
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#f8f7f4] px-5 py-10 sm:px-8 md:px-12 md:py-16 lg:px-20 lg:py-20">

      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#e9e2d8]/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-20">

        {/* Left Content */}
        <div className="order-2 md:order-1">

          {/* Eyebrow */}
          <div className="mb-6 flex items-center justify-center gap-3 md:justify-start">
            <span className="h-px w-10 bg-[#a88b65]" />

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#927651]">
              New Collection 2026
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="mx-auto mb-6 max-w-xl text-center text-4xl font-semibold leading-[1.15] tracking-tight text-[#25231f] sm:text-5xl md:mx-0 md:text-left md:text-5xl lg:text-6xl xl:text-7xl">

            Discover Your
            <br />

            <span className="font-serif font-normal italic text-[#a88b65]">
              Perfect Style
            </span>

          </h1>

          {/* Description */}
          <p className="mx-auto mb-8 max-w-md text-center text-sm leading-7 text-gray-600 sm:text-base md:mx-0 md:text-left">

            Redefine your everyday look with thoughtfully selected fashion.
            Discover timeless pieces that bring confidence, comfort, and
            effortless style to every moment.

          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">

            <Link
              to="/collection"
              className="group inline-flex items-center gap-4 bg-[#25231f] px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-[#a88b65] sm:px-8"
            >
              Shop Collection

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              to="/collection"
              className="border-b border-[#b9a58c] py-2 text-sm font-medium text-[#25231f] transition-colors duration-300 hover:text-[#a88b65]"
            >
              Explore Styles
            </Link>

          </div>

          {/* Bottom Information */}
          <div className="mt-10 border-t border-[#e4dfd7] pt-6 sm:mt-12">

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:justify-start">

              <div>
                <p className="text-lg font-semibold text-[#25231f]">
                  Timeless
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Everyday elegance
                </p>
              </div>

              <div className="h-10 w-px bg-[#ded7cc]" />

              <div>
                <p className="text-lg font-semibold text-[#25231f]">
                  Curated
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Styles you'll love
                </p>
              </div>

              <div className="h-10 w-px bg-[#ded7cc]" />

              <div>
                <p className="text-lg font-semibold text-[#25231f]">
                  Effortless
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Made for you
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Right Image Slider */}
        <div className="order-1 md:order-2">

          <div className="relative mx-auto w-full max-w-lg md:max-w-none">

            {/* Main Image */}
            <div className="relative overflow-hidden bg-[#e9e2d8]">

              <img
                key={current}
                src={images[current]}
                alt={`Fashion collection ${current + 1}`}
                className="h-[320px] w-full object-cover animate-fade-in sm:h-[420px] md:h-[460px] lg:h-[540px]"
              />

              {/* Image Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Top Badge */}
              <div className="absolute left-4 top-4 bg-white/90 px-4 py-3 backdrop-blur-sm sm:left-6 sm:top-6">

                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500">
                  The Edit
                </p>

                <p className="mt-1 text-sm font-semibold text-[#25231f]">
                  New Season 
                </p>

              </div>

              {/* Bottom Image Content */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white sm:bottom-7 sm:left-7 sm:right-7">

                <div>
                  <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-white/80">
                    Discover the collection
                  </p>

                  <h2 className="font-serif text-2xl italic sm:text-3xl">
                    Style that speaks.
                  </h2>
                </div>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/70 text-xl">
                  ↗
                </div>

              </div>

            </div>

            {/* Slider Controls */}
            <div className="mt-5 flex items-center justify-between">

              {/* Slide Counter */}
              <div className="flex items-center gap-3">

                <span className="text-sm font-semibold text-[#25231f]">
                  0{current + 1}
                </span>

                <div className="h-px w-10 bg-[#c9b79e]" />

                <span className="text-sm text-gray-400">
                  0{images.length}
                </span>

              </div>

              {/* Clickable Dots */}
              <div className="flex items-center gap-2">

                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={current === index ? "true" : undefined}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === current
                        ? "w-8 bg-[#a88b65]"
                        : "w-2 bg-[#d6d0c7] hover:bg-[#a88b65]"
                    }`}
                  />
                ))}

              </div>

              {/* Next Slide */}
              <button
                onClick={() =>
                  setCurrent((prev) => (prev + 1) % images.length)
                }
                aria-label="Next slide"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ded7cc] text-lg text-[#25231f] transition-all duration-300 hover:border-[#25231f] hover:bg-[#25231f] hover:text-white"
              >
                →
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;