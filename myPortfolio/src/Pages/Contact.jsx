import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const [resultMsg, setResultMsg] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    setResultMsg('')

   emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    name: form.name,
    email: form.email,
    message: form.message,
  },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)

      .then(
        () => {
          setSending(false)
          setResultMsg('Message sent successfully!')
          setForm({ name: '', email: '', message: '' })
        },
        (error) => {
          setSending(false)
          setResultMsg('Failed to send message. Try again later.')
          console.error('EmailJS error:', error)
        }
      )
  }

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4" style={{ fontFamily: 'Segoe UI', color: '#222' }}>
        Contact Me
      </h2>
      <div
        className="mx-auto p-4 rounded-4 shadow contact-card"
        style={{
          maxWidth: '600px',
          backgroundColor: '#f8f9fa',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
        }}
      >
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="form-control"
              placeholder="Your name"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="form-control"
              placeholder="Your email"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="form-control"
              rows="4"
              placeholder="Your message"
              required
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="btn btn-dark w-100 fw-semibold rounded-pill"
          >
            {sending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        {resultMsg && (
          <div className="mt-3 alert alert-info text-center" role="alert">
            {resultMsg}
          </div>
        )}
      </div>
    </div>
  )
}

export default Contact
