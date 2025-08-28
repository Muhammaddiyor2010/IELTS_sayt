<template>
  <div>
    <nav class="bg-white/95 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex justify-between items-center py-4 sm:py-5">
          <!-- Logo -->
          <div class="flex items-center space-x-2 sm:space-x-3">
            <div class="bg-gradient-to-br from-blue-600 to-purple-600 p-1.5 sm:p-2 rounded-xl shadow-lg">
              <span class="text-white text-base sm:text-lg md:text-xl font-bold">🎯</span>
            </div>
            <div>
              <h1 class="text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ExamMaster
              </h1>
              <p class="text-xs text-gray-500 hidden sm:block">Professional Test Platform</p>
            </div>
          </div>

          <!-- Tablet Navigation (768px) - Compact version -->
          <div class="hidden md:flex lg:hidden items-center space-x-1">
            <a @click="scrollToSection('home')"
               class="group relative px-2 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 cursor-pointer rounded-lg hover:bg-blue-50">
              <span class="relative z-10 text-sm">Bosh sahifa</span>
              <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </a>

            <a @click="scrollToSection('tests')"
               class="group relative px-2 py-2 text-gray-700 hover:text-green-600 transition-all duration-300 cursor-pointer rounded-lg hover:bg-green-50">
              <span class="relative z-10 text-sm">Testlar</span>
              <div class="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </a>

            <router-link to="/blogs"
                         class="group relative px-2 py-2 text-gray-700 hover:text-purple-600 transition-all duration-300 rounded-lg hover:bg-purple-50">
              <span class="relative z-10 text-sm">Bloglar</span>
              <div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </router-link>

            <router-link to="/reviews"
                         class="group relative px-2 py-2 text-gray-700 hover:text-orange-600 transition-all duration-300 rounded-lg hover:bg-orange-50">
              <span class="relative z-10 text-sm">Fikrlar</span>
              <div class="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </router-link>
          </div>

          <!-- Desktop Navigation (1024px+) -->
          <div class="hidden lg:flex items-center space-x-1">
            <a @click="scrollToSection('home')"
               class="group relative px-3 lg:px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 cursor-pointer rounded-lg hover:bg-blue-50">
              <span class="relative z-10 text-sm lg:text-base">Bosh sahifa</span>
              <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </a>

            <a @click="scrollToSection('tests')"
               class="group relative px-3 lg:px-4 py-2 text-gray-700 hover:text-green-600 transition-all duration-300 cursor-pointer rounded-lg hover:bg-green-50">
              <span class="relative z-10 text-sm lg:text-base">Testlar</span>
              <div class="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </a>

            <router-link to="/blogs"
                         class="group relative px-3 lg:px-4 py-2 text-gray-700 hover:text-purple-600 transition-all duration-300 rounded-lg hover:bg-purple-50">
              <span class="relative z-10 text-sm lg:text-base">Bloglar</span>
              <div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </router-link>

            <router-link to="/reviews"
                         class="group relative px-3 lg:px-4 py-2 text-gray-700 hover:text-orange-600 transition-all duration-300 rounded-lg hover:bg-orange-50">
              <span class="relative z-10 text-sm lg:text-base">Fikrlar</span>
              <div class="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </router-link>

            <a @click="scrollToSection('about')"
               class="group relative px-3 lg:px-4 py-2 text-gray-700 hover:text-indigo-600 transition-all duration-300 cursor-pointer rounded-lg hover:bg-indigo-50">
              <span class="relative z-10 text-sm lg:text-base">Biz haqimizda</span>
              <div class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </a>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button @click="toggleMobileMenu"
                    class="group relative p-2 text-gray-600 hover:text-blue-600 transition-all duration-300 rounded-lg hover:bg-blue-50">
              <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

          <!-- Actions -->
          <div class="flex items-center space-x-2 sm:space-x-3">
            <router-link to="/price"
                         class="hidden md:block group relative px-3 sm:px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 rounded-lg hover:bg-blue-50">
              <span class="relative z-10 text-sm sm:text-base">Narxlar</span>
              <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </router-link>

            <!-- Authentication Buttons -->
            <div v-if="!user" class="flex items-center space-x-2 sm:space-x-3">
              <router-link to="/login"
                          class="group relative px-3 sm:px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 rounded-lg hover:bg-blue-50">
                <span class="relative z-10 text-sm sm:text-base">Kirish</span>
                <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </router-link>

              <router-link to="/register"
                          class="group relative px-4 sm:px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <span class="relative z-10 text-sm sm:text-base">Ro'yxatdan o'tish</span>
                <div class="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </router-link>
            </div>

            <!-- User Menu -->
            <div v-else class="flex items-center space-x-2 sm:space-x-3">
              <div class="flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 px-3 sm:px-4 py-2 rounded-lg">
                <div class="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span class="text-white text-xs sm:text-sm font-bold">{{ user.firstName.charAt(0) }}{{ user.lastName.charAt(0) }}</span>
                </div>
                <span class="font-semibold text-gray-700 text-xs sm:text-sm hidden sm:block">
                  {{ user.firstName }} {{ user.lastName }}
                </span>
              </div>

              <button @click="logout"
                      class="group relative px-3 sm:px-4 py-2 text-gray-600 hover:text-red-600 transition-all duration-300 rounded-lg hover:bg-red-50">
                <span class="relative z-10 text-sm sm:text-base">Chiqish</span>
                <div class="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile Navigation -->
        <div v-show="mobileMenuOpen"
             class="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 rounded-b-2xl shadow-xl">
          <div class="px-4 py-4 space-y-2">
            <a @click="scrollToSectionMobile('home')"
               class="group flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 transition-all duration-300 cursor-pointer rounded-lg hover:bg-blue-50">
              <span class="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
              Bosh sahifa
            </a>

            <a @click="scrollToSectionMobile('tests')"
               class="group flex items-center px-4 py-3 text-gray-700 hover:text-green-600 transition-all duration-300 cursor-pointer rounded-lg hover:bg-green-50">
              <span class="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
              Testlar
            </a>

            <router-link to="/blogs" @click="mobileMenuOpen = false"
                         class="group flex items-center px-4 py-3 text-gray-700 hover:text-purple-600 transition-all duration-300 rounded-lg hover:bg-purple-50">
              <span class="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
              Bloglar
            </router-link>

            <router-link to="/reviews" @click="mobileMenuOpen = false"
                         class="group flex items-center px-4 py-3 text-gray-700 hover:text-orange-600 transition-all duration-300 rounded-lg hover:bg-orange-50">
              <span class="w-2 h-2 bg-orange-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
              Fikrlar
            </router-link>

            <a @click="scrollToSectionMobile('about')"
               class="group flex items-center px-4 py-3 text-gray-700 hover:text-indigo-600 transition-all duration-300 cursor-pointer rounded-lg hover:bg-indigo-50">
              <span class="w-2 h-2 bg-indigo-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
              Biz haqimizda
            </a>

            <router-link to="/price" @click="mobileMenuOpen = false"
                         class="group flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 transition-all duration-300 rounded-lg hover:bg-blue-50">
              <span class="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
              Narxlar
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

// Define user interface
interface User {
  firstName: string;
  lastName: string;
  [key: string]: any; // Allow additional properties
}

const user = ref<User | null>(null);
const mobileMenuOpen = ref(false);
const router = useRouter();
const route = useRoute();

const scrollToSection = (sectionId: string) => {
  if (route.path !== '/') {
    router.push('/').then(() => {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    });
  } else {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
};

const scrollToSectionMobile = (sectionId: string) => {
  mobileMenuOpen.value = false;
  scrollToSection(sectionId);
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const logout = () => {
  localStorage.removeItem("user");
  user.value = null;
  router.push('/');
};

onMounted(() => {
  const savedUser = localStorage.getItem("user");
  if (savedUser) {
    user.value = JSON.parse(savedUser);
  }
});
</script>

<style scoped>
/* Custom scrollbar for webkit browsers */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #2563eb, #7c3aed);
}
</style>

<style>
html {
  scroll-behavior: smooth;
}

/* Global smooth transitions */
* {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
</style>
