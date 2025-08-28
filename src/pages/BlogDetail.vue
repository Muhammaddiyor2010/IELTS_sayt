<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <!-- Falling Stars Animation -->
    <div class="falling-stars">
      <div class="falling-star"></div>
      <div class="falling-star"></div>
      <div class="falling-star"></div>
      <div class="falling-star"></div>
      <div class="falling-star"></div>
      <div class="falling-star"></div>
      <div class="falling-star"></div>
      <div class="falling-star"></div>
      <div class="falling-star"></div>
      <div class="falling-star"></div>
    </div>

    <div class="container mx-auto px-4 py-8">
      <!-- Back Button -->
      <div class="mb-8">
        <router-link to="/blogs" class="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Bloglarga qaytish
        </router-link>
      </div>

      <!-- Blog Content -->
      <article class="three-d-card bg-white rounded-lg shadow-lg p-8 mb-8">
        <header class="mb-8">
          <h1 class="text-4xl font-bold text-gray-800 mb-4">{{ currentBlog?.title }}</h1>
          <div class="flex items-center text-gray-600 mb-6">
            <img :src="currentBlog?.authorImage" :alt="currentBlog?.author" class="w-12 h-12 rounded-full mr-4">
            <div>
              <p class="font-semibold">{{ currentBlog?.author }}</p>
              <p class="text-sm">{{ currentBlog?.date }} • {{ currentBlog?.readTime }} daqiqa o'qish</p>
            </div>
          </div>
          <img :src="currentBlog?.image" :alt="currentBlog?.title" class="w-full h-64 object-cover rounded-lg mb-6">
          <p class="text-xl text-gray-600 italic">{{ currentBlog?.excerpt }}</p>
        </header>

        <div class="prose prose-lg max-w-none">
          <div v-html="currentBlog?.content"></div>
        </div>

        <!-- Tags -->
        <div class="mt-8 pt-6 border-t border-gray-200">
          <div class="flex flex-wrap gap-2">
            <span v-for="tag in currentBlog?.tags" :key="tag"
                  class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {{ tag }}
            </span>
          </div>
        </div>
      </article>

      <!-- Related Articles -->
      <div class="three-d-card bg-white rounded-lg shadow-lg p-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">O'xshash maqolalar</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="blog in relatedBlogs" :key="blog.id"
               class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <img :src="blog.image" :alt="blog.title" class="w-full h-32 object-cover rounded-lg mb-3">
            <h3 class="font-semibold text-gray-800 mb-2">{{ blog.title }}</h3>
            <p class="text-sm text-gray-600 mb-3">{{ blog.excerpt }}</p>
            <router-link :to="`/blog/${blog.id}`" class="text-blue-600 hover:text-blue-800 font-semibold text-sm">
              O'qish →
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const blogs = ref([
  {
    id: 1,
    title: "IELTS Reading strategiyalari",
    excerpt: "IELTS Reading bo'limida yuqori ball olish uchun asosiy strategiyalar va maslahatlar",
    content: `
      <h2>IELTS Reading strategiyalari</h2>
      <p>IELTS Reading bo'limida muvaffaqiyatli bo'lish uchun quyidagi strategiyalarni qo'llash kerak:</p>
      <h3>1. Skimming va Scanning</h3>
      <p>Skimming - matnni tez o'qish orqali asosiy g'oyani tushunish. Scanning - ma'lum bir ma'lumotni qidirish.</p>
      <h3>2. Savollarni oldindan o'qish</h3>
      <p>Matnni o'qishdan oldin savollarni ko'rib chiqing va qanday ma'lumot kerakligini aniqlang.</p>
      <h3>3. Kalit so'zlarni belgilash</h3>
      <p>Muhim so'zlarni belgilab oling va ularning ma'nosini tushunishga harakat qiling.</p>
    `,
    author: "Aziza Karimova",
    authorImage: "https://via.placeholder.com/48x48/3b82f6/ffffff?text=U",
    date: "2024-01-15",
    readTime: 8,
    image: "https://via.placeholder.com/400x200/3b82f6/ffffff?text=IELTS+Reading",
    tags: ["IELTS", "Reading", "Strategiya"]
  },
  {
    id: 2,
    title: "IELTS Writing formulalari",
    excerpt: "IELTS Writing bo'limida ishlatiladigan eng muhim formulalar va ularni qanday qo'llash",
    content: `
      <h2>IELTS Writing formulalari</h2>
      <p>IELTS Writing bo'limida quyidagi formulalarni yaxshi bilish kerak:</p>
      <h3>Task 1 formulalari</h3>
      <p>Grafik tasvirlash: The graph shows...</p>
      <p>O'zgarishlar: There was an increase/decrease...</p>
      <h3>Task 2 formulalari</h3>
      <p>Fikr bildirish: I believe that...</p>
      <p>Misol keltirish: For example...</p>
    `,
    author: "Sardor Toshmatov",
    authorImage: "https://via.placeholder.com/48x48/10b981/ffffff?text=U",
    date: "2024-01-10",
    readTime: 12,
    image: "/src/imgs/calculator.png",
    tags: ["IELTS", "Writing", "Formulalar"]
  },
  {
    id: 3,
    title: "IELTS Speaking maslahatlari",
    excerpt: "IELTS Speaking bo'limida ishtirok etishda e'tibor berish kerak bo'lgan muhim nuqtalar",
    content: `
      <h2>IELTS Speaking maslahatlari</h2>
      <p>IELTS Speaking bo'limida yuqori ball olish uchun:</p>
      <h3>1. Nutqning oqimini saqlang</h3>
      <p>To'xtab qolmasdan, tabiiy tarzda gapirishga harakat qiling.</p>
      <h3>2. Kengaytirilgan javoblar bering</h3>
      <p>Qisqa javoblar o'rniga batafsil va tushunarli javoblar bering.</p>
      <h3>3. Grammatikani to'g'ri ishlatish</h3>
      <p>Turli grammatik strukturalarni qo'llash orqali nutqni boyiting.</p>
    `,
    author: "Malika Yusupova",
    authorImage: "/src/imgs/usericon.png",
    date: "2024-01-05",
    readTime: 10,
    image: "/src/imgs/speak.png",
    tags: ["IELTS", "Speaking", "Maslahatlar"]
  },
  {
    id: 4,
    title: "Listening bo'limi uchun maslahatlar",
    excerpt: "IELTS Listening bo'limida muvaffaqiyatli bo'lish uchun kerakli ko'nikmalar",
    content: `
      <h2>Listening bo'limi uchun maslahatlar</h2>
      <p>IELTS Listening bo'limida quyidagi ko'nikmalarni rivojlantiring:</p>
      <h3>1. Diqqatni jamlash</h3>
      <p>Audio eshitish vaqtida boshqa narsalarga e'tibor bermang.</p>
      <h3>2. Kalit so'zlarni belgilash</h3>
      <p>Muhim ma'lumotlarni eshitib, ularni yozib oling.</p>
      <h3>3. Turli aksentlarni tushunish</h3>
      <p>Britaniya, Amerika va boshqa aksentlarni eshitishga o'rganing.</p>
    `,
    author: "Jasur Rahimov",
    authorImage: "/src/imgs/usericon.png",
    date: "2023-12-28",
    readTime: 7,
    image: "/src/imgs/listening.png",
    tags: ["IELTS", "Listening", "Ko'nikmalar"]
  },
  {
    id: 5,
    title: "IELTS Reading & Writing",
    excerpt: "IELTS Reading & Writing bo'limida yuqori ball olish uchun strategiyalar",
    content: `
      <h2>IELTS Reading & Writing strategiyalari</h2>
      <p>IELTS Reading & Writing bo'limida muvaffaqiyatli bo'lish uchun:</p>
      <h3>Reading strategiyalari</h3>
      <p>Matnni tez o'qish va asosiy g'oyani aniqlash muhimdir.</p>
      <h3>Writing strategiyalari</h3>
      <p>Aniq va tushunarli yozish, grammatik xatolarni oldini olish.</p>
    `,
    author: "Nilufar Karimova",
    authorImage: "/src/imgs/usericon.png",
    date: "2023-12-20",
    readTime: 15,
    image: "/src/imgs/calculator.png",
    tags: ["IELTS", "Reading", "Writing"]
  },
  {
    id: 6,
    title: "Natijalarni tahlil qilish",
    excerpt: "Test natijalarini to'g'ri tahlil qilish va keyingi qadamlarni rejalashtirish",
    content: `
      <h2>Natijalarni tahlil qilish</h2>
      <p>Test natijalarini to'g'ri tahlil qilish muhimdir:</p>
      <h3>1. Kuchli va zaif tomonlarni aniqlash</h3>
      <p>Qaysi bo'limlarda yaxshi, qaysi bo'limlarda zaif ekanligingizni aniqlang.</p>
      <h3>2. Xatolarni tahlil qilish</h3>
      <p>Qanday xatolar qilganingizni aniqlab, ularni takrorlamaslikka harakat qiling.</p>
      <h3>3. Keyingi rejalar</h3>
      <p>Zaif tomonlaringizni kuchaytirish uchun reja tuzing.</p>
    `,
    author: "Dilfuza Toshmatova",
    authorImage: "/src/imgs/usericon.png",
    date: "2023-12-15",
    readTime: 9,
    image: "/src/imgs/diogramma.png",
    tags: ["Tahlil", "Natijalar", "Rejalar"]
  }
])

