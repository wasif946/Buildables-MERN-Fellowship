# 📌 Project: Responsive Web Page with Graceful Degradation and Print Stylesheet  

## 📖 Project Description  
This project demonstrates the implementation of a **responsive web page** that is accessible and usable across various devices and for printing.  
The design focuses on **graceful degradation**, ensuring the content is readable even when CSS is not applied.  

---

## ⚙️ Implementation Details  

- **Grid / Flexbox**  
  The page layout is built using a combination of **CSS Grid** and **Flexbox** to create a flexible and adaptable structure.  

- **Media Queries**  
  The layout adapts to **three different screen sizes** using `@media` queries, providing an optimal viewing experience on **mobile, tablet, and desktop** devices.  

- **CSS @supports**  
  Feature detection is implemented using the `@supports` at-rule to handle browser compatibility gracefully.  

- **Graceful Degradation**  
  A **mobile-first approach** was used. The un-styled HTML is semantically structured to be fully **readable and functional without CSS**.  

- **Print Stylesheet**  
  A dedicated **print.css** is used to create a clean, ink-friendly version of the page for printing.  
  - Non-essential elements (navigation, footer) are hidden.  
  - Colors are optimized for monochrome printing.  

- **Theme Switcher (Task 3)**  
  A theme switcher allows users to **toggle between light and dark themes**.  
  - Theme choice persists using `localStorage`.  
  - It respects the user's **prefers-color-scheme** system setting.  

- **BEM Refactoring (Task 3)**  
  CSS classes have been **refactored using BEM (Block-Element-Modifier)** naming convention for scalability and maintainability.  

---

## 🎨 CSS Variable Map  

| Variable Name            | Light Theme Value | Dark Theme Value | Description               |
|--------------------------|------------------|-----------------|---------------------------|
| `--color-primary`        | `#0056b3`        | `#52a7ff`       | Main accent color         |
| `--color-secondary`      | `#004494`        | `#65b3ff`       | Secondary accent color    |
| `--color-background`     | `#f4f4f4`        | `#1a1a1a`       | Main page background      |
| `--color-card-background`| `#ffffff`        | `#2a2a2a`       | Card/container background |
| `--color-text`           | `#333333`        | `#e0e0e0`       | General text color        |
| `--color-border`         | `rgba(255,255,255,0.1)` | `rgba(255,255,255,0.1)` | Border color  |
| `--color-box-shadow`     | `rgba(0,0,0,0.1)`| `rgba(0,0,0,0.5)` | Box shadow color        |

---

## 📦 Deliverables  

- `styles.css`  
- `print.css`  
- `mobile.png` (Screenshot of the mobile view)  
- `desktop.png` (Screenshot of the desktop view)  
- `print.png` (Screenshot of the print view)  
- `README.md` (This file)  
- `theme-demo.gif` (GIF showing theme toggle)  

---

## ✅ Acceptance Criteria  

- The page layout **successfully adapts** at three distinct breakpoints.  
- The **print view** is clean, readable, and free of unnecessary elements.  
- **Theme toggles persist** across sessions.  
- **BEM naming convention** is consistently applied.  
- **CSS variables** are used instead of hardcoded colors.  

---

## 🎯 Bonus Challenge: CSS-only Accessible Dropdown Nav  

### 🔹 Objective  
Implement a **fully accessible dropdown navigation menu** using only **HTML and CSS** (no JavaScript).  

### 🔹 Accessibility  
- Fully **keyboard-navigable** using `Tab` and `Shift + Tab`.  
- Usable for both **sighted keyboard users** and **screen reader users**.  

### 🔹 Implementation  
- The dropdown relies on the `:focus-within` pseudo-class.  
- The menu opens when a **focusable element** (e.g., a link) inside the menu is active.  
- The dropdown **remains open while navigating** through its links.  

---

## 🎯 Bonus Challenge: Programmatic Color Contrast Check  

### 🔹 Objective  
Programmatically **check and report the color contrast ratio** to ensure accessibility.  

### 🔹 Implementation  
- A JavaScript function has been added to **`theme-switcher.js`**.  
- It calculates the **contrast ratio** between background and text colors of the main body.  
- The result is logged in the **browser console**, indicating whether the ratio meets **WCAG 2.1 AA standard (4.5:1)**.  

---
