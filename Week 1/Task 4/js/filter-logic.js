// js/filter-logic.js
/**
 * @fileoverview Provides a pure function for filtering an array of objects.
 */

/**
 * Filters an array of project objects based on a search query.
 * The search is case-insensitive and checks both the title and description.
 *
 * @param {Array<Object>} items The array of project objects to filter.
 * @param {string} query The search string.
 * @returns {Array<Object>} A new array containing only the matching project objects.
 */
function filterItems(items, query) {
    if (!query) {
        return items;
    }

    const lowerCaseQuery = query.toLowerCase();

    return items.filter(item => {
        const titleMatch = item.title.toLowerCase().includes(lowerCaseQuery);
        const descriptionMatch = item.description.toLowerCase().includes(lowerCaseQuery);
        return titleMatch || descriptionMatch;
    });
}

// Export the function so it can be used in other modules.
export { filterItems };
