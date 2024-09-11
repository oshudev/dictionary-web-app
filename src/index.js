import './scss/main.scss';

// TODO: add watch functionality when users is in dark mode and set the correct toggle state
const toggle = document.querySelector('[data-theme-toggle]');
const root = document.querySelector('html');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');

  root.setAttribute(
    'data-color-theme',
    toggle.classList.contains('active') ? 'dark' : 'light',
  );
});
