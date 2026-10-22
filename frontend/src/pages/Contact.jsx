import React, { useState } from 'react'
import axios from 'axios'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const backendUrl =
  import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  // Input field change handler
  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (errorMessage) {
      setErrorMessage('')
    }
  }

  // Submit contact information to backend
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (isSubmitting) return

    setIsSubmitting(true)
    setErrorMessage('')

    try {
      const response = await axios.post(
        `${backendUrl}/api/contact/add`,
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }
      )

      if (response.data.success) {
        setFormData({
          name: '',
          email: '',
          message: '',
        })

        // Show success popup only after backend confirms success
        setIsModalOpen(true)
      } else {
        setErrorMessage(
          response.data.message ||
            'Unable to send your message. Please try again.'
        )
      }
    } catch (error) {
      console.error('Contact Form Error:', error)

      setErrorMessage(
        error.response?.data?.message ||
          'Unable to connect to the server. Please try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-violet-50/70 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">

      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-violet-200/30 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 top-96 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Page Header */}
        <div className="mb-12 text-center sm:mb-16">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-100 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-violet-500" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-700">
              We're here for you
            </span>
          </div>

          <Title text1="CONTACT" text2="US" />

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Let's Start a
            <span className="block bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Conversation
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Have a question, need help, or just want to say hello?
            Send us a message. Our team will get back to you as soon
            as possible.
          </p>

        </div>

        {/* Main Contact Section */}
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">

          {/* Left Side */}
          <div className="space-y-6">

            {/* Image Card */}
            <div className="group relative overflow-hidden rounded-3xl border border-white bg-white p-2 shadow-xl shadow-slate-200/50">

              <div className="relative overflow-hidden rounded-[1.25rem]">

                <img
                  src={assets.contactImage}
                  alt="Contact our team"
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-80 lg:h-[350px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">

                  <span className="inline-block rounded-full border border-white/30 bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                    YOUR SATISFACTION MATTERS
                  </span>

                  <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                    We're just a message away.
                  </h2>

                  <p className="mt-2 max-w-md text-sm leading-6 text-slate-200">
                    Your questions matter to us. Let us know how we can help.
                  </p>

                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid gap-4 sm:grid-cols-2">

              <div className="rounded-2xl border border-slate-100 bg-white/90 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-2xl">
                  📍
                </div>

                <h3 className="mt-4 font-bold text-slate-900">
                  Visit Our Store
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  54709 Willms Station
                  <br />
                  Suite 350, Washington, USA
                </p>

              </div>

              <div className="rounded-2xl border border-slate-100 bg-white/90 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-2xl">
                  💬
                </div>

                <h3 className="mt-4 font-bold text-slate-900">
                  Get in Touch
                </h3>

                <p className="mt-2 break-words text-sm leading-6 text-slate-600">
                  <span className="font-medium text-slate-800">
                    Tel:
                  </span>{' '}
                  (415) 555-0132
                  <br />

                  <span className="font-medium text-slate-800">
                    Email:
                  </span>{' '}
                  admin@forever.com
                </p>

              </div>

            </div>

            {/* Careers Card */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-violet-700 to-indigo-700 p-6 text-white shadow-lg shadow-indigo-200/50 sm:p-7">

              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/10" />

              <div className="relative flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-200">
                    Grow With Us
                  </p>

                  <h3 className="mt-2 text-xl font-bold">
                    Careers at Forever
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-indigo-100">
                    Discover opportunities and become part of our team.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    window.alert('Career opportunities coming soon!')
                  }
                  className="shrink-0 rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white hover:text-indigo-700"
                >
                  Explore Jobs →
                </button>

              </div>
            </div>

          </div>

          {/* Right Side: Contact Form */}
          <div className="relative">

            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-violet-200/70 via-indigo-100/50 to-transparent blur-xl" />

            <div className="relative rounded-3xl border border-white bg-white/90 p-6 shadow-2xl shadow-slate-200/60 backdrop-blur-xl sm:p-8 lg:p-10">

              {/* Form Header */}
              <div className="mb-8">

                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 text-2xl text-white shadow-lg shadow-indigo-200">
                  ✉
                </div>

                <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                  Send Us a Message
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Fill out the form below and we'll be happy to assist you.
                </p>

              </div>

              {/* Error Message */}
              {errorMessage && (
                <div
                  role="alert"
                  className="mb-6 flex gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
                >
                  <span className="text-lg">⚠️</span>

                  <p className="leading-6">{errorMessage}</p>
                </div>
              )}

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name */}
                <div>

                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Your Full Name
                  </label>

                  <div className="group relative">

                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-slate-400 transition group-focus-within:text-violet-600">
                      ♙
                    </span>

                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      minLength={2}
                      maxLength={100}
                      autoComplete="name"
                      placeholder="Enter your full name"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/70 py-3.5 pl-12 pr-4 text-sm text-slate-800 outline-none transition duration-300 placeholder:text-slate-400 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10"
                    />

                  </div>
                </div>

                {/* Email */}
                <div>

                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Email Address
                  </label>

                  <div className="group relative">

                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-slate-400 transition group-focus-within:text-violet-600">
                      @
                    </span>

                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      maxLength={254}
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/70 py-3.5 pl-12 pr-4 text-sm text-slate-800 outline-none transition duration-300 placeholder:text-slate-400 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10"
                    />

                  </div>
                </div>

                {/* Message */}
                <div>

                  <div className="mb-2 flex items-center justify-between gap-3">

                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-semibold text-slate-700"
                    >
                      Your Message
                    </label>

                    <span className="text-xs text-slate-400">
                      {formData.message.length}/5000
                    </span>

                  </div>

                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    minLength={5}
                    maxLength={5000}
                    rows={6}
                    placeholder="Tell us how we can help you..."
                    className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-4 text-sm leading-6 text-slate-800 outline-none transition duration-300 placeholder:text-slate-400 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10"
                  />

                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-violet-700 to-indigo-700 px-6 py-4 text-sm font-bold tracking-wide text-white shadow-lg shadow-indigo-200 transition duration-300 hover:-translate-y-0.5 hover:from-violet-800 hover:to-indigo-800 hover:shadow-xl active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70"
                >

                  {isSubmitting ? (
                    <>
                      <svg
                        className="h-5 w-5 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />

                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>

                      SENDING MESSAGE...
                    </>
                  ) : (
                    <>
                      SEND MESSAGE

                      <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </>
                  )}

                </button>

                {/* Privacy Note */}
                <p className="flex items-start justify-center gap-2 pt-1 text-center text-xs leading-5 text-slate-400">
                  <span>🔒</span>

                  <span>
                    Your information will be handled with care.
                    We'll use your details to respond to your message.
                  </span>
                </p>

              </form>

            </div>
          </div>

        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center sm:mt-16">

          <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/70 px-5 py-3 shadow-sm backdrop-blur">

            <span className="text-sm">💜</span>

            <p className="text-xs font-medium text-slate-600 sm:text-sm">
              We appreciate your trust in Forever.
            </p>

          </div>

        </div>

      </div>

      {/* Success Popup - defined directly in this file */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-success-title"
            className="relative w-full max-w-md rounded-3xl bg-white p-8 text-center shadow-2xl sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-2xl text-gray-500 transition hover:bg-gray-200 hover:text-black"
              aria-label="Close popup"
            >
              &times;
            </button>

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 shadow-lg shadow-emerald-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="h-8 w-8 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m5 12 4 4L19 6"
                  />
                </svg>
              </div>
            </div>

            <h2
              id="contact-success-title"
              className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
            >
              Thank You!
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              Thank you for sharing your information with us. We have
              received your message, and someone from our team will
              contact you as soon as possible.
            </p>

            <div className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-emerald-50 px-4 py-3">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />

              <p className="text-xs font-semibold text-emerald-700 sm:text-sm">
                Message submitted successfully!
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="mt-7 w-full rounded-xl bg-black px-6 py-4 text-sm font-semibold tracking-wide text-white transition duration-300 hover:bg-gray-800 active:scale-[0.98]"
            >
              BACK TO WEBSITE
            </button>

            <p className="mt-4 text-xs text-gray-400">
              Thank you for choosing Forever.
            </p>
          </div>
        </div>
      )}

    </div>
  )
}

export default Contact