/**
 * js/theme-switcher.js
 * * This module handles the logic for switching between light and dark themes,
 * persisting the user's choice in localStorage, and checking color contrast
 * for accessibility.
 */

/**
 * Checks if the computed contrast ratio meets the WCAG 2.1 AA standard of 4.5:1.
 * Reports the result to the console for development purposes.
 * @param {string} bgColor - The background color in hex format.
 * @param {string} textColor - The text color in hex format.
 */
function checkContrast(bgColor, textColor) {
    // WCAG 2.1 AA standard for normal text is a contrast ratio of 4.5:1
    const WCAG_AA_MIN = 4.5;

    // Helper function to convert a hex color string to an RGB object.
    function hexToRgb(hex) {
        const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function(m, r, g, b) {
            return r + r + g + g + b + b;
        });
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }

    // Helper function to get the luminance of a color.
    function getLuminance(rgb) {
        const r = rgb.r / 255;
        const g = rgb.g / 255;
        const b = rgb.b / 255;
        const sR = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
        const sG = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
        const sB = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);
        return (0.2126 * sR) + (0.7152 * sG) + (0.0722 * sB);
    }

    // Calculates the contrast ratio between two colors.
    function calculateContrastRatio(color1, color2) {
        const rgb1 = hexToRgb(color1);
        const rgb2 = hexToRgb(color2);
        if (!rgb1 || !rgb2) {
            console.error('Invalid color format for contrast check.');
            return 0;
        }
        const l1 = getLuminance(rgb1);
        const l2 = getLuminance(rgb2);
        const lighterLuminance = Math.max(l1, l2);
        const darkerLuminance = Math.min(l1, l2);
        return (lighterLuminance + 0.05) / (darkerLuminance + 0.05);
    }

    const contrastRatio = calculateContrastRatio(bgColor, textColor);
    const passed = contrastRatio >= WCAG_AA_MIN;
    console.log('--- Contrast Check ---');
    console.log(`Background Color: ${bgColor}`);
    console.log(`Text Color: ${textColor}`);
    console.log(`Calculated Ratio: ${contrastRatio.toFixed(2)}`);
    if (passed) {
        console.log(`✅ Passed! The ratio meets the WCAG AA minimum of ${WCAG_AA_MIN}:1.`);
    } else {
        console.warn(`❌ Failed! The ratio is below the WCAG AA minimum of ${WCAG_AA_MIN}:1. Please adjust your colors.`);
    }
    console.log('----------------------');
}

/**
 * Applies a given theme to the document and runs a contrast check.
 * @param {string} theme - 'light' or 'dark'.
 */
export function applyAndCheckTheme(theme) {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${theme}-theme`);
    const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--color-background').trim();
    const textColor = getComputedStyle(document.documentElement).getPropertyValue('--color-text').trim();
    checkContrast(bgColor, textColor);
}

/**
 * Initializes the theme switcher. Sets the initial theme and adds event listeners.
 */
export function initThemeSwitcher() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const themeToggle = document.getElementById('theme-toggle');

    // Set initial theme
    if (savedTheme) {
        applyAndCheckTheme(savedTheme);
    } else if (prefersDark) {
        applyAndCheckTheme('dark');
    } else {
        applyAndCheckTheme('light');
    }

    // Add event listener to the toggle button
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            applyAndCheckTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // Listen for changes in the system's color scheme
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            applyAndCheckTheme(e.matches ? 'dark' : 'light');
        }
    });
}
