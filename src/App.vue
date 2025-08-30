<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
    <!-- Navigation -->
    <nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex items-center">
            <router-link to="/" class="flex items-center space-x-2">
              <div class="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <span class="text-lg xs:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                IELTS HUB UZ
              </span>
            </router-link>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <a @click="scrollToSection('home')"
               class="group relative px-3 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 cursor-pointer">
              <span class="relative z-10">Bosh sahifa</span>
              <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </a>

            <a @click="scrollToSection('tests')"
               class="group relative px-3 py-2 text-gray-700 hover:text-green-600 transition-all duration-300 cursor-pointer">
              <span class="relative z-10">Testlar</span>
              <div class="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </a>

            <router-link to="/blogs"
                         class="group relative px-3 py-2 text-gray-700 hover:text-purple-600 transition-all duration-300">
              <span class="relative z-10">Bloglar</span>
              <div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </router-link>

            <router-link to="/reviews"
                         class="group relative px-3 py-2 text-gray-700 hover:text-orange-600 transition-all duration-300">
              <span class="relative z-10">Fikrlar</span>
              <div class="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </router-link>

            <a @click="scrollToSection('about')"
               class="group relative px-3 py-2 text-gray-700 hover:text-indigo-600 transition-all duration-300 cursor-pointer">
              <span class="relative z-10">Biz haqimizda</span>
              <div class="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </a>
          </div>

          <!-- Mobile Menu Button -->
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
              <router-link to="/signin"
                          class="group relative px-3 sm:px-4 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 rounded-lg hover:bg-blue-50">
                <span class="relative z-10 text-sm sm:text-base">Kirish</span>
                <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </router-link>

              <router-link to="/signup"
                          class="group relative px-4 sm:px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <span class="relative z-10 text-sm sm:text-base">Ro'yxatdan o'tish</span>
                <div class="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </router-link>
            </div>

            <!-- User Menu -->
            <div v-else class="flex items-center space-x-2 sm:space-x-3">
              <div class="flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 px-3 sm:px-4 py-2 rounded-lg">
                <div class="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span class="text-white text-xs sm:text-sm font-bold">{{ getUserInitials() }}</span>
                </div>
                <span class="font-semibold text-gray-700 text-xs sm:text-sm hidden sm:block">
                  {{ getUserName() }}
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
import { ref, onMounted, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useAuth } from "./composables/useAuth";

const { user, signOut, getSession, initAuth } = useAuth();
const mobileMenuOpen = ref(false);
const router = useRouter();
const route = useRoute();

const getUserInitials = () => {
  if (!user.value) return '';
  const firstName = user.value.firstName || '';
  const lastName = user.value.lastName || '';
  return (firstName.charAt(0) + lastName.charAt(0)).toUpperCase();
};

const getUserName = () => {
  if (!user.value) return '';
  const firstName = user.value.firstName || '';
  const lastName = user.value.lastName || '';
  return `${firstName} ${lastName}`.trim();
};

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

const logout = async () => {
  await signOut();
  router.push('/');
};

onMounted(() => {
  initAuth();
  getSession();
});

// Watch for route changes and scroll to top
watch(() => route.path, () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
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

/* Responsive utilities */
@media (max-width: 640px) {
  .text-5xl {
    font-size: 2.5rem;
    line-height: 3rem;
  }
  
  .text-7xl {
    font-size: 3.5rem;
    line-height: 4rem;
  }
  
  .h-\[600px\] {
    height: 400px;
  }
  
  .h-\[620px\] {
    height: 420px;
  }
  
  .py-20 {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  
  .px-8 {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .p-8 {
    padding: 1.5rem;
  }
  
  .gap-8 {
    gap: 1.5rem;
  }
  
  .grid-cols-3 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  
  .grid-cols-4 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .text-7xl {
    font-size: 4rem;
    line-height: 4.5rem;
  }
  
  .h-\[600px\] {
    height: 500px;
  }
  
  .h-\[620px\] {
    height: 520px;
  }
  
  .py-20 {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  
  .grid-cols-3 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

/* Mobile-first responsive design */
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}

/* Touch-friendly buttons on mobile */
@media (max-width: 768px) {
  button, .btn {
    min-height: 44px;
    min-width: 44px;
  }
  
  input, textarea, select {
    font-size: 16px; /* Prevents zoom on iOS */
  }
}

/* Improved mobile navigation */
@media (max-width: 768px) {
  .mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 50;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .mobile-menu-content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 80%;
    max-width: 320px;
    background-color: white;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
  }
  
  .mobile-menu.open .mobile-menu-content {
    transform: translateX(0);
  }
}
</style>
