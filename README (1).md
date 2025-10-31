# 🚀 Joineazy Internship Task – 1

### 🎯 A modern, interactive dashboard for Students & Admins  
Built with **React (Vite)**, **Tailwind CSS**, and **Framer Motion**, this project simulates a professional assignment submission platform with an elegant, gamified UI.

---

## 🧩 Overview

The **Joineazy Dashboard** is designed to manage and visualize assignment progress in a clear and interactive way.

- 👨‍🎓 **Student Dashboard** → View assignments, submit work, and track progress dynamically.  
- 👨‍🏫 **Admin Dashboard** → Create assignments, attach Google Drive links, and track overall completion stats.  
- 🎨 **UI/UX Focus** → Built with smooth animations, glassmorphism design, and gradient-driven visuals.  

---

## ⚙️ Project Setup Instructions

Follow these steps to run the project locally:

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/Joineazy-Task1.git
cd Joineazy-Task1
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Start the development server
```bash
npm run dev
```

### 4️⃣ Open in your browser  
Navigate to the provided **localhost URL** (usually `http://localhost:5173`).

---

## 🏗️ Architecture Overview

The project follows a **component-based modular structure** with separate layers for UI, data, and logic.

```plaintext
JoineazyTask1/
│
├── src/
│   ├── components/         # Reusable UI components (ProgressBar, AssignmentCard, Header)
│   ├── pages/              # Page-level views (Login, StudentDashboard, AdminDashboard)
│   ├── data/               # Local mock database and helper functions (mockData.js)
│   ├── assets/             # Optional static assets (logos, icons)
│   ├── App.jsx             # Root router and layout configuration
│   ├── main.jsx            # App entry point (Vite)
│   └── index.css           # Global styles + animations
│
├── package.json            # Project dependencies and scripts
├── vite.config.js          # Vite configuration file
├── README.md               # Project documentation (this file)
└── index.html              # Base HTML template
```

---

## 🧱 Component Structure

| Component | Description |
|------------|-------------|
| **Login.jsx** | Interactive login card with animated gradient background, secure role-based navigation (Admin / Student). |
| **StudentDashboard.jsx** | Displays overall progress (animated circular bar), motivational badge system (Beginner → Pro), and assignment cards. |
| **AdminDashboard.jsx** | Allows creation of new assignments, Drive link attachments, and shows student progress analytics. |
| **AssignmentCard.jsx** | Dynamic card for each assignment with status display, confirmation dialog, and drive link integration. |
| **ProgressBar.jsx** | Animated circular progress indicator built with SVG and Framer Motion. |
| **Header.jsx** | Floating gradient navbar with animated title (“Joineazy”) and role navigation. |
| **mockData.js** | LocalStorage-based mock database for assignments, users, and submissions (simulates backend behavior). |

---

## 🧠 Design Decisions

1. **Vite + React** → For blazing-fast dev experience and modular component structure.  
2. **Tailwind CSS** → Enables rapid and consistent styling with responsive design.  
3. **Framer Motion** → Adds fluid animations for a polished, professional look.  
4. **Glassmorphism UI** → Transparent gradient layers for modern aesthetics.  
5. **LocalStorage Mock Backend** → Simulates persistent user data without external DBs.  
6. **Gamification Elements** → Level badges and dynamic progress to encourage engagement.  

---

## ✨ Key Features

- 🔐 Role-based Login (Student / Admin)
- 📊 Animated Overall Progress & Level Badge
- 🧩 Modular Components & Clean Architecture
- 🔗 Google Drive Integration for Assignments
- 🎨 Interactive UI with Gradient Animations
- 💾 LocalStorage Persistence (simulated backend)
- 📱 Responsive Design (works across devices)

---

## 📦 Tech Stack

| Layer | Tools Used |
|-------|-------------|
| **Frontend** | React (Vite) |
| **Styling** | Tailwind CSS |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **State/Storage** | LocalStorage (mock backend) |

---

## 🧑‍💻 Author

**Shreya Mathur**  
📧 [your-email@example.com]  
💼 GitHub: [https://github.com/your-username](https://github.com/your-username)

---

## 🏁 Future Enhancements

- 🌐 Integration with a real backend (MongoDB / Express)
- 🧠 Role-based authentication with JWT
- 📅 Calendar view for deadlines
- 📈 Enhanced analytics dashboard for admins
- 💬 Notification system for assignment updates

---

## 📸 Preview (Optional)
You can drag and drop screenshots here if you’d like to showcase the UI once deployed.

---

✅ **Now just save this file as**  
`README.md`  
in your project’s root folder → then push to GitHub:

```bash
git add README.md
git commit -m "Added README with setup and architecture overview"
git push
```
