<template>
  <div class="min-h-screen">
    <!-- Modern Hero Background -->
    <div class="relative overflow-hidden bg-gradient-to-br from-green-600 via-teal-600 to-emerald-700 min-h-screen flex items-center justify-center">
      <!-- Animated background elements -->
      <div class="absolute inset-0">
        <div class="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <!-- Floating elements -->
      <div class="absolute top-10 left-10 animate-bounce">
        <UserCircleIcon class="w-12 h-12 text-white/30" />
      </div>
      <div class="absolute top-20 right-20 animate-bounce delay-1000">
        <svg class="w-10 h-10 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
        </svg>
      </div>

      <div class="relative z-10 w-full max-w-md px-4">
        <!-- Login Form Card -->
        <div class="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/20">
          <div class="text-center mb-8">
            <div class="bg-gradient-to-br from-green-500 to-teal-600 p-4 rounded-2xl shadow-lg mb-6 mx-auto w-20 h-20 flex items-center justify-center">
              <UserCircleIcon class="w-10 h-10 text-white" />
            </div>
            <h2 class="text-3xl font-bold text-gray-900 mb-2">
              Tizimga kirish
            </h2>
            <p class="text-gray-600">
              Hisobingizga kirish va testlarni davom ettiring
            </p>
          </div>

          <!-- Success Message -->
          <div v-if="showSuccessMessage" class="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-green-700 rounded-xl">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium">🎉 Ro'yxatdan muvaffaqiyatli o'tdingiz! Endi tizimga kirishingiz mumkin.</p>
              </div>
            </div>
          </div>

          <form @submit.prevent="handleLogin" class="space-y-6">
            <!-- Email -->
            <div class="group">
              <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
                Email manzil
              </label>
              <div class="relative">
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  :class="{ 'border-red-500 focus:ring-red-500': errors.email }"
                  placeholder="aziza@example.com"
                >
                <div class="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl opacity-0 group-focus-within:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              <p v-if="errors.email" class="mt-2 text-sm text-red-600 flex items-center">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                </svg>
                {{ errors.email }}
              </p>
            </div>

            <!-- Password -->
            <div class="group">
              <label for="password" class="block text-sm font-semibold text-gray-700 mb-2">
                Parol
              </label>
              <div class="relative">
                <input
                  id="password"
                  v-model="form.password"
                  :type="showPassword ? 'text' : 'password'"
                  required
                  class="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  :class="{ 'border-red-500 focus:ring-red-500': errors.password }"
                  placeholder="Parolingizni kiriting"
                >
                <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <EyeSlashIcon v-if="showPassword" class="w-5 h-5" />
                  <EyeIcon v-else class="w-5 h-5" />
                </button>
                <div class="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl opacity-0 group-focus-within:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              <p v-if="errors.password" class="mt-2 text-sm text-red-600 flex items-center">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                </svg>
                {{ errors.password }}
              </p>
            </div>

            <!-- Remember Me & Forgot Password -->
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input
                  id="remember"
                  v-model="form.rememberMe"
                  type="checkbox"
                  class="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                >
                <label for="remember" class="ml-2 block text-sm text-gray-700">
                  Meni eslab qol
                </label>
              </div>
              <div class="text-sm">
                <router-link to="/forgot-password" class="text-green-600 hover:text-green-800 font-medium transition-colors">
                  Parolni unutdingizmi?
                </router-link>
              </div>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isLoading"
              class="group relative w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:transform-none disabled:shadow-none flex items-center justify-center"
            >
              <div v-if="isLoading" class="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
              <span class="relative z-10">{{ isLoading ? 'Kirish...' : 'Tizimga kirish' }}</span>
              <div class="absolute inset-0 bg-gradient-to-r from-green-700 to-teal-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <!-- Divider -->
            <div class="relative">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-4 bg-white text-gray-500">Yoki</span>
              </div>
            </div>

            <!-- Social Login Buttons -->
            <div class="grid grid-cols-2 gap-4">
              <button
                type="button"
                @click="socialLogin('google')"
                class="group flex items-center justify-center px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md"
              >
                <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span class="font-medium text-gray-700">Google</span>
              </button>
              <button
                type="button"
                @click="socialLogin('facebook')"
                class="group flex items-center justify-center px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md"
              >
                <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span class="font-medium text-gray-700">Facebook</span>
              </button>
            </div>

            <!-- Register Link -->
            <div class="text-center">
              <p class="text-sm text-gray-600">
                Hisobingiz yo'qmi?
                <router-link to="/register" class="text-green-600 hover:text-green-800 font-semibold transition-colors">
                  Ro'yxatdan o'tish
                </router-link>
              </p>
            </div>
          </form>

          <!-- Demo Credentials -->
          <div class="mt-6 p-4 bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl border border-gray-100">
            <h3 class="text-sm font-semibold text-gray-700 mb-3 flex items-center">
              <svg class="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Demo hisob ma'lumotlari:
            </h3>
            <div class="text-xs text-gray-600 space-y-2">
              <div class="flex items-center">
                <span class="font-medium text-gray-700 w-16">Email:</span>
                <span class="bg-gray-100 px-2 py-1 rounded text-gray-800 font-mono">demo@example.com</span>
              </div>
              <div class="flex items-center">
                <span class="font-medium text-gray-700 w-16">Parol:</span>
                <span class="bg-gray-100 px-2 py-1 rounded text-gray-800 font-mono">demo123</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { UserCircleIcon, EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/outline'

const router = useRouter()
const route = useRoute()
const isLoading = ref(false)
const showPassword = ref(false)
const showSuccessMessage = ref(false)

const form = reactive({
  email: '',
  password: '',
  rememberMe: false
})

const errors = reactive({
  email: '',
  password: ''
})

onMounted(() => {
  // Check if user just registered
  if (route.query.registered === 'true') {
    showSuccessMessage.value = true
    setTimeout(() => {
      showSuccessMessage.value = false
    }, 5000)
  }
})

const validateForm = () => {
  // Reset errors
  Object.keys(errors).forEach(key => errors[key] = '')

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(form.email)) {
    errors.email = 'To\'g\'ri email manzilini kiriting'
  }

  // Password validation
  if (form.password.length < 1) {
    errors.password = 'Parolni kiriting'
  }

  // Check if any errors exist
  return !Object.values(errors).some(error => error !== '')
}

const handleLogin = async () => {
  if (!validateForm()) {
    return
  }

  isLoading.value = true

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Check for demo credentials
    if (form.email === 'demo@example.com' && form.password === 'demo123') {
      // Success - redirect to dashboard
      router.push('/')
    } else {
      // Show error for invalid credentials
      errors.email = 'Email yoki parol noto\'g\'ri'
      errors.password = 'Email yoki parol noto\'g\'ri'
    }
  } catch (error) {
    console.error('Login error:', error)
    errors.email = 'Tizim xatosi yuz berdi'
  } finally {
    isLoading.value = false
  }
}

const socialLogin = (provider) => {
  console.log(`Logging in with ${provider}`)
  // Implement social login logic
}
</script>

<style scoped>
/* Custom animations and effects */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>
