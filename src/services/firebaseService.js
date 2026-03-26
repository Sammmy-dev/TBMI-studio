import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { db, storage } from '../config/firebase'

// Save enrollment form data
export const saveEnrollment = async (formData) => {
  try {
    let enrollmentData = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      whatsappNumber: formData.whatsappNumber,
      ageRange: formData.ageRange,
      gender: formData.gender,
      hearAbout: formData.hearAbout,
      selectedCourse: formData.selectedCourse,
      type: 'enrollment',
      createdAt: serverTimestamp()
    }

    // Handle file upload to Firebase Storage
    if (formData.paymentReceipt) {
      const file = formData.paymentReceipt
      const timestamp = Date.now()
      const fileName = `${timestamp}_${file.name}`
      const storageRef = ref(storage, `payment-receipts/${fileName}`)
      
      // Upload file to storage
      await uploadBytes(storageRef, file)
      
      // Get download URL and save to Firestore
      const downloadURL = await getDownloadURL(storageRef)
      enrollmentData.paymentReceiptFileName = file.name
      enrollmentData.paymentReceiptSize = file.size
      enrollmentData.paymentReceiptType = file.type
      enrollmentData.paymentReceiptURL = downloadURL
    }

    const docRef = await addDoc(collection(db, 'enrollments'), enrollmentData)
    console.log('Enrollment saved with ID: ', docRef.id)
    return { success: true, id: docRef.id }
  } catch (error) {
    console.error('Error saving enrollment: ', error)
    return { success: false, error: error.message }
  }
}

// Save contact/quote form data
export const saveQuoteRequest = async (formData) => {
  try {
    const docRef = await addDoc(collection(db, 'quotes'), {
      ...formData,
      createdAt: serverTimestamp(),
      type: 'quote_request'
    })
    console.log('Quote request saved with ID: ', docRef.id)
    return { success: true, id: docRef.id }
  } catch (error) {
    console.error('Error saving quote request: ', error)
    return { success: false, error: error.message }
  }
}
