# 📌 Project: Responsive Web Page with Graceful Degradation and Print Stylesheet  

## 📖 Project Description  
This project demonstrates the implementation of a **responsive web page** that is accessible and usable across various devices and for printing.  
The design focuses on **graceful degradation**, ensuring the content is readable even when CSS is not applied.  

---

## ⚙️ Implementation Details  

- **Grid / Flexbox**  
  The page layout is built using **CSS Grid** and **Flexbox** to create a flexible and adaptable structure.  

- **Media Queries**  
  The layout adapts to **three different screen sizes** using `@media` queries, providing an optimal viewing experience on **mobile, tablet, and desktop** devices.  

- **CSS @supports**  
  Feature detection is implemented using the `@supports` at-rule to handle browser compatibility gracefully.  

- **Graceful Degradation**  
  A **mobile-first approach** was used. The un-styled HTML is semantically structured to be fully **readable and functional without CSS**.  

- **Print Stylesheet**  
  A dedicated `print.css` creates a clean, ink-friendly version of the page for printing.  
  - Non-essential elements (navigation, footer) are hidden.  
  - Colors are optimized for monochrome printing.  

- **Theme Switcher (Task 3)**  
  A theme switcher allows users to **toggle between light and dark themes**.  
  - Theme choice is persisted using `localStorage`.  
  - It respects the user's `prefers-color-scheme` system setting.  

- **BEM Refactoring (Task 3)**  
  CSS classes have been **refactored using the BEM (Block-Element-Modifier)** naming convention for scalability and maintainability.  

- **Modular JavaScript (Task 4)**  
  JavaScript has been refactored into a **modular structure** using ES Modules (`import/export`) to improve maintainability.  

- **Progressive Enhancement (Task 4)**  
  Features like the **theme switcher** and **filter** are layered on top of a working **HTML + CSS foundation**.  
  The site remains fully usable if JavaScript is disabled.  

- **Unit Testing (Task 4)**  
  Core logic (such as filtering) is **unit tested with Jest** to ensure reliability and correctness.  

---

## 🎨 CSS Variable Map  

| Variable Name             | Light Theme Value           | Dark Theme Value            | Description               |
|----------------------------|-----------------------------|-----------------------------|---------------------------|
| `--color-primary`         | `#0056b3`                   | `#52a7ff`                   | Main accent color         |
| `--color-secondary`       | `#004494`                   | `#65b3ff`                   | Secondary accent color    |
| `--color-background`      | `#f4f4f4`                   | `#1a1a1a`                   | Main page background      |
| `--color-card-background` | `#ffffff`                   | `#2a2a2a`                   | Card/container background |
| `--color-text`            | `#333333`                   | `#e0e0e0`                   | General text color        |
| `--color-border`          | `rgba(255,255,255,0.1)`     | `rgba(255,255,255,0.1)`     | Border color              |
| `--color-box-shadow`      | `rgba(0,0,0,0.1)`           | `rgba(0,0,0,0.5)`           | Box shadow color          |

---

## 📦 Deliverables  

- `index.html`  
- `styles.css`  
- `print.css`  
- `js/` directory containing:  
  - `app.js`  
  - `theme-switcher.js`  
  - `filter-logic.js`  
  - `utils.js`  
- `tests/` directory containing:  
  - `filter-logic.test.js`  
- `package.json`  
- `mobile.png`, `desktop.png`, `print.png`  
- `README.md` (This file)  
- `theme-demo.gif` (GIF showing theme toggle)  
- `test-results.txt` (Unit test results)  

---

## ✅ Acceptance Criteria  

- The layout **successfully adapts** at three distinct breakpoints.  
- The **print view** is clean, readable, and free of unnecessary elements.  
- **Theme toggles persist** across sessions.  
- **BEM convention** is consistently applied.  
- **CSS variables** are used instead of hardcoded colors.  
- **Modular JavaScript** is implemented correctly.  
- All **unit tests pass successfully**.  
- Core UI remains **usable without JavaScript enabled**.  

---

## 🎯 Bonus Challenge 1: CSS-only Accessible Dropdown Nav  

### 🔹 Objective  
Implement a **fully accessible dropdown navigation menu** using only **HTML + CSS**.  

### 🔹 Accessibility  
- Fully **keyboard navigable** (`Tab` and `Shift + Tab`).  
- Usable for **sighted keyboard users** and **screen reader users**.  

### 🔹 Implementation  
- Relies on the `:focus-within` pseudo-class.  
- Dropdown remains open while navigating inside links.  

---

## 🎯 Bonus Challenge 2: Programmatic Color Contrast Check  

### 🔹 Objective  
Programmatically **check and report the color contrast ratio** for accessibility compliance.  

### 🔹 Implementation  
- A function in **`theme-switcher.js`** calculates the **contrast ratio** between background and text.  
- Result is logged in the **browser console**.  
- Validates against **WCAG 2.1 AA (4.5:1)** standards.  

---

## 🎯 Bonus Challenge 3: Mutation Observer for DOM Changes  

### 🔹 Objective  
Demonstrate advanced JavaScript usage by monitoring **dynamic DOM changes**.  

### 🔹 Implementation  
- A **MutationObserver** is added to `app.js`.  
- Observes changes in the `.project-list` (e.g., additions/removals of child nodes).  
- Ensures dynamic updates (like filtering or async content) trigger **UI refresh and scripts correctly**.  

---
