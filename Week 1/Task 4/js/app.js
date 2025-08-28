/**
 * js/app.js
 * * This is the main application file. It imports modules and
 * sets up event listeners and initializers for the website,
 * including a Mutation Observer for progressive enhancement.
 */

import { initThemeSwitcher } from './theme-switcher.js';
import { filterItems } from './filter-logic.js';
import { fetchJson } from './utils.js';

// Wait for the DOM to be fully loaded before running the scripts.
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the theme switcher
    initThemeSwitcher();

    // Set up the filter functionality
    const filterInput = document.getElementById('filter-input');
    const projectList = document.querySelector('.project-list');
    
    // Placeholder for your actual project data.
    const allProjects = [
        { id: 1, title: 'Project Alpha', description: 'An accessible website built with semantic HTML and CSS.' },
        { id: 2, title: 'Project Beta', description: 'A web application with a focus on keyboard navigation and ARIA attributes.' },
        { id: 3, title: 'Blog App', description: 'A full-stack blog application.' },
        { id: 4, title: 'E-commerce Site', description: 'An online store built with React.' },
    ];

    if (filterInput && projectList) {
        filterInput.addEventListener('input', (e) => {
            const query = e.target.value;
            const filteredProjects = filterItems(allProjects, query);
            
            // This is where you would update the DOM with the filtered results.
            // For now, we'll just log the result.
            console.log('Filtered Projects:', filteredProjects);
            // You can also add logic here to re-render the project list in the UI.
            // For example:
            // renderProjects(filteredProjects, projectList);
        });
    }

    /**
     * Initializes a Mutation Observer to monitor for DOM changes.
     * This is useful for running scripts after dynamic content is loaded or filtered.
     */
    function initMutationObserver() {
        // Define the observer's callback function
        const observerCallback = (mutationsList) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    // Log a message to show the observer is working.
                    console.log('A child node has been added or removed from the project list.');
                    // You could add more complex logic here, like re-initializing
                    // event listeners on newly added elements.
                }
            }
        };

        // Create a new MutationObserver instance
        const observer = new MutationObserver(observerCallback);

        // Define what the observer should watch for
        const observerConfig = { childList: true };

        // Start observing the target element
        if (projectList) {
            observer.observe(projectList, observerConfig);
            console.log('Mutation Observer is active on the project list.');
        } else {
            console.error('Project list element not found, Mutation Observer cannot be initialized.');
        }
    }

    // Call the function to start the Mutation Observer
    initMutationObserver();
});
