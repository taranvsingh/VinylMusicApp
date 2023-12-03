
var currentThemeIcon = 1;
var currentPlayIcon = 1;

function renderAutoPlay() {
    var autoplay_active = document.getElementById('autoplay-active');
    var autoplay_inactive = document.getElementById('autoplay-inactive');

    if ((currentPlayIcon)) {
        currentPlayIcon = 0 
        autoplay_active.classList.add('hidden');
        autoplay_inactive.classList.remove('hidden');
    } else {
        currentPlayIcon = 1
        autoplay_active.classList.remove('hidden');
        autoplay_inactive.classList.add('hidden');
    }
}

function renderTheme() {
    var theme_dark = document.getElementById('theme-dark');
    var theme_light = document.getElementById('theme-light');

    if ((currentThemeIcon)) {
        currentThemeIcon = 0 
        theme_light.classList.add('hidden');
        theme_dark.classList.remove('hidden');
    } else {
        currentThemeIcon = 1
        theme_light.classList.remove('hidden');
        theme_dark.classList.add('hidden');
    }
}