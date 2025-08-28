<template>
  <div class="min-h-screen">
    <!-- Modern Hero Section -->
    <div class="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 py-20">
      <!-- Animated background elements -->
      <div class="absolute inset-0">
        <div class="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Bloglar 📚
        </h1>
        <p class="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
                          IELTS haqida foydali ma'lumotlar, strategiyalar va professional maslahatlar
        </p>
      </div>
    </div>

    <!-- Blog Articles Section -->
    <div class="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Blog Card 1 -->
          <article class="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <div class="relative p-8">
              <div class="flex items-center justify-between mb-6">
                <div class="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl shadow-lg">
                  <BookOpenIcon class="w-8 h-8 text-white" />
                </div>
                <div class="text-right">
                  <div class="text-sm text-gray-500">5 kun oldin</div>
                </div>
              </div>

              <h3 class="text-xl font-bold text-gray-900 mb-4">IELTS Reading strategiyalari</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                IELTS Reading bo'limida yuqori ball olish uchun asosiy strategiyalar va maslahatlar...
              </p>

              <router-link to="/blog/1" class="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                O'qish
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </router-link>
            </div>
          </article>

          <!-- Blog Card 2 -->
          <article class="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <div class="relative p-8">
              <div class="flex items-center justify-between mb-6">
                <div class="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-2xl shadow-lg">
                  <CpuChipIcon class="w-8 h-8 text-white" />
                </div>
                <div class="text-right">
                  <div class="text-sm text-gray-500">1 hafta oldin</div>
                </div>
              </div>

              <h3 class="text-xl font-bold text-gray-900 mb-4">IELTS Writing formulalari</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                IELTS Writing bo'limida ishlatiladigan eng muhim formulalar va ularni qanday qo'llash...
              </p>

              <router-link to="/blog/2" class="inline-flex items-center text-green-600 hover:text-green-800 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                O'qish
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </router-link>
            </div>
          </article>

          <!-- Blog Card 3 -->
          <article class="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <div class="relative p-8">
              <div class="flex items-center justify-between mb-6">
                <div class="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-2xl shadow-lg">
                  <ChatBubbleLeftRightIcon class="w-8 h-8 text-white" />
                </div>
                <div class="text-right">
                  <div class="text-sm text-gray-500">2 hafta oldin</div>
                </div>
              </div>

              <h3 class="text-xl font-bold text-gray-900 mb-4">IELTS Speaking maslahatlari</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                IELTS Speaking bo'limida ishtirok etishda e'tibor berish kerak bo'lgan muhim nuqtalar...
              </p>

              <router-link to="/blog/3" class="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                O'qish
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </router-link>
            </div>
          </article>

          <!-- Blog Card 4 -->
          <article class="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <div class="relative p-8">
              <div class="flex items-center justify-between mb-6">
                <div class="bg-gradient-to-br from-red-500 to-red-600 p-4 rounded-2xl shadow-lg">
                  <SpeakerWaveIcon class="w-8 h-8 text-white" />
                </div>
                <div class="text-right">
                  <div class="text-sm text-gray-500">3 hafta oldin</div>
                </div>
              </div>

              <h3 class="text-xl font-bold text-gray-900 mb-4">Listening bo'limi uchun maslahatlar</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                IELTS Listening bo'limida muvaffaqiyatli bo'lish uchun kerakli ko'nikmalar...
              </p>

              <router-link to="/blog/4" class="inline-flex items-center text-red-600 hover:text-red-800 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                O'qish
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </router-link>
            </div>
          </article>

          <!-- Blog Card 5 -->
          <article class="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <div class="relative p-8">
              <div class="flex items-center justify-between mb-6">
                <div class="bg-gradient-to-br from-yellow-500 to-yellow-600 p-4 rounded-2xl shadow-lg">
                  <CalculatorIcon class="w-8 h-8 text-white" />
                </div>
                <div class="text-right">
                  <div class="text-sm text-gray-500">1 oy oldin</div>
                </div>
              </div>

              <h3 class="text-xl font-bold text-gray-900 mb-4">IELTS Listening maslahatlari</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                IELTS Listening bo'limida yuqori ball olish uchun asosiy maslahatlar va strategiyalar...
              </p>

              <router-link to="/blog/5" class="inline-flex items-center text-yellow-600 hover:text-yellow-800 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                O'qish
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </router-link>
            </div>
          </article>

          <!-- Blog Card 6 -->
          <article class="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-indigo-500 to-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <div class="relative p-8">
              <div class="flex items-center justify-between mb-6">
                <div class="bg-gradient-to-br from-indigo-500 to-indigo-600 p-4 rounded-2xl shadow-lg">
                  <ChartBarSquareIcon class="w-8 h-8 text-white" />
                </div>
                <div class="text-right">
                  <div class="text-sm text-gray-500">1 oy oldin</div>
                </div>
              </div>

              <h3 class="text-xl font-bold text-gray-900 mb-4">Natijalarni tahlil qilish</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Test natijalarini to'g'ri tahlil qilish va keyingi qadamlarni rejalashtirish...
              </p>

              <router-link to="/blog/6" class="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                O'qish
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </router-link>
            </div>
          </article>
        </div>

        <!-- Featured Articles Section -->
        <div class="mt-20">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Tavsiya etilgan maqolalar</h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">Eng foydali va mashhur maqolalar</p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Featured Article 1 -->
            <article class="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div class="relative p-8">
                <div class="flex items-center justify-between mb-6">
                  <div class="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl shadow-lg">
                    <BookOpenIcon class="w-10 h-10 text-white" />
                  </div>
                  <div class="text-right">
                    <div class="text-sm text-gray-500">Tavsiya etilgan</div>
                  </div>
                </div>

                <h3 class="text-2xl font-bold text-gray-900 mb-4">IELTS Reading uchun eng yaxshi strategiyalar</h3>
                <p class="text-gray-600 mb-6 leading-relaxed">
                  IELTS Reading bo'limida yuqori ball olish uchun professional maslahatlar va strategiyalar.
                  Bu maqolada siz Reading bo'limida qanday samarali ishlash kerakligini o'rganasiz.
                </p>

                <router-link to="/blog/featured-1" class="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  O'qish
                  <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </router-link>
              </div>
            </article>

            <!-- Featured Article 2 -->
            <article class="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div class="relative p-8">
                <div class="flex items-center justify-between mb-6">
                  <div class="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-2xl shadow-lg">
                    <CalculatorIcon class="w-10 h-10 text-white" />
                  </div>
                  <div class="text-right">
                    <div class="text-sm text-gray-500">Tavsiya etilgan</div>
                  </div>
                </div>

                                <h3 class="text-2xl font-bold text-gray-900 mb-4">IELTS Writing formulalari va maslahatlar</h3>
                <p class="text-gray-600 mb-6 leading-relaxed">
                IELTS Writing bo'limida ishlatiladigan barcha muhim formulalar va ularni qanday samarali
                  qo'llash haqida batafsil ma'lumot. Bu maqola sizga yuqori ball olishga yordam beradi.
                </p>

                <router-link to="/blog/featured-2" class="inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold py-3 px-6 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  O'qish
                  <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </router-link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  BookOpenIcon,
  CpuChipIcon,
  ChatBubbleLeftRightIcon,
  SpeakerWaveIcon,
  CalculatorIcon,
  ChartBarSquareIcon
} from '@heroicons/vue/24/outline'
</script>

<style scoped>
/* Remove old styles and keep only necessary ones */
</style>
