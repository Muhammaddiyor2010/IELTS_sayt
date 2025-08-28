<template>
  <div >
    <!-- Start Screen -->
    <div v-if="!testStarted && !testCompleted" class="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 h-[620px] flex items-center justify-center">
      <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-6">IELTS Reading</h1>
        <p class="text-xl md:text-2xl text-blue-100 mb-8">3 ta matn, 40 ta savol, 60 daqiqa vaqt</p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-12">
          <div class="text-center">
            <div class="text-3xl font-bold text-white mb-2">3</div>
            <div class="text-blue-100">Matn</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-white mb-2">40</div>
            <div class="text-blue-100">Savol</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-white mb-2">60</div>
            <div class="text-blue-100">Daqiqa</div>
          </div>
        </div>

        <button @click="startTest" class="bg-white text-blue-600 font-semibold py-4 px-12 rounded-full text-xl hover:bg-blue-50 transition-colors">
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
                <div class="bg-blue-100 p-2 rounded-full">
                  <ClockIcon class="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p class="text-sm text-gray-600">Qolgan vaqt</p>
                  <p class="text-xl font-bold text-blue-600">{{ formatTime(timeLeft) }}</p>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <div class="bg-green-100 p-2 rounded-full">
                  <DocumentCheckIcon class="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p class="text-sm text-gray-600">Tugatilgan</p>
                  <p class="text-xl font-bold text-green-600">{{ completedQuestions }}/40</p>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <button v-for="passage in 3" :key="passage" @click="goToPassage(passage)"
                :class="['px-4 py-2 rounded-lg font-semibold transition-colors',
                  currentPassage === passage ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300']">
                Matn {{ passage }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Test Content -->
      <div class="max-w-7xl mx-auto px-4 py-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Reading Passage -->
          <div class="bg-white rounded-3xl shadow-xl p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-x">Matn {{ currentPassage }}</h2>
            <div class="prose prose-lg max-w-none">
              <div v-html="currentPassageText" class="text-gray-700 leading-relaxed text-lg"></div>
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
                    <input type="radio" :name="'question-' + question.number" :value="option" v-model="question.answer" class="w-5 h-5 text-blue-600">
                    <span class="text-gray-700">{{ option }}</span>
                  </label>
                </div>

                <!-- True/False -->
                <div v-else-if="question.type === 'true-false'" class="space-y-3">
                  <label class="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50">
                    <input type="radio" :name="'question-' + question.number" value="True" v-model="question.answer" class="w-5 h-5 text-blue-600">
                    <span class="text-gray-700">True</span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50">
                    <input type="radio" :name="'question-' + question.number" value="False" v-model="question.answer" class="w-5 h-5 text-blue-600">
                    <span class="text-gray-700">False</span>
                  </label>
                </div>

                <!-- Fill in the blanks -->
                <div v-else-if="question.type === 'fill-blank'" class="space-y-3">
                  <input type="text" v-model="question.answer" placeholder="Javobni kiriting..."
                    class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg">
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
                class="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white font-semibold py-3 px-6 rounded-xl transition-colors">
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
          <p class="text-xl text-gray-600">IELTS Reading testi yakunlandi</p>
        </div>

        <!-- Score Card -->
        <div class="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <div class="text-center mb-8">
            <div class="text-6xl font-bold text-blue-600 mb-4">{{ correctAnswers }}/40</div>
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
          <button @click="restartTest" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors">
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
import { ClockIcon, DocumentCheckIcon } from '@heroicons/vue/24/outline'

const router = useRouter()

// Test state
const testStarted = ref(false)
const testCompleted = ref(false)
const timeLeft = ref(3600) // 60 minutes
const totalTimeUsed = ref(0)
const currentPassage = ref(1)
const currentQuestionGroup = ref(0)
const questionsPerGroup = 1

// Reading passages
const passages = ref([
  {
    id: 1,
    title: "Climate Change and Its Effects",
    text: `<p class="mb-4">Climate change is one of the most pressing issues facing humanity today. The Earth's average temperature has increased by approximately 1.1°C since pre-industrial times, and this warming trend is expected to continue unless significant action is taken.</p>
    <p class="mb-4">The primary cause of climate change is the increase in greenhouse gas concentrations in the atmosphere, particularly carbon dioxide (CO2). These gases trap heat from the sun, creating a "greenhouse effect" that warms the planet.</p>
    <p class="mb-4">The effects of climate change are already being felt around the world. Rising sea levels threaten coastal communities, extreme weather events are becoming more frequent and intense, and ecosystems are being disrupted.</p>`
  },
  {
    id: 2,
    title: "The History of Artificial Intelligence",
    text: `<p class="mb-4">Artificial Intelligence (AI) has evolved significantly since its inception in the 1950s. The term was first coined at a conference at Dartmouth College in 1956, where researchers gathered to discuss the possibility of creating machines that could simulate human intelligence.</p>
    <p class="mb-4">Early AI research focused on symbolic reasoning and problem-solving. Programs like the Logic Theorist and General Problem Solver demonstrated that computers could perform tasks that required human-like reasoning.</p>
    <p class="mb-4">Today, AI is integrated into many aspects of daily life, from virtual assistants and recommendation systems to autonomous vehicles and medical diagnosis tools.</p>`
  },
  {
    id: 3,
    title: "The Benefits of Exercise",
    text: `<p class="mb-4">Regular exercise is essential for maintaining good health and well-being. Physical activity has numerous benefits for both the body and mind, making it one of the most important lifestyle choices a person can make.</p>
    <p class="mb-4">From a physical perspective, exercise helps maintain a healthy weight, strengthens muscles and bones, and improves cardiovascular health. It reduces the risk of chronic diseases such as heart disease, diabetes, and certain types of cancer.</p>
    <p class="mb-4">Mental health benefits are equally important. Exercise releases endorphins, natural chemicals that improve mood and reduce stress. Regular physical activity has been shown to help with depression and anxiety.</p>`
  }
])

// Sample questions (40 total)
const allQuestions = ref([
  // Passage 1 questions (1-13)
  { number: 1, text: "What is the main cause of climate change?", type: "multiple-choice", options: ["Volcanic eruptions", "Greenhouse gas concentrations", "Solar flares", "Ocean currents"], answer: "", correctAnswer: "Greenhouse gas concentrations", passage: 1 },
  { number: 2, text: "How much has the Earth's average temperature increased?", type: "multiple-choice", options: ["0.5°C", "1.1°C", "2.0°C", "3.5°C"], answer: "", correctAnswer: "1.1°C", passage: 1 },
  { number: 3, text: "Climate change is not affecting ecosystems yet.", type: "true-false", answer: "", correctAnswer: "False", passage: 1 },
  { number: 4, text: "Which gas is mentioned as the main greenhouse gas?", type: "fill-blank", answer: "", correctAnswer: "carbon dioxide", passage: 1 },
  { number: 5, text: "Rising sea levels threaten coastal communities.", type: "true-false", answer: "", correctAnswer: "True", passage: 1 },
  { number: 6, text: "What creates the greenhouse effect?", type: "multiple-choice", options: ["Ozone layer", "Greenhouse gases", "Clouds", "Wind"], answer: "", correctAnswer: "Greenhouse gases", passage: 1 },
  { number: 7, text: "Extreme weather events are becoming less frequent.", type: "true-false", answer: "", correctAnswer: "False", passage: 1 },
  { number: 8, text: "What type of communities are threatened by sea level rise?", type: "fill-blank", answer: "", correctAnswer: "coastal communities", passage: 1 },
  { number: 9, text: "Ecosystems are being disrupted by climate change.", type: "true-false", answer: "", correctAnswer: "True", passage: 1 },
  { number: 10, text: "What is the warming trend expected to do?", type: "multiple-choice", options: ["Stop immediately", "Continue", "Reverse", "Stay the same"], answer: "", correctAnswer: "Continue", passage: 1 },
  { number: 11, text: "Human activities have increased greenhouse gas concentrations.", type: "true-false", answer: "", correctAnswer: "True", passage: 1 },
  { number: 12, text: "What is the most pressing issue mentioned?", type: "fill-blank", answer: "", correctAnswer: "climate change", passage: 1 },
  { number: 13, text: "The Earth's temperature has decreased since pre-industrial times.", type: "true-false", answer: "", correctAnswer: "False", passage: 1 },

  // Passage 2 questions (14-26)
  { number: 14, text: "When was the term 'Artificial Intelligence' first coined?", type: "multiple-choice", options: ["1940s", "1950s", "1960s", "1970s"], answer: "", correctAnswer: "1950s", passage: 2 },
  { number: 15, text: "Where was the first AI conference held?", type: "multiple-choice", options: ["MIT", "Stanford", "Dartmouth College", "Harvard"], answer: "", correctAnswer: "Dartmouth College", passage: 2 },
  { number: 16, text: "AI is currently used in medical diagnosis.", type: "true-false", answer: "", correctAnswer: "True", passage: 2 },
  { number: 17, text: "What type of reasoning did early AI focus on?", type: "fill-blank", answer: "", correctAnswer: "symbolic reasoning", passage: 2 },
  { number: 18, text: "Early AI systems could perform human-like reasoning.", type: "true-false", answer: "", correctAnswer: "True", passage: 2 },
  { number: 19, text: "Which program demonstrated problem-solving abilities?", type: "multiple-choice", options: ["Logic Theorist", "Calculator", "Word Processor", "Database"], answer: "", correctAnswer: "Logic Theorist", passage: 2 },
  { number: 20, text: "AI is not integrated into daily life.", type: "true-false", answer: "", correctAnswer: "False", passage: 2 },
  { number: 21, text: "What type of systems use AI today?", type: "fill-blank", answer: "", correctAnswer: "virtual assistants", passage: 2 },
  { number: 22, text: "AI can simulate human intelligence.", type: "true-false", answer: "", correctAnswer: "True", passage: 2 },
  { number: 23, text: "Which field uses AI for diagnosis?", type: "multiple-choice", options: ["Education", "Medicine", "Agriculture", "Construction"], answer: "", correctAnswer: "Medicine", passage: 2 },
  { number: 24, text: "AI research began in the 1960s.", type: "true-false", answer: "", correctAnswer: "False", passage: 2 },
  { number: 25, text: "What type of vehicles use AI?", type: "fill-blank", answer: "", correctAnswer: "autonomous vehicles", passage: 2 },
  { number: 26, text: "AI is only used in research laboratories.", type: "true-false", answer: "", correctAnswer: "False", passage: 2 },

  // Passage 3 questions (27-40)
  { number: 27, text: "How many minutes of moderate exercise are recommended per week?", type: "multiple-choice", options: ["75 minutes", "150 minutes", "300 minutes", "450 minutes"], answer: "", correctAnswer: "150 minutes", passage: 3 },
  { number: 28, text: "Exercise releases chemicals that improve mood.", type: "true-false", answer: "", correctAnswer: "True", passage: 3 },
  { number: 29, text: "Exercise can help with which mental health conditions?", type: "fill-blank", answer: "", correctAnswer: "depression and anxiety", passage: 3 },
  { number: 30, text: "Exercise strengthens muscles and bones.", type: "true-false", answer: "", correctAnswer: "True", passage: 3 },
  { number: 31, text: "What type of diseases does exercise reduce the risk of?", type: "multiple-choice", options: ["Heart disease", "All diseases", "Only mental diseases", "Only physical diseases"], answer: "", correctAnswer: "Heart disease", passage: 3 },
  { number: 32, text: "Exercise has no mental health benefits.", type: "true-false", answer: "", correctAnswer: "False", passage: 3 },
  { number: 33, text: "What chemicals does exercise release?", type: "fill-blank", answer: "", correctAnswer: "endorphins", passage: 3 },
  { number: 34, text: "Exercise helps maintain a healthy weight.", type: "true-false", answer: "", correctAnswer: "True", passage: 3 },
  { number: 35, text: "How often should exercise be performed?", type: "multiple-choice", options: ["Once a month", "Once a week", "Regularly", "Never"], answer: "", correctAnswer: "Regularly", passage: 3 },
  { number: 36, text: "Exercise improves cardiovascular health.", type: "true-false", answer: "", correctAnswer: "True", passage: 3 },
  { number: 37, text: "What type of cancer risk does exercise reduce?", type: "fill-blank", answer: "", correctAnswer: "certain types", passage: 3 },
  { number: 38, text: "Exercise is not important for lifestyle choices.", type: "true-false", answer: "", correctAnswer: "False", passage: 3 },
  { number: 39, text: "What aspect of health does exercise benefit?", type: "multiple-choice", options: ["Only physical", "Only mental", "Both physical and mental", "Neither"], answer: "", correctAnswer: "Both physical and mental", passage: 3 },
  { number: 40, text: "Exercise reduces stress levels.", type: "true-false", answer: "", correctAnswer: "True", passage: 3 }
])

// Computed properties
const currentPassageText = computed(() => {
  return passages.value.find(p => p.id === currentPassage.value)?.text || ""
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
      totalTimeUsed.value = 3600 - timeLeft.value
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

// Test functions
const startTest = () => {
  testStarted.value = true
  timeLeft.value = 3600 // Reset timer to 60 minutes
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

const goToPassage = (passage) => {
  currentPassage.value = passage
  const firstQuestionForPassage = allQuestions.value.findIndex(q => q.passage === passage)
  if (firstQuestionForPassage !== -1) {
    currentQuestionGroup.value = Math.floor(firstQuestionForPassage / questionsPerGroup)
  }
}

const submitTest = () => {
  if (timer) clearInterval(timer)
  testCompleted.value = true
  totalTimeUsed.value = 3600 - timeLeft.value
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
  timeLeft.value = 3600
  totalTimeUsed.value = 0
  currentPassage.value = 1
  currentQuestionGroup.value = 0
  allQuestions.value.forEach(q => q.answer = "")
  if (timer) clearInterval(timer)
}

const goHome = () => {
  router.push('/ielts')
}
</script>

<style scoped>
/* Modern styling is handled by Tailwind classes */
</style>
