

const checkbox = document.getElementById('checkbox');
const header = document.querySelector('.header');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');
const greeting = document.querySelector('.greeting');


checkbox.addEventListener('change', () => {
  header.classList.toggle('dark')
  sidebar.classList.toggle('dark')
  mainContent.classList.toggle('darker');
})

let hours = new Date().getHours();

let morning = "Good morning,"
let afternoon = "Good afternoon,"
let evening = "Good evening,"

if(hours >= 0 && hours < 12) {
    greeting.textContent = morning
} else if (hours >= 12 && hours < 17) {
    greeting.textContent = afternoon
} else if (hours >= 17 && hours < 24) {
    greeting.textContent = evening
}



