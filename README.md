# Piyush Patil — Full Stack Developer Portfolio & Resume

A premium, highly interactive full-stack developer portfolio and print-optimized single-page resume built with **React**, **Vite**, **Framer Motion**, and **Vanilla CSS**.

---

## 🚀 Key Features

- **Immersive Hero Section:** Floating circular profile avatar with glowing particles, custom themes (glassmorphism), and statistical milestones.
- **Dynamic Projects Grid:** Integrated filter controls for categorizing projects (MERN Stack, Machine Learning / NLP) with cards that link directly to live hosted deployments.
- **Verified Credentials:** Integrated verification flows mapping licenses & certifications to hosted PDFs in the `public` directory.
- **Print-Ready Resume:** A standalone HTML template at `/resume.html` centered and styled with media print overrides. Prints cleanly to a single-page PDF with active hyperlinks and inline SVG symbols.
- **Modern Interactions:** Implements a fluid custom cursor, particle canvas physics, and smooth theme customization panels.

---

## 🛠️ Tech Stack

- **Frontend Core:** React 19, JavaScript (ES6+)
- **Build Tooling:** Vite
- **Styling:** CSS3, Glassmorphism, Responsive Grid & Flexbox
- **Animations:** Framer Motion
- **Icons:** React Icons (Feather Icons pack)
- **PDF Compiler:** Headless Chromium Print Engine

---

## 📁 Project Structure

```
my-app/
├── public/                 # Static Assets served at root
│   ├── resume.html         # Interactive centered printable resume
│   ├── resume.pdf          # Compiled single-page PDF document
│   ├── profile.png         # Main profile image
│   ├── mern-cert.pdf       # MERN certification credential
│   ├── java-cert.pdf       # Java certification credential
│   ├── ml-nlp-cert.pdf     # ML/NLP certification credential
│   └── internship-cert.pdf # Sapphire Infocom internship credential
├── src/
│   ├── components/         # Modular layout components
│   │   ├── Navbar.jsx      # Sticky top navigation bar
│   │   ├── Home.jsx        # Landing hero section with avatar
│   │   ├── About.jsx       # Biography and interactive bash terminal
│   │   ├── Skills.jsx      # Categorized skill metrics
│   │   ├── Projects.jsx    # Projects grid linking directly to live demo URLs
│   │   ├── Certificates.jsx# Licenses & Certifications list
│   │   └── Contact.jsx     # Contact form and active social connections
│   ├── data.js             # Central configuration file for all profile information
│   ├── App.jsx             # Main routing component layout
│   └── index.css           # Design tokens, variables, and global resets
├── index.html              # HTML Entry Point
└── package.json            # Scripts & project dependencies
```

---

## ⚡ Setup & Development

### 1. Installation
Clone the repository and install the dependencies:
```bash
npm install
```

### 2. Run Locally
Start the development server:
```bash
npm run dev
```
Open `http://localhost:5173/` in your browser.

### 3. Production Build
Compile and optimize the assets for production hosting:
```bash
npm run build
```

---

## 📄 Recompiling the PDF Resume

The resume PDF is compiled using a headless browser print pipeline to eliminate browser watermarks (dates, page URLs, titles) and ensure active clickable hyperlinks inside the document:

```bash
# Windows Headless Edge compilation command:
msedge.exe --headless --disable-gpu --print-to-pdf="public/resume.pdf" --no-pdf-header-footer "public/resume.html"
```
*(Make sure to run this command from the project root if you edit `public/resume.html` to sync the compiled PDF).*
