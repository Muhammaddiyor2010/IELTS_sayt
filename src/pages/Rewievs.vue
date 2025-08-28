<template>
  <div class="min-h-screen">
    <!-- Modern Hero Section -->
    <div class="relative overflow-hidden bg-gradient-to-br from-orange-600 via-red-600 to-pink-700 py-20">
      <!-- Animated background elements -->
      <div class="absolute inset-0">
        <div class="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Fikrlar 💬
        </h1>
        <p class="text-xl md:text-2xl text-orange-100 mb-8 max-w-2xl mx-auto">
          O'quvchilar va o'qituvchilar fikrlari, tajribalari va platforma haqida ularning mulohazalari
        </p>
      </div>
    </div>

    <!-- Reviews Section -->
    <div class="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Review Card 1 -->
          <div class="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <div class="relative p-8">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                  <UserCircleIcon class="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 class="font-bold text-gray-900">Aziza Karimova</h4>
                  <div class="flex text-yellow-400 mt-1">
                    <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                  </div>
                </div>
              </div>
              <p class="text-gray-600 mb-4 leading-relaxed">
                "ExamMaster platformasi orqali matematika fanini juda yaxshi o'rgandim. Testlar tushunarli va foydali edi!"
              </p>
              <div class="text-sm text-gray-500">2 kun oldin</div>
            </div>
          </div>

          <!-- Review Card 2 -->
          <div class="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <div class="relative p-8">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-4">
                  <UserCircleIcon class="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 class="font-bold text-gray-900">Sardor Toshmatov</h4>
                  <div class="flex text-yellow-400 mt-1">
                    <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                  </div>
                </div>
              </div>
              <p class="text-gray-600 mb-4 leading-relaxed">
                "Fizika testlari juda sifatli va haqiqiy imtihonlarga o'xshash. Natijam yaxshilandi!"
              </p>
              <div class="text-sm text-gray-500">5 kun oldin</div>
            </div>
          </div>

          <!-- Review Card 3 -->
          <div class="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <div class="relative p-8">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <UserCircleIcon class="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 class="font-bold text-gray-900">Malika Yusupova</h4>
                  <div class="flex text-yellow-400 mt-1">
                    <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                  </div>
                </div>
              </div>
              <p class="text-gray-600 mb-4 leading-relaxed">
                "Bloglar juda foydali. O'qish usullari haqida ko'p narsa o'rgandim. Rahmat!"
              </p>
              <div class="text-sm text-gray-500">1 hafta oldin</div>
            </div>
          </div>

          <!-- Review Card 4 -->
          <div class="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <div class="relative p-8">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mr-4">
                  <UserCircleIcon class="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 class="font-bold text-gray-900">Jasur Rahimov</h4>
                  <div class="flex text-yellow-400 mt-1">
                    <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                  </div>
                </div>
              </div>
              <p class="text-gray-600 mb-4 leading-relaxed">
                "IELTS Listening bo'limi juda yaxshi ishlangan. Audio sifatli va savollar aniq."
              </p>
              <div class="text-sm text-gray-500">1 hafta oldin</div>
            </div>
          </div>

          <!-- Review Card 5 -->
          <div class="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <div class="relative p-8">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mr-4">
                  <UserCircleIcon class="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 class="font-bold text-gray-900">Nilufar Karimova</h4>
                  <div class="flex text-yellow-400 mt-1">
                    <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                  </div>
                </div>
              </div>
              <p class="text-gray-600 mb-4 leading-relaxed">
                "IELTS Reading bo'limida ko'p yaxshilandi. Platforma juda qulay va natijalar tez ko'rsatiladi."
              </p>
              <div class="text-sm text-gray-500">2 hafta oldin</div>
            </div>
          </div>

          <!-- Review Card 6 -->
          <div class="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-indigo-500 to-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <div class="relative p-8">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mr-4">
                  <UserCircleIcon class="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 class="font-bold text-gray-900">Dilfuza Toshmatova</h4>
                  <div class="flex text-yellow-400 mt-1">
                    <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                  </div>
                </div>
              </div>
              <p class="text-gray-600 mb-4 leading-relaxed">
                "Writing bo'limi juda foydali. Maslahatlar va namunalar juda yaxshi. Natijam yaxshilandi!"
              </p>
              <div class="text-sm text-gray-500">3 hafta oldin</div>
            </div>
          </div>

          <!-- Review Card 7 -->
          <div class="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-teal-500 to-green-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <div class="relative p-8">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mr-4">
                  <UserCircleIcon class="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 class="font-bold text-gray-900">Rustam Karimov</h4>
                  <div class="flex text-yellow-400 mt-1">
                    <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                  </div>
                </div>
              </div>
              <p class="text-gray-600 mb-4 leading-relaxed">
                "Platforma juda professional. Har bir bo'lim alohida ishlangan va natijalar aniq."
              </p>
              <div class="text-sm text-gray-500">1 oy oldin</div>
            </div>
          </div>

          <!-- Review Card 8 -->
          <div class="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-pink-500 to-rose-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <div class="relative p-8">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mr-4">
                  <UserCircleIcon class="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 class="font-bold text-gray-900">Zarina Yusupova</h4>
                  <div class="flex text-yellow-400 mt-1">
                    <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                  </div>
                </div>
              </div>
              <p class="text-gray-600 mb-4 leading-relaxed">
                "Speaking bo'limi juda yaxshi. Audio namunalar va maslahatlar juda foydali edi."
              </p>
              <div class="text-sm text-gray-500">1 oy oldin</div>
            </div>
          </div>

          <!-- Review Card 9 -->
          <div class="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <div class="relative p-8">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mr-4">
                  <UserCircleIcon class="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 class="font-bold text-gray-900">Kamila Rahimova</h4>
                  <div class="flex text-yellow-400 mt-1">
                    <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                  </div>
                </div>
              </div>
              <p class="text-gray-600 mb-4 leading-relaxed">
                "IELTS imtihonini muvaffaqiyatli topshirdim. Platforma juda yordam berdi!"
              </p>
              <div class="text-sm text-gray-500">1 oy oldin</div>
            </div>
          </div>
        </div>

        <!-- Statistics Section -->
        <div class="mt-20">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Platforma statistikasi</h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">O'quvchilarimiz natijalari va platforma ko'rsatkichlari</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <!-- Stat Card 1 -->
            <div class="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-2xl"></div>
              <div class="flex flex-col items-center text-center">
                <div class="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span class="text-2xl">📊</span>
                </div>
                <h3 class="text-3xl font-bold text-gray-900 mb-2">15,000+</h3>
                <p class="text-gray-600">Faol o'quvchilar</p>
              </div>
            </div>

            <!-- Stat Card 2 -->
            <div class="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-teal-600 rounded-t-2xl"></div>
              <div class="flex flex-col items-center text-center">
                <div class="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span class="text-2xl">🎯</span>
                </div>
                <h3 class="text-3xl font-bold text-gray-900 mb-2">95%</h3>
                <p class="text-gray-600">Muvaffaqiyat darajasi</p>
              </div>
            </div>

            <!-- Stat Card 3 -->
            <div class="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-t-2xl"></div>
              <div class="flex flex-col items-center text-center">
                <div class="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span class="text-2xl">⭐</span>
                </div>
                <h3 class="text-3xl font-bold text-gray-900 mb-2">4.9/5</h3>
                <p class="text-gray-600">O'rtacha reyting</p>
              </div>
            </div>

            <!-- Stat Card 4 -->
            <div class="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-t-2xl"></div>
              <div class="flex flex-col items-center text-center">
                <div class="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span class="text-2xl">🏆</span>
                </div>
                <h3 class="text-3xl font-bold text-gray-900 mb-2">500+</h3>
                <p class="text-gray-600">Muvaffaqiyatli natijalar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { UserCircleIcon } from '@heroicons/vue/24/outline'
</script>

<style scoped>
/* Remove old styles and keep only necessary ones */
</style>
