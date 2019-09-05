

const openForm = () => {
    form.classList.remove('hidden');

    openBtn.style.display = "none"
}
const closeForm = () => {
    form.classList.add('hidden');
    openBtn.style.display = "block"

}
//grab the elements
const form = document.querySelector('#form-box');
const openBtn = document.querySelector('.contact-me-btn');
const closeBtn = document.querySelector('.close-contact-me');

//addeventlisteners
openBtn.addEventListener('click', openForm);
closeBtn.addEventListener('click', closeForm);


