// constants.js
export const DARK_MODE_ENABLED = 'enabled';
export const DARK_MODE_DISABLED = 'disabled';

// Example utility function to check system dark mode preference
export const getSystemDarkModePreference = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
};