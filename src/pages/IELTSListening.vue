<template>
  <div>
    <!-- Start Screen -->
    <div v-if="!testStarted && !testCompleted" class="relative overflow-hidden bg-gradient-to-br from-green-600 via-teal-600 to-emerald-700 h-[620px] flex items-center justify-center">
      <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-6">IELTS Listening</h1>
        <p class="text-xl md:text-2xl text-green-100 mb-8">4 ta audio, 40 ta savol, 30 daqiqa vaqt</p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-12">
          <div class="text-center">
            <div class="text-3xl font-bold text-white mb-2">4</div>
            <div class="text-green-100">Audio</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-white mb-2">40</div>
            <div class="text-green-100">Savol</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-white mb-2">30</div>
            <div class="text-green-100">Daqiqa</div>
          </div>
        </div>

        <button @click="startTest" class="bg-white text-green-600 font-semibold py-4 px-12 rounded-full text-xl hover:bg-green-50 transition-colors">
          Testni boshlash
        </button>
      </div>
    </div>

    <!-- Test Interface -->
    <div v-if="testStarted && !testCompleted" class="h-[620px] bg-gray-50 overflow-y-auto">
      <!-- Header -->
      <div class="bg-white shadow-lg border-b">
        <div class="max-w-7xl mx-auto px-4 py-4">
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-6">
              <div class="flex items-center gap-3">
                <div class="bg-green-100 p-2 rounded-full">
                  <ClockIcon class="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p class="text-sm text-gray-600">Qolgan vaqt</p>
                  <p class="text-xl font-bold text-green-600">{{ formatTime(timeLeft) }}</p>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <div class="bg-blue-100 p-2 rounded-full">
                  <DocumentCheckIcon class="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p class="text-sm text-gray-600">Tugatilgan</p>
                  <p class="text-xl font-bold text-blue-600">{{ completedQuestions }}/40</p>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <button v-for="audio in 4" :key="audio" @click="goToAudio(audio)"
                :class="['px-4 py-2 rounded-lg font-semibold transition-colors',
                  currentAudio === audio ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300']">
                Audio {{ audio }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Test Content -->
      <div class="max-w-7xl mx-auto px-4 py-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Audio Player -->
          <div class="bg-white rounded-3xl shadow-xl p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Audio {{ currentAudio }}</h2>

            <!-- Audio Player -->
            <div class="bg-gray-50 rounded-2xl p-6 mb-6">
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-3">
                  <button @click="togglePlay" class="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-colors">
                    <PlayIcon v-if="!isPlaying" class="w-6 h-6" />
                    <PauseIcon v-else class="w-6 h-6" />
                  </button>
                  <div>
                    <p class="font-semibold text-gray-900">{{ currentAudioTitle }}</p>
                    <p class="text-sm text-gray-600">{{ currentAudioDescription }}</p>
                  </div>
                </div>
                <div class="text-sm text-gray-600">
                  {{ formatAudioTime(currentTime) }} / {{ formatAudioTime(duration) }}
                </div>
              </div>

              <!-- Progress Bar -->
              <div class="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div
                  class="bg-green-600 h-2 rounded-full transition-all duration-300"
                  :style="{ width: audioProgress + '%' }"
                ></div>
              </div>
            </div>

            <!-- Audio Info -->
            <div class="bg-blue-50 rounded-xl p-4">
              <h3 class="font-semibold text-blue-900 mb-2">Audio ma'lumotlari:</h3>
              <ul class="text-sm text-blue-800 space-y-1">
                <li>• Sifatli audio format</li>
                <li>• Real IELTS audio</li>
                <li>• To'liq ovozli material</li>
                <li>• Professional sifat</li>
              </ul>
            </div>
          </div>

          <!-- Questions -->
          <div class="bg-white rounded-3xl shadow-xl p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Savol {{ currentQuestionRange }}</h2>

            <div class="space-y-8">
              <div v-for="question in currentQuestions" :key="question.number" class="border-b border-gray-200 pb-6">
                <p class="font-semibold text-gray-800 mb-4 text-lg">{{ question.number }}. {{ question.text }}</p>

                <!-- Multiple Choice -->
                <div v-if="question.type === 'multiple-choice'" class="space-y-3">
                  <label v-for="option in question.options" :key="option" class="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50">
                    <input type="radio" :name="'question-' + question.number" :value="option" v-model="question.answer" class="w-5 h-5 text-green-600">
                    <span class="text-gray-700">{{ option }}</span>
                  </label>
                </div>

                <!-- True/False -->
                <div v-else-if="question.type === 'true-false'" class="space-y-3">
                  <label class="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50">
                    <input type="radio" :name="'question-' + question.number" value="True" v-model="question.answer" class="w-5 h-5 text-green-600">
                    <span class="text-gray-700">True</span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50">
                    <input type="radio" :name="'question-' + question.number" value="False" v-model="question.answer" class="w-5 h-5 text-green-600">
                    <span class="text-gray-700">False</span>
                  </label>
                </div>

                <!-- Fill in the blanks -->
                <div v-else-if="question.type === 'fill-blank'" class="space-y-3">
                  <input type="text" v-model="question.answer" placeholder="Javobni kiriting..."
                    class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg">
                </div>

                <!-- Number input -->
                <div v-else-if="question.type === 'number'" class="space-y-3">
                  <input type="number" v-model="question.answer" placeholder="Raqam kiriting..."
                    class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-lg">
                </div>
              </div>
            </div>

            <!-- Navigation -->
            <div class="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
              <button @click="previousQuestions" :disabled="currentQuestionGroup === 0"
                class="bg-gray-500 hover:bg-gray-600 disabled:bg-gray-300 text-white font-semibold py-3 px-6 rounded-xl transition-colors">
                ← Oldingi
              </button>

              <div class="text-sm text-gray-600">{{ currentQuestionGroup + 1 }} / {{ totalQuestionGroups }}</div>

              <button @click="nextQuestions" :disabled="currentQuestionGroup === totalQuestionGroups - 1"
                class="bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white font-semibold py-3 px-6 rounded-xl transition-colors">
                Keyingi →
              </button>
            </div>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="text-center mt-8">
          <button @click="submitTest" class="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-12 rounded-xl transition-colors text-lg">
            Testni tugatish
          </button>
        </div>
      </div>
    </div>

    <!-- Results Screen -->
    <div v-if="testCompleted" class="h-[620px] bg-gradient-to-br from-green-50 to-blue-50 overflow-y-auto">
      <div class="max-w-4xl mx-auto px-4 py-8">
        <div class="text-center mb-8">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">Test natijalari</h1>
          <p class="text-xl text-gray-600">IELTS Listening testi yakunlandi</p>
        </div>

        <!-- Score Card -->
        <div class="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <div class="text-center mb-8">
            <div class="text-6xl font-bold text-green-600 mb-4">{{ correctAnswers }}/40</div>
            <div class="text-2xl font-semibold text-gray-700 mb-2">{{ getScorePercentage() }}% to'g'ri</div>
            <div class="text-lg text-gray-600">IELTS Band: {{ getIELTSBand() }}</div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="text-center p-4 bg-green-50 rounded-xl">
              <div class="text-3xl font-bold text-green-600 mb-2">{{ correctAnswers }}</div>
              <div class="text-gray-700">To'g'ri javoblar</div>
            </div>
            <div class="text-center p-4 bg-red-50 rounded-xl">
              <div class="text-3xl font-bold text-red-600 mb-2">{{ incorrectAnswers }}</div>
              <div class="text-gray-700">Noto'g'ri javoblar</div>
            </div>
            <div class="text-center p-4 bg-blue-50 rounded-xl">
              <div class="text-3xl font-bold text-blue-600 mb-2">{{ formatTime(totalTimeUsed) }}</div>
              <div class="text-gray-700">Sarflangan vaqt</div>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="text-center space-x-4">
          <button @click="restartTest" class="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors">
            Qaytadan boshlash
          </button>
          <button @click="goHome" class="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors">
            Bosh sahifaga qaytish
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import {
  ClockIcon,
  DocumentCheckIcon,
  PlayIcon,
  PauseIcon
} from '@heroicons/vue/24/outline'

const router = useRouter()

// Test state
const testStarted = ref(false)
const testCompleted = ref(false)
const timeLeft = ref(1800) // 30 minutes
const totalTimeUsed = ref(0)
const currentAudio = ref(1)
const currentQuestionGroup = ref(0)
const questionsPerGroup = 1

// Audio state
const isPlaying = ref(false)
const currentTime = ref(0)
const duration = ref(180) // 3 minutes per audio

// Audio information
const audioInfo = ref([
  {
    id: 1,
    title: "Conversation in a Restaurant",
    description: "Two people discussing menu options and making reservations"
  },
  {
    id: 2,
    title: "University Lecture on Climate Change",
    description: "Academic discussion about environmental issues"
  },
  {
    id: 3,
    title: "Job Interview",
    description: "Professional interview with questions and answers"
  },
  {
    id: 4,
    title: "Travel Planning Discussion",
    description: "Planning a trip with accommodation and activities"
  }
])

// Sample questions (40 total)
const allQuestions = ref([
  // Audio 1 questions (1-10)
  { number: 1, text: "What type of restaurant are they discussing?", type: "multiple-choice", options: ["Italian", "Chinese", "French", "Mexican"], answer: "", correctAnswer: "Italian", audio: 1 },
  { number: 2, text: "What time is the reservation for?", type: "fill-blank", answer: "", correctAnswer: "7:30", audio: 1 },
  { number: 3, text: "How many people are in the party?", type: "number", answer: "", correctAnswer: "4", audio: 1 },
  { number: 4, text: "The restaurant is located in the city center.", type: "true-false", answer: "", correctAnswer: "True", audio: 1 },
  { number: 5, text: "What is the special dish of the day?", type: "multiple-choice", options: ["Pasta", "Pizza", "Salad", "Soup"], answer: "", correctAnswer: "Pasta", audio: 1 },
  { number: 6, text: "The restaurant has outdoor seating.", type: "true-false", answer: "", correctAnswer: "False", audio: 1 },
  { number: 7, text: "What is the phone number for reservations?", type: "fill-blank", answer: "", correctAnswer: "555-0123", audio: 1 },
  { number: 8, text: "The restaurant is open on Sundays.", type: "true-false", answer: "", correctAnswer: "True", audio: 1 },
  { number: 9, text: "What is the average price for a main course?", type: "multiple-choice", options: ["$15", "$25", "$35", "$45"], answer: "", correctAnswer: "$25", audio: 1 },
  { number: 10, text: "The restaurant requires advance payment.", type: "true-false", answer: "", correctAnswer: "False", audio: 1 },

  // Audio 2 questions (11-20)
  { number: 11, text: "What is the main topic of the lecture?", type: "multiple-choice", options: ["Climate change", "Economic growth", "Population growth", "Technology"], answer: "", correctAnswer: "Climate change", audio: 2 },
  { number: 12, text: "What percentage of scientists agree on climate change?", type: "fill-blank", answer: "", correctAnswer: "97%", audio: 2 },
  { number: 13, text: "The Earth's temperature has increased by how many degrees?", type: "number", answer: "", correctAnswer: "1.1", audio: 2 },
  { number: 14, text: "Climate change is a natural phenomenon.", type: "true-false", answer: "", correctAnswer: "False", audio: 2 },
  { number: 15, text: "What is the main cause of climate change?", type: "multiple-choice", options: ["Volcanic eruptions", "Greenhouse gases", "Solar flares", "Ocean currents"], answer: "", correctAnswer: "Greenhouse gases", audio: 2 },
  { number: 16, text: "The lecture mentions renewable energy solutions.", type: "true-false", answer: "", correctAnswer: "True", audio: 2 },
  { number: 17, text: "What year was the Paris Agreement signed?", type: "fill-blank", answer: "", correctAnswer: "2015", audio: 2 },
  { number: 18, text: "Individual actions cannot make a difference.", type: "true-false", answer: "", correctAnswer: "False", audio: 2 },
  { number: 19, text: "What sector produces the most emissions?", type: "multiple-choice", options: ["Transportation", "Industry", "Agriculture", "Energy"], answer: "", correctAnswer: "Energy", audio: 2 },
  { number: 20, text: "The lecture is optimistic about solving climate change.", type: "true-false", answer: "", correctAnswer: "True", audio: 2 },

  // Audio 3 questions (21-30)
  { number: 21, text: "What position is the candidate applying for?", type: "multiple-choice", options: ["Manager", "Developer", "Designer", "Analyst"], answer: "", correctAnswer: "Developer", audio: 3 },
  { number: 22, text: "How many years of experience does the candidate have?", type: "number", answer: "", correctAnswer: "5", audio: 3 },
  { number: 23, text: "The candidate has worked with JavaScript.", type: "true-false", answer: "", correctAnswer: "True", audio: 3 },
  { number: 24, text: "What is the candidate's preferred work style?", type: "fill-blank", answer: "", correctAnswer: "teamwork", audio: 3 },
  { number: 25, text: "What is the salary range mentioned?", type: "multiple-choice", options: ["$50k-60k", "$60k-70k", "$70k-80k", "$80k-90k"], answer: "", correctAnswer: "$70k-80k", audio: 3 },
  { number: 26, text: "The company offers remote work options.", type: "true-false", answer: "", correctAnswer: "True", audio: 3 },
  { number: 27, text: "When will the candidate hear back?", type: "fill-blank", answer: "", correctAnswer: "next week", audio: 3 },
  { number: 28, text: "The interview lasted more than an hour.", type: "true-false", answer: "", correctAnswer: "False", audio: 3 },
  { number: 29, text: "What technology stack does the company use?", type: "multiple-choice", options: ["React", "Angular", "Vue", "All of the above"], answer: "", correctAnswer: "All of the above", audio: 3 },
  { number: 30, text: "The candidate has experience with cloud platforms.", type: "true-false", answer: "", correctAnswer: "True", audio: 3 },

  // Audio 4 questions (31-40)
  { number: 31, text: "Where are they planning to travel?", type: "multiple-choice", options: ["Paris", "London", "Rome", "Barcelona"], answer: "", correctAnswer: "Paris", audio: 4 },
  { number: 32, text: "How many days will the trip last?", type: "number", answer: "", correctAnswer: "7", audio: 4 },
  { number: 33, text: "They are traveling in summer.", type: "true-false", answer: "", correctAnswer: "False", audio: 4 },
  { number: 34, text: "What type of accommodation do they prefer?", type: "fill-blank", answer: "", correctAnswer: "hotel", audio: 4 },
  { number: 35, text: "What is their budget for accommodation?", type: "multiple-choice", options: ["$500", "$1000", "$1500", "$2000"], answer: "", correctAnswer: "$1000", audio: 4 },
  { number: 36, text: "They want to visit the Eiffel Tower.", type: "true-false", answer: "", correctAnswer: "True", audio: 4 },
  { number: 37, text: "What transportation will they use in the city?", type: "fill-blank", answer: "", correctAnswer: "metro", audio: 4 },
  { number: 38, text: "The trip includes a guided tour.", type: "true-false", answer: "", correctAnswer: "True", audio: 4 },
  { number: 39, text: "What is the main purpose of the trip?", type: "multiple-choice", options: ["Business", "Education", "Leisure", "Family visit"], answer: "", correctAnswer: "Leisure", audio: 4 },
  { number: 40, text: "They are booking flights in advance.", type: "true-false", answer: "", correctAnswer: "True", audio: 4 }
])

// Computed properties
const currentAudioTitle = computed(() => {
  return audioInfo.value.find(a => a.id === currentAudio.value)?.title || ""
})

const currentAudioDescription = computed(() => {
  return audioInfo.value.find(a => a.id === currentAudio.value)?.description || ""
})

const currentQuestions = computed(() => {
  const startIndex = currentQuestionGroup.value * questionsPerGroup
  const endIndex = startIndex + questionsPerGroup
  return allQuestions.value.slice(startIndex, endIndex)
})

const currentQuestionRange = computed(() => {
  const start = currentQuestionGroup.value * questionsPerGroup + 1
  return `${start}`
})

const totalQuestionGroups = computed(() => {
  return Math.ceil(allQuestions.value.length / questionsPerGroup)
})

const completedQuestions = computed(() => {
  return allQuestions.value.filter(q => q.answer !== "").length
})

const correctAnswers = computed(() => {
  return allQuestions.value.filter(q => q.answer === q.correctAnswer).length
})

const incorrectAnswers = computed(() => {
  return allQuestions.value.filter(q => q.answer !== "" && q.answer !== q.correctAnswer).length
})

const audioProgress = computed(() => {
  return (currentTime.value / duration.value) * 100
})

// Timer functionality
let timer = null

onMounted(() => {
  // Timer will only start when test is started
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})

const startTimer = () => {
  timer = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--
      totalTimeUsed.value = 1800 - timeLeft.value
    } else {
      submitTest()
    }
  }, 1000)
}

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
}

