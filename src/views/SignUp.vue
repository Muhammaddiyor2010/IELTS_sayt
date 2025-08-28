<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4 py-8">
    <div class="max-w-md w-full">
      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Ro'yxatdan o'tish</h1>
        <p class="text-gray-600">IELTS tayyorgarlik platformasiga xush kelibsiz</p>
      </div>

      <!-- Sign Up Form -->
      <div class="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <form @submit.prevent="handleSignUp" class="space-y-6">
          <!-- First Name -->
          <div>
            <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">
              Ism
            </label>
            <input
              id="firstName"
              v-model="form.firstName"
              type="text"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Ismingizni kiriting"
            />
          </div>

          <!-- Last Name -->
          <div>
            <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">
              Familiya
            </label>
            <input
              id="lastName"
              v-model="form.lastName"
              type="text"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Familiyangizni kiriting"
            />
          </div>

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
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="example@email.com"
            />
          </div>

          <!-- Password -->
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
              Parol
            </label>
            <input
              id="password"
              v-model="form.password"
              type="password"
              required
              minlength="6"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Kamida 6 ta belgi"
            />
          </div>

          <!-- Confirm Password -->
          <div>
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-2">
              Parolni tasdiqlang
            </label>
            <input
              id="confirmPassword"
              v-model="form.confirmPassword"
              type="password"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Parolni qayta kiriting"
            />
          </div>

          <!-- Error Message -->
          <div v-if="error" class="bg-red-50 border border-red-200 rounded-lg p-4">
            <p class="text-red-600 text-sm">{{ error }}</p>
          </div>

          <!-- Success Message -->
          <div v-if="successMessage" class="bg-green-50 border border-green-200 rounded-lg p-4">
            <p class="text-green-600 text-sm">{{ successMessage }}</p>
          </div>

          <!-- Submit Button -->
          <button
            type="submit"
            :disabled="loading"
            class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:ring-blue-300 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="loading" class="flex items-center justify-center">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Yuborilmoqda...
            </span>
            <span v-else>Ro'yxatdan o'tish</span>
          </button>
        </form>

        <!-- Divider -->
        <div class="my-6 flex items-center">
          <div class="flex-1 border-t border-gray-300"></div>
          <span class="px-4 text-gray-500 text-sm">yoki</span>
          <div class="flex-1 border-t border-gray-300"></div>
        </div>

        <!-- Sign In Link -->
        <div class="text-center">
          <p class="text-gray-600 text-sm">
            Akkauntingiz bormi?
            <router-link to="/signin" class="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
              Tizimga kirish
            </router-link>
          </p>
        </div>
      </div>

      <!-- Back to Home -->
      <div class="text-center mt-6">
        <router-link to="/" class="text-gray-500 hover:text-gray-700 text-sm transition-colors duration-200">
          ← Bosh sahifaga qaytish
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth'

const router = useRouter()
const { signUp, loading, error } = useAuth()

const successMessage = ref('')

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const handleSignUp = async () => {
  // Reset messages
  successMessage.value = ''
  
  // Validate passwords match
  if (form.password !== form.confirmPassword) {
    error.value = 'Parollar mos kelmadi'
    return
  }

  // Validate password length
  if (form.password.length < 6) {
    error.value = 'Parol kamida 6 ta belgidan iborat bo\'lishi kerak'
    return
  }

  const result = await signUp(form.email, form.password, form.firstName, form.lastName)
  
  if (result.success) {
    successMessage.value = result.message
    // Clear form
    form.firstName = ''
    form.lastName = ''
    form.email = ''
    form.password = ''
    form.confirmPassword = ''
    // Redirect to home after successful signup
    setTimeout(() => {
      router.push('/')
    }, 2000)
  }
}
</script>
