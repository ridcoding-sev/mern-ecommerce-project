import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContex';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        if (products && products.length > 0) {
            const bestProduct = products.filter(
                (item) => item.bestseller
            );

            setBestSeller(bestProduct.slice(0, 5));
        } else {
            setBestSeller([]);
        }
    }, [products]);

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-indigo-50/20 to-white px-1 py-2 sm:px-2 sm:py-5 lg:px-5 lg:py-10">

            {/* Background Decoration */}
            <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-indigo-100/40 blur-3xl"></div>

            <div className="pointer-events-none absolute -right-24 top-52 h-64 w-64 rounded-full bg-violet-100/40 blur-3xl"></div>

            <div className="relative mx-auto max-w-7xl">

                {/* Section Header */}
                <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">

                    {/* Badge */}
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 shadow-sm shadow-indigo-100/50">
                        <span className="text-lg">🔥</span>

                        <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-700 sm:text-sm">
                            Customer Favorites
                        </span>
                    </div>

                    {/* Title */}
                    <div className="mb-5 flex flex-col items-center">
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
                            BEST{' '}
                            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
                                SELLERS
                            </span>
                        </h2>

                        <div className="mt-5 h-1.5 w-20 rounded-full bg-gradient-to-r from-indigo-600 to-violet-500"></div>
                    </div>

                    {/* Description */}
                    <p className="mx-auto max-w-xl text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
                        Discover the products everyone loves. Explore our
                        best-selling collection, selected for their quality,
                        style, and exceptional value.
                    </p>

                </div>

                {/* Products */}
                {bestSeller.length > 0 ? (
                    <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

                        {bestSeller.map((item) => (
                            <div
                                key={item._id || item.id}
                                className="group relative min-w-0"
                            >
                                {/* Bestseller Badge */}
                                <div className="pointer-events-none absolute left-2 top-2 z-10 sm:left-3 sm:top-3">
                                    <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-white shadow-md shadow-indigo-200/50 sm:px-3 sm:text-[10px]">
                                        <span>🔥</span>
                                        Bestseller
                                    </span>
                                </div>

                                {/* Product Card */}
                                <div className="h-full overflow-hidden rounded-2xl border border-gray-100 bg-white p-2 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-indigo-100 group-hover:shadow-xl group-hover:shadow-indigo-100/40 sm:rounded-3xl sm:p-3">

                                    <div className="overflow-hidden rounded-xl sm:rounded-2xl">
                                        <ProductItem
                                            id={item._id || item.id}
                                            name={item.name}
                                            image={item.image}
                                            price={item.price}
                                        />
                                    </div>

                                </div>
                            </div>
                        ))}

                    </div>
                ) : (
                    <div className="rounded-3xl border border-dashed border-gray-200 bg-white/70 px-5 py-16 text-center">
                        <div className="mb-4 text-4xl">🛍️</div>

                        <h3 className="text-lg font-bold text-gray-800">
                            Best Sellers Coming Soon
                        </h3>

                        <p className="mt-2 text-sm text-gray-500">
                            Our popular products will appear here soon.
                        </p>
                    </div>
                )}

                {/* Bottom Message */}
                {bestSeller.length > 0 && (
                    <div className="mt-12 text-center sm:mt-16">

                        <p className="mb-5 text-sm text-gray-500">
                            Loved by customers. Selected for you.
                        </p>

                        <a
                            href="/collection"
                            className="group inline-flex items-center justify-center gap-3 rounded-full bg-gray-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-gray-900/10 transition-all duration-300 hover:bg-indigo-600 hover:shadow-xl hover:shadow-indigo-200 sm:px-9 sm:py-4"
                        >
                            Explore All Products

                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </a>

                    </div>
                )}

            </div>
        </section>
    );
};

export default BestSeller;