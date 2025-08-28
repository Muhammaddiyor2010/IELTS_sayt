<template>
  <div class="min-h-screen">
    <!-- Modern Hero Section -->
    <div class="relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-rose-700 py-20">
      <!-- Animated background elements -->
      <div class="absolute inset-0">
        <div class="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <!-- Floating elements -->
      <div class="absolute top-10 left-10 animate-bounce">
        <svg class="w-12 h-12 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
        </svg>
      </div>
      <div class="absolute top-20 right-20 animate-bounce delay-1000">
        <svg class="w-10 h-10 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </div>

      <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" ref="mainTitle">
          Narxlar 💰
        </h1>
        <p class="text-xl md:text-2xl text-purple-100 mb-8 max-w-2xl mx-auto">
          Sizning ehtiyojlaringizga mos narxlar va eng yaxshi qiymat
        </p>

        <!-- Pricing Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-12">
          <div class="text-center">
            <div class="text-3xl font-bold text-white mb-2">
              <span class="counter-animation" ref="priceUserCount">0</span>+
            </div>
            <div class="text-purple-100">Muvaffaqiyatli o'quvchi</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-white mb-2">
              <span class="counter-animation" ref="priceSatisfaction">0</span>%
            </div>
            <div class="text-purple-100">Mamnuniyat darajasi</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-white mb-2">
              <span class="counter-animation" ref="priceSupport">0</span>/7
            </div>
            <div class="text-purple-100">Qo'llab-quvvatlash</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Pricing Cards Section -->
    <div class="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Rejalarni tanlang
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            O'zingizga eng mos rejani tanlang va IELTS tayyorgarligini boshlang
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <!-- Free Plan -->
        <div class="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-gray-500 to-gray-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
          <div class="relative p-8">
            <div class="text-center mb-8">
              <div class="bg-gradient-to-br from-gray-500 to-gray-600 p-4 rounded-2xl shadow-lg mb-6 mx-auto w-20 h-20 flex items-center justify-center">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Bepul</h3>
              <div class="text-4xl font-bold text-gray-900 mb-4">
                $0
                <span class="text-lg text-gray-600">/oy</span>
              </div>
              <p class="text-gray-600">Boshlang'ich uchun</p>
            </div>

            <div class="space-y-4 mb-8">
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-gray-700">3 ta bepul test</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-gray-700">Asosiy natijalar</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-gray-700">Blog maqolalari</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
                <span class="text-gray-500">Batafsil tahlil</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
                <span class="text-gray-500">Cheksiz testlar</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
                <span class="text-gray-500">Maslahatlar</span>
              </div>
            </div>

            <button class="w-full bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              Boshlash
            </button>
          </div>
        </div>

                <!-- Pro Plan -->
        <div class="group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border-2 border-blue-500 transform scale-105">
          <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span class="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
              ⭐ Eng mashhur
            </span>
          </div>
          <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

          <div class="relative p-8">
            <div class="text-center mb-8">
              <div class="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl shadow-lg mb-6 mx-auto w-20 h-20 flex items-center justify-center">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
              <div class="text-4xl font-bold text-blue-600 mb-4">
                $19
                <span class="text-lg text-gray-600">/oy</span>
              </div>
              <p class="text-gray-600">Professional uchun</p>
            </div>

            <div class="space-y-4 mb-8">
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-gray-700">Cheksiz testlar</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-gray-700">Batafsil tahlil</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-gray-700">Barcha IELTS bo'limlari</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-gray-700">Avtomatik baholash</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-gray-700">Progress tracking</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-gray-700">Email qo'llab-quvvatlash</span>
              </div>
            </div>

            <button class="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              Pro'ga o'tish
            </button>
          </div>
        </div>

        <!-- Premium Plan -->
        <div class="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

          <div class="relative p-8">
            <div class="text-center mb-8">
              <div class="bg-gradient-to-br from-purple-500 to-pink-600 p-4 rounded-2xl shadow-lg mb-6 mx-auto w-20 h-20 flex items-center justify-center">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
              <div class="text-4xl font-bold text-purple-600 mb-4">
                $39
                <span class="text-lg text-gray-600">/oy</span>
              </div>
              <p class="text-gray-600">Korxona va o'quv yurtlari</p>
            </div>

            <div class="space-y-4 mb-8">
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-gray-700">Barcha Pro xususiyatlari</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-gray-700">Shaxsiy maslahatchi</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-gray-700">Maxsus materiallar</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-gray-700">24/7 qo'llab-quvvatlash</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-gray-700">Natijalar eksporti</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                <span class="text-gray-700">API kirish</span>
              </div>
            </div>

            <button class="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              Premium'ga o'tish
            </button>
          </div>
        </div>
             </div>

       <!-- Special Offer Banner -->
       <div class="mt-16 mb-20">
         <div class="relative overflow-hidden bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-3xl p-8 text-center text-white shadow-2xl">
           <!-- Animated background elements -->
           <div class="absolute inset-0">
             <div class="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
             <div class="absolute bottom-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
           </div>

           <div class="relative z-10">
             <div class="flex items-center justify-center mb-6">
               <div class="bg-white/20 p-3 rounded-full mr-4">
                 <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                   <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"></path>
                 </svg>
               </div>
               <h3 class="text-3xl font-bold">🔥 Maxsus taklif!</h3>
             </div>
             <p class="text-2xl mb-4 font-semibold">Birinchi oy uchun 50% chegirma</p>
             <p class="text-xl opacity-90 mb-6">Pro rejasi endi faqat $9.50/oy</p>
             <button class="bg-white text-orange-600 font-semibold py-4 px-10 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
               Chegirmani qo'llash
             </button>
           </div>
         </div>
       </div>

              <!-- Features Comparison -->
       <div class="mt-20">
         <div class="text-center mb-16">
           <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Xususiyatlar taqqoslash</h2>
           <p class="text-xl text-gray-600 max-w-2xl mx-auto">Qaysi reja sizga eng mos keladi? Batafsil taqqoslash</p>
         </div>

         <div class="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
           <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
           <div class="relative p-8">
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr class="border-b border-gray-200">
                  <th class="text-left py-4 px-4 font-semibold text-gray-800">Xususiyat</th>
                  <th class="text-center py-4 px-4 font-semibold text-gray-800">Bepul</th>
                  <th class="text-center py-4 px-4 font-semibold text-blue-600">Pro</th>
                  <th class="text-center py-4 px-4 font-semibold text-purple-600">Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b border-gray-100">
                  <td class="py-4 px-4 text-gray-700">Testlar soni</td>
                  <td class="py-4 px-4 text-center">3 ta</td>
                  <td class="py-4 px-4 text-center text-green-600 font-semibold">Cheksiz</td>
                  <td class="py-4 px-4 text-center text-green-600 font-semibold">Cheksiz</td>
                </tr>
                                 <tr class="border-b border-gray-100">
                   <td class="py-4 px-4 text-gray-700">IELTS Reading</td>
                   <td class="py-4 px-4 text-center text-red-500">✗</td>
                   <td class="py-4 px-4 text-center text-green-600">✓</td>
                   <td class="py-4 px-4 text-center text-green-600">✓</td>
                 </tr>
                 <tr class="border-b border-gray-100">
                   <td class="py-4 px-4 text-gray-700">IELTS Listening</td>
                   <td class="py-4 px-4 text-center text-red-500">✗</td>
                   <td class="py-4 px-4 text-center text-green-600">✓</td>
                   <td class="py-4 px-4 text-center text-green-600">✓</td>
                 </tr>
                 <tr class="border-b border-gray-100">
                   <td class="py-4 px-4 text-gray-700">IELTS Writing</td>
                   <td class="py-4 px-4 text-center text-red-500">✗</td>
                   <td class="py-4 px-4 text-center text-green-600">✓</td>
                   <td class="py-4 px-4 text-center text-green-600">✓</td>
                 </tr>
                                 <tr class="border-b border-gray-100">
                   <td class="py-4 px-4 text-gray-700">Batafsil tahlil</td>
                   <td class="py-4 px-4 text-center text-red-500">✗</td>
                   <td class="py-4 px-4 text-center text-green-600">✓</td>
                   <td class="py-4 px-4 text-center text-green-600">✓</td>
                 </tr>
                 <tr class="border-b border-gray-100">
                   <td class="py-4 px-4 text-gray-700">Avtomatik baholash</td>
                   <td class="py-4 px-4 text-center text-red-500">✗</td>
                   <td class="py-4 px-4 text-center text-green-600">✓</td>
                   <td class="py-4 px-4 text-center text-green-600">✓</td>
                 </tr>
                 <tr class="border-b border-gray-100">
                   <td class="py-4 px-4 text-gray-700">Progress tracking</td>
                   <td class="py-4 px-4 text-center text-red-500">✗</td>
                   <td class="py-4 px-4 text-center text-green-600">✓</td>
                   <td class="py-4 px-4 text-center text-green-600">✓</td>
                 </tr>
                 <tr class="border-b border-gray-100">
                   <td class="py-4 px-4 text-gray-700">Maslahatlar</td>
                   <td class="py-4 px-4 text-center text-red-500">✗</td>
                   <td class="py-4 px-4 text-center text-green-600">✓</td>
                   <td class="py-4 px-4 text-center text-green-600">✓</td>
                 </tr>
                <tr class="border-b border-gray-100">
                  <td class="py-4 px-4 text-gray-700">Qo'llab-quvvatlash</td>
                  <td class="py-4 px-4 text-center">Email</td>
                  <td class="py-4 px-4 text-center">Email</td>
                  <td class="py-4 px-4 text-center text-green-600">24/7 Chat</td>
                </tr>
                <tr>
                  <td class="py-4 px-4 text-gray-700">Shaxsiy maslahatchi</td>
                  <td class="py-4 px-4 text-center text-red-500">✗</td>
                  <td class="py-4 px-4 text-center text-red-500">✗</td>
                  <td class="py-4 px-4 text-center text-green-600">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

             <!-- FAQ Section -->
       <div class="mt-20">
         <div class="text-center mb-16">
           <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Ko'p so'raladigan savollar</h2>
           <p class="text-xl text-gray-600 max-w-2xl mx-auto">Eng ko'p so'raladigan savollarga javoblar</p>
         </div>

         <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div class="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
             <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
             <div class="relative p-8">
               <div class="flex items-center mb-4">
                 <div class="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl shadow-lg mr-4">
                   <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                   </svg>
                 </div>
                 <h3 class="text-xl font-bold text-gray-900">Rejani qanday o'zgartirish mumkin?</h3>
               </div>
               <p class="text-gray-600 leading-relaxed">Har qanday vaqtda rejani o'zgartirishingiz mumkin. Yangi reja keyingi to'lov davridan boshlab amal qiladi va eski reja avtomatik bekor qilinadi.</p>
             </div>
           </div>

           <div class="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
             <div class="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
             <div class="relative p-8">
               <div class="flex items-center mb-4">
                 <div class="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl shadow-lg mr-4">
                   <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                   </svg>
                 </div>
                 <h3 class="text-xl font-bold text-gray-900">Bepul sinov mavjudmi?</h3>
               </div>
               <p class="text-gray-600 leading-relaxed">Ha, barcha rejalar uchun 7 kunlik bepul sinov mavjud. Hech qanday karta ma'lumotlari talab qilinmaydi va istalgan vaqtda bekor qilishingiz mumkin.</p>
             </div>
           </div>

           <div class="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
             <div class="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
             <div class="relative p-8">
               <div class="flex items-center mb-4">
                 <div class="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-xl shadow-lg mr-4">
                   <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                   </svg>
                 </div>
                 <h3 class="text-xl font-bold text-gray-900">Qanday to'lov usullari qabul qilinadi?</h3>
               </div>
               <p class="text-gray-600 leading-relaxed">Kredit karta, PayPal, bank o'tkazmasi va barcha asosiy to'lov tizimlari orqali xavfsiz to'lov qilishingiz mumkin.</p>
             </div>
           </div>

           <div class="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
             <div class="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
             <div class="relative p-8">
               <div class="flex items-center mb-4">
                 <div class="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-xl shadow-lg mr-4">
                   <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                   </svg>
                 </div>
                 <h3 class="text-xl font-bold text-gray-900">Rejani bekor qilish mumkinmi?</h3>
               </div>
               <p class="text-gray-600 leading-relaxed">Ha, istalgan vaqtda rejani bekor qilishingiz mumkin. To'lov to'xtatiladi va reja davri oxirida avtomatik deaktiv bo'ladi.</p>
             </div>
           </div>
         </div>
       </div>

              <!-- Testimonials Section -->
       <div class="mt-20">
         <div class="text-center mb-16">
           <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Foydalanuvchilar fikri</h2>
           <p class="text-xl text-gray-600 max-w-2xl mx-auto">Bizning mijozlarimiz nima deyishadi? Haqiqiy natijalar</p>
         </div>

         <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div class="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
             <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
             <div class="relative p-8">
               <div class="flex items-center mb-6">
                 <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg">
                   A
                 </div>
                 <div>
                   <h4 class="font-bold text-gray-900 text-lg">Aziza Karimova</h4>
                   <p class="text-sm text-gray-600">IELTS 7.5 ball</p>
                 </div>
               </div>
               <p class="text-gray-600 italic leading-relaxed mb-4">"Pro rejasi orqali IELTS Reading va Listening bo'limlarida juda yaxshilandi. Natijalarim 6.5 dan 7.5 ga ko'tarildi! Platforma juda qulay va natijalar tez ko'rsatiladi."</p>
               <div class="flex text-yellow-400">
                 <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
               </div>
             </div>
           </div>

           <div class="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
             <div class="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
             <div class="relative p-8">
               <div class="flex items-center mb-6">
                 <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg">
                   S
                 </div>
                 <div>
                   <h4 class="font-bold text-gray-900 text-lg">Sardor Toshmatov</h4>
                   <p class="text-sm text-gray-600">IELTS 8.0 ball</p>
                 </div>
               </div>
               <p class="text-gray-600 italic leading-relaxed mb-4">"Writing bo'limidagi avtomatik baholash tizimi juda foydali. Xatolarimni tezda aniqlab, tuzatishga yordam berdi. Natijalar aniq va batafsil."</p>
               <div class="flex text-yellow-400">
                 <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
               </div>
             </div>
           </div>

           <div class="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
             <div class="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
             <div class="relative p-8">
               <div class="flex items-center mb-6">
                 <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg">
                   M
                 </div>
                 <div>
                   <h4 class="font-bold text-gray-900 text-lg">Malika Yusupova</h4>
                   <p class="text-sm text-gray-600">IELTS 7.0 ball</p>
                 </div>
               </div>
               <p class="text-gray-600 italic leading-relaxed mb-4">"Progress tracking xususiyati orqali o'z rivojlanishimni kuzatib bordim. Bu menga motivatsiya berdi va maqsadlarimga erishishga yordam berdi."</p>
               <div class="flex text-yellow-400">
                 <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
    </div>
  </div>
 </template>

