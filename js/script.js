const popupBlock = document.querySelector('.popup'); //блок popup целиком
const popupContainer = document.querySelector('.popup__container'); //общий елемент контейнеров форм/полноразмерных изображений
const closeBtns = document.querySelectorAll('.popup__close-btn'); //псевдомассив кнопок закрытия
const nameProfile = document.querySelector('.profile__name'); //имя профиля
const aboutProfile = document.querySelector('.profile__about'); //род деятельности профиля

//форма редактирования профиля
const editPopup = document.querySelector('.popup__container_type_edit'); //контейнер формы редактированя
const editBtn = document.querySelector('.profile__edit-btn'); //кнопка вызова формы редактирования
const nameEditForm = document.querySelector('.popup__input_content_name'); //поле ввода имени
const aboutEditForm = document.querySelector('.popup__input_content_about'); //поле ввода рода деятельности

//форма добавления нового изображения
const addPopup = document.querySelector('.popup__container_type_add'); //контейнер формы добавления
const addBtn = document.querySelector('.profile__add-btn'); //кнопка вызова формы добавления
const nameAddForm = document.querySelector('.popup__input_content_image-name');
const linkAddForm = document.querySelector('.popup__input_content_image-link');

const formSave = document.querySelector('.popup__form'); //кнопка submit

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

//добавляет созданные из массива места в DOM
function renderList() {
    const listItems =  initialCards.map(composeItem);

    listContainerElement.append(...listItems);
    
}
//создает элементы списка из массива    
function composeItem({name, link}) {
    const newItem = templateElement.content.cloneNode(true);
    const cardTitle = newItem.querySelector(".mesto__title");
    const cardImage = newItem.querySelector(".mesto__image");
    
    cardTitle.textContent = name;
    cardImage.src = link;

    return newItem;
}

//показывает блок popup
function showPopupBlock() {
    popupBlock.classList.add('popup_opened');
    console.log('блок есть');
};

//скрывает блок popup
function hidePopupBlock() {
    popupBlock.classList.remove('popup_opened');
    console.log('блока нет');
}

//показывает форму/полноразмерное изображение
function showForm(a) {
    
    nameEditForm.value = nameProfile.textContent;
    aboutEditForm.value = aboutProfile.textContent;
    
    a.classList.add('popup_opened');

    showPopupBlock();
};

//закрывает форму/полноразмерное изображение
function closePopup(a) {
    a.classList.remove('popup_opened');

    hidePopupBlock();
}

//добавляет новое изображение
function addNewItem() {
    const inputName = nameAddForm.value;
    const inputLink = linkAddForm.value;
    const newItem = composeItem({name: inputName, link: inputLink});
    listContainerElement.prepend(newItem);
    nameAddForm.value = '';
    linkAddForm.value = '';
}

//лисенер кнопки редактирования профиля
editBtn.addEventListener('click', function() {showForm(editPopup)});

//лисенер кнопки добавление изображений
addBtn.addEventListener('click', function() {showForm(addPopup)});

//лисенер кнопок закрытия
[...closeBtns].forEach(function(closeBtns) {
    closeBtns.addEventListener('click', function(evt) {
        closePopup(evt.target.closest('.popup__container'));
    });
});

renderList();