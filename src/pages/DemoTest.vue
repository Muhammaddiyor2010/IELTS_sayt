<template>
  <div class="min-h-screen">
    <!-- Modern Hero Section -->
    <div class="relative overflow-hidden bg-gradient-to-br from-green-600 via-blue-600 to-purple-700 h-[600px] flex items-center justify-center">
      <!-- Animated background elements -->
      <div class="absolute inset-0">
        <div class="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <!-- Falling Icons Animation -->
      <div class="falling-icons">
        <div class="falling-icon" style="left: 10%; animation-delay: 0s;">
          <svg class="w-8 h-8 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <div class="falling-icon" style="left: 25%; animation-delay: 1s;">
          <svg class="w-6 h-6 text-white/15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
          </svg>
        </div>
        <div class="falling-icon" style="left: 40%; animation-delay: 2s;">
          <svg class="w-7 h-7 text-white/25" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
          </svg>
        </div>
        <div class="falling-icon" style="left: 55%; animation-delay: 0.5s;">
          <svg class="w-5 h-5 text-white/10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <div class="falling-icon" style="left: 70%; animation-delay: 1.5s;">
          <svg class="w-6 h-6 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
          </svg>
        </div>
        <div class="falling-icon" style="left: 85%; animation-delay: 0.8s;">
          <svg class="w-7 h-7 text-white/25" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
      </div>

      <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div class="mb-8">
          <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" ref="mainTitle">
            Demo Test
          </h1>
          <p class="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto" ref="subTitle">
            Darajangizni aniqlash uchun qisqa test
          </p>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-white mb-2">
              <span class="counter-animation" ref="questionCount">0</span>
            </div>
            <div class="text-blue-100">Savol</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-white mb-2">
              <span class="counter-animation" ref="timeCount">0</span>
            </div>
            <div class="text-blue-100">Daqiqa</div>
          </div>
          <div class="text-center">
            <div class="text-3xl md:text-4xl font-bold text-white mb-2">
              <span class="counter-animation" ref="levelCount">0</span>
            </div>
            <div class="text-blue-100">Daraja</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Test Content -->
    <div class="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div class="max-w-4xl mx-auto px-4">

        <!-- Start Screen -->
        <div v-if="!testStarted && !testCompleted" class="text-center">
          <div class="bg-white rounded-3xl shadow-2xl p-12 mb-8">
            <div class="mb-8">
              <div class="bg-gradient-to-br from-green-500 to-blue-600 p-6 rounded-2xl shadow-lg mb-6 mx-auto w-24 h-24 flex items-center justify-center">
                <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Daraja aniqlovchi test</h2>
              <p class="text-xl text-gray-600 mb-8">10 ta savol, 15 daqiqa vaqt</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div class="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                <div class="text-2xl font-bold text-blue-600 mb-2">10</div>
                <div class="text-blue-700">Savol</div>
              </div>
              <div class="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                <div class="text-2xl font-bold text-green-600 mb-2">15</div>
                <div class="text-green-700">Daqiqa</div>
              </div>
              <div class="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                <div class="text-2xl font-bold text-purple-600 mb-2">5</div>
                <div class="text-purple-700">Daraja</div>
              </div>
            </div>

            <button @click="startTest" class="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-4 px-12 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              Testni boshlash
            </button>
          </div>
        </div>

        <!-- Test Interface -->
        <div v-if="testStarted && !testCompleted" class="bg-white rounded-3xl shadow-2xl p-8">
          <!-- Header -->
          <div class="flex justify-between items-center mb-8 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl">
            <div class="flex items-center space-x-4">
              <div class="text-center">
                <div class="text-2xl font-bold text-blue-600">{{ currentQuestion + 1 }}</div>
                <div class="text-sm text-gray-600">/ {{ questions.length }}</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-green-600">{{ formatTime(timeLeft) }}</div>
                <div class="text-sm text-gray-600">qoldi</div>
              </div>
            </div>
            <div class="w-32 bg-gray-200 rounded-full h-2">
              <div class="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-300" :style="{ width: progress + '%' }"></div>
            </div>
          </div>

          <!-- Question -->
          <div class="mb-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">{{ questions[currentQuestion].question }}</h3>

            <div class="space-y-4">
              <button
                v-for="(option, index) in questions[currentQuestion].options"
                :key="index"
                @click="selectAnswer(index)"
                :class="[
                  'w-full p-4 text-left rounded-xl border-2 transition-all duration-300 transform hover:scale-105',
                  selectedAnswer === index
                    ? 'border-blue-500 bg-blue-50 shadow-lg'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                ]"
              >
                <div class="flex items-center">
                  <div class="w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center"
                       :class="selectedAnswer === index ? 'border-blue-500 bg-blue-500' : 'border-gray-300'">
                    <div v-if="selectedAnswer === index" class="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <span class="text-lg">{{ option }}</span>
                </div>
              </button>
            </div>
          </div>

          <!-- Navigation -->
          <div class="flex justify-between">
            <button
              @click="previousQuestion"
              :disabled="currentQuestion === 0"
              :class="[
                'px-6 py-3 rounded-xl font-semibold transition-all duration-300',
                currentQuestion === 0
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-600 text-white hover:bg-gray-700 transform hover:scale-105'
              ]"
            >
              Oldingi
            </button>

            <button
              v-if="currentQuestion < questions.length - 1"
              @click="nextQuestion"
              :disabled="selectedAnswer === null"
              :class="[
                'px-6 py-3 rounded-xl font-semibold transition-all duration-300',
                selectedAnswer === null
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105'
              ]"
            >
              Keyingi
            </button>

            <button
              v-else
              @click="finishTest"
              :disabled="selectedAnswer === null"
              :class="[
                'px-6 py-3 rounded-xl font-semibold transition-all duration-300',
                selectedAnswer === null
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-green-600 text-white hover:bg-green-700 transform hover:scale-105'
              ]"
            >
              Testni tugatish
            </button>
          </div>
        </div>

        <!-- Results Screen -->
        <div v-if="testCompleted" class="text-center">
          <div class="bg-white rounded-3xl shadow-2xl p-12">
            <div class="mb-8">
              <div class="bg-gradient-to-br from-green-500 to-blue-600 p-6 rounded-2xl shadow-lg mb-6 mx-auto w-24 h-24 flex items-center justify-center">
                <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Test tugadi!</h2>
              <p class="text-xl text-gray-600 mb-8">Sizning darajangiz: <span class="font-bold text-blue-600">{{ userLevel }}</span></p>
            </div>

            <!-- Level Display -->
            <div class="mb-8">
              <div class="text-6xl font-bold mb-4" :class="levelColor">{{ userLevel }}</div>
              <p class="text-xl text-gray-600 mb-4">{{ levelDescription }}</p>
              <div class="w-full bg-gray-200 rounded-full h-4 mb-4">
                <div class="h-4 rounded-full transition-all duration-1000" :class="levelProgressColor" :style="{ width: levelProgress + '%' }"></div>
              </div>
              <p class="text-sm text-gray-500">{{ correctAnswers }}/{{ questions.length }} to'g'ri javob</p>
            </div>

            <!-- Recommendations -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div class="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                <h3 class="text-xl font-bold text-blue-800 mb-3">Tavsiyalar</h3>
                <ul class="text-left text-blue-700 space-y-2">
                  <li v-for="(rec, index) in recommendations" :key="index" class="flex items-center">
                    <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    {{ rec }}
                  </li>
                </ul>
              </div>
              <div class="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                <h3 class="text-xl font-bold text-green-800 mb-3">Keyingi qadamlar</h3>
                <ul class="text-left text-green-700 space-y-2">
                  <li v-for="(step, index) in nextSteps" :key="index" class="flex items-center">
                    <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd"></path>
                    </svg>
                    {{ step }}
                  </li>
                </ul>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button @click="restartTest" class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                Qayta boshlash
              </button>
              <router-link to="/" class="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                Bosh sahifaga qaytish
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// Test state
const testStarted = ref(false)
const testCompleted = ref(false)
const currentQuestion = ref(0)
const selectedAnswer = ref(null)
const answers = ref([])
const timeLeft = ref(15 * 60) // 15 minutes in seconds
const timer = ref(null)

