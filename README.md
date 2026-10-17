# Cyberpunk 2077 — Responsive Landing Page

A responsive, single-page website inspired by the Cyberpunk 2077 universe. Built with HTML5, SCSS, and vanilla JavaScript, the project focuses on responsive layouts, modern styling, and interactive UI elements.

The website was developed as a frontend portfolio project and adapted for mobile, tablet, and desktop screens.

## 🔗 Live Demo

- **Live Website:** [Cyberpunk 2077](https://ihorkuzmenko.github.io/portfolio-cyberpunk-html-scss-js-2025/)
- **GitHub Repository:** [View Source Code](https://github.com/IhorKuzmenko/portfolio-cyberpunk-html-scss-js-2025)

## 🛠 Technologies

- **HTML5** — Semantic page structure and accessible markup
- **SCSS (Sass)** — Modular styles, variables, nesting, and media queries
- **CSS3** — Flexbox, Grid, transitions, and responsive layouts
- **JavaScript (ES6+)** — Interactive background image slider and demo form handling
- **Modern Normalize** — Consistent default styling across browsers
- **Google Fonts** — Roboto font family
- **Git & GitHub** — Version control and source code management
- **GitHub Pages** — Static website deployment

## ✨ Features

### Responsive Design

The website adapts to different screen sizes using a mobile-first approach.

Responsive layouts:

- **Mobile:** 320px – 1023px
- **Tablet:** 1024px – 1919px
- **Desktop:** 1920px and above

Flexible containers, responsive images, and CSS media queries provide consistent layouts across supported devices.

### Dynamic Background Slider

The hero section features an automatic background image slider implemented with vanilla JavaScript.

- Automatic slide transitions every 5 seconds
- Separate image sets for mobile, tablet, and desktop
- Responsive image selection based on viewport width
- Automatic image updates when switching between layout breakpoints
- No external slider libraries

### Cyberpunk 2077 Overview

A dedicated section introduces the Cyberpunk 2077 universe and includes a responsive image gallery showcasing Night City.

### Promotional Giveaway Section

A promotional section featuring Xbox Series X and PlayStation 5 imagery.

Includes:

- Name and email input fields
- Screenshot attachment field
- Personal data agreement checkbox
- Native browser form validation
- Demo submission feedback

**Note:** The giveaway form is for demonstration purposes only. No personal information or uploaded files are transmitted or stored by the application.

### HP Gaming Monitor Section

A promotional section showcasing an HP gaming monitor, including its key features and benefits.

### Game Edition Section

A section presenting the Cyberpunk 2077 game package, included content, and platform logos.

### Accessibility and SEO

- Semantic HTML5 structure
- Descriptive alternative text for images
- Accessible labels for form controls and icon links
- Keyboard focus indicators
- SEO title and meta description
- Open Graph metadata

## 📁 Project Structure

```text
portfolio-cyberpunk-html-scss-js-2025/
│
├── images/
│   ├── sprite.svg
│   └── ...
│
├── js/
│   ├── slider.js
│   └── form.js
│
├── sass/
│   ├── components/
│   │   ├── _header.scss
│   │   ├── _about.scss
│   │   ├── _drawing.scss
│   │   ├── _monitor.scss
│   │   ├── _kit.scss
│   │   ├── _footer.scss
│   │   └── _utilities.scss
│   │
│   ├── utils/
│   │   └── _variables.scss
│   │
│   ├── main.scss
│   ├── main.css
│   └── main.css.map
│
├── index.html
└── README.md
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/IhorKuzmenko/portfolio-cyberpunk-html-scss-js-2025.git
```

### 2. Navigate to the Project

```bash
cd portfolio-cyberpunk-html-scss-js-2025
```

### 3. Open the Project

Open the project folder in Visual Studio Code or another code editor.

### 4. Compile SCSS

Make sure Node.js and npm are installed.

Compile the styles using:

```bash
npx sass sass/main.scss sass/main.css
```

To automatically recompile SCSS during development:

```bash
npx sass --watch sass/main.scss:sass/main.css
```

### 5. Run the Website

Launch `index.html` using a local development server, such as the Live Server extension for Visual Studio Code.

The project does not require a JavaScript framework or backend server.

## 🎨 Styling Architecture

The project uses modular SCSS with the modern Sass module system.

Each page section has a dedicated SCSS partial, making styles easier to maintain and extend.

Shared design variables are stored in:

```text
sass/utils/_variables.scss
```

The main stylesheet imports component modules using `@use`.

## 🌐 Deployment

The project is deployed using GitHub Pages.

The website uses relative paths for assets and does not require a server-side runtime.

## 📌 Project Purpose

This project was created to practice and demonstrate:

- Responsive and adaptive web development
- Translating visual designs into functional web pages
- Semantic HTML and accessible UI development
- Modular SCSS architecture
- JavaScript DOM manipulation
- Responsive background image management
- Code refactoring and maintainability
- Git-based development workflows

## ⚠️ Disclaimer

This is an unofficial, non-commercial, fan-made portfolio project.

Cyberpunk 2077, associated trademarks, logos, and game-related assets belong to their respective owners, including CD PROJEKT RED.

This project is not affiliated with or endorsed by CD PROJEKT RED.

## 👨‍💻 Author

**Ihor Kuzmenko**

- GitHub: [IhorKuzmenko](https://github.com/IhorKuzmenko)
- Project: [Cyberpunk 2077 Landing Page](https://ihorkuzmenko.github.io/portfolio-cyberpunk-html-scss-js-2025/)
