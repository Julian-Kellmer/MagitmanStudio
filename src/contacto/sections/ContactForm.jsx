import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const initialForm = {
  name: '',
  email: '',
  phoneNumber: '',
  title: '',
  message: '',
}

const ContactForm = () => {
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: 'idle', message: '' }) // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear field error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio'
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Ingresá un email válido'
    }
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'El teléfono es obligatorio'
    if (!formData.title.trim()) newErrors.title = 'El asunto es obligatorio'
    if (!formData.message.trim())
      newErrors.message = 'El mensaje es obligatorio'
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus({ type: 'sending', message: '' })

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          title: formData.title,
          message: formData.message,
        },
        PUBLIC_KEY,
      )
      setStatus({
        type: 'success',
        message: '¡Mensaje enviado! Te responderemos a la brevedad.',
      })
      setFormData(initialForm)
      // Reset success message after 5s
      setTimeout(() => setStatus({ type: 'idle', message: '' }), 5000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus({
        type: 'error',
        message: 'Hubo un error al enviar. Intentá de nuevo.',
      })
      setTimeout(() => setStatus({ type: 'idle', message: '' }), 5000)
    }
  }

  const inputBaseClass =
    'w-full bg-transparent border-b-2 border-primary/20 focus:border-secondary outline-none py-3 px-1 text-primary placeholder:text-primary/30 transition-colors duration-300 font-light tracking-wide'

  return (
    <form
      onSubmit={handleSubmit}
      className='w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-8 md:gap-y-5'
      noValidate>
      {/* Name — full row */}
      <div className='flex flex-col gap-1 md:col-span-2'>
        <label
          htmlFor='contact-name'
          className='text-xs uppercase tracking-widest text-primary/50 font-medium'>
          Nombre completo
        </label>
        <input
          id='contact-name'
          type='text'
          name='name'
          autoComplete='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='Tu nombre'
          className={inputBaseClass}
        />
        {errors.name && (
          <span className='text-secondary text-xs mt-1'>{errors.name}</span>
        )}
      </div>

      {/* Email — half row on desktop */}
      <div className='flex flex-col gap-1'>
        <label
          htmlFor='contact-email'
          className='text-xs uppercase tracking-widest text-primary/50 font-medium'>
          Email
        </label>
        <input
          id='contact-email'
          type='email'
          name='email'
          autoComplete='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='tu@email.com'
          className={inputBaseClass}
        />
        {errors.email && (
          <span className='text-secondary text-xs mt-1'>{errors.email}</span>
        )}
      </div>

      {/* Phone — half row on desktop */}
      <div className='flex flex-col gap-1'>
        <label
          htmlFor='contact-phoneNumber'
          className='text-xs uppercase tracking-widest text-primary/50 font-medium'>
          Teléfono
        </label>
        <input
          id='contact-phoneNumber'
          type='tel'
          name='phoneNumber'
          autoComplete='tel'
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder='+54 11 1234-5678'
          className={inputBaseClass}
        />
        {errors.phoneNumber && (
          <span className='text-secondary text-xs mt-1'>{errors.phoneNumber}</span>
        )}
      </div>

      {/* Title / title — full row */}
      <div className='flex flex-col gap-1 md:col-span-2'>
        <label
          htmlFor='contact-title'
          className='text-xs uppercase tracking-widest text-primary/50 font-medium'>
          Asunto
        </label>
        <input
          id='contact-title'
          type='text'
          name='title'
          value={formData.title}
          onChange={handleChange}
          placeholder='¿En qué podemos ayudarte?'
          className={inputBaseClass}
        />
        {errors.title && (
          <span className='text-secondary text-xs mt-1'>{errors.title}</span>
        )}
      </div>

      {/* Message — full row */}
      <div className='flex flex-col gap-1 md:col-span-2'>
        <label
          htmlFor='contact-message'
          className='text-xs uppercase tracking-widest text-primary/50 font-medium'>
          Mensaje
        </label>
        <textarea
          id='contact-message'
          name='message'
          value={formData.message}
          onChange={handleChange}
          placeholder='Escribí tu mensaje...'
          rows={3}
          className={`${inputBaseClass} resize-none`}
        />
        {errors.message && (
          <span className='text-secondary text-xs mt-1'>{errors.message}</span>
        )}
      </div>

      {/* Submit Button & Status */}
      <div className=' flex flex-col items-center gap-4 md:col-span-2 mt-2'>
        <button
          type='submit'
          disabled={status.type === 'sending'}
          className='w-full  md:w-auto px-8 py-4 bg-secondary text-white text-small rounded-sm hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group'>
          <span
            className={`inline-flex items-center gap-2 transition-opacity duration-300 ${
              status.type === 'sending' ? 'opacity-0' : 'opacity-100'
            }`}>
            Enviar mensaje
          </span>
          {status.type === 'sending' && (
            <span className='absolute inset-0 flex items-center justify-center'>
              <svg
                className='animate-spin h-5 w-5 text-white'
                viewBox='0 0 24 24'
                fill='none'>
                <circle
                  cx='12'
                  cy='12'
                  r='10'
                  stroke='currentColor'
                  strokeWidth='3'
                  className='opacity-25'
                />
                <path
                  d='M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z'
                  fill='currentColor'
                  className='opacity-75'
                />
              </svg>
            </span>
          )}
        </button>

        {/* Success message */}
        {status.type === 'success' && (
          <div className='flex items-center gap-2 text-green-600 text-sm font-medium animate-fadeIn'>
            <svg
              className='w-5 h-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M5 13l4 4L19 7'
              />
            </svg>
            {status.message}
          </div>
        )}

        {/* Error message */}
        {status.type === 'error' && (
          <div className='flex items-center gap-2 text-secondary text-sm font-medium animate-fadeIn'>
            <svg
              className='w-5 h-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
            {status.message}
          </div>
        )}
      </div>
    </form>
  )
}

export default ContactForm
