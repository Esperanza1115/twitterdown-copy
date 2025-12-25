// Main JavaScript functionality

function downloadVideo() {
    const urlInput = document.getElementById('videoUrl');
    const resultArea = document.getElementById('resultArea');
    const downloadBtn = document.querySelector('#downloadArea button');

    const url = urlInput.value.trim();

    if (!url) {
        alert('Please enter a Twitter/X URL');
        return;
    }

    // Validate URL
    if (!url.includes('twitter.com') && !url.includes('x.com')) {
        alert('Please enter a valid Twitter/X URL');
        return;
    }

    // Show loading state
    downloadBtn.innerHTML = `
        <svg class="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Processing...
    `;
    downloadBtn.disabled = true;

    // Simulate API call (replace with actual API)
    setTimeout(() => {
        downloadBtn.innerHTML = `
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            Download
        `;
        downloadBtn.disabled = false;

        // Show result area
        resultArea.classList.remove('hidden');

        // Add animation
        resultArea.style.animation = 'fadeIn 0.3s ease-out';
    }, 1500);
}

// Tab switching functionality
function switchTab(tabName) {
    const tabs = document.querySelectorAll('[data-tab]');
    const panels = document.querySelectorAll('[data-panel]');

    tabs.forEach(tab => {
        tab.classList.remove('bg-white', 'shadow-sm');
        tab.classList.add('text-gray-600');
    });

    panels.forEach(panel => {
        panel.classList.add('hidden');
    });

    const activeTab = document.querySelector(`[data-tab="${tabName}"]`);
    const activePanel = document.querySelector(`[data-panel="${tabName}"]`);

    if (activeTab && activePanel) {
        activeTab.classList.add('bg-white', 'shadow-sm');
        activeTab.classList.remove('text-gray-600');
        activePanel.classList.remove('hidden');
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Language selector (placeholder)
function changeLanguage(lang) {
    console.log('Language changed to:', lang);
    // Implement language switching logic
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('TwitterDown Clone loaded');

    // Add enter key support for input
    const urlInput = document.getElementById('videoUrl');
    if (urlInput) {
        urlInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                downloadVideo();
            }
        });
    }
});
