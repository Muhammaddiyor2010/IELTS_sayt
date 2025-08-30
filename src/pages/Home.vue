<template>
    <div class="">
        <!-- Modern Hero Section -->
        <div id="home" class="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 min-h-screen flex items-center justify-center py-4 sm:py-6 md:py-8">
            <!-- Animated background elements -->
            <div class="absolute inset-0">
                <div class="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                <div class="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-pulse delay-500"></div>
            </div>

            <!-- Falling Icons Animation -->
            <div class="falling-icons">
                <!-- Telegram Icon -->
                <div class="falling-icon" style="left: 15%; animation-delay: 0s;">
                    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.58 7.44c-.12.539-.43.67-.87.42l-2.4-1.77-1.16 1.12c-.13.13-.24.24-.49.24l.17-2.43 4.33-3.91c.19-.17-.04-.26-.29-.09l-5.35 3.37-2.3-.72c-.5-.16-.51-.5.1-.74l9.0-3.47c.42-.16.78.1.65.72z"/>
                    </svg>
                </div>

                <!-- YouTube Icon -->
                <div class="falling-icon" style="left: 35%; animation-delay: 1s;">
                    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                </div>

                <!-- Instagram Icon -->
                <div class="falling-icon" style="left: 55%; animation-delay: 2s;">
                    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                </div>

                <!-- Book Icon -->
                <div class="falling-icon" style="left: 75%; animation-delay: 0.5s;">
                    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    </svg>
                </div>

                <!-- Telegram Icon (duplicate) -->
                <div class="falling-icon" style="left: 25%; animation-delay: 1.5s;">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.58 7.44c-.12.539-.43.67-.87.42l-2.4-1.77-1.16 1.12c-.13.13-.24.24-.49.24l.17-2.43 4.33-3.91c.19-.17-.04-.26-.29-.09l-5.35 3.37-2.3-.72c-.5-.16-.51-.5.1-.74l9.0-3.47c.42-.16.78.1.65.72z"/>
                    </svg>
                </div>

                <!-- YouTube Icon (duplicate) -->
                <div class="falling-icon" style="left: 45%; animation-delay: 0.8s;">
                    <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                </div>

                <!-- Instagram Icon (duplicate) -->
                <div class="falling-icon" style="left: 65%; animation-delay: 2.2s;">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                </div>

                <!-- Book Icon (duplicate) -->
                <div class="falling-icon" style="left: 85%; animation-delay: 1.2s;">
                    <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    </svg>
                </div>

                <!-- Telegram Icon (extra) -->
                <div class="falling-icon" style="left: 5%; animation-delay: 0.3s;">
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.58 7.44c-.12.539-.43.67-.87.42l-2.4-1.77-1.16 1.12c-.13.13-.24.24-.49.24l.17-2.43 4.33-3.91c.19-.17-.04-.26-.29-.09l-5.35 3.37-2.3-.72c-.5-.16-.51-.5.1-.74l9.0-3.47c.42-.16.78.1.65.72z"/>
                    </svg>
                </div>

                <!-- Book Icon (extra) -->
                <div class="falling-icon" style="left: 95%; animation-delay: 1.8s;">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                    </svg>
                </div>
            </div>
            <div class="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
                <div class="mb-4 sm:mb-6 md:mb-8">
                    <h1 class="text-3xl xs:text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                        <span class="block" ref="mainTitle">IELTS HUB</span>
                        <span class="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-blue-100 mt-2 sm:mt-4 block" ref="subTitle">Eng yaxshi test platformasi</span>
                    </h1>
                    <p class="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-100 mb-6 sm:mb-8 max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl mx-auto">
                        IELTS va SAT imtihonlariga professional tayyorgarlik. Real vaqtda natijalar va batafsil tahlillar.
                    </p>
                </div>

                <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center mb-8 sm:mb-10 md:mb-12">
                    <button class="group relative px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 py-2 xs:py-3 sm:py-4 md:py-5 bg-white text-blue-600 font-semibold rounded-full text-sm xs:text-base sm:text-lg md:text-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
                        <span class="relative z-10">Boshlash</span>
                        <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                    <router-link to="/demo-test" class="px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 py-2 xs:py-3 sm:py-4 md:py-5 border-2 border-white text-white font-semibold rounded-full text-sm xs:text-base sm:text-lg md:text-xl hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                        Demo ko'rish
                    </router-link>
                </div>

                <!-- Stats -->
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-2 md:gap-8 mt-12 sm:mt-8 md:mt-20">
                    <div class="text-center">
                        <div class="text-2xl xs:text-3xl sm:text-lg md:text-5xl font-bold text-white mb-1 sm:mb-1 md:mb-3">
                            <span class="counter-animation" ref="userCount">0</span>K+
                        </div>
                        <div class="text-blue-100 text-sm xs:text-base sm:text-xs md:text-lg">Foydalanuvchilar</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl xs:text-3xl sm:text-lg md:text-5xl font-bold text-white mb-1 sm:mb-1 md:mb-3">
                            <span class="counter-animation" ref="successRate">0</span>%
                        </div>
                        <div class="text-blue-100 text-sm xs:text-base sm:text-xs md:text-lg">Muvaffaqiyat darajasi</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl xs:text-3xl sm:text-lg md:text-5xl font-bold text-white mb-1 sm:mb-1 md:mb-3">
                            <span class="counter-animation" ref="support">0</span>/7
                        </div>
                        <div class="text-blue-100 text-sm xs:text-base sm:text-xs md:text-lg">Qo'llab-quvvatlash</div>
                    </div>
                </div>
            </div>

            <!-- Floating elements -->
            <div class="absolute bottom-10 left-10 animate-bounce">
                <AcademicCapIcon class="w-12 h-12 text-white/30" />
            </div>
            <div class="absolute top-20 right-20 animate-bounce delay-1000">
                <DocumentCheckIcon class="w-10 h-10 text-white/20" />
            </div>
        </div>

        <!-- Modern Tests Section -->
        <div id="tests" class="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
            <div class="max-w-7xl mx-auto px-4">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Testlar</h2>
                    <p class="text-xl text-gray-600 max-w-2xl mx-auto">IELTS imtihoniga professional tayyorgarlik platformasi</p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-2xl mx-auto">
                    <!-- IELTS Card -->
                    <div class="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                        <div class="relative p-8">
                            <div class="flex items-center justify-between mb-6">
                                <div class="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl shadow-lg">
                                    <ChatBubbleLeftRightIcon class="w-8 h-8 text-white" />
                                </div>
                                <div class="text-right">
                                    <div class="text-2xl font-bold text-gray-900">IELTS</div>
                                    <div class="text-sm text-gray-500">International English</div>
                                </div>
                            </div>

                            <p class="text-gray-600 mb-6 leading-relaxed">
                                Reading, Listening, Writing va Speaking bo'limlarini professional darajada o'rganing. Real imtihon sharoitlarida mashq qiling.
                            </p>

                            <div class="space-y-3 mb-8">
                                <div class="flex items-center gap-3">
                                    <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span class="text-gray-700">Real vaqt o'lchovi</span>
                                </div>
                                <div class="flex items-center gap-3">
                                    <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span class="text-gray-700">Avtomatik ball hisoblash</span>
                                </div>
                                <div class="flex items-center gap-3">
                                    <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span class="text-gray-700">Batafsil tahlil va tavsiyalar</span>
                                </div>
                                <div class="flex items-center gap-3">
                                    <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span class="text-gray-700">Audio va video materiallar</span>
                                </div>
                            </div>

                            <router-link to="/ielts" class="inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                IELTS boshlash
                                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                                </svg>
                            </router-link>
                        </div>
                    </div>


                </div>
            </div>
        </div>

        <!-- Modern Why Us Section -->
        <div id="about" class="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
            <div class="max-w-7xl mx-auto px-4">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nega biz?</h2>
                    <p class="text-xl text-gray-600 max-w-2xl mx-auto">Eng yaxshi test platformasi bo'lishimizning sabablari</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Quality Tests -->
                    <div class="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-2xl"></div>
                        <div class="flex flex-col items-center text-center">
                            <div class="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                                <DocumentCheckIcon class="w-8 h-8 text-white" />
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 mb-3">Sifatli testlar</h3>
                            <p class="text-gray-600 leading-relaxed">Eng yaxshi sifatli testlar va professional tayyorgarlik materiallari</p>
                        </div>
                    </div>

                    <!-- Fast Results -->
                    <div class="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-teal-600 rounded-t-2xl"></div>
                        <div class="flex flex-col items-center text-center">
                            <div class="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                                <ClockIcon class="w-8 h-8 text-white" />
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 mb-3">Tezkor natija</h3>
                            <p class="text-gray-600 leading-relaxed">Natijalarni darhol oling va batafsil tahlillarni ko'ring</p>
                        </div>
                    </div>

                    <!-- User Friendly -->
                    <div class="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-t-2xl"></div>
                        <div class="flex flex-col items-center text-center">
                            <div class="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                                <UserCircleIcon class="w-8 h-8 text-white" />
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 mb-3">Qulay interfeys</h3>
                            <p class="text-gray-600 leading-relaxed">Zamonaviy va tushunarli interfeys bilan oson foydalaning</p>
                        </div>
                    </div>

                    <!-- Expert Support -->
                    <div class="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-600 rounded-t-2xl"></div>
                        <div class="flex flex-col items-center text-center">
                            <div class="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                                <AcademicCapIcon class="w-8 h-8 text-white" />
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 mb-3">Mutaxassis yordami</h3>
                            <p class="text-gray-600 leading-relaxed">Tajribali o'qituvchilar va mutaxassislar tomonidan qo'llab-quvvatlash</p>
                        </div>
                    </div>

                    <!-- Progress Tracking -->
                    <div class="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-t-2xl"></div>
                        <div class="flex flex-col items-center text-center">
                            <div class="bg-gradient-to-br from-indigo-500 to-indigo-600 p-4 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 mb-3">Progress kuzatish</h3>
                            <p class="text-gray-600 leading-relaxed">O'z rivojlanishingizni kuzatib boring va maqsadlaringizga erishing</p>
                        </div>
                    </div>

                    <!-- Mobile Access -->
                    <div class="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-green-600 rounded-t-2xl"></div>
                        <div class="flex flex-col items-center text-center">
                            <div class="bg-gradient-to-br from-teal-500 to-teal-600 p-4 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 mb-3">Mobil qulaylik</h3>
                            <p class="text-gray-600 leading-relaxed">Har qanday qurilmadan foydalanib, istalgan joyda o'qish</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modern How It Works Section -->
        <div id="how-it-works" class="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
            <div class="max-w-7xl mx-auto px-4">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Sayt qanday ishlaydi?</h2>
                    <p class="text-xl text-gray-600 max-w-2xl mx-auto">Oddiy 3 qadamda professional tayyorgarlik</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <!-- Step 1 -->
                    <div class="relative">
                        <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div class="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full text-white font-bold text-2xl mb-6 mx-auto">
                                1
                            </div>
                            <div class="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl shadow-lg mb-6 overflow-hidden">
                                <AcademicCapIcon class="w-8 h-8 text-white animate-slide-x" />
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 mb-4 text-center">Imtihonni tanlang</h3>
                            <p class="text-gray-600 text-center leading-relaxed">IELTS bo'limini tanlab, o'zingizga mos parametrlarni belgilang.</p>
                        </div>
                        <!-- Arrow for desktop -->
                        <div class="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                            <svg class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                            </svg>
                        </div>
                    </div>

                    <!-- Step 2 -->
                    <div class="relative">
                        <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div class="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full text-white font-bold text-2xl mb-6 mx-auto">
                                2
                            </div>
                            <div class="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-2xl shadow-lg mb-6 overflow-hidden">
                                <ClockIcon class="w-8 h-8 text-white animate-slide-x" />
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 mb-4 text-center">Imtihonni topshiring</h3>
                            <p class="text-gray-600 text-center leading-relaxed">Real vaqt rejimida topshiring, kerak bo'lsa pauza qiling va davom eting.</p>
                        </div>
                        <!-- Arrow for desktop -->
                        <div class="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                            <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                            </svg>
                        </div>
                    </div>

                    <!-- Step 3 -->
                    <div class="relative">
                        <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div class="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full text-white font-bold text-2xl mb-6 mx-auto">
                                3
                            </div>
                            <div class="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-2xl shadow-lg mb-6 overflow-hidden">
                                <DocumentCheckIcon class="w-8 h-8 text-white animate-slide-x" />
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 mb-4 text-center">Natijani oling</h3>
                            <p class="text-gray-600 text-center leading-relaxed">Avtomatik ball, xatolar tahlili va keyingi tavsiyalarni oling.</p>
                        </div>
                    </div>
                </div>

                <!-- Demo Video Section -->
                <div class="text-center">
                    <h3 class="text-2xl font-bold text-gray-900 mb-8">Platforma demo</h3>
                    <div class="max-w-4xl mx-auto">
                        <div class="relative rounded-2xl overflow-hidden shadow-2xl">
                            <div class="w-full h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                              <div class="text-center text-white">
                                <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <h3 class="text-xl font-bold mb-2">IELTS Tayyorgarlik</h3>
                                <p class="text-blue-100">Professional video materiallar</p>
                              </div>
                            </div>
                            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modern Reviews Section -->
        <div id="reviews" class="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
            <div class="max-w-7xl mx-auto px-4">
                <div class="text-center mb-16">
                    <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Foydalanuvchilar fikrlari</h2>
                    <p class="text-xl text-gray-600 max-w-2xl mx-auto">Sayt va testlar haqida foydalanuvchilarimiz fikrlari</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    <!-- Review Card 1 -->
                    <div class="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                        <div class="relative p-6 md:p-8">
                            <div class="flex items-center mb-4 md:mb-6">
                                <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                                    <UserCircleIcon class="w-6 h-6 md:w-8 md:h-8 text-white" />
                                </div>
                                <div>
                                    <h4 class="font-bold text-gray-900 text-sm md:text-base">Aziza Karimova</h4>
                                    <div class="flex text-yellow-400 mt-1">
                                        <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                                    </div>
                                </div>
                            </div>
                            <p class="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">
                                "IELTS testlari juda sifatli va haqiqiy imtihonlarga o'xshash edi! Natijam yaxshilandi."
                            </p>
                            <div class="text-xs md:text-sm text-gray-500">2 kun oldin</div>
                        </div>
                    </div>

                    <!-- Review Card 2 -->
                    <div class="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                        <div class="relative p-6 md:p-8">
                            <div class="flex items-center mb-4 md:mb-6">
                                <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-4">
                                    <UserCircleIcon class="w-6 h-6 md:w-8 md:h-8 text-white" />
                                </div>
                                <div>
                                    <h4 class="font-bold text-gray-900 text-sm md:text-base">Sardor Toshmatov</h4>
                                    <div class="flex text-yellow-400 mt-1">
                                        <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                                    </div>
                                </div>
                            </div>
                            <p class="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">
                                "IELTS Reading bo'limida ko'p yaxshilandi. Platforma juda qulay va natijalar tez!"
                            </p>
                            <div class="text-xs md:text-sm text-gray-500">5 kun oldin</div>
                        </div>
                    </div>

                    <!-- Review Card 3 -->
                    <div class="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                        <div class="relative p-6 md:p-8">
                            <div class="flex items-center mb-4 md:mb-6">
                                <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                                    <UserCircleIcon class="w-6 h-6 md:w-8 md:h-8 text-white" />
                                </div>
                                <div>
                                    <h4 class="font-bold text-gray-900 text-sm md:text-base">Malika Yusupova</h4>
                                    <div class="flex text-yellow-400 mt-1">
                                        <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
                                    </div>
                                </div>
                            </div>
                            <p class="text-gray-600 mb-4 leading-relaxed text-sm md:text-base">
                                "Listening bo'limi juda yaxshi ishlangan. Audio sifatli va savollar aniq!"
                            </p>
                            <div class="text-xs md:text-sm text-gray-500">1 hafta oldin</div>
                        </div>
                    </div>
                </div>

                <!-- View All Button -->
                <div class="text-center">
                    <router-link to="/reviews" class="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        Hammasini ko'rish
                        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                        </svg>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { gsap } from "gsap"