const currentBlog = computed(() => {
  return blogs.value.find(blog => blog.id === parseInt(route.params.id))
})

const relatedBlogs = computed(() => {
  return blogs.value.filter(blog => blog.id !== parseInt(route.params.id)).slice(0, 3)
})

onMounted(() => {
  // Scroll to top when component mounts
  window.scrollTo(0, 0)
})
</script>

<style scoped>
.three-d-card {
  transform-style: preserve-3d;
  perspective: 900px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 12px 30px rgba(30, 64, 175, 0.08);
}

.three-d-card:hover {
  transform: translateY(-2px) rotateX(0.5deg) rotateY(-0.5deg);
  box-shadow: 0 18px 40px rgba(30, 64, 175, 0.14);
}

.falling-stars {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.falling-star {
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  animation: fall 3s linear infinite;
}

.falling-star:nth-child(1) { left: 10%; animation-delay: 0s; }
.falling-star:nth-child(2) { left: 20%; animation-delay: 0.5s; }
.falling-star:nth-child(3) { left: 30%; animation-delay: 1s; }
.falling-star:nth-child(4) { left: 40%; animation-delay: 1.5s; }
.falling-star:nth-child(5) { left: 50%; animation-delay: 2s; }
.falling-star:nth-child(6) { left: 60%; animation-delay: 2.5s; }
.falling-star:nth-child(7) { left: 70%; animation-delay: 0.3s; }
.falling-star:nth-child(8) { left: 80%; animation-delay: 0.8s; }
.falling-star:nth-child(9) { left: 90%; animation-delay: 1.3s; }
.falling-star:nth-child(10) { left: 95%; animation-delay: 1.8s; }

@keyframes fall {
  0% {
    transform: translateY(-100vh) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
}

.prose h2 {
  @apply text-2xl font-bold text-gray-800 mt-8 mb-4;
}

.prose h3 {
  @apply text-xl font-semibold text-gray-700 mt-6 mb-3;
}

.prose p {
  @apply text-gray-600 mb-4 leading-relaxed;
}
</style>
