// A self-executing anonymous function is used to encapsulate the code
// to avoid polluting the global namespace.
(function() {
    // WCAG 2.1 AA standard for normal text is a contrast ratio of 4.5:1
    const WCAG_AA_MIN = 4.5;

    // Helper function to convert a hex color string to an RGB object.
    // This is necessary for the luminance calculation.
    function hexToRgb(hex) {
        // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
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
    // This is the first step in calculating the contrast ratio.
    function getLuminance(rgb) {
        // Normalize R, G, B values to 0-1 range
        const r = rgb.r / 255;
        const g = rgb.g / 255;
        const b = rgb.b / 255;

        // Apply a gamma-correction curve to each normalized value
        const sR = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
        const sG = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
        const sB = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);

        // Calculate luminance
        return (0.2126 * sR) + (0.7152 * sG) + (0.0722 * sB);
    }

    // Calculates the contrast ratio between two colors.
    // WCAG formula: (L1 + 0.05) / (L2 + 0.05), where L1 is the lighter color's luminance.
    function calculateContrastRatio(color1, color2) {
        const rgb1 = hexToRgb(color1);
        const rgb2 = hexToRgb(color2);

        if (!rgb1 || !rgb2) {
            console.error('Invalid color format for contrast check.');
            return 0;
        }

        const l1 = getLuminance(rgb1);
        const l2 = getLuminance(rgb2);

        // Ensure L1 is the lighter of the two luminances
        const lighterLuminance = Math.max(l1, l2);
        const darkerLuminance = Math.min(l1, l2);

        return (lighterLuminance + 0.05) / (darkerLuminance + 0.05);
    }

    // A function to check the contrast of the current theme
    function checkContrast() {
        // Get the computed background and text colors from the body.
        const bodyStyles = getComputedStyle(document.body);
        const bodyBgColor = bodyStyles.backgroundColor;
        const bodyTextColor = bodyStyles.color;

        // Note: getComputedStyle returns RGB format, not hex.
        // We'll need a way to convert RGB to hex for our function, or modify
        // our function to accept RGB. For this simple example, we'll
        // assume the colors are defined in the CSS as hex and get them directly.
        // In a real-world scenario, a full RGB to Hex conversion would be
        // needed, but for simplicity, we'll get the variable values directly.
        
        // Get the CSS variables directly to ensure we're using the
        // correct hex values, as getComputedStyle can return RGB.
        const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--color-background');
        const textColor = getComputedStyle(document.documentElement).getPropertyValue('--color-text');

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

    // A function to apply the theme and run the contrast check.
    function applyAndCheckTheme(theme) {
        document.body.classList.remove('light-theme', 'dark-theme');
        document.body.classList.add(`${theme}-theme`);
        
        // Run the contrast check after the theme is applied.
        checkContrast();
    }
    
    // Check for the user's saved theme preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    // Check for the system's preferred color scheme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // A function to set the theme based on the user's preference
    // or system preference.
    function setTheme() {
        if (savedTheme) {
            // If a theme is saved, apply it.
            applyAndCheckTheme(savedTheme);
        } else if (prefersDark) {
            // If no theme is saved, but the system prefers dark mode,
            // apply the dark theme.
            applyAndCheckTheme('dark');
        } else {
            // Otherwise, default to the light theme.
            applyAndCheckTheme('light');
        }
    }

    // Set the initial theme when the page loads
    setTheme();

    // Event listener for the theme toggle button.
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
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

})();
