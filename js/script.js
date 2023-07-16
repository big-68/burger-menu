document.querySelector('.header__burger').addEventListener('click', (e) => {
    e.target.classList.toggle('active');
    document.querySelector('.menu').classList.toggle('active');
    document.body.classList.toggle('locked');
});