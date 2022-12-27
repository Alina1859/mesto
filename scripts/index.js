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


const formProfile = document.querySelector('.form_modal_profile');
const nameInput = formProfile.querySelector('.form__input_profile_name');
const descriptionInput = formProfile.querySelector('.form__input_profile_description');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

//=========OPEN MODAL EDIT PROFILE===========

const popupProfile = document.querySelector('.popup_modal_profile');
const editBtn = document.querySelector('.profile__edit-btn');

const openPopupProfile = () => {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
  popupProfile.classList.add('popup_opened');
}

editBtn.addEventListener('click', openPopupProfile);

//=========EDIT FORM SUNBIT PROFILE=============

function handleProfileFormSubmit (evt) {
	evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closePopup();
}

formProfile.addEventListener('submit', handleProfileFormSubmit);

///============ADD PLACE MODAL OPEN==================

const addPlaceBtn = document.querySelector('.profile__add-btn');
const popupAddPlace = document.querySelector('.popup_modal_place');

const popupAddPlaceOpen = () => {
  popupAddPlace.classList.add('popup_opened');
}

addPlaceBtn.addEventListener('click', popupAddPlaceOpen);

///===========ClOSE POPUP===================

const popup = document.querySelectorAll('.popup');
const popupCloseBtns = document.querySelectorAll('.popup__close-btn');

const closePopup = () => {
  popup.forEach(item => {
    item.classList.remove('popup_opened');
  });
}

popupCloseBtns.forEach(btn => {
  btn.addEventListener('click', closePopup);
});


