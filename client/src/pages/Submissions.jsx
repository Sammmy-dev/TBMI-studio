import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, GraduationCap, ExternalLink, RefreshCw } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { getEnrollments, getQuoteRequests } from '../services/apiService'

const tabs = [
  { id: 'quotes', label: 'Quote Requests', icon: FileText },
  { id: 'enrollments', label: 'Enrollments', icon: GraduationCap },
]

const formatDate = (value) => {
  if (!value) return 'Unknown date'

  return new Intl.DateTimeFormat('en-NG', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(value))
}

export default function Submissions() {
  const [activeTab, setActiveTab] = useState('quotes')
  const [quotes, setQuotes] = useState([])
  const [enrollments, setEnrollments] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  const loadSubmissions = async () => {
    setIsLoading(true)
    setError('')

    const [quotesResult, enrollmentsResult] = await Promise.all([
      getQuoteRequests(),
      getEnrollments(),
    ])

    if (!quotesResult.success || !enrollmentsResult.success) {
      setError(quotesResult.error || enrollmentsResult.error || 'Failed to load submissions.')
      setIsLoading(false)
      return
    }

    setQuotes(quotesResult.items || [])
    setEnrollments(enrollmentsResult.items || [])
    setIsLoading(false)
  }

  useEffect(() => {
    loadSubmissions()
  }, [])

  const activeItems = activeTab === 'quotes' ? quotes : enrollments

  return (
    <div className="dark min-h-screen bg-background-dark text-slate-100">
      <Navbar />

      <main className="relative z-10">
        <section className="border-b border-white/10 bg-[radial-gradient(circle_at_top,rgba(191,58,43,0.22),transparent_45%)]">
          <div className="max-w-7xl mx-auto px-6 py-6 md:py-8">
            <motion.div
              className="grid gap-4 md:grid-cols-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Total Quotes</p>
                <p className="mt-3 text-4xl font-bold text-white">{quotes.length}</p>
              </div>
              <div className="border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Total Enrollments</p>
                <p className="mt-3 text-4xl font-bold text-white">{enrollments.length}</p>
              </div>
              <button
                type="button"
                onClick={loadSubmissions}
                className="flex items-center justify-center gap-3 border border-primary/30 bg-primary/10 p-5 text-sm font-semibold uppercase tracking-[0.2em] text-primary transition hover:bg-primary/20"
              >
                <RefreshCw size={18} />
                Refresh Data
              </button>
            </motion.div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap gap-3">
              {tabs.map(({ id, label, icon: Icon }) => {
                const isActive = activeTab === id

                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setActiveTab(id)}
                    className={`inline-flex items-center gap-3 border px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition ${
                      isActive
                        ? 'border-primary bg-primary text-white'
                        : 'border-white/10 bg-white/5 text-slate-300 hover:border-primary/40 hover:text-white'
                    }`}
                  >
                    <Icon size={18} />
                    {label}
                  </button>
                )
              })}
            </div>

            {isLoading ? (
              <div className="border border-white/10 bg-surface p-8 text-slate-400">
                Loading submissions...
              </div>
            ) : error ? (
              <div className="border border-red-500/30 bg-red-500/10 p-8 text-red-300">
                {error}
              </div>
            ) : activeItems.length === 0 ? (
              <div className="border border-white/10 bg-surface p-8 text-slate-400">
                No {activeTab === 'quotes' ? 'quote requests' : 'enrollments'} found yet.
              </div>
            ) : (
              <div className="grid gap-5">
                {activeTab === 'quotes'
                  ? quotes.map((item) => (
                      <article key={item._id} className="border border-white/10 bg-surface p-6 shadow-2xl">
                        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                          <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-primary">Quote Request</p>
                            <h2 className="mt-2 text-2xl font-bold text-white">{item.fullName}</h2>
                            <p className="mt-1 text-sm text-slate-500">Submitted {formatDate(item.createdAt)}</p>
                          </div>
                          <span className="inline-flex w-fit border border-white/10 px-3 py-2 text-xs uppercase tracking-[0.18em] text-slate-300">
                            {item.serviceType || 'General inquiry'}
                          </span>
                        </div>

                        <div className="mt-6 grid gap-4 md:grid-cols-2">
                          <div className="border border-white/5 bg-background-dark/40 p-4">
                            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Email</p>
                            <p className="mt-2 break-all text-slate-200">{item.email}</p>
                          </div>
                          <div className="border border-white/5 bg-background-dark/40 p-4">
                            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Phone</p>
                            <p className="mt-2 text-slate-200">+234 {item.phone || 'N/A'}</p>
                          </div>
                        </div>

                        <div className="mt-4 border border-white/5 bg-background-dark/40 p-4">
                          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Project Details</p>
                          <p className="mt-3 whitespace-pre-wrap leading-relaxed text-slate-300">{item.message || 'No details provided.'}</p>
                        </div>
                      </article>
                    ))
                  : enrollments.map((item) => (
                      <article key={item._id} className="border border-white/10 bg-surface p-6 shadow-2xl">
                        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                          <div>
                            <p className="text-xs uppercase tracking-[0.2em] text-primary">Enrollment</p>
                            <h2 className="mt-2 text-2xl font-bold text-white">{item.fullName}</h2>
                            <p className="mt-1 text-sm text-slate-500">Submitted {formatDate(item.createdAt)}</p>
                          </div>
                          <span className="inline-flex w-fit border border-white/10 px-3 py-2 text-xs uppercase tracking-[0.18em] text-slate-300">
                            {item.selectedCourse}
                          </span>
                        </div>

                        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                          <div className="border border-white/5 bg-background-dark/40 p-4">
                            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Email</p>
                            <p className="mt-2 break-all text-slate-200">{item.email}</p>
                          </div>
                          <div className="border border-white/5 bg-background-dark/40 p-4">
                            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Phone</p>
                            <p className="mt-2 text-slate-200">+234 {item.phone}</p>
                          </div>
                          <div className="border border-white/5 bg-background-dark/40 p-4">
                            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">WhatsApp</p>
                            <p className="mt-2 text-slate-200">+234 {item.whatsappNumber || 'N/A'}</p>
                          </div>
                          <div className="border border-white/5 bg-background-dark/40 p-4">
                            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Age Range</p>
                            <p className="mt-2 text-slate-200">{item.ageRange || 'N/A'}</p>
                          </div>
                          <div className="border border-white/5 bg-background-dark/40 p-4">
                            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Gender</p>
                            <p className="mt-2 text-slate-200">{item.gender || 'N/A'}</p>
                          </div>
                          <div className="border border-white/5 bg-background-dark/40 p-4">
                            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Heard About Us Via</p>
                            <p className="mt-2 text-slate-200">{item.hearAbout || 'N/A'}</p>
                          </div>
                        </div>

                        <div className="mt-4 flex flex-wrap items-center gap-4 border border-white/5 bg-background-dark/40 p-4">
                          <div>
                            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Receipt</p>
                            <p className="mt-2 text-slate-200">{item.paymentReceiptFileName || 'No receipt uploaded'}</p>
                          </div>
                          {item.paymentReceiptUrl && (
                            <a
                              href={item.paymentReceiptUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 border border-primary/30 bg-primary/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary transition hover:bg-primary/20"
                            >
                              Open Receipt
                              <ExternalLink size={16} />
                            </a>
                          )}
                        </div>
                      </article>
                    ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}