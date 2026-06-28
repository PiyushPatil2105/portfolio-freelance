
# Piyush Patil — Freelance Full Stack Developer Portfolio & Resume

A premium, highly interactive client-focused freelancer portfolio and print-optimized single-page resume built with **React**, **Vite**, **Framer Motion**, and **Vanilla CSS**.

---

## 🚀 Key Features

- **Immersive Hero Section:** Floating circular profile avatar with glowing particles, custom themes (glassmorphism), and statistical milestones.
- **Freelance Services:** Showcases custom packages including MERN Stack Apps, spaCy NLP Automation, Leaflet GIS mapping, and Cloud DevOps setup.
- **Development Process Timeline:** Interactive step-by-step workflow (Discovery -> Mockups -> Coding Demos -> QA Launch) to establish client trust.
- **Case Study Modals:** Replaces dry project links with details overlays outlining the **Problem**, **Technical Solution**, and **Business Impact** for each project.
- **Project Planner Form (Double-Layered Contact):** Upgraded inquiry form with services dropdowns and estimated budgets in Indian Rupees (₹1,000 - ₹8,000+).
- **Email & WhatsApp Integration:** Integrates **Web3Forms** to deliver planner requests directly to your email, and instantly redirects clients to WhatsApp with a pre-filled structured project brief.
- **FAQ Accordion:** Interactive slide-toggle accordion to address typical questions (NDAs, payment milestones, support).
- **Print-Ready Resume:** A standalone HTML template at `/resume.html` styled with media print overrides. Prints cleanly to a single-page PDF (`public/resume-freelance.pdf`) with active hyperlinks and inline SVG symbols.
- **Modern Interactions:** Implements a fluid custom cursor, particle canvas physics, and smooth theme customization panels.

---

## 🛠️ Tech Stack

- **Frontend Core:** React 19, JavaScript (ES6+)
- **Build Tooling:** Vite
- **Styling:** CSS3, Glassmorphism, Responsive Grid & Flexbox
- **Animations:** Framer Motion
- **Icons:** React Icons (Feather Icons, Font Awesome)
- **Email API:** Web3Forms API
- **PDF Compiler:** Headless Chromium Print Engine

---

## 📁 Project Structure

```
my-app/
├── public/                 # Static Assets served at root
│   ├── resume.html         # Interactive centered printable resume
│   ├── resume-freelance.pdf# Compiled freelance PDF document
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
│   │   ├── Services.jsx    # Freelance services and value cards [NEW]
│   │   ├── Skills.jsx      # Categorized skill metrics
│   │   ├── Projects.jsx    # Case study modals with Problem/Solution/Impact details
│   │   ├── Workflow.jsx    # Freelance development process timeline [NEW]
│   │   ├── Certificates.jsx# Licenses & Certifications list
│   │   ├── FAQ.jsx         # Interactive accordion for client inquiries [NEW]
│   │   └── Contact.jsx     # Project Planner form, WhatsApp bridge, and contact details
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

### 2. Configure Email Notifications (Web3Forms)
To receive project inquiries directly in your email inbox:
1. Go to [Web3Forms](https://web3forms.com/) and enter your email address (`piyushbpatil21@gmail.com`).
2. Copy the free access key emailed to you.
3. Open `src/components/Contact.jsx` and replace `"YOUR_WEB3FORMS_ACCESS_KEY_HERE"` at line 14 with your key.

### 3. Run Locally
Start the development server:
```bash
npm run dev
```
Open the local URL (usually `http://localhost:5173/`) in your browser.

### 4. Production Build
Compile and optimize the assets for production hosting (Vercel, Netlify, Render):
```bash
npm run build
```

---

## 📄 Recompiling the PDF Resume

The resume PDF is compiled using a headless browser print pipeline to eliminate browser watermarks (dates, page URLs, titles) and ensure active clickable hyperlinks inside the document:

```bash
# Windows Headless Edge compilation command:
msedge.exe --headless --disable-gpu --print-to-pdf="public/resume-freelance.pdf" --no-pdf-header-footer "public/resume.html"
```
*(Make sure to run this command from the project root if you edit `public/resume.html` to sync the compiled PDF).*
