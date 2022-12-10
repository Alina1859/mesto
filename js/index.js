//=========OPEN MODAL EDIT PROFILE===========

const popup = document.querySelector('.popup');
const editBtn = document.querySelector('.profile__edit-btn');
const popupCloseBtn = document.querySelector('.popup__close-btn');

const popupOpen = () => {
  popup.classList.add('popup_opened');
}

editBtn.addEventListener('click', popupOpen);

const popupClose = () => {
  popup.classList.remove('popup_opened');
}

popupCloseBtn.addEventListener('click', popupClose);

//=========EDIT FORM PROFILE=============

let formElement = document.querySelector('.form__edit-profile');

function handleFormSubmit (evt) {
	evt.preventDefault();

	let nameInput = formElement.querySelector('.form__input-profile-name');
	let jobInput = formElement.querySelector('.form__input-profile-description');
  let profileName = document.querySelector('.profile__name');
  let profileDescription = document.querySelector('.profile__description');

  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
}

formElement.addEventListener('submit', handleFormSubmit);

//=======SUBMIT CLOSE POPUP=============

const submitBtn = document.querySelector('.popup__submit');

submitBtn.addEventListener('click', popupClose);
submitBtn.addEventListener('keydown', function(event) {
  if(event.keyCode === '13') {
    popupClose();
  }
});