import {
    AcademicCapIcon,
    ChatBubbleLeftRightIcon,
    CalculatorIcon,
    DocumentCheckIcon,
    ClockIcon,
    UserCircleIcon
} from '@heroicons/vue/24/outline'

const laptop = ref(null)
const certificate = ref(null)
const cap = ref(null)
const heroImage = ref(null)
const userCount = ref(null)
const successRate = ref(null)
const support = ref(null)
const mainTitle = ref(null)
const subTitle = ref(null)

onMounted(() => {
    // Hero image animatsiyasi
    gsap.from(heroImage.value, {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    })

    // Laptop animatsiyasi
    gsap.from(laptop.value, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power2.out"
    })

    // Certificate animatsiyasi
    gsap.from(certificate.value, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: "power2.out"
    })

    // Cap animatsiyasi
    gsap.from(cap.value, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.9,
        ease: "power2.out"
    })

    // Number counter animations
    setTimeout(() => {
        animateNumber(userCount.value, 0, 10, 2000)
        animateNumber(successRate.value, 0, 95, 2000)
        animateNumber(support.value, 0, 24, 2000)
    }, 1000)

    // Letter animations
    setTimeout(() => {
        animateLetters(mainTitle.value, 'IELTS HUB')
        animateLetters(subTitle.value, 'Eng yaxshi test platformasi')
    }, 500)
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

