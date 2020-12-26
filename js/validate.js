const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-btn',
    inputInvalidClass: 'popup__input_state_error',
    submitButtonInvalidClass: 'popup__submit-btn_inactive',
    errorMessageClass: 'popup__input-error_active'
};
//показывает текст ошибки
function showError(form, input, config) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    error.classList.add(config.errorMessageClass);
    input.classList.add(config.inputInvalidClass);
};
//прячет текст ошибки
function hideError(form, input, config) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = "";
    error.classList.remove(config.errorMessageClass);
    input.classList.remove(config.inputInvalidClass);
};
//проверяет ввод на валидность
function checkInputValidity(form, input, config) {
    if (input.validity.valid) {
      hideError(form, input, config);
    } else {
      showError(form, input, config);
    }
};
//состояние кнопки сабмита
function setButtonState(button, isActive, config) {
    if (isActive === true) {
      button.classList.remove(config.submitButtonInvalidClass);
      button.disabled = false;
    } else {
      button.classList.add(config.submitButtonInvalidClass);
      button.disabled = 'disabled';
    }
};
//установка слушателей на поля ввода и кнопки сабмита
function setEventListener(form, config) {
  const inputList = form.querySelectorAll(config.inputSelector);
  const submitButton = form.querySelector(config.submitButtonSelector);
  inputList.forEach(input => {
    input.addEventListener('input', (evt) => {
      checkInputValidity(form, input, config);
      setButtonState(submitButton, form.checkValidity(), config);
    })
  })
};

function enableValidation(config) {
  const formList = document.querySelectorAll(config.formSelector);
  formList.forEach(form => {
    setEventListener(form, config);
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })
    const submitButton = form.querySelector(config.submitButtonSelector);
    setButtonState(submitButton, form.checkValidity(), config);
  })
};

enableValidation(validationConfig);