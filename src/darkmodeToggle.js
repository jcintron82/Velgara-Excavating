const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.getElementById('body');

darkModeToggle.addEventListener('click', () => {
    if (body.classList.contains('body')){
        console.log('g')
    body.classList.toggle('body-darkmode')}
    else {console.log('d')}
})