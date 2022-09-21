const btn = document.querySelector('.btn');
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.btnClose');

// ADD EVENT LISTENERS
btn.addEventListener('click', handleClick);
btnClose.addEventListener('click', handleCloseMaodal);

// HANDLE CLICK
function handleClick () {modal.classList.add('show')};

//HANDLE CLOSE MODAL
function handleCloseMaodal () {modal.classList.remove('show')}; 
