import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      number: "01",
      title: "Quality First",
      description:
        "We focus on quality, comfort, and thoughtful product selection to make every purchase worthwhile.",
      icon: "✦",
    },
    {
      number: "02",
      title: "Customer First",
      description:
        "Your satisfaction matters to us. We aim to make every step of your shopping journey simple and enjoyable.",
      icon: "♡",
    },
    {
      number: "03",
      title: "Style for Everyone",
      description:
        "We believe personal style should be accessible, expressive, and comfortable for everyday life.",
      icon: "✧",
    },
    {
      number: "04",
      title: "Honest Shopping",
      description:
        "We aim to provide clear product information, transparent communication, and dependable service.",
      icon: "◇",
    },
  ];

  const benefits = [
    {
      number: "01",
      title: "Carefully Selected Products",
      description:
        "Explore products chosen with attention to style, usability, comfort, and everyday needs.",
      icon: "✦",
    },
    {
      number: "02",
      title: "A Simple Shopping Experience",
      description:
        "Browse collections, discover your favorites, and complete your order through a straightforward shopping process.",
      icon: "↗",
    },
    {
      number: "03",
      title: "Support When You Need It",
      description:
        "Have a question about a product or an order? Our goal is to provide helpful and clear customer support.",
      icon: "♡",
    },
  ];

  const shoppingSteps = [
    {
      number: "01",
      title: "Explore",
      description:
        "Discover products and browse collections that match your personal style.",
    },
    {
      number: "02",
      title: "Choose",
      description:
        "Review product details and select the items that are right for you.",
    },
    {
      number: "03",
      title: "Order",
      description:
        "Provide the required details and complete your order through the available checkout options.",
    },
    {
      number: "04",
      title: "Enjoy",
      description:
        "Stay informed about your order and enjoy your shopping experience.",
    },
  ];

  const faqs = [
    {
      question: "What can I find in your store?",
      answer:
        "Our store focuses on fashion and lifestyle products. Browse our available collections to discover the items currently offered.",
    },
    {
      question: "How can I place an order?",
      answer:
        "Visit the shop, select a product, review its details, and follow the checkout process to submit your order.",
    },
    {
      question: "How can I ask about a product?",
      answer:
        "You can contact our team with your product questions, including questions about available options, product details, and ordering.",
    },
    {
      question: "How can I get help with my order?",
      answer:
        "Contact our support team and share your order information so we can better understand your question and help you.",
    },
  ];

  return (
    <main className="overflow-hidden bg-white text-[#24221e]">

      {/* =====================================================
          1. HERO SECTION
      ====================================================== */}

      <section className="relative isolate overflow-hidden bg-[#f4f0e9]">

        {/* Background Decoration */}
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#d8c5aa]/30 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#d5c2a6]/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 md:grid-cols-2 md:gap-12 md:px-12 md:py-24 lg:gap-20 lg:px-20 lg:py-28">

          {/* Hero Content */}
          <div className="relative z-10 text-center md:text-left">

            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#cdbba2] bg-white/60 px-4 py-2">

              <span className="h-2 w-2 rounded-full bg-[#a88961]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#806849] sm:text-xs">
                Discover Our Story
              </span>

            </div>

            <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl">

              Fashion Is More
              <br />

              Than What You

              <span className="mt-1 block font-serif font-normal italic text-[#a88961]">
                Wear.
              </span>

            </h1>

            <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#706b63] sm:text-base sm:leading-8 md:mx-0">

              It's how you express yourself, celebrate your individuality,
              and feel confident in your own skin. We're here to help you
              discover a style that feels uniquely yours.

            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row md:justify-start">

              <Link
                to="/collection"
                className="group inline-flex items-center justify-center gap-4 bg-[#292720] px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-[#a88961]"
              >
                Explore Collection

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>

              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center border border-[#b9a78e] px-7 py-4 text-sm font-medium text-[#292720] transition-all duration-300 hover:border-[#292720] hover:bg-white"
              >
                Get in Touch
              </Link>

            </div>

            {/* Small Highlights */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-[#777064] md:justify-start">

              <span className="flex items-center gap-2">
                <span className="text-[#a88961]">✦</span>
                Thoughtful Selection
              </span>

              <span className="hidden h-4 w-px bg-[#c8b9a4] sm:block" />

              <span className="flex items-center gap-2">
                <span className="text-[#a88961]">✦</span>
                Style Meets Comfort
              </span>

            </div>

          </div>

          {/* Hero Image */}
          <div className="relative mx-auto w-full max-w-xl md:max-w-none">

            {/* Decorative Shape */}
            <div className="absolute -right-3 -top-3 h-full w-full border border-[#bca486] sm:-right-5 sm:-top-5" />

            <div className="group relative overflow-hidden bg-[#e6ddd0]">

              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=85"
                alt="Fashion collection and personal style"
                className="h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[460px] md:h-[480px] lg:h-[590px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/5" />

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 text-white sm:bottom-8 sm:left-8 sm:right-8">

                <div>
                  <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-white/80">
                    Our Philosophy
                  </p>

                  <h2 className="font-serif text-2xl italic sm:text-3xl">
                    Be Yourself.
                  </h2>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/50 text-xl">
                  ↗
                </div>

              </div>

            </div>

            {/* Floating Note */}
            <div className="absolute -bottom-5 left-3 max-w-[230px] border border-[#e8dfd3] bg-white px-5 py-4 shadow-xl sm:-bottom-6 sm:left-8 sm:px-7 sm:py-5">

              <p className="font-serif text-2xl italic text-[#a88961]">
                Your Style.
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Your Story. Your Identity.
              </p>

            </div>

          </div>

        </div>

        {/* Bottom Label */}
        <div className="relative border-t border-[#dfd5c7]">

          <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-3 px-5 py-5 text-center sm:flex-row sm:px-8 sm:text-left md:px-12 lg:px-20">

            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#71695d] sm:text-xs">
              Designed Around Your Everyday Life
            </p>

            <p className="text-xs text-[#71695d]">
              Discover pieces that feel like you.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          2. OUR STORY
      ====================================================== */}

      <section className="relative bg-white px-5 py-20 sm:px-8 sm:py-24 md:px-12 lg:px-20 lg:py-28">

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">

          {/* Story Image */}
          <div className="relative">

            <div className="absolute -left-4 -top-4 h-28 w-28 border-l border-t border-[#b69a73] sm:-left-6 sm:-top-6" />

            <div className="group relative overflow-hidden bg-[#f3eee6]">

              <img
                src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1100&q=85"
                alt="A carefully arranged fashion collection"
                loading="lazy"
                className="h-[330px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[440px] lg:h-[510px]"
              />

            </div>

            <div className="absolute -bottom-5 -right-2 bg-[#292720] px-5 py-4 text-white shadow-xl sm:-right-5 sm:px-8 sm:py-6">

              <p className="font-serif text-2xl italic sm:text-3xl">
                Made for You
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/65">
                Comfort · Style · Confidence
              </p>

            </div>

          </div>

          {/* Story Content */}
          <div className="pt-5 md:pt-0">

            <div className="mb-5 flex items-center justify-center gap-3 md:justify-start">

              <span className="h-px w-10 bg-[#a88961]" />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a88961]">
                Who We Are
              </p>

            </div>

            <h2 className="text-center text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-left lg:text-5xl">

              A Story Built Around

              <span className="mt-2 block font-serif font-normal italic text-[#a88961]">
                You and Your Style.
              </span>

            </h2>

            <p className="mt-7 text-sm leading-8 text-gray-600 sm:text-base">

              We believe shopping should be more than simply choosing a
              product. It should be an opportunity to discover your
              preferences, express your personality, and find pieces that
              fit naturally into your everyday life.

            </p>

            <p className="mt-5 text-sm leading-8 text-gray-600 sm:text-base">

              Our store brings together fashion and lifestyle products
              with a focus on thoughtful selection, accessible shopping,
              and a customer-friendly experience. Whether you're updating
              your wardrobe or looking for something new, we want you to
              shop with confidence.

            </p>

            <p className="mt-5 text-sm leading-8 text-gray-600 sm:text-base">

              As we continue to grow, our goal remains simple: to make
              discovering products easier and help every customer find
              something that suits their needs and personal style.

            </p>

            <div className="mt-8 border-l-2 border-[#b69a73] pl-5">

              <p className="font-serif text-xl italic leading-relaxed text-[#4b4439] sm:text-2xl">
                "Great style isn't about following every trend. It's about
                finding what feels right for you."
              </p>

            </div>

            <Link
              to="/collection"
              className="group mt-8 inline-flex items-center gap-3 border-b border-[#a88961] pb-2 text-sm font-semibold text-[#292720] transition-colors hover:text-[#a88961]"
            >
              Discover Our Collection

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          3. BRAND STATEMENT
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#292720] px-5 py-16 text-white sm:px-8 sm:py-20 md:px-12 lg:px-20">

        <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border border-white/10" />

        <div className="pointer-events-none absolute -right-10 -top-14 h-60 w-60 rounded-full border border-white/10" />

        <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#a88961]/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c7ad87]">
            What We Believe
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl font-serif text-3xl italic leading-tight sm:text-4xl md:text-5xl lg:text-6xl">

            Confidence Begins When
            <span className="block text-[#c7ad87]">
              You Feel Like Yourself.
            </span>

          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/65 sm:text-base">

            Fashion should inspire you, not define you. We want to make
            it easier to explore your taste, embrace your individuality,
            and feel comfortable with the choices you make.

          </p>

          <div className="mx-auto mt-9 h-px w-20 bg-[#c7ad87]" />

        </div>

      </section>


      {/* =====================================================
          4. OUR VALUES
      ====================================================== */}

      <section className="bg-[#f8f6f2] px-5 py-20 sm:px-8 sm:py-24 md:px-12 lg:px-20 lg:py-28">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">

            <div className="mb-5 flex items-center justify-center gap-3">

              <span className="h-px w-8 bg-[#a88961]" />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a88961]">
                The Things That Matter
              </p>

              <span className="h-px w-8 bg-[#a88961]" />

            </div>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">

              Our Values, Our

              <span className="font-serif font-normal italic text-[#a88961]">
                {" "}Promise.
              </span>

            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">

              Every part of our shopping experience should reflect the
              principles we believe in: quality, simplicity, individuality,
              and genuine care for our customers.

            </p>

          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {values.map((value) => (

              <article
                key={value.number}
                className="group relative overflow-hidden border border-[#e7dfd4] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#c9b08c] hover:shadow-xl hover:shadow-[#6c5130]/5 sm:p-8"
              >

                <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-[#f6f0e6] transition-transform duration-500 group-hover:scale-150" />

                <div className="relative">

                  <div className="flex items-center justify-between">

                    <span className="font-serif text-3xl italic text-[#b49a75]">
                      {value.number}
                    </span>

                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e4d8c6] text-xl text-[#a88961] transition-all duration-300 group-hover:border-[#292720] group-hover:bg-[#292720] group-hover:text-white">
                      {value.icon}
                    </span>

                  </div>

                  <h3 className="mt-9 text-lg font-semibold text-[#292720]">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-500">
                    {value.description}
                  </p>

                  <div className="mt-7 h-px w-10 bg-[#b49a75] transition-all duration-300 group-hover:w-full" />

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          5. WHY CHOOSE US
      ====================================================== */}

      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 md:px-12 lg:px-20 lg:py-28">

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">

          {/* Left Content */}
          <div>

            <div className="mb-5 flex items-center justify-center gap-3 md:justify-start">

              <span className="h-px w-10 bg-[#a88961]" />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a88961]">
                The Difference
              </p>

            </div>

            <h2 className="text-center text-3xl font-semibold leading-tight sm:text-4xl md:text-left lg:text-5xl">

              A Better Way to

              <span className="mt-2 block font-serif font-normal italic text-[#a88961]">
                Shop and Discover.
              </span>

            </h2>

            <p className="mt-6 text-sm leading-8 text-gray-600 sm:text-base">

              We want your experience with our store to feel straightforward
              from the moment you start browsing. That means making product
              discovery simple, presenting useful information, and helping
              you find what you're looking for.

            </p>

            <div className="mt-9 space-y-7">

              {benefits.map((benefit) => (

                <div
                  key={benefit.number}
                  className="group flex gap-5"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#e5d8c5] bg-[#f8f5ef] font-serif text-lg italic text-[#a88961] transition-all duration-300 group-hover:bg-[#292720] group-hover:text-white">
                    {benefit.number}
                  </div>

                  <div>

                    <h3 className="text-base font-semibold text-[#292720]">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-gray-500">
                      {benefit.description}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Right Image */}
          <div className="relative">

            <div className="group relative overflow-hidden bg-[#f2ece2]">

              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85"
                alt="Modern fashion and wardrobe inspiration"
                loading="lazy"
                className="h-[350px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[470px] lg:h-[580px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#1e1a15]/70 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-9">

                <p className="text-[10px] uppercase tracking-[0.25em] text-white/70">
                  A Thoughtful Experience
                </p>

                <h3 className="mt-3 max-w-sm font-serif text-3xl italic leading-tight sm:text-4xl">
                  Find What Feels Right.
                </h3>

                <p className="mt-4 max-w-md text-sm leading-7 text-white/75">
                  Discover products that complement your preferences and
                  bring a little more inspiration to everyday life.
                </p>

              </div>

            </div>

            {/* Decorative Corner */}
            <div className="absolute -bottom-4 -left-4 -z-10 h-28 w-28 border-b border-l border-[#b69a73] sm:-bottom-6 sm:-left-6" />

          </div>

        </div>

      </section>


      {/* =====================================================
          6. OUR SHOPPING EXPERIENCE
      ====================================================== */}

      <section className="bg-[#f4f0e9] px-5 py-20 sm:px-8 sm:py-24 md:px-12 lg:px-20">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a88961]">
              Simple by Design
            </p>

            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl md:text-5xl">

              Your Shopping Journey

              <span className="block font-serif font-normal italic text-[#a88961]">
                Made Simple.
              </span>

            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">

              Discover products at your own pace and follow a simple
              process to place your order.

            </p>

          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">

            {shoppingSteps.map((step, index) => (

              <div
                key={step.number}
                className="relative border-t border-[#cfc0aa] pt-6"
              >

                {/* Step Number */}
                <div className="absolute -top-4 left-0 flex h-8 w-8 items-center justify-center rounded-full border border-[#cfc0aa] bg-[#f4f0e9] text-xs font-semibold text-[#a88961]">
                  {step.number}
                </div>

                {/* Connector */}
                {index !== shoppingSteps.length - 1 && (

                  <div className="absolute right-0 top-0 hidden h-px w-8 bg-[#cfc0aa] lg:block" />

                )}

                <h3 className="mt-4 font-serif text-2xl italic text-[#292720]">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-xs text-sm leading-7 text-gray-600">
                  {step.description}
                </p>

              </div>

            ))}

          </div>

          <div className="mt-12 text-center">

            <Link
              to="/collection"
              className="group inline-flex items-center gap-4 bg-[#292720] px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-[#a88961]"
            >
              Start Exploring

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          7. OUR PROMISE
      ====================================================== */}

      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 md:px-12 lg:px-20">

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 md:items-center md:gap-16">

          <div className="relative overflow-hidden bg-[#292720] px-7 py-10 text-white sm:px-10 sm:py-14 lg:px-14 lg:py-16">

            <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full border border-white/10" />

            <div className="pointer-events-none absolute -right-3 -top-3 h-32 w-32 rounded-full border border-white/10" />

            <div className="relative">

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c7ad87]">
                Our Commitment
              </p>

              <h2 className="mt-6 font-serif text-3xl italic leading-tight sm:text-4xl lg:text-5xl">
                Your Trust Means Everything.
              </h2>

              <p className="mt-6 text-sm leading-8 text-white/65 sm:text-base">
                We want you to feel informed, supported, and confident
                throughout your shopping experience. Building trust starts
                with listening to customers and communicating clearly.
              </p>

              <div className="mt-8 h-px w-16 bg-[#c7ad87]" />

              <p className="mt-6 text-sm text-white/80">
                Thank you for being part of our journey.
              </p>

            </div>

          </div>

          <div className="space-y-7">

            <div className="flex gap-4">

              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f4f0e9] text-lg text-[#a88961]">
                ✓
              </span>

              <div>

                <h3 className="font-semibold text-[#292720]">
                  Clear Product Information
                </h3>

                <p className="mt-2 text-sm leading-7 text-gray-500">
                  We aim to make product details easy to understand so
                  you can make informed shopping decisions.
                </p>

              </div>

            </div>

            <div className="flex gap-4">

              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f4f0e9] text-lg text-[#a88961]">
                ✓
              </span>

              <div>

                <h3 className="font-semibold text-[#292720]">
                  Helpful Customer Support
                </h3>

                <p className="mt-2 text-sm leading-7 text-gray-500">
                  We want you to have a clear way to ask questions and
                  get assistance when you need it.
                </p>

              </div>

            </div>

            <div className="flex gap-4">

              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f4f0e9] text-lg text-[#a88961]">
                ✓
              </span>

              <div>

                <h3 className="font-semibold text-[#292720]">
                  A Customer-Focused Approach
                </h3>

                <p className="mt-2 text-sm leading-7 text-gray-500">
                  Your feedback helps us understand what matters and
                  where we can improve the shopping experience.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          8. FREQUENTLY ASKED QUESTIONS
      ====================================================== */}

      <section className="bg-[#f8f6f2] px-5 py-20 sm:px-8 sm:py-24 md:px-12 lg:px-20">

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16 lg:gap-24">

          {/* FAQ Heading */}
          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a88961]">
              Need to Know?
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">

              Frequently Asked

              <span className="mt-2 block font-serif font-normal italic text-[#a88961]">
                Questions.
              </span>

            </h2>

            <p className="mt-5 text-sm leading-8 text-gray-600 sm:text-base">

              Here are answers to some common questions about our store
              and shopping experience.

            </p>

            <Link
              to="/contact"
              className="group mt-7 inline-flex items-center gap-3 border-b border-[#a88961] pb-2 text-sm font-semibold transition-colors hover:text-[#a88961]"
            >
              Have another question?

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

            </Link>

          </div>

          {/* FAQ List */}
          <div className="divide-y divide-[#ded5c8] border-y border-[#ded5c8]">

            {faqs.map((faq, index) => (

              <details
                key={faq.question}
                className="group py-5 sm:py-6"
                open={index === 0}
              >

                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left">

                  <span className="text-sm font-semibold leading-6 text-[#292720] sm:text-base">
                    {faq.question}
                  </span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#d8c8b2] text-lg text-[#a88961] transition-all duration-300 group-open:rotate-45 group-open:bg-[#292720] group-open:text-white">
                    +
                  </span>

                </summary>

                <p className="max-w-2xl pt-4 pr-8 text-sm leading-7 text-gray-600">
                  {faq.answer}
                </p>

              </details>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          9. FINAL CALL TO ACTION
      ====================================================== */}

      <section className="relative isolate overflow-hidden bg-[#292720] px-5 py-20 text-center text-white sm:px-8 sm:py-24 md:px-12 lg:px-20 lg:py-28">

        {/* Background Decorations */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[#a88961]/15 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-[#bca486]/10 blur-3xl" />

        <div className="pointer-events-none absolute left-1/2 top-8 h-32 w-32 -translate-x-1/2 rounded-full border border-white/10 sm:h-44 sm:w-44" />

        <div className="relative mx-auto max-w-4xl">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c7ad87]">
            Your Next Favorite Find
          </p>

          <h2 className="mt-6 text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">

            Ready to Discover

            <span className="mt-2 block font-serif font-normal italic text-[#c7ad87]">
              Your Own Style?
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/65 sm:text-base">

            Explore our available collections, discover something new,
            and find products that fit your style and everyday needs.

          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              to="/collection"
              className="group inline-flex items-center justify-center gap-4 bg-[#c7ad87] px-8 py-4 text-sm font-semibold text-[#292720] transition-all duration-300 hover:bg-white"
            >
              Shop Collection

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center border border-white/30 px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              Contact Us
            </Link>

          </div>

          <div className="mx-auto mt-12 h-px w-20 bg-[#c7ad87]/60" />

          <p className="mt-6 font-serif text-lg italic text-white/70">
            Discover. Express. Be Yourself.
          </p>

        </div>

      </section>

    </main>
  );
};

export default About;