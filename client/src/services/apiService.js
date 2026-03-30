const API_URL = import.meta.env.VITE_API_URL || '/api'

const parseResponse = async (response) => {
  const contentType = response.headers.get('content-type') || ''
  const payload = contentType.includes('application/json')
    ? await response.json()
    : { success: false, error: 'Unexpected server response' }

  if (!response.ok) {
    return {
      success: false,
      error: payload.error || 'Request failed',
    }
  }

  return payload
}

const post = async (path, options) => {
  try {
    const response = await fetch(`${API_URL}${path}`, options)
    return await parseResponse(response)
  } catch (error) {
    console.error(`Error calling ${path}:`, error)
    return {
      success: false,
      error: 'Unable to reach the server. Please try again.',
    }
  }
}

export const saveEnrollment = async (formData) => {
  const data = new FormData()
  const fields = ['fullName', 'email', 'phone', 'whatsappNumber', 'ageRange', 'gender', 'hearAbout', 'selectedCourse']

  fields.forEach((key) => {
    if (formData[key] != null) {
      data.append(key, formData[key])
    }
  })

  if (formData.paymentReceipt) {
    data.append('paymentReceipt', formData.paymentReceipt)
  }

  return post('/enrollments', {
    method: 'POST',
    body: data,
  })
}

export const saveQuoteRequest = async (formData) =>
  post('/contacts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })

export const getEnrollments = async () => post('/enrollments', { method: 'GET' })

export const getQuoteRequests = async () => post('/contacts', { method: 'GET' })
