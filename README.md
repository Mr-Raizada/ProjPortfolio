# React Portfolio - Vipul Singh

A modern, responsive portfolio website built with React, featuring an Apple-inspired minimalist design with dark/light mode toggle and smooth animations.

## 🚀 Features

- **Modern React Architecture**: Built with React 18 + Vite for optimal performance
- **Dark/Light Theme System**: Toggle between light and dark modes with persistent preferences
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Responsive Design**: Fully responsive across all device sizes
- **Interactive Components**: Filterable skills grid, expandable sections, and hover effects
- **Performance Optimized**: Code splitting and optimized build output

## 🛠 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: CSS Modules + CSS Variables
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## 📁 Project Structure

```
react-portfolio/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── Header.jsx     # Navigation with theme toggle
│   │   ├── Hero.jsx       # Hero section with animations
│   │   ├── About.jsx      # About section with expandable text
│   │   ├── Skills.jsx     # Interactive skills grid
│   │   ├── Projects.jsx   # Projects showcase
│   │   ├── Certifications.jsx # Certifications timeline
│   │   ├── Contact.jsx    # Contact form
│   │   └── Footer.jsx     # Footer component
│   ├── contexts/          # React contexts
│   │   └── ThemeContext.jsx # Theme management
│   ├── App.jsx           # Main app component
│   ├── App.css           # Global styles and utilities
│   └── index.css         # CSS variables and base styles
├── package.json
└── vite.config.js
```

## 🎨 Design System

- **Color Palette**: Apple-inspired colors with CSS variables
  - Pure White: #FFFFFF
  - Charcoal: #1D1D1F  
  - Apple Blue: #0071E3
  - Soft grays for backgrounds and borders

- **Typography**: Inter font family with proper weight hierarchy
- **Spacing**: Consistent spacing scale using CSS variables
- **Animations**: Smooth cubic-bezier transitions and fade effects

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## ✨ Key Components

### Header
- Fixed navigation with smooth scrolling
- Mobile hamburger menu
- Theme toggle button
- Active section highlighting

### Hero Section
- Typewriter-style animations
- Download resume functionality
- Smooth scroll indicators

### Skills Section
- Category filtering (Cloud, Programming, Analytics, Tools)
- Interactive skill cards with tooltips
- Proficiency bars with percentages

### About Section
- Expandable/collapsible content
- Statistics showcase
- Smooth height transitions

## 🎯 Performance Features

- **Code Splitting**: Automatic component-based code splitting
- **Lazy Loading**: Images and components load on demand
- **Optimized Build**: Vite's optimized production build
- **CSS Optimization**: Minified and compressed styles

## 🔧 Customization

To customize this portfolio:

1. Update personal information in component files
2. Modify colors in `src/index.css` CSS variables
3. Add real project data and images
4. Update social links and contact information
5. Customize animations in component files

## 📞 Contact

- LinkedIn: [https://www.linkedin.com/in/mrraizada](https://www.linkedin.com/in/mrraizada)
- GitHub: Add your GitHub profile

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ using React and modern web technologies.