// Refs for animations
const mainTitle = ref(null)
const subTitle = ref(null)
const questionCount = ref(null)
const timeCount = ref(null)
const levelCount = ref(null)

// Test questions
const questions = ref([
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    correct: 2
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correct: 1
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correct: 3
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    correct: 1
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Ag", "Au", "Fe", "Cu"],
    correct: 1
  },
  {
    question: "Which year did World War II end?",
    options: ["1943", "1944", "1945", "1946"],
    correct: 2
  },
  {
    question: "What is the main component of the sun?",
    options: ["Liquid lava", "Molten iron", "Hydrogen gas", "Solid rock"],
    correct: 2
  },
  {
    question: "Which country is home to the kangaroo?",
    options: ["New Zealand", "South Africa", "Australia", "India"],
    correct: 2
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["African Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correct: 1
  },
  {
    question: "How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
    correct: 2
  }
])

// Computed properties
const progress = computed(() => {
  return ((currentQuestion.value + 1) / questions.value.length) * 100
})

const correctAnswers = computed(() => {
  return answers.value.filter(answer => answer !== null && answer === questions.value[answers.value.indexOf(answer)].correct).length
})

const userLevel = computed(() => {
  const percentage = (correctAnswers.value / questions.value.length) * 100
  if (percentage >= 90) return "A1"
  if (percentage >= 80) return "A2"
  if (percentage >= 70) return "B1"
  if (percentage >= 60) return "B2"
  return "C1"
})

