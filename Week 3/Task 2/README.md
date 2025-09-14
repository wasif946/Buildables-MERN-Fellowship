# Week 3 – Task 2: React Context Optimization

## 📌 Project Overview
This project demonstrates **React Context optimization** to ensure that there are **no excessive re-renders when contexts change**.  
It uses **React Router**, **AuthContext**, **ThemeContext**, and a custom `useRenderCount` hook to visualize render behavior.

## ✅ Acceptance Criteria
- No excessive re-renders when contexts change.  
- Theme toggle works and updates the UI appearance (light/dark).  
- Users list is fetched and displayed dynamically.  
- Navigation between **Home** and **Users** pages is smooth without unnecessary re-renders.  

## 🚀 Features
- **Auth Context** → Provides authentication state.  
- **Theme Context** → Supports light/dark themes with a toggle button.  
- **Custom Hook – `useRenderCount`** → Tracks how many times a component re-renders.  
- **Users List** → Fetches and displays users’ `name` and `email` using `jsonplaceholder.typicode.com/users`.  
- **Optimized Rendering** → Components only re-render when their relevant state/context changes.  

## 🛠️ Tech Stack
- React 18  
- React Router DOM v6  
- Context API  
- Vite (build tool)  

## 📂 Project Structure
src/
│── components/
│ ├── DataCard.jsx
│ ├── DataList.jsx
│
│── contexts/
│ ├── AuthContext.jsx
│ ├── ThemeContext.jsx
│ ├── RenderProfiler.jsx
│
│── hooks/
│ ├── useRenderCount.js
│
│── router.jsx
│── main.jsx
│── index.css
│── styles.css


## 📸 How It Works
1. Launch the app → Home Page (`/`) displays a welcome message.  
2. Navigate to **Users Page** (`/users`) → Fetches and displays user list (name + email).  
3. Toggle **Theme Button** → Switch between light/dark themes.  
4. Use **React DevTools or console logs from `useRenderCount`** → Confirm no excessive re-renders occur.  

## ▶️ Run Locally
Clone the repository and run the following commands:

# Install dependencies
npm install

# Run development server
npm run dev

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