<script setup>
import { ref, onMounted } from 'vue'

const priceUserCount = ref(null)
const priceSatisfaction = ref(null)
const priceSupport = ref(null)
const mainTitle = ref(null)

onMounted(() => {
  // Number counter animations
  setTimeout(() => {
    animateNumber(priceUserCount.value, 0, 1000, 2500)
    animateNumber(priceSatisfaction.value, 0, 99, 2000)
    animateNumber(priceSupport.value, 0, 24, 1500)
  }, 800)

  // Letter animations
  setTimeout(() => {
    animateLetters(mainTitle.value, 'Narxlar 💰')
  }, 600)
})

// Number animation function
const animateNumber = (element, start, end, duration) => {
  if (!element) return

  const startTime = performance.now()
  const difference = end - start

  const updateNumber = (currentTime) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)

    // Easing function for smooth animation
    const easeOutQuart = 1 - Math.pow(1 - progress, 4)
    const current = Math.floor(start + (difference * easeOutQuart))

    element.textContent = current

    if (progress < 1) {
      requestAnimationFrame(updateNumber)
    } else {
      // Add pulse effect when animation completes
      element.classList.add('number-pulse')
      setTimeout(() => {
        element.classList.remove('number-pulse')
      }, 600)
    }
  }

  requestAnimationFrame(updateNumber)
}

// Letter animation function
const animateLetters = (element, text) => {
  if (!element) return
  
  // Clear existing content
  element.innerHTML = ''
  
  // Split text into letters and create spans
  const letters = text.split('')
  letters.forEach((letter, index) => {
    const span = document.createElement('span')
    span.textContent = letter === ' ' ? '\u00A0' : letter // Non-breaking space for spaces
    span.className = `letter-animation delay-${Math.min(index + 1, 12)}`
    element.appendChild(span)
  })
}
</script>

<style scoped>
/* Modern card hover effects */
.group:hover .group-hover\:opacity-5 {
  opacity: 0.05;
}

.group:hover .group-hover\:translate-y-2 {
  transform: translateY(-0.5rem);
}

.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}

/* Smooth transitions */
* {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #8b5cf6, #ec4899);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #7c3aed, #db2777);
}
</style>
