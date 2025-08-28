<template>
  <div class="min-h-screen">
    <!-- Modern Hero Section -->
    <div class="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 h-[600px] flex items-center justify-center">
      <!-- Animated background elements -->
      <div class="absolute inset-0">
        <div class="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <!-- Falling Icons Animation -->
      <div class="falling-icons">
        <div class="falling-icon" style="left: 15%; animation-delay: 0.5s;">
          <svg class="w-6 h-6 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
          </svg>
        </div>
        <div class="falling-icon" style="left: 25%; animation-delay: 1.2s;">
          <svg class="w-7 h-7 text-white/25" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
          </svg>
        </div>
        <div class="falling-icon" style="left: 35%; animation-delay: 0.8s;">
          <svg class="w-5 h-5 text-white/15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <div class="falling-icon" style="left: 45%; animation-delay: 1.5s;">
          <svg class="w-6 h-6 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
          </svg>
        </div>
        <div class="falling-icon" style="left: 55%; animation-delay: 0.3s;">
          <svg class="w-7 h-7 text-white/25" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
          </svg>
        </div>
        <div class="falling-icon" style="left: 65%; animation-delay: 1.8s;">
          <svg class="w-8 h-8 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
          </svg>
        </div>
        <div class="falling-icon" style="left: 75%; animation-delay: 0.7s;">
          <svg class="w-6 h-6 text-white/15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
        <div class="falling-icon" style="left: 85%; animation-delay: 1.3s;">
          <svg class="w-5 h-5 text-white/25" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
          </svg>
        </div>
      </div>

      <div class="relative z-10 container mx-auto px-4 text-center">
        <div class="mb-8">
          <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span class="block" ref="mainTitle">IELTS</span>
            <span class="text-2xl md:text-3xl font-light text-blue-100 mt-4 block" ref="subTitle">International English Language Testing System</span>
          </h1>
          <p class="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Reading, Listening, Writing va Speaking bo'limlarini professional darajada o'rganing. Real imtihon sharoitlarida mashq qiling.
          </p>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-white mb-2">
              <span class="counter-animation" ref="sections">0</span>
            </div>
            <div class="text-blue-100">Bo'lim</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-white mb-2">
              <span class="counter-animation" ref="hours">0</span>.<span class="counter-animation" ref="minutes">0</span>
            </div>
            <div class="text-blue-100">Soat</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-white mb-2">
              <span class="counter-animation" ref="score">0</span>
            </div>
            <div class="text-blue-100">Ball tizimi</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-white mb-2">
              <span class="counter-animation" ref="format">0</span>%
            </div>
            <div class="text-blue-100">Real format</div>
          </div>
        </div>
      </div>

      <!-- Floating elements -->
      <div class="absolute bottom-10 left-10 animate-bounce">
        <BookOpenIcon class="w-12 h-12 text-white/30" />
      </div>
      <div class="absolute top-20 right-20 animate-bounce delay-1000">
        <SpeakerWaveIcon class="w-10 h-10 text-white/20" />
      </div>
    </div>

    <!-- Modern Test Sections -->
    <div class="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">IELTS Bo'limlari</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">Har bir bo'limni alohida yoki to'liq test sifatida bajarish</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Reading Section -->
          <div class="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            <div class="relative p-8">
              <div class="flex items-center justify-between mb-6">
                <div class="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl shadow-lg">
                  <BookOpenIcon class="w-8 h-8 text-white" />
                </div>
                <div class="text-right">
                  <div class="text-2xl font-bold text-gray-900">Reading</div>
                  <div class="text-sm text-gray-500">60 daqiqa</div>
                </div>
              </div>

              <p class="text-gray-600 mb-6 leading-relaxed">
                Uzun matnlarni o'qish va tushunish bo'yicha ko'nikmalarni o'lchash. Real IELTS formatida.
              </p>

              <div class="space-y-3 mb-8">
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span class="text-gray-700">3 ta matn</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span class="text-gray-700">40 ta savol</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span class="text-gray-700">Real vaqt</span>
                </div>
              </div>

              <router-link to="/ielts/reading" class="inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Boshlash
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </router-link>
            </div>
          </div>

          <!-- Listening Section -->
          <div class="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            <div class="relative p-8">
              <div class="flex items-center justify-between mb-6">
                <div class="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-2xl shadow-lg">
                  <SpeakerWaveIcon class="w-8 h-8 text-white" />
                </div>
                <div class="text-right">
                  <div class="text-2xl font-bold text-gray-900">Listening</div>
                  <div class="text-sm text-gray-500">30 daqiqa</div>
                </div>
              </div>

              <p class="text-gray-600 mb-6 leading-relaxed">
                Audio materiallarni eshitish va tushunish bo'yicha ko'nikmalar. Sifatli audio materiallar.
              </p>

              <div class="space-y-3 mb-8">
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span class="text-gray-700">4 ta audio</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span class="text-gray-700">40 ta savol</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span class="text-gray-700">Sifatli audio</span>
                </div>
              </div>

              <router-link to="/ielts/listening" class="inline-flex items-center justify-center w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold py-4 px-6 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Boshlash
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </router-link>
            </div>
          </div>

          <!-- Writing Section -->
          <div class="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            <div class="relative p-8">
              <div class="flex items-center justify-between mb-6">
                <div class="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-2xl shadow-lg">
                  <PencilIcon class="w-8 h-8 text-white" />
                </div>
                <div class="text-right">
                  <div class="text-2xl font-bold text-gray-900">Writing</div>
                  <div class="text-sm text-gray-500">60 daqiqa</div>
                </div>
              </div>

              <p class="text-gray-600 mb-6 leading-relaxed">
                Yozish ko'nikmalarini o'lchash va baholash. Avtomatik baholash tizimi.
              </p>

              <div class="space-y-3 mb-8">
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span class="text-gray-700">2 ta vazifa</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span class="text-gray-700">Avtomatik baho</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span class="text-gray-700">Namunalar</span>
                </div>
              </div>

              <router-link to="/ielts/writing" class="inline-flex items-center justify-center w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold py-4 px-6 rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Boshlash
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </router-link>
            </div>
          </div>


        </div>
      </div>
    </div>

        <!-- Full Test Section -->
    <div class="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">To'liq IELTS testi</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">Barcha bo'limlarni ketma-ket bajarish va real imtihon tajribasi</p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            <div class="relative p-8">
              <div class="flex items-center justify-center mb-6">
                <div class="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl shadow-lg">
                  <AcademicCapIcon class="w-8 h-8 text-white" />
                </div>
                <div class="ml-4 text-center">
                  <div class="text-2xl font-bold text-gray-900">IELTS Testi</div>
                  <div class="text-sm text-gray-500">To'liq imtihon tajribasi</div>
                </div>
              </div>

              <p class="text-gray-600 mb-6 leading-relaxed text-center">
                IELTS Academic va General testlarini bajarish imkoniyati. Barcha bo'limlar ketma-ket bajariladi va real vaqtda baholanadi.
              </p>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div class="space-y-3">
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span class="text-gray-700">Reading (60 daqiqa)</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span class="text-gray-700">Listening (30 daqiqa)</span>
                  </div>
                </div>
                <div class="space-y-3">
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span class="text-gray-700">Writing (60 daqiqa)</span>
                  </div>
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span class="text-gray-700">Speaking (11-14 daqiqa)</span>
                  </div>
                </div>
              </div>

              <router-link to="/ielts/full-test" class="inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                To'liq testni boshlash
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import {
  BookOpenIcon,
  SpeakerWaveIcon,
  PencilIcon,
  AcademicCapIcon
} from '@heroicons/vue/24/outline'

