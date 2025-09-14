# Accessible Component Library – Week 2 Task 5

This project is part of **Week 2 Task 5** of the Fellowship program.  
The focus is on creating **accessible, reusable UI components** using **design tokens** and styling with **TailwindCSS** (or CSS Modules).  

The deliverables include a **Component Library section** with a **tokens file** for consistent theming.

---

## 🎯 Objectives
- Integrate **design tokens** (colors, spacing, typography, radii).
- Build **accessible components** (keyboard + aria support).
- Ensure **consistent usage of tokens** across components.
- (Optional) Add **visual regression tests** with Percy or Jest Image Snapshot.

---

## 📂 Project Structure
src/
├─ components/
│ ├─ Button.tsx
│ ├─ Card.tsx
│
├─ styles/
│ ├─ tokens.ts # 🎨 Design Tokens (colors, spacing, radii, typography)
│
├─ App.tsx # Component library demo

yaml
Copy code

---

## 🧩 Components

### 🔘 Button
An accessible button component that supports keyboard navigation and ARIA labels.

```tsx
import { Button } from "./components/Button";

function Example() {
  return <Button onClick={() => alert("Button clicked!")}>Click Me</Button>;
}

---

### 🃏 Card
A reusable card component styled with tokens.

tsx
Copy code
import { Card } from "./components/Card";

function Example() {
  return (
    <Card title="Example Card">
      <p>This is a card component with tokens applied.</p>
      <Button>Click Me</Button>
    </Card>
  );
}

---

### 🎨 Design Tokens
Defined in src/styles/tokens.ts

Colors: primary, secondary, background, text

Spacing: xs, sm, md, lg, xl

Radii: sm, md, lg, xl, full

Typography: font family, sizes, weights

---

### ✅ Deliverables
 Component Library section

 Tokens file (tokens.ts)

 Accessible Button & Card components

 Demo preview (App.tsx)

 (Optional) Visual regression test setup

---

### 📜 Acceptance Criteria
Components are accessible (keyboard + aria).

Tokens are used consistently.

App preview demonstrates working components.

---

### ▶️ Running the Project
npm install
npm run dev

---