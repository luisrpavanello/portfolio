# Portfolio - Modern Developer Portfolio

**Portfolio** is a sleek, responsive personal portfolio website built with **React, TypeScript, Vite, and Tailwind CSS**, showcasing professional work, skills, and contact information.

## 🚀 Technologies Used

### Core Stack
- **React** (v18+)
- **TypeScript**
- **Vite** (Build Tool)
- **Tailwind CSS** (Styling)
- **Framer Motion** (Animations - based on AnimatePresence component)

### Tooling
- **ESLint** (Code quality)
- **PostCSS** (CSS processing)
- **Git** (Version control)

## 📂 Project Structure

```
portfolio/
├── public/               # Static assets
│   ├── images/           # Portfolio images
│   └── pdf/             # Downloadable resume
├── src/
│   ├── components/       # Reusable components
│   │   ├── AnimatePresence.tsx  # Animation wrapper
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── SectionTitle.tsx
│   ├── sections/         # Page sections
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Projects.tsx
│   │   └── Resume.tsx
│   ├── App.tsx           # Main application
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── tailwind.config.js    # Tailwind configuration
└── vite.config.ts        # Vite configuration
```

## 🛠️ Installation & Usage

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/luisrpavanello/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open: [http://localhost:5173](http://localhost:5173)

4. Build for production:
   ```bash
   npm run build
   ```

## ✨ Features

- **Responsive Design**: Works on all device sizes
- **Modern Animations**: Smooth transitions between sections
- **PDF Resume**: Downloadable resume in PDF format
- **Contact Form**: Easy way for visitors to reach out
- **Project Showcase**: Highlight your best work
- **Fast Performance**: Built with Vite for optimal speed

## 📄 License

MIT License - See [LICENSE](LICENSE) file.

---

Developed with by **[Luis Pavanello](https://github.com/luisrpavanello)**

---

### 📌 Notes
- Easily customizable by editing the Tailwind config
- Add your own projects in the Projects section
- Update resume PDF in the public/pdf folder

🔧 **Contributions welcome!** Open an issue or submit a PR.