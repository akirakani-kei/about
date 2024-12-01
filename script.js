// script.js
const moreInfo = document.getElementById('more-info-toggle');
const backButton = document.getElementById('back-button');
const pageWrapper = document.querySelector('.page-wrapper');

moreInfo.addEventListener('click', () => {
  pageWrapper.style.transform = 'translateX(-50%)';
});

backButton.addEventListener('click', () => {
  pageWrapper.style.transform = 'translateX(0)';
});
