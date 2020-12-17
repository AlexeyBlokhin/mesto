const container = document.querySelector('.popup');
const editBtn = document.querySelector('.profile__edit-btn');
const closeBtn = document.querySelector('.popup__close-btn');
const formSave = document.querySelector('.popup__form');
const namePopup = document.querySelector('.popup__input_content_name');
const aboutPopup = document.querySelector('.popup__input_content_about');
const nameProfile = document.querySelector('.profile__name');
const aboutProfile = document.querySelector('.profile__about');


const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const listContainerElement = document.querySelector('.elements__grid');
const templateElement = document.querySelector('.template');

function renderList() {
    const listItems =  initialCards.map(composeItem);

    listContainerElement.append(...listItems);
    
    console.log(newList);
}
    
function composeItem({title, link}){
    const newItem = templateElement.content.cloneNode(true);
    //const cardTitle = newCard.querySelector(".mesto__title");
    //cardTitle.textContent = item.name;

    // const cardImage = newCard.querySelector(".mesto__image");
    //cardImage.setAttribute('src', 'item.link');

    return newItem;

}




//function newCard() {
//    const cardElement = cardTemplate.cloneNode(true);
//}

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