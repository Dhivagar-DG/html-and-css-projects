const menuBtn = document.querySelector('.menu-btn');
const mobileDiv = document.querySelector('.mobileDiv');


const handleClick = ()=>{ 
    menuBtn.classList.toggle('active')
    mobileDiv.classList.toggle('active')
};


menuBtn.addEventListener('click', handleClick);

