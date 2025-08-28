import { ref, computed } from 'vue'

export interface AuthUser {
  id: string
  email: string
  firstName?: string
  lastName?: string
  created_at: string
}

export function useAuth() {
  const user = ref<AuthUser | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const isAuthenticated = computed(() => !!user.value)

  // Sign up with email
  const signUp = async (email: string, password: string, firstName?: string, lastName?: string) => {
    loading.value = true
    error.value = null
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Create user object
      const newUser: AuthUser = {
        id: Date.now().toString(),
        email,
        firstName,
        lastName,
        created_at: new Date().toISOString()
      }
      
      // Save to localStorage
      localStorage.setItem('user', JSON.stringify(newUser))
      user.value = newUser
      
      return { success: true, message: 'Muvaffaqiyatli ro\'yxatdan o\'tdingiz!' }
    } catch (err: any) {
      error.value = err.message || 'Ro\'yxatdan o\'tishda xatolik yuz berdi'
      return { success: false, message: error.value }
    } finally {
      loading.value = false
    }
  }

  // Sign in with email
  const signIn = async (email: string, password: string) => {
    loading.value = true
    error.value = null
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Check if user exists in localStorage
      const savedUser = localStorage.getItem('user')
      if (savedUser) {
        const userData = JSON.parse(savedUser)
        if (userData.email === email) {
          user.value = userData
          return { success: true, message: 'Muvaffaqiyatli kirildi!' }
        }
      }
      
      // If no user found, create new one (for demo purposes)
      const newUser: AuthUser = {
        id: Date.now().toString(),
        email,
        firstName: 'Demo',
        lastName: 'User',
        created_at: new Date().toISOString()
      }
      
      localStorage.setItem('user', JSON.stringify(newUser))
      user.value = newUser
      
      return { success: true, message: 'Muvaffaqiyatli kirildi!' }
    } catch (err: any) {
      error.value = err.message || 'Kirishda xatolik yuz berdi'
      return { success: false, message: error.value }
    } finally {
      loading.value = false
    }
  }

  // Sign out
  const signOut = async () => {
    loading.value = true
    error.value = null
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500))
      
      user.value = null
      localStorage.removeItem('user')
      
      return { success: true, message: 'Muvaffaqiyatli chiqildi!' }
    } catch (err: any) {
      error.value = err.message || 'Chiqishda xatolik yuz berdi'
      return { success: false, message: error.value }
    } finally {
      loading.value = false
    }
  }

  // Get current session
  const getSession = async () => {
    try {
      const savedUser = localStorage.getItem('user')
      if (savedUser) {
        user.value = JSON.parse(savedUser)
      }
    } catch (err: any) {
      console.error('Session olishda xatolik:', err)
    }
  }

  // Initialize auth
  const initAuth = () => {
    getSession()
  }

  return {
    user: computed(() => user.value),
    loading: computed(() => loading.value),
    error: computed(() => error.value),
    isAuthenticated,
    signUp,
    signIn,
    signOut,
    getSession,
    initAuth
  }
}
