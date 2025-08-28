<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
    <div class="max-w-md w-full mx-auto p-6">
      <div class="bg-white rounded-2xl shadow-xl p-8">
        <div class="text-center mb-8">
          <div class="bg-blue-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
            </svg>
          </div>
          <h2 class="text-2xl font-bold text-gray-900 mb-2">Yangi parol o'rnatish</h2>
          <p class="text-gray-600">Yangi parolingizni kiriting</p>
        </div>

        <form @submit.prevent="updatePassword" class="space-y-6">
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
              Yangi parol
            </label>
            <input
              id="password"
              v-model="password"
              type="password"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Yangi parolingizni kiriting"
            />
          </div>

          <div>
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700 mb-2">
              Parolni tasdiqlang
            </label>
            <input
              id="confirmPassword"
              v-model="confirmPassword"
              type="password"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Parolni qayta kiriting"
            />
          </div>

          <div v-if="error" class="bg-red-50 border border-red-200 rounded-lg p-4">
            <p class="text-red-600 text-sm">{{ error }}</p>
          </div>

          <div v-if="success" class="bg-green-50 border border-green-200 rounded-lg p-4">
            <p class="text-green-600 text-sm">{{ success }}</p>
          </div>

          <button
            type="submit"
            :disabled="loading || !password || !confirmPassword || password !== confirmPassword"
            class="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            <span v-if="loading" class="flex items-center justify-center">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Yangilanmoqda...
            </span>
            <span v-else>Parolni yangilash</span>
          </button>
        </form>

        <div class="mt-6 text-center">
          <router-link to="/login" class="text-blue-600 hover:text-blue-700 font-medium">
            Kirish sahifasiga qaytish
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const password = ref('')
const confirmPassword = ref('')
const loading = ref(false)
const error = ref('')
const success = ref('')

const updatePassword = async () => {
  if (password.value !== confirmPassword.value) {
    error.value = 'Parollar mos kelmadi'
    return
  }

  if (password.value.length < 6) {
    error.value = 'Parol kamida 6 ta belgidan iborat bo\'lishi kerak'
    return
  }

  try {
    loading.value = true
    error.value = ''
    success.value = ''

    const result = await authStore.updatePassword(password.value)
    
    if (result.success) {
      success.value = result.message
      setTimeout(() => {
        router.push('/login')
      }, 2000)
    } else {
      error.value = result.message
    }
  } catch (err) {
    error.value = 'Parol yangilashda xatolik yuz berdi'
  } finally {
    loading.value = false
  }
}
</script>
