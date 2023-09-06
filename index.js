const inputEvent = document.querySelector('#email');
const errorMsg = document.querySelector('.error-msg');
const container = document.querySelector('.container');
const succesCard = document.querySelector('.succes-card');
const succesButton = document.querySelector('#succes-button');
const spanEmail = document.querySelector('#email-succes');

console.log(inputEvent);
console.log(errorMsg);

inputEvent.addEventListener("invalid", (event) => {
    event.preventDefault();
    errorMsg.classList.add("error");
});

inputEvent.addEventListener("change", (event) => {
    event.preventDefault();
    container.classList.add('invisible');
    succesCard.classList.remove('invisible');
    spanEmail.textContent = event.target.value;
});

succesButton.addEventListener('click', (event) => {
    event.preventDefault()
    succesCard.classList.add('invisible');
    container.classList.remove('invisible');
})