const formatAudioTime = (seconds) => {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
}

// Audio functions
const togglePlay = () => {
  isPlaying.value = !isPlaying.value
  // Simulate audio playback
  if (isPlaying.value) {
    simulateAudioPlayback()
  }
}

const simulateAudioPlayback = () => {
  const audioTimer = setInterval(() => {
    if (isPlaying.value && currentTime.value < duration.value) {
      currentTime.value++
    } else {
      isPlaying.value = false
      clearInterval(audioTimer)
    }
  }, 1000)
}

// Test functions
const startTest = () => {
  testStarted.value = true
  timeLeft.value = 1800 // Reset timer to 30 minutes
  startTimer()
}

const previousQuestions = () => {
  if (currentQuestionGroup.value > 0) {
    currentQuestionGroup.value--
  }
}

const nextQuestions = () => {
  if (currentQuestionGroup.value < totalQuestionGroups.value - 1) {
    currentQuestionGroup.value++
  }
}

const goToAudio = (audio) => {
  currentAudio.value = audio
  const firstQuestionForAudio = allQuestions.value.findIndex(q => q.audio === audio)
  if (firstQuestionForAudio !== -1) {
    currentQuestionGroup.value = Math.floor(firstQuestionForAudio / questionsPerGroup)
  }
}

const submitTest = () => {
  if (timer) clearInterval(timer)
  testCompleted.value = true
  totalTimeUsed.value = 1800 - timeLeft.value
}

const getScorePercentage = () => {
  return Math.round((correctAnswers.value / allQuestions.value.length) * 100)
}

const getIELTSBand = () => {
  const percentage = getScorePercentage()
  if (percentage >= 90) return "9.0"
  if (percentage >= 85) return "8.5"
  if (percentage >= 80) return "8.0"
  if (percentage >= 75) return "7.5"
  if (percentage >= 70) return "7.0"
  if (percentage >= 65) return "6.5"
  if (percentage >= 60) return "6.0"
  if (percentage >= 55) return "5.5"
  if (percentage >= 50) return "5.0"
  return "4.5"
}

const restartTest = () => {
  testStarted.value = false
  testCompleted.value = false
  timeLeft.value = 1800
  totalTimeUsed.value = 0
  currentAudio.value = 1
  currentQuestionGroup.value = 0
  currentTime.value = 0
  isPlaying.value = false
  allQuestions.value.forEach(q => q.answer = "")
  if (timer) clearInterval(timer)
}

const goHome = () => {
  router.push('/ielts')
}
</script>
