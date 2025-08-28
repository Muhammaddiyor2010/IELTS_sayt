<template>
  <div class="">
    <!-- Modern Hero Background -->
    <div class="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 h-[800px] flex items-center justify-center py-8">
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
        <!-- Registration Form Card -->
        <div class="bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-6 sm:p-8 border border-white/20  overflow-y-auto">
          <div class="text-center mb-8">
            <div class="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-2xl shadow-lg mb-6 mx-auto w-20 h-20 flex items-center justify-center">
              <UserCircleIcon class="w-10 h-10 text-white" />
            </div>
            <h2 class="text-3xl font-bold text-gray-900 mb-2">
              Ro'yxatdan o'tish
            </h2>
            <p class="text-gray-600">
              Hisobingizni yarating va testlarni boshlang
            </p>
          </div>

          <form @submit.prevent="handleRegister" class="space-y-6">
            <!-- Full Name -->
            <div class="group">
              <label for="fullName" class="block text-sm font-semibold text-gray-700 mb-2">
                Ism va familiya
              </label>
              <div class="relative">
                <input
                  id="fullName"
                  v-model="form.fullName"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  :class="{ 'border-red-500 focus:ring-red-500': errors.fullName }"
                  placeholder="Aziza Karimova"
                >
                <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-focus-within:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              <p v-if="errors.fullName" class="mt-2 text-sm text-red-600 flex items-center">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                </svg>
                {{ errors.fullName }}
              </p>
            </div>

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
                  class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  :class="{ 'border-red-500 focus:ring-red-500': errors.email }"
                  placeholder="aziza@example.com"
                >
                <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-focus-within:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
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
                  class="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  :class="{ 'border-red-500 focus:ring-red-500': errors.password }"
                  placeholder="Kamida 8 ta belgi"
                >
                <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <EyeSlashIcon v-if="showPassword" class="w-5 h-5" />
                  <EyeIcon v-else class="w-5 h-5" />
                </button>
                <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-focus-within:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
              </div>
              <p v-if="errors.password" class="mt-2 text-sm text-red-600 flex items-center">
                <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                </svg>
                {{ errors.password }}
              </p>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isLoading"
              class="group relative w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:transform-none disabled:shadow-none flex items-center justify-center"
            >
              <div v-if="isLoading" class="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
              <span class="relative z-10">{{ isLoading ? 'Ro\'yxatdan o\'tish...' : 'Ro\'yxatdan o\'tish' }}</span>
              <div class="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

            <!-- Google Login Button -->
            <button
              type="button"
              @click="socialLogin('google')"
              class="group w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md"
            >
              <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span class="font-medium text-gray-700">Google orqali ro'yxatdan o'tish</span>
            </button>

            <!-- Login Link -->
            <div class="text-center">
              <p class="text-sm text-gray-600">
                Hisobingiz bormi?
                <router-link to="/login" class="text-blue-600 hover:text-blue-800 font-semibold transition-colors">
                  Tizimga kirish
                </router-link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { UserCircleIcon, EyeIcon, EyeSlashIcon } from '@heroicons/vue/24/outline'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const isLoading = ref(false)
const showPassword = ref(false)

const form = reactive({
  fullName: '',
  email: '',
  password: ''
})

const errors = reactive({
  fullName: '',
  email: '',
  password: ''
})

const validateForm = () => {
  // Reset errors
  Object.keys(errors).forEach(key => errors[key] = '')

  // Full name validation
  if (form.fullName.length < 2) {
    errors.fullName = 'Ism kamida 2 ta harf bo\'lishi kerak'
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(form.email)) {
    errors.email = 'To\'g\'ri email manzilini kiriting'
  }

  // Password validation
  if (form.password.length < 6) {
    errors.password = 'Parol kamida 6 ta belgi bo\'lishi kerak'
  } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(form.password)) {
    errors.password = 'Parol katta harf, kichik harf va raqam o\'z ichiga olishi kerak'
  }

  // Check if any errors exist
  return !Object.values(errors).some(error => error !== '')
}

const handleRegister = async () => {
  if (!validateForm()) {
    return
  }

  isLoading.value = true

  try {
    const result = await authStore.signUp(form.email, form.password)

    if (result.success) {
      // Success - redirect to login
      router.push('/login?registered=true')
    } else {
      errors.email = result.message
    }
  } catch (error) {
    console.error('Registration error:', error)
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
