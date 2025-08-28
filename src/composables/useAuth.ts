import { ref, computed } from 'vue'
import { supabase } from '@/lib/supabase'
import type { User, Session } from '@supabase/supabase-js'

export interface AuthUser {
  id: string
  email: string
  firstName?: string
  lastName?: string
  created_at: string
}

export function useAuth() {
  const user = ref<AuthUser | null>(null)
  const session = ref<Session | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const isAuthenticated = computed(() => !!user.value)

  // Sign up with email
  const signUp = async (email: string, password: string, firstName?: string, lastName?: string) => {
    loading.value = true
    error.value = null

    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            first_name: firstName,
            last_name: lastName
          }
        }
      })

      if (signUpError) {
        throw signUpError
      }

      return { success: true, message: 'Tasdiqlash kodi emailingizga yuborildi!' }
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
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (signInError) {
        throw signInError
      }

      if (data.user) {
        user.value = {
          id: data.user.id,
          email: data.user.email!,
          firstName: data.user.user_metadata?.first_name,
          lastName: data.user.user_metadata?.last_name,
          created_at: data.user.created_at
        }
        session.value = data.session
        localStorage.setItem('user', JSON.stringify(user.value))
      }

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
      const { error: signOutError } = await supabase.auth.signOut()

      if (signOutError) {
        throw signOutError
      }

      user.value = null
      session.value = null
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
      const { data: { session: currentSession } } = await supabase.auth.getSession()

      if (currentSession?.user) {
        user.value = {
          id: currentSession.user.id,
          email: currentSession.user.email!,
          firstName: currentSession.user.user_metadata?.first_name,
          lastName: currentSession.user.user_metadata?.last_name,
          created_at: currentSession.user.created_at
        }
        session.value = currentSession
        localStorage.setItem('user', JSON.stringify(user.value))
      }
    } catch (err: any) {
      console.error('Session olishda xatolik:', err)
    }
  }

  // Listen to auth changes
  const initAuth = () => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        user.value = {
          id: session.user.id,
          email: session.user.email!,
          firstName: session.user.user_metadata?.first_name,
          lastName: session.user.user_metadata?.last_name,
          created_at: session.user.created_at
        }
        session.value = session
        localStorage.setItem('user', JSON.stringify(user.value))
      } else if (event === 'SIGNED_OUT') {
        user.value = null
        session.value = null
        localStorage.removeItem('user')
      }
    })
  }

  return {
    user: computed(() => user.value),
    session: computed(() => session.value),
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
