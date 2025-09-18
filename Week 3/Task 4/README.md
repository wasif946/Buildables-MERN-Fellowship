# Week 3, Task 4: Multi-Step Form with React

## Description

This project is a modern, multi-step form built using React. It demonstrates a complete, end-to-end user experience, including a clean UI, client-side validation, step-by-step navigation, and proper state management.

The application also includes a simple routing system to showcase different pages, such as the home and users pages, allowing for seamless navigation.

## Features

- **Multi-Step Navigation**: The form is broken down into multiple steps, with a clear progress indicator to guide the user.
- **Client-Side Validation**: All form fields are validated in real-time using `react-hook-form` and `Zod` to provide instant user feedback.
- **Field Focus on Error**: The form automatically focuses the user's cursor on the first field with an error, guiding them to fix validation issues efficiently.
- **Responsive Design**: The user interface is built with Tailwind CSS, ensuring it is responsive and looks great on both desktop and mobile devices.
- **Browser Persistence**: The form's state is saved in `localStorage`, so users can refresh the page and continue where they left off.
- **Modular Components**: The form is broken down into smaller, reusable components for better code organization and readability.

## Technologies

- **React**: The core JavaScript library for building the UI.
- **React Router**: For handling client-side routing and navigation between pages.
- **React Hook Form**: A performant and flexible library for managing form state and validation.
- **Zod**: A TypeScript-first schema validation library used for defining form schemas and ensuring data integrity.
- **Tailwind CSS**: A utility-first CSS framework for rapid and consistent styling.
- **Vite**: The build tool used to create the React application.

## Getting Started

To get the project up and running on your local machine, follow these simple steps:

### 1. Clone the repository:

```bash
git clone <repository-url>
```

### 2. Navigate to the project directory:

```bash
cd <project-directory>
```

### 3. Install the dependencies:

```bash
npm install
```

This command will install all required packages, including React, React Router, Tailwind CSS, and its PostCSS dependencies.

### 4. Start the development server:

```bash
npm run dev
```

The application will now be running on `http://localhost:5173`. Open your web browser and navigate to this URL to view the project.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
