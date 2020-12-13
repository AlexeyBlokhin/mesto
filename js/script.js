let container = document.querySelector('.popup');
let editBtn = document.querySelector('.profile__edit-btn');
let closeBtn = document.querySelector('.popup__close-btn');
let formSave = document.querySelector('.popup__form');
let namePopup = document.querySelector('.popup__input_content_name');
let aboutPopup = document.querySelector('.popup__input_content_about');
let nameProfile = document.querySelector('.profile__name');
let aboutProfile = document.querySelector('.profile__about');

function openPopup() {
    container.classList.add('popup_opened');

    namePopup.value = nameProfile.textContent;
    aboutPopup.value = aboutProfile.textContent;
}

function closePopup() {
    container.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    
    nameProfile.textContent = namePopup.value;
    aboutProfile.textContent = aboutPopup.value;

    closePopup();
}

editBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);
formSave.addEventListener('submit', formSubmitHandler);