<style lang="scss" scoped>
.button_blue {
    @apply bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 md:py-3 px-6 md:px-8 rounded-lg transition-colors text-sm md:text-base;
}

.icon {
    @apply flex items-center justify-center;
}

/* Custom icon animations for how it works section */
@keyframes slide-x {
    0% {
        transform: translateX(-100%);
    }
    50% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(-100%);
    }
}

#how-it-works .animate-slide-x {
    animation: slide-x 3s ease-in-out infinite;
}

/* Different animation speeds for variety */
#how-it-works .animate-slide-x:nth-of-type(1) {
    animation-duration: 4s;
}

#how-it-works .animate-slide-x:nth-of-type(2) {
    animation-duration: 3s;
}

#how-it-works .animate-slide-x:nth-of-type(3) {
    animation-duration: 5s;
}

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
    animation: fallAndStay 8s ease-out forwards;
    opacity: 0;
    transition: all 0.3s ease;
    cursor: pointer;
    pointer-events: auto;
}

.falling-icon:hover {
    opacity: 1;
    transform: scale(1.2);
}

@keyframes fallAndStay {
    0% {
        transform: translateY(-50px) rotate(0deg);
        opacity: 0;
    }
    15% {
        opacity: 1;
    }
    80% {
        opacity: 1;
    }
    100% {
        transform: translateY(calc(80vh - 50px)) rotate(180deg);
        opacity: 1;
    }
}

/* Different falling speeds for variety */
.falling-icon:nth-child(1) { animation-duration: 6s; }
.falling-icon:nth-child(2) { animation-duration: 8s; }
.falling-icon:nth-child(3) { animation-duration: 7s; }
.falling-icon:nth-child(4) { animation-duration: 9s; }
.falling-icon:nth-child(5) { animation-duration: 6.5s; }
.falling-icon:nth-child(6) { animation-duration: 7.5s; }
.falling-icon:nth-child(7) { animation-duration: 8.5s; }
.falling-icon:nth-child(8) { animation-duration: 6.8s; }
.falling-icon:nth-child(9) { animation-duration: 7.8s; }
.falling-icon:nth-child(10) { animation-duration: 8.8s; }


</style>

