let container = document.querySelector('.popup');
let editBtn = document.querySelector('.profile__edit-btn');
let closeBtn = document.querySelector('.popup__close-btn');
let formSave = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__name-field');
let aboutInput = document.querySelector('.popup__about-field');
let nameProfile = document.querySelector('.profile__name');
let aboutProfile = document.querySelector('.profile__about');

function openPopup() {
    container.classList.add('popup_opened');

    nameInput.value = nameProfile.textContent;
    aboutInput.value = aboutProfile.textContent;
}

function closePopup() {
    container.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    
    nameProfile.textContent = nameInput.value;
    aboutProfile.textContent = aboutInput.value;

    container.classList.remove('popup_opened');
}

editBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);
formSave.addEventListener('submit', formSubmitHandler);