import './style.css';

// =========================================================================
// Task 5: Refactoring & Integration
// This file combines all previous JavaScript logic, including:
// 1. Theme switching (Task 2)
// 2. Asynchronous data fetching (Task 3)
// 3. New logic for exponential backoff and persistent caching (Task 5)
// =========================================================================

// =========================================================================
// 1. Theme Switcher Logic (from Task 2)
// =========================================================================

/**
 * Applies a theme to the document and updates the theme toggle icon.
 * @param {string} theme The theme to apply ('light' or 'dark').
 */
function applyAndCheckTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
}

// Get saved theme from localStorage or check system preference
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Set the initial theme when the page loads
if (savedTheme) {
    applyAndCheckTheme(savedTheme);
} else if (prefersDark) {
    applyAndCheckTheme('dark');
} else {
    applyAndCheckTheme('light');
}

// Add event listener for the theme toggle button
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        applyAndCheckTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// =========================================================================
// 2. Data Fetching with Persistent Caching and Exponential Backoff
//    This is the core of Task 5.
// =========================================================================

const dataOutput = document.getElementById('data-output');
const fetchDataBtn = document.getElementById('fetch-data-btn');

const CACHE_KEY = 'apiData';
const CACHE_EXPIRY_MS = 60 * 1000; // Cache expires in 1 minute

/**
 * Fetches data from a URL with a retry mechanism using exponential backoff.
 * @param {string} url The URL to fetch.
 * @param {object} options Fetch options.
 * @param {number} retries The number of retries left.
 * @param {number} delay The current delay in milliseconds.
 * @returns {Promise<any>} A promise that resolves with the fetched data.
 */
async function fetchWithBackoffAndCache(url, options = {}, retries = 3, delay = 1000) {
    // 1. Check for cached data first
    const cachedData = localStorage.getItem(CACHE_KEY);
    if (cachedData) {
        const { data, expires } = JSON.parse(cachedData);
        if (Date.now() < expires) {
            console.log('✅ Serving from localStorage cache:', url);
            return data;
        } else {
            // Cache is expired, so clear it
            localStorage.removeItem(CACHE_KEY);
            console.log('⏳ Cache expired, fetching new data.');
        }
    }
    
    // 2. If no valid cache, proceed with network fetch
    try {
        console.log(`⏳ Attempting to fetch: ${url}`);
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        // On successful fetch, store the data in localStorage
        const cacheEntry = {
            data,
            expires: Date.now() + CACHE_EXPIRY_MS
        };
        localStorage.setItem(CACHE_KEY, JSON.stringify(cacheEntry));
        
        return data;
    } catch (error) {
        if (retries > 0) {
            console.error(`❌ Fetch failed. Retrying in ${delay / 1000}s...`);
            await new Promise(resolve => setTimeout(resolve, delay));
            return fetchWithBackoffAndCache(url, options, retries - 1, delay * 2);
        } else {
            console.error('🚫 Fetch failed after multiple retries.');
            throw error;
        }
    }
}

// Mock API endpoint for demonstration purposes.
// This URL will simulate a failure on the first two attempts.
const MOCK_API_URL = 'https://jsonplaceholder.typicode.com/posts/1';
let fetchAttempts = 0;

// Intercept fetch to simulate a network failure
const originalFetch = window.fetch;
window.fetch = async (...args) => {
    fetchAttempts++;
    if (fetchAttempts < 3) {
        // Simulate a network error for the first two attempts
        return new Promise((_, reject) => setTimeout(() => reject(new TypeError("Network request failed")), 500));
    }
    // After two failures, use the original fetch behavior
    return originalFetch(...args);
};

// Event listener for the fetch button
if (fetchDataBtn) {
    fetchDataBtn.addEventListener('click', async () => {
        dataOutput.textContent = 'Loading...';
        fetchAttempts = 0; // Reset mock fetch attempts on each click
        try {
            const data = await fetchWithBackoffAndCache(MOCK_API_URL);
            dataOutput.textContent = JSON.stringify(data, null, 2);
            console.log('✅ Successfully fetched data:', data);
        } catch (error) {
            dataOutput.textContent = 'Failed to load data after several attempts.';
            console.error('Final error:', error);
        }
    });
}