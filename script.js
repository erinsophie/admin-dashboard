

const checkbox = document.getElementById('checkbox');
const header = document.querySelector('.header');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');




checkbox.addEventListener('change', () => {
  header.classList.toggle('dark')
  sidebar.classList.toggle('dark')
  mainContent.classList.toggle('darker');
})


