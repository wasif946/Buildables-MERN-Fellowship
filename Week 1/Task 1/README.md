# Accessible Portfolio Project

### Project Description
This project is a static portfolio website built with a strong focus on web accessibility. It includes a portfolio section and a contact form, and it adheres to WCAG standards for semantic HTML, keyboard navigation, and screen reader usability.

### Features
- **Semantic Layout**: Uses HTML5 semantic elements like `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>`.
- **Landmark Roles**: Includes ARIA landmark roles for enhanced screen reader navigation.
- **Accessible Form**: The contact form is fully accessible with proper `<label>` elements, `aria-required` attributes, and logical keyboard focus order.
- **Keyboard Support**: All interactive elements are fully navigable and usable with a keyboard.
- **Client-Side Validation**: Form fields use HTML5 `required` and `type="email"` for basic client-side validation.
- **Accessibility Tools**: The project has been validated using HTML Validator and an accessibility audit (Axe or Lighthouse).
- **Graceful Degradation**: Provides a `<noscript>` friendly message for users without JavaScript.
- **Language Switcher**: The contact form labels can be dynamically switched between English, Spanish, and French.

### How to Run Locally
1.  **Clone the Repository**:
    ```bash
    git clone [your-repository-url]
    ```
2.  **Open in VS Code**:
    Open the `portfolio-project` folder in Visual Studio Code.
3.  **Launch with Live Server**:
    Right-click the `index.html` file and select "Open with Live Server". This will open the project in your default browser.

### Accessibility Audit Fixes

A full accessibility audit was run, and the top 5 issues have been addressed.

1.  **Issue**: Insufficient Color Contrast.
    * **Fix**: The body text color was changed from a lighter gray to a darker `#333` and heading colors were updated to `#222` to ensure a contrast ratio of at least 4.5:1, meeting WCAG AA standards.
2.  **Issue**: Missing `alt` attributes on images.
    * **Fix**: Descriptive `alt` attributes were added to all `<img>` tags to provide context for screen reader users. The `alt` text describes the purpose of the image.
3.  **Issue**: Links were not descriptive enough.
    * **Fix**: Descriptive link text was added to the project links (`<a href="#">`) using the `aria-label` attribute to provide more context than just "View Project" for screen reader users.
4.  **Issue**: Inconsistent focus outlines.
    * **Fix**: CSS was added to provide clear, visible focus outlines on all interactive elements like links, inputs, and buttons using the `:focus` pseudo-class.
5.  **Issue**: Missing landmark roles.
    * **Fix**: HTML5 semantic tags like `<header>`, `<nav>`, `<main>`, and `<footer>` were supplemented with their corresponding `role` attributes (`banner`, `navigation`, `main`, `contentinfo`) for better compatibility with older assistive technologies.

### Bonus Challenge: Language Switcher

This feature was added to demonstrate an understanding of **internationalization** and **dynamic content updates**. By using JavaScript to change the form labels, the project becomes more inclusive and accessible to users who speak different languages. This approach keeps the code clean and maintains semantic HTML by not requiring multiple versions of the form.In this case,we will switch from English to Spanish and French.