const levelDescription = computed(() => {
  const descriptions = {
    "A1": "Boshlang'ich daraja - asosiy tushunchalar",
    "A2": "Elementar daraja - oddiy muloqot",
    "B1": "O'rta daraja - mustaqil foydalanish",
    "B2": "Yuqori o'rta daraja - erkin muloqot",
    "C1": "Yuqori daraja - professional darajada"
  }
  return descriptions[userLevel.value]
})

const levelColor = computed(() => {
  const colors = {
    "A1": "text-red-600",
    "A2": "text-orange-600",
    "B1": "text-yellow-600",
    "B2": "text-green-600",
    "C1": "text-blue-600"
  }
  return colors[userLevel.value]
})

const levelProgress = computed(() => {
  const percentages = {
    "A1": 20,
    "A2": 40,
    "B1": 60,
    "B2": 80,
    "C1": 100
  }
  return percentages[userLevel.value]
})

const levelProgressColor = computed(() => {
  const colors = {
    "A1": "bg-red-500",
    "A2": "bg-orange-500",
    "B1": "bg-yellow-500",
    "B2": "bg-green-500",
    "C1": "bg-blue-500"
  }
  return colors[userLevel.value]
})

const recommendations = computed(() => {
  const recs = {
    "A1": [
      "Asosiy grammatika qoidalarini o'rganing",
      "Kundalik so'zlarni yodlang",
      "Oddiy gap tuzishni mashq qiling"
    ],
    "A2": [
      "Murakkab grammatika qoidalarini o'rganing",
      "Ko'proq so'zlarni yodlang",
      "Muloqot qilishni mashq qiling"
    ],
    "B1": [
      "Professional so'zlarni o'rganing",
      "Murakkab matnlarni o'qishni mashq qiling",
      "Yozish ko'nikmalarini rivojlantiring"
    ],
    "B2": [
      "Akademik so'zlarni o'rganing",
      "Murakkab mavzularda muloqot qiling",
      "Professional yozishni mashq qiling"
    ],
    "C1": [
      "Tibbiyot so'zlarini o'rganing",
      "Ilmiy maqolalarni o'qishni mashq qiling",
      "Professional darajada yozishni rivojlantiring"
    ]
  }
  return recs[userLevel.value]
})

