<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4 sm:px-6 py-8">
    <div class="w-full max-w-sm sm:max-w-md md:max-w-lg">
      <!-- Header -->
      <div class="text-center mb-6 sm:mb-8">
        <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Tizimga kirish</h1>
        <p class="text-sm sm:text-base text-gray-600">IELTS tayyorgarlik platformasiga xush kelibsiz</p>
      </div>

      <!-- Sign In Form -->
      <div class="bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border border-gray-100">
        <form @submit.prevent="handleSignIn" class="space-y-4 sm:space-y-6">
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
              class="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
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
              class="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
              placeholder="Parolingizni kiriting"
            />
          </div>

          <!-- Error Message -->
          <div v-if="error" class="bg-red-50 border border-red-200 rounded-lg p-4">
            <p class="text-red-600 text-sm">{{ error }}</p>
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
              Kirilmoqda...
            </span>
            <span v-else>Tizimga kirish</span>
          </button>
        </form>

        <!-- Divider -->
        <div class="my-6 flex items-center">
          <div class="flex-1 border-t border-gray-300"></div>
          <span class="px-4 text-gray-500 text-sm">yoki</span>
          <div class="flex-1 border-t border-gray-300"></div>
        </div>

        <!-- Sign Up Link -->
        <div class="text-center">
          <p class="text-gray-600 text-sm">
            Akkauntingiz yo'qmi?
            <router-link to="/signup" class="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
              Ro'yxatdan o'tish
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
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth'

const router = useRouter()
const { signIn, loading, error } = useAuth()

const form = reactive({
  email: '',
  password: ''
})

const handleSignIn = async () => {
  const result = await signIn(form.email, form.password)

  if (result.success) {
    router.push('/')
  }
}
</script>
