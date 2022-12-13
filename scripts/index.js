const formElement = document.querySelector('.form');
let nameInput = formElement.querySelector('.form__input_profile_name');
let jobInput = formElement.querySelector('.form__input_profile_description');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

//=========OPEN MODAL EDIT PROFILE===========

const popup = document.querySelector('.popup');
const editBtn = document.querySelector('.profile__edit-btn');
const popupCloseBtn = document.querySelector('.popup__close-btn');

const popupOpen = () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  popup.classList.add('popup_opened');
}

editBtn.addEventListener('click', popupOpen);

const popupClose = () => {
  popup.classList.remove('popup_opened');
}

popupCloseBtn.addEventListener('click', popupClose);

//=========EDIT FORM PROFILE=============


function handleFormSubmit (evt) {
	evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  popupClose();
}

formElement.addEventListener('submit', handleFormSubmit);

