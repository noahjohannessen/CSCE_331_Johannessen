function initializeTheme() {
  var themeLink = document.getElementById('style');
  var checkbox = document.getElementById('theme-toggle');
  var storedTheme = localStorage.getItem('theme');

  if(storedTheme === 'dark') {
    themeLink.setAttribute('href', 'dark.css');
    checkbox.checked = false;
  } else {
    themeLink.setAttribute('href', 'light.css');
    checkbox.checked = true;
  }
}

function toggleTheme() {
  var themeLink = document.getElementById('style');
  var checkbox = document.getElementById('theme-toggle');

  if (checkbox.checked) {
    themeLink.setAttribute('href', 'light.css');
    localStorage.setItem('theme', 'light');
  } else {
    themeLink.setAttribute('href', 'dark.css');
    localStorage.setItem('theme', 'dark');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  initializeTheme();
  document.getElementById('theme-toggle').addEventListener('change', toggleTheme);
});
