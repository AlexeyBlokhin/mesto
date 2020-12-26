const closeButtonList = document.querySelectorAll('.popup__close-btn'); //кнопки закрытия
const nameProfile = document.querySelector('.profile__name'); //имя профиля
const aboutProfile = document.querySelector('.profile__about'); //род деятельности профиля
const listContainerElement = document.querySelector('.elements__grid'); //контейнер для карточек
const templateElement = document.querySelector('.template'); //шаблон карточки
const popupContainerList = document.querySelectorAll('.popup'); //окно попапа
//попап редактирования профиля
const editPopup = document.querySelector('.popup_type_edit'); //контейнер формы редактированя
const editButton = document.querySelector('.profile__edit-btn'); //кнопка вызова формы
const editFormName = document.querySelector('.popup__input_content_name'); //поле ввода имени
const editFormAbout = document.querySelector('.popup__input_content_about'); //поле ввода рода деятельности
const editForm = document.querySelector('.popup__form_type_edit'); //форма
const editSubmit = document.querySelector('.popup__submit-btn_edit') //кнопка сабмита
//попап добавления нового изображения
const addPopup = document.querySelector('.popup_type_add'); //контейнер формы
const addButton = document.querySelector('.profile__add-btn'); //кнопка вызова формы
const addFormName = document.querySelector('.popup__input_content_image-name'); //поле ввода названия карточки
const addFormLink = document.querySelector('.popup__input_content_image-link'); //поле ввода ссылки на изображение
const addForm = document.querySelector('.popup__form_type_add'); //форма
const addSubmit = document.querySelector('.popup__submit-btn_add') //кнопка сабмита
//всплывающее окно с изображением
const popupImageContainer = document.querySelector('.popup_type_image'); //контейнер попапа с изображением
const popupImage = document.querySelector('.popup__image'); //изображение для попапа
const popupSubtitle = document.querySelector('.popup__subtitle'); //название изображения
//добавляет созданные из массива карточки в DOM
function renderList() {
    const listItems = initialCards.map(composeItem);
    listContainerElement.append(...listItems);
};
//создает элементы списка из массива
function composeItem({ name, link }) {
    const newItem = templateElement.content.cloneNode(true);
    const cardTitle = newItem.querySelector('.mesto__title');
    const cardImage = newItem.querySelector('.mesto__image');
    const deleteButton = newItem.querySelector('.mesto__delete-btn');
    const likeButton = newItem.querySelector('.mesto__like-btn');
    const deleteMesto = newItem.querySelector('.mesto');
    cardTitle.textContent = name;
    cardImage.src = link;
    cardImage.alt = name;
    function handleLikeButton() {
        likeButton.classList.toggle('mesto__like-btn_active');
    }
    function handleDeleteButton() {
        deleteMesto.remove();
    }
    function handleCardImage() {
        popupImage.src = link;
        popupImage.alt = name;
        popupSubtitle.textContent = name;
        openPopup(popupImageContainer);
    }
    likeButton.addEventListener('click', handleLikeButton);
    deleteButton.addEventListener('click', handleDeleteButton);
    cardImage.addEventListener('click', handleCardImage);
    return newItem;
};
//функция закрытия попапа по нажатию Esc
function handleEsc(evt) {
    if (evt.key === 'Escape') {
        closePopup(document.querySelector('.popup_opened'));
    }
};
//открывает попап
function openPopup(container) {
    document.addEventListener('keydown', handleEsc);
    container.classList.add('popup_opened');
};
//закрывает попап
function closePopup(container) {
    document.removeEventListener('keydown', handleEsc);
    container.classList.remove('popup_opened');
};
//обработчик формы редактирования профиля
function handleEditFormSubmit() {
    nameProfile.textContent = editFormName.value;
    aboutProfile.textContent = editFormAbout.value;
    closePopup(editPopup)
};
//добавляет новое изображение
function addNewItem() {
    listContainerElement.prepend(composeItem({
        name: addFormName.value,
        link: addFormLink.value
    }))
};
//обработчик формы добавления изображения
function handleAddFormSubmit() {
    addNewItem();
    closePopup(addPopup);
    addForm.reset();
};
//лисенер кнопки вызова формы редактирования профиля
editButton.addEventListener('click', () => {
    editFormName.value = nameProfile.textContent;
    editFormAbout.value = aboutProfile.textContent;
    setButtonState(editSubmit, editForm.checkValidity(), validationConfig);
    openPopup(editPopup);
});
//лисенер кнопки вызова формы добавления изображений
addButton.addEventListener('click', () => {
    setButtonState(addSubmit, addForm.checkValidity(), validationConfig);
    openPopup(addPopup)
});
//лисенер кнопок закрытия
closeButtonList.forEach(function (closeButtonList) {
    closeButtonList.addEventListener('click', function (evt) {
        closePopup(evt.target.closest('.popup'))
    })
});
//лисенер закрытия по щелчку по фону
popupContainerList.forEach((popupContainerList) => {
    popupContainerList.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popupContainerList)
        }
    })
});
//лисенер сабмита формы редактирования профиля
editForm.addEventListener('submit', handleEditFormSubmit);
//лисенер сабмита формы добавления изображений
addForm.addEventListener('submit', handleAddFormSubmit);

renderList();