# 🎓 NawaEduTech - Smart Education for Everyone

![NawaEduTech](https://img.shields.io/badge/Education-Technology-purple)
![React](https://img.shields.io/badge/React-18.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)
![License](https://img.shields.io/badge/License-MIT-green)

> Modern educational platform empowering teachers and students through technology and creative learning tools.

## 🌟 Features

- **🧑‍🏫 Teachers' Tools** - Classroom planners, organizers, and Islamic-value-based educational materials
- **👨‍🎓 Students' Zone** - Computer science resources, coding materials, and study planners
- **👶 Kids' Learning** - Interactive Arabic worksheets, shapes, colors, and early learning activities
- **📚 Digital Skills Academy** - Tech literacy courses to reduce technological illiteracy
- **🛒 E-Commerce** - Smart filtering system for educational products
- **🌐 Bilingual** - Full Arabic (RTL) and English (LTR) support
- **📱 Responsive** - Works perfectly on all devices
- **🕌 Cultural Design** - Islamic geometric patterns and cultural elements

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR-USERNAME/nawaedutech.git
cd nawaedutech

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

Visit `http://localhost:5173` to see your application.

## 📦 Build & Deploy

### Build for Production

```bash
pnpm run build:prod
```

### Preview Production Build

```bash
pnpm run preview
```

### Deploy to GitHub Pages

**Quick Deploy (5 minutes):**

1. Create a GitHub repository
2. Update `vite.config.ts` - add base path:
   ```typescript
   base: '/your-repo-name/',
   ```
3. Run deployment:
   ```bash
   pnpm run deploy
   ```

📖 **Full deployment guide:** [QUICK_DEPLOY.md](../QUICK_DEPLOY.md)

## 🎨 Design System

The project uses a comprehensive design system:

- **Color Palette:**
  - `#340690` - Deep Purple (primary)
  - `#5f2cc7` - Medium Purple (secondary)
  - `#864bf5` - Light Purple (accent)
  - `#e6e3e6` - Light Gray (backgrounds)
  - `#f3b942` - Golden Yellow (highlights)

- **Typography:**
  - Almarai - Arabic text
  - Poppins - English text

- **Design Tokens:** See `docs/design-tokens.json`

## 📁 Project Structure

```
nawaedutech/
├── src/
│   ├── components/      # Reusable UI components
│   ├── contexts/        # React contexts (Language, Theme, etc.)
│   ├── pages/          # Page components
│   ├── lib/            # Utilities and helpers
│   └── App.tsx         # Main application component
├── public/             # Static assets
├── docs/               # Documentation and design specs
├── .github/
│   └── workflows/      # GitHub Actions (auto-deploy)
└── dist/               # Production build output
```

## 🌐 Pages

1. **Home** - Hero section with main navigation
2. **About** - Mission and founder information
3. **Shop** - E-commerce with smart filtering
4. **Teachers' Tools** - Professional educational resources
5. **Students' Zone** - CS and coding materials
6. **Kids' Learning** - Interactive worksheets
7. **Tech Literacy Courses** - Digital Skills Academy
8. **Contact** - Contact form and social links

## 🔧 Available Scripts

```bash
pnpm run dev          # Start development server
pnpm run build        # Build for production
pnpm run build:prod   # Build with production optimizations
pnpm run preview      # Preview production build
pnpm run lint         # Run ESLint
pnpm run deploy       # Build and deploy to GitHub Pages
```

## 🔐 Environment Variables

Create `.env.production` file:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🛠️ Tech Stack

- **Framework:** React 18.3
- **Language:** TypeScript 5.6
- **Build Tool:** Vite 6.0
- **Styling:** Tailwind CSS 3.4
- **UI Components:** Radix UI
- **Backend:** Supabase
- **Routing:** React Router 6
- **Forms:** React Hook Form + Zod
- **Icons:** Lucide React

## 📚 Documentation

- [GitHub Deployment Guide](../GITHUB_DEPLOYMENT_GUIDE.md) - Complete deployment documentation
- [Quick Deploy](../QUICK_DEPLOY.md) - 5-minute deployment guide
- [Design Specification](../docs/design-specification.md) - Complete design system
- [Content Structure](../docs/content-structure-plan.md) - Page architecture

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👩‍💻 Author

**Amina** - Computer science teacher passionate about AI and smart education

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Educational technology research from leading EdTech platforms
- Islamic design patterns and cultural elements
- Open-source community for amazing tools and libraries

---

**Built with ❤️ for teachers, students, and children worldwide**

🌐 **Live Demo:** [Coming Soon]

📧 **Contact:** [Your Email]

🔗 **Social Media:**
- Facebook: [Your Link]
- Instagram: [Your Link]
- Google Site: [Your Link]
