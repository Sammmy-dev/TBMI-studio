const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

export const saveEnrollment = async (formData) => {
  try {
    const data = new FormData()
    const fields = ['fullName', 'email', 'phone', 'whatsappNumber', 'ageRange', 'gender', 'hearAbout', 'selectedCourse']
    fields.forEach((key) => {
      if (formData[key] != null) data.append(key, formData[key])
    })
    if (formData.paymentReceipt) {
      data.append('paymentReceipt', formData.paymentReceipt)
    }

    const res = await fetch(`${API_URL}/api/enrollments`, {
      method: 'POST',
      body: data,
    })

    return await res.json()
  } catch (error) {
    console.error('Error saving enrollment:', error)
    return { success: false, error: error.message }
  }
}

export const saveQuoteRequest = async (formData) => {
  try {
    const res = await fetch(`${API_URL}/api/contacts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })

    return await res.json()
  } catch (error) {
    console.error('Error saving contact:', error)
    return { success: false, error: error.message }
  }
}
