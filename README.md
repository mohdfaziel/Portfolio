# 🌟 Portfolio Website - Mohd Faziel

<div align="center">
  <img src="https://faziel.vercel.app/fevicon.png" alt="Portfolio Logo" width="80" height="80" />
  
  ### Modern • Interactive • AI-Powered Portfolio
  
  [![Live Demo](https://img.shields.io/badge/Live%20Demo-faziel.vercel.app-blue?style=for-the-badge&logo=vercel)](https://faziel.vercel.app/)
  [![GitHub](https://img.shields.io/badge/GitHub-Portfolio--New-black?style=for-the-badge&logo=github)](https://github.com/mohdfaziel/Portfolio-New)
  [![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.14-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
</div>

---

## 🚀 Overview

A cutting-edge, responsive portfolio website showcasing the skills, projects, and experience of **Mohd Faziel**, a passionate Full-Stack Developer. Built with modern web technologies and featuring an **AI-powered chatbot (FazBot)** for interactive user engagement.

### ✨ Key Highlights

- 🤖 **AI-Powered Chatbot** - Interactive FazBot using Google's Gemini AI
- 🎨 **Modern UI/UX** - Sleek design with smooth animations
- 📱 **Fully Responsive** - Optimized for all devices
- ⚡ **Performance Optimized** - Built with Vite for lightning-fast loading
- 🔍 **SEO Optimized** - Enhanced visibility with structured metadata
- 🎭 **Animated Components** - Engaging Framer Motion animations

---

## 🛠️ Tech Stack

### Core Technologies
- **Frontend Framework:** React 18.3.1
- **Build Tool:** Vite 5.4.10
- **Styling:** Tailwind CSS 3.4.14
- **Animation:** Framer Motion 11.11.11
- **AI Integration:** Google Generative AI 0.24.1

### Libraries & Tools
- **Icons:** React Icons 5.3.0, Tabler Icons
- **Fonts:** Poppins, Inter (via Fontsource)
- **Animation:** React Spring, Lottie React
- **Routing:** React Router DOM 6.28.0
- **SEO:** React Helmet Async 2.0.5
- **Effects:** React Simple Typewriter

### Development Tools
- **Linting:** ESLint 9.13.0
- **CSS Processing:** PostCSS, Autoprefixer
- **Version Control:** Git

---

## 🏗️ Project Structure

```
src/
├── Components/
│   ├── About/                 # About section with qualifications
│   ├── Certifications/        # Certificates and achievements
│   ├── FazBot/               # AI chatbot implementation
│   │   ├── Bot.jsx           # Main chatbot component
│   │   ├── Avatar.jsx        # Animated avatar
│   │   └── personalData.js   # AI training data
│   ├── Home/                 # Landing section
│   ├── Nav/                  # Navigation components
│   ├── Projects/             # Project showcase
│   │   ├── Images/           # Project screenshots
│   │   └── Logos/            # Project logos
│   ├── SEO/                  # SEO optimization
│   └── Skills/               # Technical skills display
├── assets/                   # Static assets
├── Framer/                   # Animation utilities
├── styles/                   # Global styles
└── utils/                    # Utility components
```

---

## 🌟 Features

### 🤖 FazBot - AI Assistant
- **Context-Aware Conversations** - Maintains chat history during sessions
- **Personal Information** - Knows about Faziel's background, skills, and projects
- **Natural Interactions** - Casual, friendly conversation style
- **Smart Responses** - Handles greetings, questions, and portfolio inquiries

### 📋 Sections
- **🏠 Home** - Hero section with animated introduction
- **👨‍💻 About** - Personal background and educational qualifications
- **🚀 Projects** - Showcase of 5+ development projects
- **⚡ Skills** - Technical expertise and tools
- **🏆 Certifications** - Professional certifications and achievements

### 🎯 Project Showcase
1. **RoyNect** - Full-stack e-commerce platform (React, Firebase, Razorpay)
2. **HIV Quest** - Educational platform with gamification (React, TypeScript)
3. **Portfolio** - This very website (React, Tailwind, Framer Motion)
4. **Blog WebApp** - Content management system (React, Appwrite)
5. **Aatiqa Bakes** - Bakery website UI (React, Tailwind, Framer Motion)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Google Gemini API key (for FazBot)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mohdfaziel/Portfolio-New.git
   cd Portfolio-New
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file in root directory
   VITE_API=your_google_gemini_api_key_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

---

## 🔧 Configuration

### Environment Variables
```env
VITE_API=your_google_gemini_api_key
```

### Tailwind Configuration
Custom theme with branded colors:
- **dark1:** #252734
- **dark2:** #333646
- **main:** #FFAF29 (Brand yellow)
- **active:** #FFFFFF
- **unactive:** #8E94A4

---

## 🎨 Design Features

### Color Scheme
- **Primary:** Dark theme with yellow accents
- **Typography:** Poppins font family
- **Layout:** Clean, modern, grid-based design

### Animations
- **Fade-in effects** on scroll
- **Smooth transitions** between sections
- **Interactive hover states**
- **Animated background elements**

### Responsiveness
- **Mobile-first** approach
- **Breakpoints:** sm, md, lg, xl
- **Flexible layouts** for all screen sizes

---

## 🤖 FazBot Integration

### Features
- Uses Google's Gemini AI for natural language processing
- Maintains conversation context within browser session
- Trained on personal data for accurate responses
- Handles both casual chat and portfolio inquiries

### Implementation
```javascript
// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Start chat with context
const chat = model.startChat({
  history: [
    {
      role: "user",
      parts: [{ text: PersonalData }],
    },
    {
      role: "model", 
      parts: [{ text: "Got it, I'll remember this." }],
    },
  ],
});
```

---

## 📊 Performance Optimizations

- **Vite** for fast build times and hot module replacement
- **Lazy loading** for images and components
- **Font optimization** with preloading
- **Code splitting** for smaller bundle sizes
- **SEO optimization** with structured data

---

## 🔍 SEO Features

- **Dynamic meta tags** with React Helmet
- **Structured data** for better search engine understanding
- **Semantic HTML** with proper ARIA labels
- **Optimized images** with alt text
- **Sitemap** and robots.txt included

---

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

---

## 🚀 Deployment

The portfolio is deployed on **Vercel** with automatic deployments from the main branch.

### Deploy Your Own
1. Fork this repository
2. Connect to Vercel/Netlify
3. Add environment variables
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mohdfaziel/Portfolio-New)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Developer

**Mohd Faziel**
- 🌐 Portfolio: [faziel.vercel.app](https://faziel.vercel.app/)
- 💼 LinkedIn: [mohdfaziel](https://www.linkedin.com/in/mohdfaziel/)
- 🐙 GitHub: [mohdfaziel](https://github.com/mohdfaziel)
- 📧 Email: mohdfazel969@gmail.com

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!

---

<div align="center">
  <p>Made with ❤️ by Mohd Faziel</p>
  <p>© 2024 - Present. All rights reserved.</p>
</div>
