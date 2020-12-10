let container = document.querySelector('.popup');
let editBtn = document.querySelector('.profile__edit-btn');
let closeBtn = document.querySelector('.popup__close-btn');
let formSave = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__name-field');
let aboutInput = document.querySelector('.popup__about-field');
let nameProfile = document.querySelector('.profile__name');
let aboutProfile = document.querySelector('.profile__about');
let likeBtn = document.querySelectorAll('.elements__like-btn');

function openPopup() {
    container.classList.add('popup_opened');

    nameInput.placeholder = nameProfile.textContent;
    aboutInput.placeholder = aboutProfile.textContent;
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    
    nameInput.getAttribute('value');
    aboutInput.getAttribute('value');
       
    nameProfile.textContent = nameInput.value;
    aboutProfile.textContent = aboutInput.value;

    container.classList.remove('popup_opened');
}

function closePopup() {
    container.classList.remove('popup_opened');
}

function likeFunc(e) {
    e.target.classList.toggle('elements__like-btn_active');
}

for(let i=0; i<likeBtn.length; i++)
	likeBtn[i].addEventListener("click",likeFunc);

editBtn.addEventListener('click', openPopup);
closeBtn.addEventListener('click', closePopup);
formSave.addEventListener('submit', formSubmitHandler);