const nextSteps = computed(() => {
  const steps = {
    "A1": [
      "IELTS Reading bo'limini boshlang",
      "Kundalik mashqlar qiling",
      "Audio materiallarni tinglang"
    ],
    "A2": [
      "IELTS Listening bo'limini qo'shing",
      "Muloqot mashqlarini qiling",
      "Qisqa matnlarni yozing"
    ],
    "B1": [
      "IELTS Writing bo'limini qo'shing",
      "Murakkab matnlarni o'qing",
      "Professional muloqot qiling"
    ],
    "B2": [
      "To'liq IELTS testini bajarish",
      "Akademik matnlarni o'qish",
      "Professional yozishni mashq qilish"
    ],
    "C1": [
      "IELTS 8+ ball uchun tayyorgarlik",
      "Akademik tadqiqotlar o'qish",
      "Professional darajada yozish"
    ]
  }
  return steps[userLevel.value]
})

// Methods
const startTest = () => {
  testStarted.value = true
  answers.value = new Array(questions.value.length).fill(null)
  startTimer()
}

const selectAnswer = (index) => {
  selectedAnswer.value = index
  answers.value[currentQuestion.value] = index
}

const nextQuestion = () => {
  if (currentQuestion.value < questions.value.length - 1) {
    currentQuestion.value++
    selectedAnswer.value = answers.value[currentQuestion.value]
  }
}

const previousQuestion = () => {
  if (currentQuestion.value > 0) {
    currentQuestion.value--
    selectedAnswer.value = answers.value[currentQuestion.value]
  }
}

const finishTest = () => {
  testCompleted.value = true
  stopTimer()
}

const restartTest = () => {
  testStarted.value = false
  testCompleted.value = false
  currentQuestion.value = 0
  selectedAnswer.value = null
  answers.value = []
  timeLeft.value = 15 * 60
}

const startTimer = () => {
  timer.value = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--
    } else {
      finishTest()
    }
  }, 1000)
}

const stopTimer = () => {
  if (timer.value) {
    clearInterval(timer.value)
    timer.value = null
  }
}

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
}

// Lifecycle
onMounted(() => {
  // Letter animations
  setTimeout(() => {
    animateLetters(mainTitle.value, 'Demo Test')
    animateLetters(subTitle.value, 'Darajangizni aniqlash uchun qisqa test')
  }, 300)

  // Number animations
  setTimeout(() => {
    animateNumber(questionCount.value, 0, 10, 1500)
    animateNumber(timeCount.value, 0, 15, 1500)
    animateNumber(levelCount.value, 0, 5, 1500)
  }, 800)
})

onUnmounted(() => {
  stopTimer()
})

// Letter animation function
const animateLetters = (element, text) => {
  if (!element) return

  element.innerHTML = ''

  const letters = text.split('')
  letters.forEach((letter, index) => {
    const span = document.createElement('span')
    span.textContent = letter === ' ' ? '\u00A0' : letter
    span.className = `letter-animation delay-${Math.min(index + 1, 12)}`
    element.appendChild(span)
  })
}

// Number animation function
const animateNumber = (element, start, end, duration) => {
  if (!element) return

  const startTime = performance.now()
  const difference = end - start

  const updateNumber = (currentTime) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)

    const easeOutQuart = 1 - Math.pow(1 - progress, 4)
    const current = Math.floor(start + (difference * easeOutQuart))

    element.textContent = current

    if (progress < 1) {
      requestAnimationFrame(updateNumber)
    } else {
      element.classList.add('number-pulse')
      setTimeout(() => {
        element.classList.remove('number-pulse')
      }, 600)
    }
  }

  requestAnimationFrame(updateNumber)
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
.falling-icon:nth-child(1) { animation-duration: 6s; }
.falling-icon:nth-child(2) { animation-duration: 8s; }
.falling-icon:nth-child(3) { animation-duration: 7s; }
.falling-icon:nth-child(4) { animation-duration: 9s; }
.falling-icon:nth-child(5) { animation-duration: 6.5s; }
.falling-icon:nth-child(6) { animation-duration: 7.5s; }
</style>
