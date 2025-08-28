<template>
  <div>
    <!-- Start Screen -->
    <div v-if="!testStarted && !testCompleted" class="relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-rose-700 h-[620px] flex items-center justify-center">
      <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-6">IELTS Writing</h1>
        <p class="text-xl md:text-2xl text-purple-100 mb-8">2 ta vazifa, avtomatik baho, 60 daqiqa vaqt</p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-12">
          <div class="text-center">
            <div class="text-3xl font-bold text-white mb-2">2</div>
            <div class="text-purple-100">Vazifa</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-white mb-2">60</div>
            <div class="text-purple-100">Daqiqa</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-white mb-2">Auto</div>
            <div class="text-purple-100">Baho</div>
          </div>
        </div>

        <button @click="startTest" class="bg-white text-purple-600 font-semibold py-4 px-12 rounded-full text-xl hover:bg-purple-50 transition-colors">
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
                <div class="bg-purple-100 p-2 rounded-full">
                  <ClockIcon class="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p class="text-sm text-gray-600">Qolgan vaqt</p>
                  <p class="text-xl font-bold text-purple-600">{{ formatTime(timeLeft) }}</p>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <div class="bg-blue-100 p-2 rounded-full">
                  <DocumentCheckIcon class="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p class="text-sm text-gray-600">Tugatilgan</p>
                  <p class="text-xl font-bold text-blue-600">{{ completedTasks }}/2</p>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <button v-for="task in 2" :key="task" @click="goToTask(task)"
                :class="['px-4 py-2 rounded-lg font-semibold transition-colors',
                  currentTask === task ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300']">
                Vazifa {{ task }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Test Content -->
      <div class="max-w-7xl mx-auto px-4 py-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Task Description -->
          <div class="bg-white rounded-3xl shadow-xl p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Vazifa {{ currentTask }}</h2>

            <!-- Task Info -->
            <div class="bg-purple-50 rounded-2xl p-6 mb-6">
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center gap-3">
                  <div class="bg-purple-600 p-2 rounded-full">
                    <PencilIcon class="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p class="font-semibold text-gray-900">{{ currentTaskTitle }}</p>
                    <p class="text-sm text-gray-600">{{ currentTaskType }}</p>
                  </div>
                </div>
                <div class="text-sm text-gray-600">
                  {{ currentTaskTime }} daqiqa
                </div>
              </div>
            </div>

            <!-- Task Description -->
            <div class="prose prose-lg max-w-none">
              <div v-html="currentTaskDescription" class="text-gray-700 leading-relaxed text-lg"></div>
            </div>

            <!-- Task Requirements -->
            <div class="bg-blue-50 rounded-xl p-4 mt-6">
              <h3 class="font-semibold text-blue-900 mb-2">Vazifa talablari:</h3>
              <ul class="text-sm text-blue-800 space-y-1">
                <li>• {{ currentTaskRequirements.minWords }} so'z minimum</li>
                <li>• {{ currentTaskRequirements.maxWords }} so'z maksimum</li>
                <li>• Professional yozish uslubi</li>
                <li>• To'g'ri grammatika va imlo</li>
              </ul>
            </div>
          </div>

          <!-- Writing Area -->
          <div class="bg-white rounded-3xl shadow-xl p-8">
            <div class="flex items-center justify-between mb-6">
              <h2 class="text-2xl font-bold text-gray-900">Yozish maydoni</h2>
              <div class="text-sm text-gray-600">
                {{ wordCount }} so'z
              </div>
            </div>

            <!-- Writing Editor -->
            <div class="space-y-4">
              <textarea
                v-model="currentTaskAnswer"
                placeholder="Bu yerda yozing..."
                class="w-full h-64 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg resize-none"
                @input="updateWordCount"
              ></textarea>

              <!-- Writing Tools -->
              <div class="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div class="flex items-center gap-4">
                  <button @click="clearText" class="text-gray-600 hover:text-gray-800">
                    <TrashIcon class="w-5 h-5" />
                  </button>
                  <button @click="saveDraft" class="text-gray-600 hover:text-gray-800">
                    <DocumentIcon class="w-5 h-5" />
                  </button>
                </div>
                <div class="flex items-center gap-2 text-sm text-gray-600">
                  <span>Avtomatik saqlash</span>
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>

            <!-- Navigation -->
            <div class="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
              <button @click="previousTask" :disabled="currentTask === 1"
                class="bg-gray-500 hover:bg-gray-600 disabled:bg-gray-300 text-white font-semibold py-3 px-6 rounded-xl transition-colors">
                ← Oldingi
              </button>

              <div class="text-sm text-gray-600">{{ currentTask }} / 2</div>

              <button @click="nextTask" :disabled="currentTask === 2"
                class="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-300 text-white font-semibold py-3 px-6 rounded-xl transition-colors">
                Keyingi →
              </button>
            </div>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="text-center mt-8">
          <button @click="submitTest" class="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-12 rounded-xl transition-colors text-lg">
            Testni tugatish
          </button>
        </div>
      </div>
    </div>

    <!-- Results Screen -->
    <div v-if="testCompleted" class="h-[620px] bg-gradient-to-br from-purple-50 to-pink-50 overflow-y-auto">
      <div class="max-w-4xl mx-auto px-4 py-8">
        <div class="text-center mb-8">
          <h1 class="text-4xl font-bold text-gray-900 mb-4">Test natijalari</h1>
          <p class="text-xl text-gray-600">IELTS Writing testi yakunlandi</p>
        </div>

        <!-- Score Card -->
        <div class="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <div class="text-center mb-8">
            <div class="text-6xl font-bold text-purple-600 mb-4">{{ averageScore }}/9.0</div>
            <div class="text-2xl font-semibold text-gray-700 mb-2">O'rtacha ball</div>
            <div class="text-lg text-gray-600">Avtomatik baholash natijasi</div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div class="text-center p-4 bg-purple-50 rounded-xl">
              <div class="text-3xl font-bold text-purple-600 mb-2">{{ task1Score }}/9.0</div>
              <div class="text-gray-700">Vazifa 1</div>
            </div>
            <div class="text-center p-4 bg-pink-50 rounded-xl">
              <div class="text-3xl font-bold text-pink-600 mb-2">{{ task2Score }}/9.0</div>
              <div class="text-gray-700">Vazifa 2</div>
            </div>
          </div>

          <!-- Detailed Analysis -->
          <div class="space-y-6">
            <div v-for="(task, index) in tasks" :key="index" class="border-b border-gray-200 pb-6">
              <h3 class="text-xl font-bold text-gray-900 mb-4">Vazifa {{ index + 1 }} tahlili</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="space-y-2">
                  <div class="flex justify-between">
                    <span class="text-gray-600">So'zlar soni:</span>
                    <span class="font-semibold">{{ getWordCount(task.answer) }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Grammatika:</span>
                    <span class="font-semibold text-green-600">{{ task.analysis.grammar }}/9</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Imlo:</span>
                    <span class="font-semibold text-green-600">{{ task.analysis.spelling }}/9</span>
                  </div>
                </div>
                <div class="space-y-2">
                  <div class="flex justify-between">
                    <span class="text-gray-600">Tuzilish:</span>
                    <span class="font-semibold text-green-600">{{ task.analysis.structure }}/9</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Mazmun:</span>
                    <span class="font-semibold text-green-600">{{ task.analysis.content }}/9</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Umumiy ball:</span>
                    <span class="font-semibold text-purple-600">{{ task.score }}/9</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="text-center space-x-4">
          <button @click="restartTest" class="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-xl transition-colors">
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
  PencilIcon,
  TrashIcon,
  DocumentIcon
} from '@heroicons/vue/24/outline'

const router = useRouter()

// Test state
const testStarted = ref(false)
const testCompleted = ref(false)
const timeLeft = ref(3600) // 60 minutes
const totalTimeUsed = ref(0)
const currentTask = ref(1)
const wordCount = ref(0)

// Writing tasks
const tasks = ref([
  {
    id: 1,
    title: "Task 1 - Academic Writing",
    type: "Graph Description",
    time: 20,
    description: `
      <p class="mb-4">The graph below shows the percentage of households in different income brackets in three countries in 2020.</p>
      <p class="mb-4">Summarize the information by selecting and reporting the main features, and make comparisons where relevant.</p>
      <p class="mb-4">Write at least 150 words.</p>
      <div class="bg-gray-100 p-4 rounded-lg">
        <p class="text-sm text-gray-600">[Graph would be displayed here showing income distribution data]</p>
      </div>
    `,
    requirements: { minWords: 150, maxWords: 200 },
    answer: "",
    score: 0,
    analysis: {
      grammar: 0,
      spelling: 0,
      structure: 0,
      content: 0
    }
  },
  {
    id: 2,
    title: "Task 2 - Essay Writing",
    type: "Argumentative Essay",
    time: 40,
    description: `
      <p class="mb-4">Some people believe that technology has made life easier and more convenient, while others argue that it has made life more complicated and stressful.</p>
      <p class="mb-4">Discuss both views and give your own opinion.</p>
      <p class="mb-4">Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
      <p class="mb-4">Write at least 250 words.</p>
    `,
    requirements: { minWords: 250, maxWords: 350 },
    answer: "",
    score: 0,
    analysis: {
      grammar: 0,
      spelling: 0,
      structure: 0,
      content: 0
    }
  }
])

// Computed properties
const currentTaskTitle = computed(() => {
  return tasks.value.find(t => t.id === currentTask.value)?.title || ""
})

const currentTaskType = computed(() => {
  return tasks.value.find(t => t.id === currentTask.value)?.type || ""
})

const currentTaskTime = computed(() => {
  return tasks.value.find(t => t.id === currentTask.value)?.time || 0
})

const currentTaskDescription = computed(() => {
  return tasks.value.find(t => t.id === currentTask.value)?.description || ""
})

const currentTaskRequirements = computed(() => {
  return tasks.value.find(t => t.id === currentTask.value)?.requirements || { minWords: 0, maxWords: 0 }
})

const currentTaskAnswer = computed({
  get: () => {
    return tasks.value.find(t => t.id === currentTask.value)?.answer || ""
  },
  set: (value) => {
    const task = tasks.value.find(t => t.id === currentTask.value)
    if (task) {
      task.answer = value
    }
  }
})

const completedTasks = computed(() => {
  return tasks.value.filter(t => t.answer.trim() !== "").length
})

const task1Score = computed(() => {
  return tasks.value[0]?.score || 0
})

const task2Score = computed(() => {
  return tasks.value[1]?.score || 0
})

const averageScore = computed(() => {
  const scores = tasks.value.map(t => t.score).filter(s => s > 0)
  if (scores.length === 0) return 0
  return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length * 10) / 10
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

// Writing functions
const updateWordCount = () => {
  const text = currentTaskAnswer.value
  wordCount.value = text.trim() === '' ? 0 : text.trim().split(/\s+/).length
}

const getWordCount = (text) => {
  return text.trim() === '' ? 0 : text.trim().split(/\s+/).length
}

const clearText = () => {
  currentTaskAnswer.value = ""
  updateWordCount()
}

const saveDraft = () => {
  // Simulate saving draft
  console.log('Draft saved automatically')
}

// Test functions
const startTest = () => {
  testStarted.value = true
  timeLeft.value = 3600 // Reset timer to 60 minutes
  startTimer()
}

const previousTask = () => {
  if (currentTask.value > 1) {
    currentTask.value--
  }
}

const nextTask = () => {
  if (currentTask.value < 2) {
    currentTask.value++
  }
}

const goToTask = (task) => {
  currentTask.value = task
}

const submitTest = () => {
  if (timer) clearInterval(timer)

  // Auto-grade the tasks
  tasks.value.forEach(task => {
    const wordCount = getWordCount(task.answer)

    // Simple auto-grading algorithm
    let score = 0
    let grammar = 0
    let spelling = 0
    let structure = 0
    let content = 0

    // Word count scoring
    if (wordCount >= task.requirements.minWords && wordCount <= task.requirements.maxWords) {
      score += 2
      content += 2
    } else if (wordCount >= task.requirements.minWords * 0.8) {
      score += 1
      content += 1
    }

    // Basic content scoring (simplified)
    if (task.answer.length > 100) {
      score += 2
      content += 2
    }

    // Grammar and spelling (simplified scoring)
    const sentences = task.answer.split(/[.!?]+/).filter(s => s.trim().length > 0)
    if (sentences.length > 2) {
      grammar += 2
      structure += 2
    }

    // Random scoring for demonstration
    grammar += Math.floor(Math.random() * 3) + 1
    spelling += Math.floor(Math.random() * 3) + 1
    structure += Math.floor(Math.random() * 3) + 1
    content += Math.floor(Math.random() * 3) + 1

    // Cap scores at 9
    grammar = Math.min(grammar, 9)
    spelling = Math.min(spelling, 9)
    structure = Math.min(structure, 9)
    content = Math.min(content, 9)

    // Calculate final score
    score = Math.round((grammar + spelling + structure + content) / 4)
    score = Math.min(score, 9)

    task.score = score
    task.analysis = { grammar, spelling, structure, content }
  })

  testCompleted.value = true
  totalTimeUsed.value = 3600 - timeLeft.value
}

const restartTest = () => {
  testStarted.value = false
  testCompleted.value = false
  timeLeft.value = 3600
  totalTimeUsed.value = 0
  currentTask.value = 1
  wordCount.value = 0
  tasks.value.forEach(task => {
    task.answer = ""
    task.score = 0
    task.analysis = { grammar: 0, spelling: 0, structure: 0, content: 0 }
  })
  if (timer) clearInterval(timer)
}

const goHome = () => {
  router.push('/ielts')
}
</script>
