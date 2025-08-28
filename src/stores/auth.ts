import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { auth } from '@/lib/supabase'
import type { User } from '@supabase/supabase-js'

export const useAuthStore = defineStore('auth', () => {
  // State
  const user = ref<User | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)
  const isEmailConfirmed = ref(false)

  // Computed
  const isAuthenticated = computed(() => !!user.value)
  const isEmailVerified = computed(() => user.value?.email_confirmed_at !== null)

  // Actions
  const setUser = (newUser: User | null) => {
    user.value = newUser
  }

  const setLoading = (isLoading: boolean) => {
    loading.value = isLoading
  }

  const setError = (errorMessage: string | null) => {
    error.value = errorMessage
  }

  const signUp = async (email: string, password: string) => {
    try {
      setLoading(true)
      setError(null)
      
      const { data, error: signUpError } = await auth.signUp(email, password)
      
      if (signUpError) {
        throw signUpError
      }

      if (data.user && !data.session) {
        // Email confirmation required
        isEmailConfirmed.value = false
        return { success: true, message: 'Email tasdiqlash kodi yuborildi' }
      }

      if (data.session) {
        // Auto sign in
        setUser(data.user)
        return { success: true, message: 'Muvaffaqiyatli ro\'yxatdan o\'tdingiz' }
      }

      return { success: true, message: 'Email tasdiqlash kodi yuborildi' }
    } catch (err: any) {
      const errorMessage = err.message || 'Ro\'yxatdan o\'tishda xatolik yuz berdi'
      setError(errorMessage)
      return { success: false, message: errorMessage }
    } finally {
      setLoading(false)
    }
  }

  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true)
      setError(null)
      
      const { data, error: signInError } = await auth.signIn(email, password)
      
      if (signInError) {
        throw signInError
      }

      if (data.user) {
        setUser(data.user)
        return { success: true, message: 'Muvaffaqiyatli kirdingiz' }
      }

      return { success: false, message: 'Kirishda xatolik yuz berdi' }
    } catch (err: any) {
      const errorMessage = err.message || 'Kirishda xatolik yuz berdi'
      setError(errorMessage)
      return { success: false, message: errorMessage }
    } finally {
      setLoading(false)
    }
  }

  const signOut = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const { error: signOutError } = await auth.signOut()
      
      if (signOutError) {
        throw signOutError
      }

      setUser(null)
      return { success: true, message: 'Muvaffaqiyatli chiqdingiz' }
    } catch (err: any) {
      const errorMessage = err.message || 'Chiqishda xatolik yuz berdi'
      setError(errorMessage)
      return { success: false, message: errorMessage }
    } finally {
      setLoading(false)
    }
  }

  const resetPassword = async (email: string) => {
    try {
      setLoading(true)
      setError(null)
      
      const { error: resetError } = await auth.resetPassword(email)
      
      if (resetError) {
        throw resetError
      }

      return { success: true, message: 'Parol tiklash kodi yuborildi' }
    } catch (err: any) {
      const errorMessage = err.message || 'Parol tiklashda xatolik yuz berdi'
      setError(errorMessage)
      return { success: false, message: errorMessage }
    } finally {
      setLoading(false)
    }
  }

  const updatePassword = async (password: string) => {
    try {
      setLoading(true)
      setError(null)
      
      const { data, error: updateError } = await auth.updatePassword(password)
      
      if (updateError) {
        throw updateError
      }

      if (data.user) {
        setUser(data.user)
        return { success: true, message: 'Parol muvaffaqiyatli yangilandi' }
      }

      return { success: false, message: 'Parol yangilashda xatolik yuz berdi' }
    } catch (err: any) {
      const errorMessage = err.message || 'Parol yangilashda xatolik yuz berdi'
      setError(errorMessage)
      return { success: false, message: errorMessage }
    } finally {
      setLoading(false)
    }
  }

  const checkAuth = async () => {
    try {
      const { user: currentUser, error } = await auth.getCurrentUser()
      
      if (error) {
        throw error
      }

      setUser(currentUser)
      return currentUser
    } catch (err: any) {
      setUser(null)
      return null
    }
  }

  const initAuth = () => {
    // Listen to auth state changes
    auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        setUser(session.user)
      } else if (event === 'SIGNED_OUT') {
        setUser(null)
      }
    })

    // Check initial auth state
    checkAuth()
  }

  return {
    // State
    user,
    loading,
    error,
    isEmailConfirmed,
    
    // Computed
    isAuthenticated,
    isEmailVerified,
    
    // Actions
    setUser,
    setLoading,
    setError,
    signUp,
    signIn,
    signOut,
    resetPassword,
    updatePassword,
    checkAuth,
    initAuth
  }
})
