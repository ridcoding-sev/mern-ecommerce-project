import React from 'react';

const OurPolicy = () => {
    const policies = [
        {
            id: 1,
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="h-8 w-8"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.023 9.348h4.992V4.356M20.5 9.5a8.5 8.5 0 0 0-14.95-3.9L4 7m3.977 7.652H2.985v4.992M3.5 14.5a8.5 8.5 0 0 0 14.95 3.9L20 17"
                    />
                </svg>
            ),
            title: 'Easy Exchange Policy',
            description:
                'We offer a hassle-free exchange policy to make your shopping experience easier.',
            label: 'Shop Without Worry',
            color: 'blue',
        },
        {
            id: 2,
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="h-8 w-8"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75m-3-7.036 7.5 4.286v5.25c0 4.5-3.25 7.75-7.5 9.75-4.25-2-7.5-5.25-7.5-9.75V7l7.5-4.286Z"
                    />
                </svg>
            ),
            title: '7 Days Return Policy',
            description:
                'Shop with confidence with our 7-day return policy, subject to our return terms.',
            label: 'Hassle-Free Returns',
            color: 'emerald',
        },
        {
            id: 3,
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="h-8 w-8"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 10.5a6 6 0 0 0-12 0v3a2 2 0 0 0 2 2h1.5v-5H8a2 2 0 0 0-2 2m12-2h-1.5v5H18a2 2 0 0 0 2-2v-3Zm-3 7.5a5 5 0 0 1-5 3h-1"
                    />
                </svg>
            ),
            title: 'Best Customer Support',
            description:
                'Our support team is here to help you with your questions and shopping needs.',
            label: 'Always Here for You',
            color: 'violet',
        },
    ];

    const colorStyles = {
        blue: {
            icon: 'bg-blue-100 text-blue-600',
            border: 'hover:border-blue-200',
            glow: 'group-hover:shadow-blue-100',
            accent: 'bg-blue-500',
            pill: 'bg-blue-50 text-blue-700',
            decoration: 'bg-blue-100/70',
        },
        emerald: {
            icon: 'bg-emerald-100 text-emerald-600',
            border: 'hover:border-emerald-200',
            glow: 'group-hover:shadow-emerald-100',
            accent: 'bg-emerald-500',
            pill: 'bg-emerald-50 text-emerald-700',
            decoration: 'bg-emerald-100/70',
        },
        violet: {
            icon: 'bg-violet-100 text-violet-600',
            border: 'hover:border-violet-200',
            glow: 'group-hover:shadow-violet-100',
            accent: 'bg-violet-500',
            pill: 'bg-violet-50 text-violet-700',
            decoration: 'bg-violet-100/70',
        },
    };

    return (
        <section className="relative mt-8 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white px-4 py-2 sm:mt-2 sm:px-6 sm:py-5 lg:px-8">

            {/* Background Decorations */}
            <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-blue-100/40 blur-3xl" />

            <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-violet-100/40 blur-3xl" />

            <div className="relative mx-auto max-w-7xl">

                {/* Section Heading */}
                <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">

                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 shadow-sm">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-5 w-5 text-indigo-600"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 2.25a.75.75 0 0 1 .354.089l8.25 4.5a.75.75 0 0 1 .396.659v5.252c0 4.38-3.19 7.874-8.68 9.92a.75.75 0 0 1-.64 0C6.19 20.624 3 17.13 3 12.75V7.498a.75.75 0 0 1 .396-.659l8.25-4.5A.75.75 0 0 1 12 2.25Zm3.53 7.72a.75.75 0 0 0-1.06-1.06l-3.22 3.22-1.72-1.72a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.06 0l3.75-3.75Z"
                                clipRule="evenodd"
                            />
                        </svg>

                        <span className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-700 sm:text-sm">
                            Our Policy
                        </span>
                    </div>

                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                        Shop With{' '}
                        <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
                            Confidence
                        </span>
                    </h2>

                    <div className="mx-auto mt-5 h-1.5 w-20 rounded-full bg-gradient-to-r from-indigo-600 to-violet-500" />

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
                        Your satisfaction is our top priority. We are committed
                        to making every purchase simple, secure, and enjoyable.
                    </p>
                </div>

                {/* Policy Cards */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">

                    {policies.map((policy) => {
                        const styles = colorStyles[policy.color];

                        return (
                            <article
                                key={policy.id}
                                className={`group relative flex h-full flex-col items-center overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${styles.border} ${styles.glow} sm:p-8 lg:p-9`}
                            >
                                {/* Decorative Circle */}
                                <div
                                    className={`pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full opacity-60 transition-transform duration-500 group-hover:scale-125 ${styles.decoration}`}
                                />

                                <div
                                    className={`relative mb-7 flex h-20 w-20 items-center justify-center rounded-3xl shadow-sm transition-all duration-300 group-hover:rotate-3 group-hover:scale-110 ${styles.icon}`}
                                >
                                    {policy.icon}
                                </div>

                                <h3 className="relative text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                                    {policy.title}
                                </h3>

                                <p className="relative mt-4 max-w-sm text-sm leading-7 text-slate-500 sm:text-base">
                                    {policy.description}
                                </p>

                                <div className="mt-7 flex flex-1 items-end">
                                    <div
                                        className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold sm:text-sm ${styles.pill}`}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="h-4 w-4"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-7.25 9.5a.75.75 0 0 1-1.11.09l-4.25-4a.75.75 0 1 1 1.028-1.09l3.645 3.43 6.742-8.84a.75.75 0 0 1 1.052-.142Z"
                                                clipRule="evenodd"
                                            />
                                        </svg>

                                        {policy.label}
                                    </div>
                                </div>

                                {/* Bottom Accent */}
                                <div
                                    className={`absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full ${styles.accent}`}
                                />
                            </article>
                        );
                    })}

                </div>

                {/* Bottom Trust Message */}
                <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:mt-12 sm:flex-row sm:gap-4">

                    <div className="flex -space-x-2">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-indigo-100 text-sm">
                            🛍️
                        </span>

                        <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-emerald-100 text-sm">
                            💚
                        </span>

                        <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-violet-100 text-sm">
                            ⭐
                        </span>
                    </div>

                    <p className="text-sm text-slate-500">
                        <span className="font-semibold text-slate-800">
                            Your satisfaction matters.
                        </span>{' '}
                        We're here to make shopping better.
                    </p>

                </div>

            </div>
        </section>
    );
};

export default OurPolicy;