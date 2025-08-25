// This file handles the language switching for form labels.

// Define a translation object with different languages and their form label text.
const translations = {
    eng: {
        name: 'Name:',
        email: 'Email:',
        message: 'Message:',
        sendBtn: 'Send Message'
    },
    esp: {
        name: 'Nombre:',
        email: 'Correo electrónico:',
        message: 'Mensaje:',
        sendBtn: 'Enviar mensaje'
    },
    fra: {
        name: 'Nom:',
        email: 'E-mail:',
        message: 'Message:',
        sendBtn: 'Envoyer le message'
    }
};

// Get all the language buttons from the DOM.
const langButtons = document.querySelectorAll('.lang-btn');

// Get all the form labels and the submit button.
// We use a data attribute 'data-label' to easily identify and update the labels.
const formLabels = document.querySelectorAll('[data-label]');
const submitButton = document.querySelector('button[type="submit"]');

/**
 * Updates the text content of the form labels and the submit button
 * based on the selected language.
 * @param {string} lang The language code (e.g., 'en', 'es', 'fr').
 */
function updateLanguage(lang) {
    // Check if the requested language exists in our translations.
    if (translations[lang]) {
        // Iterate through each label and update its text content.
        formLabels.forEach(label => {
            const labelKey = label.getAttribute('data-label');
            label.textContent = translations[lang][labelKey];
        });

        // Update the text of the submit button.
        submitButton.textContent = translations[lang].sendBtn;

        // Update the active class on the buttons.
        // This visually indicates which language is currently selected.
        langButtons.forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
}

// Add a click event listener to each language button.
langButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        // Get the language code from the 'data-lang' attribute of the clicked button.
        const selectedLang = event.target.getAttribute('data-lang');
        // Call the function to update the language.
        updateLanguage(selectedLang);
    });
});

// Set the initial language to English when the page loads.
updateLanguage('en');