const sections = ref(null)
const hours = ref(null)
const minutes = ref(null)
const score = ref(null)
const format = ref(null)
const mainTitle = ref(null)
const subTitle = ref(null)

  onMounted(() => {
    // Number counter animations
    setTimeout(() => {
      animateNumber(sections.value, 0, 4, 1500)
      animateNumber(hours.value, 0, 2, 1500)
      animateNumber(minutes.value, 0, 5, 1500)
      animateNumber(score.value, 0, 9, 1500)
      animateNumber(format.value, 0, 100, 1500)
    }, 500)

    // Letter animations
    setTimeout(() => {
      animateLetters(mainTitle.value, 'IELTS')
      animateLetters(subTitle.value, 'International English Language Testing System')
    }, 300)
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
/* Falling Icons Animation */
.falling-icons {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
}

.falling-icon {
  position: absolute;
  top: -50px;
  animation: fall 8s linear infinite;
  opacity: 0.7;
  transition: all 0.3s ease;
}

.falling-icon:hover {
  opacity: 1;
  transform: scale(1.2);
}

@keyframes fall {
  0% {
    transform: translateY(-50px) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.7;
  }
  90% {
    opacity: 0.7;
  }
  100% {
    transform: translateY(calc(100vh + 50px)) rotate(360deg);
    opacity: 0;
  }
}

/* Different falling speeds for variety */
.falling-icon:nth-child(1) { animation-duration: 7s; }
.falling-icon:nth-child(2) { animation-duration: 8.5s; }
.falling-icon:nth-child(3) { animation-duration: 6.5s; }
.falling-icon:nth-child(4) { animation-duration: 9s; }
.falling-icon:nth-child(5) { animation-duration: 7.5s; }
.falling-icon:nth-child(6) { animation-duration: 8s; }
.falling-icon:nth-child(7) { animation-duration: 6.8s; }
.falling-icon:nth-child(8) { animation-duration: 7.8s; }
</style>
