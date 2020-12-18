const popupBlock = document.querySelector('.popup'); //блок popup целиком
const popupContainer = document.querySelector('.popup__container'); //общий елемент контейнеров форм/полноразмерных изображений
const closeBtns = document.querySelectorAll('.popup__close-btn'); //кнопки закрытия
const nameProfile = document.querySelector('.profile__name'); //имя профиля
const aboutProfile = document.querySelector('.profile__about'); //род деятельности профиля

//форма редактирования профиля
const editPopup = document.querySelector('.popup__container_type_edit'); //контейнер формы редактированя
const editBtn = document.querySelector('.profile__edit-btn'); //кнопка вызова формы редактирования
const editFormName = document.querySelector('.popup__input_content_name'); //поле ввода имени
const editFormAbout = document.querySelector('.popup__input_content_about'); //поле ввода рода деятельности
const editForm = document.querySelector('.popup__form_type_edit'); //кнопка submit формы редактирования профиля

//форма добавления нового изображения
const addPopup = document.querySelector('.popup__container_type_add'); //контейнер формы добавления
const addBtn = document.querySelector('.profile__add-btn'); //кнопка вызова формы добавления
const addFormName = document.querySelector('.popup__input_content_image-name');
const addFormLink = document.querySelector('.popup__input_content_image-link');
const addForm = document.querySelector('.popup__form_type_add');


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
    const cardTitle = newItem.querySelector('.mesto__title');
    const cardImage = newItem.querySelector('.mesto__image');
    const deleteBtn = newItem.querySelector('.mesto__delete-btn');
    const likeBtn = newItem.querySelector('.mesto__like-btn');
    const deleteMesto = newItem.querySelector('.mesto');
    cardTitle.textContent = name;
    cardImage.src = link;
    
    likeBtn.addEventListener('click', function() {
        likeBtn.classList.toggle('mesto__like-btn_active');
    })

    deleteBtn.addEventListener('click', function() {
        deleteMesto.remove();
    });

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
    
    editFormName.value = nameProfile.textContent;
    editFormAbout.value = aboutProfile.textContent;
    
    a.classList.add('popup_opened');

    showPopupBlock();
};
//submit редактирования профиля
function formSubmitEdit (evt) {
    evt.preventDefault();
       
    nameProfile.textContent = editFormName.value;
    aboutProfile.textContent = editFormAbout.value;

    closePopup(editPopup);
}
//закрывает форму/полноразмерное изображение
function closePopup(a) {
    a.classList.remove('popup_opened');

    hidePopupBlock();
}

//добавляет новое изображение
function addNewItem() {
    const inputName = addFormName.value;
    const inputLink = addFormLink.value;
    const newItem = composeItem({name: inputName, link: inputLink});
    listContainerElement.prepend(newItem);
    addFormName.value = '';
    addFormLink.value = '';
}

//submit добавления изображения
function formSubmitAdd (evt) {
    evt.preventDefault();
    
    addNewItem();

    closePopup(addPopup);
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

//лисенер формы редактирования профиля
editForm.addEventListener('submit', formSubmitEdit);

//лисенер формы добавления изображений
addForm.addEventListener('submit', formSubmitAdd); 

renderList();