# 🎯 IELTS Preparation Platform

A modern, interactive IELTS preparation platform built with Vue.js and Tailwind CSS. This application provides comprehensive tools for IELTS test preparation including Reading, Listening, Writing sections, and a demo level assessment test.

## ✨ Features

### 📚 Test Sections
- **IELTS Reading**: 3 texts, 40 questions with real-time functionality
- **IELTS Listening**: 4 audio files, 40 questions with high-quality audio player
- **IELTS Writing**: 2 tasks with automatic grading system
- **Demo Test**: Level assessment test with 10 questions

### 🎨 Modern UI/UX
- **Responsive Design**: Works perfectly on all devices
- **Animations**: Falling icons, letter animations, number counters
- **Modern Gradients**: Beautiful color schemes throughout
- **Interactive Elements**: Hover effects, smooth transitions

### 📊 Features
- **Real-time Timer**: Countdown timer for all tests
- **Progress Tracking**: Visual progress indicators
- **Automatic Grading**: Instant results and feedback
- **Level Assessment**: Personalized recommendations based on performance

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ielts-preparation-platform.git
   cd ielts-preparation-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── assets/          # Static assets (CSS, images)
├── components/      # Reusable Vue components
├── pages/          # Main application pages
│   ├── Home.vue           # Landing page
│   ├── IELTS.vue          # IELTS overview
│   ├── IELTSReading.vue   # Reading test
│   ├── IELTSListening.vue # Listening test
│   ├── IELTSWriting.vue   # Writing test
│   ├── DemoTest.vue       # Level assessment
│   ├── Price.vue          # Pricing page
│   ├── Blogs.vue          # Blog listing
│   ├── BlogDetail.vue     # Individual blog posts
│   └── Reviews.vue        # User reviews
├── router/         # Vue Router configuration
└── stores/         # Pinia stores (if using state management)
```

## 🛠️ Technologies Used

- **Frontend Framework**: Vue.js 3 with Composition API
- **Styling**: Tailwind CSS with custom animations
- **Build Tool**: Vite
- **Router**: Vue Router 4
- **Language**: TypeScript
- **Icons**: Heroicons

## 🎯 Key Features Explained

### Demo Test
- **10 Questions**: General knowledge assessment
- **15 Minutes**: Timed test experience
- **5 Levels**: A1, A2, B1, B2, C1 based on performance
- **Personalized Recommendations**: Tailored advice for improvement

### IELTS Reading
- **3 Texts**: Academic reading materials
- **40 Questions**: Comprehensive assessment
- **Real-time Progress**: Live tracking of completion
- **Instant Results**: Immediate feedback on completion

### IELTS Listening
- **4 Audio Files**: High-quality audio content
- **40 Questions**: Listening comprehension assessment
- **Audio Player**: Built-in player with controls
- **Timer Integration**: Synchronized with test duration

### IELTS Writing
- **2 Tasks**: Task 1 (Graph Description) and Task 2 (Essay)
- **Word Counter**: Real-time word count tracking
- **Automatic Grading**: AI-powered assessment system
- **Detailed Feedback**: Comprehensive analysis of writing

## 🎨 Design System

### Color Palette
- **Primary**: Blue gradients (#3B82F6 to #8B5CF6)
- **Secondary**: Green accents (#10B981)
- **Accent**: Purple highlights (#8B5CF6)
- **Neutral**: Gray scales for text and backgrounds

### Typography
- **Headings**: Bold, large fonts for hierarchy
- **Body**: Clean, readable fonts for content
- **Interactive**: Hover states and animations

### Animations
- **Falling Icons**: Decorative background elements
- **Letter Animations**: Text appearing character by character
- **Number Counters**: Animated statistics
- **Hover Effects**: Interactive feedback

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Customization

### Adding New Tests
1. Create a new Vue component in `src/pages/`
2. Add the route in `src/router/index.ts`
3. Follow the existing test structure pattern

### Modifying Styles
- Main styles are in `src/assets/main.css`
- Tailwind configuration in `tailwind.config.js`
- Component-specific styles use scoped CSS

### Adding Animations
- Custom animations are defined in `src/assets/main.css`
- Use the existing animation classes for consistency

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Vue.js and build the project
3. Deploy with zero configuration

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

### GitHub Pages
1. Add GitHub Actions workflow for automatic deployment
2. Configure repository settings for GitHub Pages
3. Deploy from the `gh-pages` branch

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Vue.js team for the amazing framework
- Tailwind CSS for the utility-first styling
- Heroicons for the beautiful icon set
- Vite for the fast build tool

## 📞 Support

If you have any questions or need support:
- Create an issue on GitHub
- Contact the development team
- Check the documentation

---

**Made with ❤️ for IELTS students worldwide**
