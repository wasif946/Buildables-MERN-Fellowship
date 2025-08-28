/**
 * js/utils.js
 * * This module contains reusable utility functions for the application.
 */

/**
 * Fetches JSON data from a given URL and handles errors.
 * This is an example of a stateless, reusable function.
 * @param {string} url - The URL to fetch data from.
 * @returns {Promise<Object>} A promise that resolves with the JSON data.
 */
export async function fetchJson(url) {
    try {
        const response = await fetch(url);
        // Progressive enhancement: if the network request fails, we
        // gracefully handle the error instead of crashing.
        if (!response.ok) {
            throw new Error(`Network response was not ok, status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        // Log the error but don't stop the application.
        console.error("Failed to fetch data:", error);
        // Return an empty object or array to prevent the app from breaking.
        return {}; 
    }
}
