Project: Responsive Web Page with Graceful Degradation and Print Stylesheet
Project Description
This project demonstrates the implementation of a responsive web page that is accessible and usable across various devices and for printing. The design focuses on graceful degradation, ensuring the content is readable even when CSS is not applied.

Implementation Details
Grid/Flexbox: The page layout is built using a combination of CSS Grid and Flexbox to create a flexible and adaptable structure.

Media Queries: The layout adapts to three different screen sizes using @media queries, providing an optimal viewing experience on mobile, tablet, and desktop devices.

CSS @supports: Feature detection is implemented using the @supports at-rule to handle browser compatibility gracefully.

Graceful Degradation: A mobile-first approach was used, and the un-styled HTML is semantically structured to be fully readable and functional without any CSS.

Print Stylesheet: A dedicated print.css is used to create a clean, ink-friendly version of the page for printing. All non-essential elements, such as the navigation and footer, are hidden, and colors are optimized for monochrome printing.

Deliverables
styles.css

print.css

mobile.png (Screenshot of the mobile view)

desktop.png (Screenshot of the desktop view)

print.png (Screenshot of the print view)

README.md (This file)

Acceptance Criteria
The page layout successfully adapts at three distinct breakpoints.

The print view is clean, readable, and free of unnecessary elements.

Bonus Challenge: CSS-only Accessible Dropdown Nav
Objective: To implement a fully accessible dropdown navigation menu using only HTML and CSS, without any JavaScript.

Accessibility: The dropdown menu is designed to be fully navigable via the keyboard using Tab and Shift + Tab keys, ensuring it is usable for sighted keyboard users and screen reader users.

Implementation: The dropdown functionality relies on the :focus-within pseudo-class, which activates the dropdown menu when a focusable element (like a link) inside the menu is active. This approach ensures the menu remains open while the user navigates through its links.