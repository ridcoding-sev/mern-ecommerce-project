import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'

const backendUrl =
  import.meta.env.VITE_BACKEND_URI || 'http://localhost:4000'

const PAGE_SIZE = 8

const ContactList = () => {
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)

  const [selectedContact, setSelectedContact] = useState(null)
  const [detailsLoading, setDetailsLoading] = useState(false)
  const [detailsError, setDetailsError] = useState('')

  // Fetch all contacts from backend
  const fetchContacts = async () => {
    setLoading(true)
    setErrorMessage('')

    try {
      const response = await axios.get(
        `${backendUrl}/api/contact/list`
      )

      if (response.data.success) {
        setContacts(response.data.contacts || [])
      } else {
        setErrorMessage(
          response.data.message || 'Failed to load contact messages.'
        )
      }
    } catch (error) {
      console.error('Fetch Contacts Error:', error)

      setErrorMessage(
        error.response?.data?.message ||
          'Unable to load messages. Please check your backend server.'
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchContacts()
  }, [])

  // Contact statistics
  const stats = useMemo(() => {
    return {
      total: contacts.length,
      new: contacts.filter((contact) => contact.status === 'New').length,
      read: contacts.filter((contact) => contact.status === 'Read').length,
      replied: contacts.filter(
        (contact) => contact.status === 'Replied'
      ).length,
    }
  }, [contacts])

  // Search and status filtering
  const filteredContacts = useMemo(() => {
    const searchTerm = search.trim().toLowerCase()

    return contacts.filter((contact) => {
      const matchesSearch =
        contact.name?.toLowerCase().includes(searchTerm) ||
        contact.email?.toLowerCase().includes(searchTerm) ||
        contact.message?.toLowerCase().includes(searchTerm)

      const matchesStatus =
        statusFilter === 'All' || contact.status === statusFilter

      return matchesSearch && matchesStatus
    })
  }, [contacts, search, statusFilter])

  // Pagination
  const totalPages = Math.max(
    1,
    Math.ceil(filteredContacts.length / PAGE_SIZE)
  )

  const safePage = Math.min(currentPage, totalPages)

  const paginatedContacts = filteredContacts.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE
  )

  // Fetch one contact's full details
  const handleLearnMore = async (contact) => {
    setSelectedContact(contact)
    setDetailsLoading(true)
    setDetailsError('')

    try {
      const response = await axios.get(
        `${backendUrl}/api/contact/${contact._id}`
      )

      if (response.data.success) {
        setSelectedContact(response.data.contact)
      } else {
        setDetailsError(
          response.data.message || 'Unable to load message details.'
        )
      }
    } catch (error) {
      console.error('Contact Details Error:', error)

      setDetailsError(
        error.response?.data?.message ||
          'Failed to load full message details.'
      )
    } finally {
      setDetailsLoading(false)
    }
  }

  // Update status in MongoDB
  const handleStatusChange = async (contactId, status) => {
    try {
      const response = await axios.patch(
        `${backendUrl}/api/contact/${contactId}/status`,
        { status }
      )

      if (response.data.success) {
        const updatedContact = response.data.contact

        setContacts((previousContacts) =>
          previousContacts.map((contact) =>
            contact._id === contactId
              ? { ...contact, ...updatedContact }
              : contact
          )
        )

        setSelectedContact((previous) =>
          previous?._id === contactId
            ? { ...previous, ...updatedContact }
            : previous
        )
      } else {
        window.alert(
          response.data.message || 'Failed to update status.'
        )
      }
    } catch (error) {
      console.error('Update Contact Status Error:', error)

      window.alert(
        error.response?.data?.message ||
          'Unable to update message status.'
      )
    }
  }

  const formatDate = (date) => {
    if (!date) return '—'

    return new Date(date).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
  }

  const formatDateTime = (date) => {
    if (!date) return '—'

    return new Date(date).toLocaleString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const getStatusStyle = (status) => {
    switch (status) {
      case 'New':
        return 'bg-blue-50 text-blue-700 ring-blue-600/20'

      case 'Read':
        return 'bg-amber-50 text-amber-700 ring-amber-600/20'

      case 'Replied':
        return 'bg-emerald-50 text-emerald-700 ring-emerald-600/20'

      default:
        return 'bg-gray-100 text-gray-600 ring-gray-500/20'
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">

      {/* Page Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

        <div>
          <div className="flex items-center gap-2 text-sm font-medium text-violet-600">
            <span className="h-2 w-2 rounded-full bg-violet-600" />
            CUSTOMER SUPPORT
          </div>

          <h1 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Contact Messages
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Manage and review messages received from your customers.
          </p>
        </div>

        <button
          type="button"
          onClick={fetchContacts}
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-violet-300 hover:text-violet-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <span className={loading ? 'animate-spin' : ''}>↻</span>
          Refresh Messages
        </button>

      </div>

      {/* Statistics Cards */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {[
          {
            title: 'Total Messages',
            value: stats.total,
            icon: '✉',
            iconBg: 'bg-violet-100 text-violet-700',
          },
          {
            title: 'New Messages',
            value: stats.new,
            icon: '✦',
            iconBg: 'bg-blue-100 text-blue-700',
          },
          {
            title: 'Read Messages',
            value: stats.read,
            icon: '◉',
            iconBg: 'bg-amber-100 text-amber-700',
          },
          {
            title: 'Replied Messages',
            value: stats.replied,
            icon: '✓',
            iconBg: 'bg-emerald-100 text-emerald-700',
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex items-center justify-between gap-3">

              <div>
                <p className="text-sm font-medium text-slate-500">
                  {item.title}
                </p>

                <p className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                  {item.value}
                </p>
              </div>

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl text-xl ${item.iconBg}`}
              >
                {item.icon}
              </div>

            </div>
          </div>
        ))}

      </div>

      {/* Main Table Container */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

        {/* Search and Filters */}
        <div className="flex flex-col gap-4 border-b border-slate-100 p-5 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <h2 className="text-lg font-bold text-slate-900">
              All Messages
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {filteredContacts.length} message
              {filteredContacts.length !== 1 ? 's' : ''} found
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">

            {/* Search */}
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                ⌕
              </span>

              <input
                type="search"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value)
                  setCurrentPage(1)
                }}
                placeholder="Search messages..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-9 pr-4 text-sm outline-none transition focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-500/10 sm:w-64"
              />
            </div>

            {/* Status Filter */}
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value)
                setCurrentPage(1)
              }}
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-500/10"
            >
              <option value="All">All Statuses</option>
              <option value="New">New</option>
              <option value="Read">Read</option>
              <option value="Replied">Replied</option>
            </select>

          </div>

        </div>

        {/* Error State */}
        {errorMessage && (
          <div className="m-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            <p>{errorMessage}</p>

            <button
              type="button"
              onClick={fetchContacts}
              className="mt-2 font-semibold underline"
            >
              Try again
            </button>
          </div>
        )}

        {/* Loading State */}
        {loading ? (
          <div className="flex min-h-72 flex-col items-center justify-center p-8">

            <div className="h-10 w-10 animate-spin rounded-full border-4 border-violet-100 border-t-violet-600" />

            <p className="mt-4 text-sm font-medium text-slate-500">
              Loading contact messages...
            </p>

          </div>
        ) : errorMessage ? null : paginatedContacts.length === 0 ? (

          /* Empty State */
          <div className="flex min-h-72 flex-col items-center justify-center px-6 py-12 text-center">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-50 text-3xl">
              ✉
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-900">
              No messages found
            </h3>

            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
              {search || statusFilter !== 'All'
                ? 'Try changing your search or status filter.'
                : 'Contact messages submitted by your customers will appear here.'}
            </p>

            {(search || statusFilter !== 'All') && (
              <button
                type="button"
                onClick={() => {
                  setSearch('')
                  setStatusFilter('All')
                  setCurrentPage(1)
                }}
                className="mt-4 rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700"
              >
                Clear Filters
              </button>
            )}

          </div>

        ) : (

          /* Contact Table */
          <div className="overflow-x-auto">

            <table className="w-full min-w-[850px] text-left">

              <thead className="bg-slate-50">

                <tr className="border-b border-slate-100 text-xs uppercase tracking-wider text-slate-500">

                  <th className="px-6 py-4 font-semibold">
                    Customer
                  </th>

                  <th className="px-6 py-4 font-semibold">
                    Message Preview
                  </th>

                  <th className="px-6 py-4 font-semibold">
                    Received
                  </th>

                  <th className="px-6 py-4 font-semibold">
                    Status
                  </th>

                  <th className="px-6 py-4 text-right font-semibold">
                    Action
                  </th>

                </tr>

              </thead>

              <tbody className="divide-y divide-slate-100">

                {paginatedContacts.map((contact) => (

                  <tr
                    key={contact._id}
                    className="transition hover:bg-violet-50/30"
                  >

                    {/* Customer */}
                    <td className="px-6 py-5">

                      <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-100 to-indigo-100 text-sm font-bold uppercase text-violet-700">
                          {contact.name?.charAt(0) || '?'}
                        </div>

                        <div>
                          <p className="font-semibold text-slate-800">
                            {contact.name}
                          </p>

                          <p className="mt-1 text-sm text-slate-500">
                            {contact.email}
                          </p>
                        </div>

                      </div>

                    </td>

                    {/* Message Preview */}
                    <td className="max-w-xs px-6 py-5">

                      <p className="truncate text-sm leading-6 text-slate-600">
                        {contact.message}
                      </p>

                    </td>

                    {/* Date */}
                    <td className="whitespace-nowrap px-6 py-5">

                      <p className="text-sm font-medium text-slate-700">
                        {formatDate(contact.createdAt)}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        {contact.createdAt
                          ? new Date(contact.createdAt).toLocaleTimeString(
                              'en-US',
                              {
                                hour: '2-digit',
                                minute: '2-digit',
                              }
                            )
                          : ''}
                      </p>

                    </td>

                    {/* Status */}
                    <td className="px-6 py-5">

                      <span
                        className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ring-1 ring-inset ${getStatusStyle(contact.status)}`}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-current" />
                        {contact.status || 'New'}
                      </span>

                    </td>

                    {/* Action */}
                    <td className="px-6 py-5 text-right">

                      <button
                        type="button"
                        onClick={() => handleLearnMore(contact)}
                        className="whitespace-nowrap rounded-lg border border-violet-200 bg-white px-4 py-2 text-xs font-semibold text-violet-700 transition hover:border-violet-600 hover:bg-violet-600 hover:text-white"
                      >
                        Learn More →
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>
        )}

        {/* Pagination */}
        {!loading && !errorMessage && filteredContacts.length > 0 && (

          <div className="flex flex-col gap-4 border-t border-slate-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">

            <p className="text-sm text-slate-500">
              Showing{' '}
              {(safePage - 1) * PAGE_SIZE + 1}
              {' '}to{' '}
              {Math.min(safePage * PAGE_SIZE, filteredContacts.length)}
              {' '}of {filteredContacts.length} messages
            </p>

            <div className="flex items-center gap-2">

              <button
                type="button"
                disabled={safePage === 1}
                onClick={() => setCurrentPage((page) => page - 1)}
                className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Previous
              </button>

              <span className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white">
                {safePage} / {totalPages}
              </span>

              <button
                type="button"
                disabled={safePage >= totalPages}
                onClick={() => setCurrentPage((page) => page + 1)}
                className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next
              </button>

            </div>

          </div>
        )}

      </div>

      {/* Contact Details Modal */}
      {selectedContact && (

        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/50 p-4 backdrop-blur-sm"
          onClick={() => {
            setSelectedContact(null)
            setDetailsError('')
          }}
        >

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-details-title"
            className="my-8 w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 bg-gradient-to-r from-violet-50 to-indigo-50 p-6 sm:p-8">

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-600">
                  Customer Support
                </p>

                <h2
                  id="contact-details-title"
                  className="mt-2 text-2xl font-bold text-slate-900"
                >
                  Message Details
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Review the customer's message and update its status.
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSelectedContact(null)
                  setDetailsError('')
                }}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-2xl text-slate-500 shadow-sm transition hover:bg-slate-100 hover:text-slate-900"
                aria-label="Close details"
              >
                &times;
              </button>

            </div>

            {/* Modal Body */}
            <div className="space-y-6 p-6 sm:p-8">

              {detailsLoading ? (

                <div className="flex min-h-40 flex-col items-center justify-center">

                  <div className="h-9 w-9 animate-spin rounded-full border-4 border-violet-100 border-t-violet-600" />

                  <p className="mt-3 text-sm text-slate-500">
                    Loading message details...
                  </p>

                </div>

              ) : detailsError ? (

                <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                  {detailsError}
                </div>

              ) : (

                <>
                  {/* Customer Information */}
                  <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">

                    <div className="flex items-center gap-4">

                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-violet-100 text-xl font-bold uppercase text-violet-700">
                        {selectedContact.name?.charAt(0) || '?'}
                      </div>

                      <div className="min-w-0">
                        <h3 className="break-words font-bold text-slate-900">
                          {selectedContact.name}
                        </h3>

                        <p className="mt-1 break-all text-sm text-slate-500">
                          {selectedContact.email}
                        </p>
                      </div>

                    </div>

                  </div>

                  {/* Details Grid */}
                  <div className="grid gap-4 sm:grid-cols-2">

                    <div className="rounded-xl border border-slate-100 p-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Received Date
                      </p>

                      <p className="mt-2 text-sm font-semibold text-slate-800">
                        {formatDateTime(selectedContact.createdAt)}
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-100 p-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Current Status
                      </p>

                      <span
                        className={`mt-2 inline-flex rounded-full px-3 py-1.5 text-xs font-semibold ring-1 ring-inset ${getStatusStyle(selectedContact.status)}`}
                      >
                        {selectedContact.status || 'New'}
                      </span>
                    </div>

                  </div>

                  {/* Full Message */}
                  <div>
                    <h3 className="mb-3 text-sm font-bold text-slate-900">
                      Customer Message
                    </h3>

                    <div className="min-h-32 whitespace-pre-wrap break-words rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-600">
                      {selectedContact.message}
                    </div>
                  </div>

                  {/* Update Status */}
                  <div>
                    <label
                      htmlFor="contact-status"
                      className="mb-2 block text-sm font-bold text-slate-800"
                    >
                      Update Message Status
                    </label>

                    <select
                      id="contact-status"
                      value={selectedContact.status || 'New'}
                      onChange={(e) =>
                        handleStatusChange(
                          selectedContact._id,
                          e.target.value
                        )
                      }
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-500/10"
                    >
                      <option value="New">New</option>
                      <option value="Read">Read</option>
                      <option value="Replied">Replied</option>
                    </select>

                    <p className="mt-2 text-xs leading-5 text-slate-400">
                      Status changes are saved to the backend database.
                    </p>
                  </div>

                </>
              )}

            </div>

            {/* Modal Footer */}
            <div className="flex justify-end border-t border-slate-100 bg-slate-50 px-6 py-4 sm:px-8">

              <button
                type="button"
                onClick={() => {
                  setSelectedContact(null)
                  setDetailsError('')
                }}
                className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Close Details
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  )
}

export default ContactList