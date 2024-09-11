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

const searchBar = document.querySelector('[data-search-bar]');
const searchForm = document.querySelector('[data-form]');
const searchInput = document.querySelector('[data-form-input]');
const errorMessage = document.querySelector('[data-error]');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();

  searchBar.setAttribute('data-error', 'false');

  if (searchInput.value === '') {
    searchBar.setAttribute('data-error', 'true');
  }

  console.log(searchInput.value);
});
