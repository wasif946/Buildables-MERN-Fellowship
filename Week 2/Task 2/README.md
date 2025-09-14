# Advanced Todo List (Week 2 - Task 2)

This project is part of the **MERN Fellowship (Week 2 - Task 2)**.  
The objective is to build an **Advanced Todo List** application that demonstrates **optimistic UI updates**, rollback on failure, and synchronization with localStorage + a mock API.  
It also includes **unit tests** with coverage reporting.

---

## 🚀 Features
- Add, edit, and delete todos with **optimistic UI updates**.  
- **Rollback on failure** to maintain consistency when an update fails.  
- Todos persisted in **localStorage**.  
- Mock API integration for simulating server sync.  
- **Unit tests** for reducers, hooks, and components (≥ 70% coverage for core logic).  

---

## 📂 Deliverables
- Complete app source code.  
- Unit test cases (in `src/tests`).  
- Coverage report (generated via Vitest).  
- Recorded demo showing **failure rollback** in action.  

---

## ✅ Acceptance Criteria
- Optimistic flow works correctly, with rollback on failure.  
- Test coverage for **core logic** (statements/lines) is **≥ 70%**.  
- Reducers/hooks/components tested and snapshot-tested.  

---

## 🛠️ Setup & Run
Install dependencies:
npm install

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
