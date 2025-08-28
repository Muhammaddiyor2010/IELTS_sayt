<template>
  <div class=" lg:h-[605px] flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 py-8 lg:py-0">
    <!-- Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse delay-500"></div>
    </div>

    <!-- Login Card -->
    <div class="relative z-10 w-full max-w-6xl mx-4">
      <div class="bg-white/95 backdrop-blur-md max-h-[600px] rounded-2xl shadow-2xl p-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <!-- Left Column - Form -->
        <div class="lg:col-span-1">
          <!-- Header -->
          <div class="text-center mb-8 lg:text-left">
            <div class="bg-gradient-to-br from-blue-600 to-purple-600 p-3 rounded-full w-16 h-16 mx-auto lg:mx-0 mb-4 flex items-center justify-center">
              <span class="text-white text-2xl">🎯</span>
            </div>
            <h1 class="text-3xl font-bold text-gray-800 mb-2">Tizimga kirish</h1>
            <p class="text-gray-600">ExamMaster platformasiga qaytib xush kelibsiz</p>
          </div>


        <!-- Google Login Button -->
        <div class="space-y-3">
          <button
            type="button"
            @click="handleGoogleLogin"
            :disabled="loading"
            class="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg class="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span v-if="loading">Kirilmoqda...</span>
            <span v-else>Google bilan kirish</span>
          </button>
        </div>

        <!-- Register Link -->
        <div class="text-center mt-6 lg:text-left">
          <p class="text-gray-600">
            Akkauntingiz yo'qmi?
            <router-link to="/register" class="text-blue-600 hover:text-blue-700 font-semibold">
              Ro'yxatdan o'ting
            </router-link>
          </p>
        </div>
        </div>

                <!-- Right Column - Login Form -->
        <div class="lg:col-span-1 lg:pl-8">
          <form @submit.prevent="handleLogin" class="space-y-4">
            <!-- Email -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="Email manzilingizni kiriting"
              />
            </div>

            <!-- Password -->
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
                Parol
              </label>
              <div class="relative">
                <input
                  id="password"
                  v-model="form.password"
                  :type="showPassword ? 'text' : 'password'"
                  required
                  class="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Parolingizni kiriting"
                />
                <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <svg v-if="showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"></path>
                  </svg>
                  <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Remember Me & Forgot Password -->
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <input
                  id="remember"
                  v-model="form.rememberMe"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label for="remember" class="text-sm text-gray-600">
                  Meni eslab qol
                </label>
              </div>
              <router-link to="/reset-password" class="text-sm text-blue-600 hover:text-blue-700 font-medium">
                Parolni unutdingizmi?
              </router-link>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="loading"
              class="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="loading" class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Kirilmoqda...
              </span>
              <span v-else>Tizimga kirish</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const loading = ref(false)
const showPassword = ref(false)

const form = ref({
  email: '',
  password: '',
  rememberMe: false
})

const handleLogin = async () => {
  loading.value = true

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    // For demo purposes, create a mock user
    const user = {
      firstName: 'Demo',
      lastName: 'User',
      email: form.value.email
    }
    localStorage.setItem('user', JSON.stringify(user))

    // Redirect to home page
    router.push('/')
  } catch (error) {
    console.error('Login error:', error)
    alert('Tizimga kirishda xatolik yuz berdi!')
  } finally {
    loading.value = false
  }
}

const handleGoogleLogin = async () => {
  loading.value = true

  try {
    // Simulate Google login API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    // For demo purposes, create a mock user
    const user = {
      firstName: 'Google',
      lastName: 'User',
      email: 'user@gmail.com'
    }
    localStorage.setItem('user', JSON.stringify(user))

    // Redirect to home page
    router.push('/')
  } catch (error) {
    console.error('Google login error:', error)
    alert('Google orqali kirishda xatolik yuz berdi!')
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
/* Custom animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.bg-white\/95 {
  animation: fadeInUp 0.6s ease-out;
}
</style>
