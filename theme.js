// Update CSS variables from configuration
function applyTheme() {
    const config = window.VALENTINE_CONFIG;
    const root = document.documentElement;

    // Apply colors
    root.style.setProperty('--background-color-1', config.colors.backgroundStart);
    root.style.setProperty('--background-color-2', config.colors.backgroundEnd);
    root.style.setProperty('--button-color', config.colors.buttonBackground);
    root.style.setProperty('--button-hover', config.colors.buttonHover);
    root.style.setProperty('--text-color', config.colors.textColor);

    // Apply animation settings
    root.style.setProperty('--float-duration', config.animations.floatDuration);
    root.style.setProperty('--float-distance', config.animations.floatDistance);
    root.style.setProperty('--bounce-speed', config.animations.bounceSpeed);
    root.style.setProperty('--heart-explosion-size', config.animations.heartExplosionSize);
    
    // Set initial background for first section
    if (config.backgroundImages && config.backgroundImages.enabled) {
        console.log('Background images are enabled, setting initial background');
        setBackgroundForSection('question1');
    } else {
        console.log('Background images are disabled or not configured');
    }
}

// Function to change background image based on current section
function setBackgroundForSection(sectionId) {
    const config = window.VALENTINE_CONFIG;
    
    if (!config.backgroundImages || !config.backgroundImages.enabled) {
        console.log('Background images disabled');
        return;
    }
    
    const imageUrl = config.backgroundImages.sections[sectionId];
    if (!imageUrl) {
        console.warn(`No image URL found for section: ${sectionId}`);
        return;
    }
    
    console.log(`Setting background for section: ${sectionId}, image: ${imageUrl}`);
    
    const body = document.body;
    
    // Remove any existing background classes
    body.classList.remove('test-bg-1', 'test-bg-2', 'test-bg-3', 'has-background-image');
    
    // Add appropriate background class based on section
    let backgroundClass = '';
    switch (sectionId) {
        case 'question1':
        case 'celebration':
            backgroundClass = 'test-bg-1'; // IMG_8318.jpg
            break;
        case 'question2':
            backgroundClass = 'test-bg-2'; // IMG_8326.jpg
            break;
        case 'question3':
            backgroundClass = 'test-bg-3'; // IMG_8328.jpg
            break;
    }
    
    if (backgroundClass) {
        body.classList.add(backgroundClass);
        console.log(`Added background class: ${backgroundClass}`);
    }
    
    // Apply opacity by adding an overlay
    if (config.backgroundImages.opacity < 1) {
        body.style.position = 'relative';
        // Update or create overlay for opacity effect
        let overlay = document.querySelector('.bg-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'bg-overlay';
            body.appendChild(overlay);
        }
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, ${1 - config.backgroundImages.opacity});
            pointer-events: none;
            z-index: -1;
            transition: opacity 0.5s ease;
        `;
    }
}

// Apply theme when the page loads
window.addEventListener('DOMContentLoaded', applyTheme); 