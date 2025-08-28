<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
    <div class="max-w-md w-full mx-auto p-6">
      <div class="bg-white rounded-2xl shadow-xl p-8 text-center">
        <div v-if="loading" class="space-y-4">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <h2 class="text-xl font-semibold text-gray-900">Tasdiqlanmoqda...</h2>
          <p class="text-gray-600">Email tasdiqlanmoqda, iltimos kuting</p>
        </div>
        
        <div v-else-if="success" class="space-y-4">
          <div class="bg-green-100 rounded-full p-3 w-16 h-16 mx-auto flex items-center justify-center">
            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 class="text-xl font-semibold text-gray-900">Email tasdiqlandi!</h2>
          <p class="text-gray-600">Sizning email manzilingiz muvaffaqiyatli tasdiqlandi</p>
          <router-link to="/login" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Kirish sahifasiga o'tish
          </router-link>
        </div>
        
        <div v-else class="space-y-4">
          <div class="bg-red-100 rounded-full p-3 w-16 h-16 mx-auto flex items-center justify-center">
            <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>
          <h2 class="text-xl font-semibold text-gray-900">Xatolik yuz berdi</h2>
          <p class="text-gray-600">{{ error || 'Email tasdiqlashda xatolik yuz berdi' }}</p>
          <router-link to="/login" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Qaytish
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/lib/supabase'

const router = useRouter()
const loading = ref(true)
const success = ref(false)
const error = ref('')

onMounted(async () => {
  try {
    const { data, error: authError } = await supabase.auth.getSession()
    
    if (authError) {
      throw authError
    }

    if (data.session) {
      success.value = true
    } else {
      error.value = 'Sessiya topilmadi'
    }
  } catch (err: any) {
    error.value = err.message || 'Xatolik yuz berdi'
  } finally {
    loading.value = false
  }
})
</script>
