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

///=========LIKE BTN===========

const likedCard = (e) => {
  e.target.classList.toggle('card__like-btn_active');
};

///===========REMOVE CARD================

const removeCard = (e) => {
  e.target.parentElement.remove();
};

///=========IMAGE POPUP OPEN==================

const cardImage = document.querySelector('.card__img');
const popupImage = document.querySelector('.popup_modal_image');
const popupCardImage = document.querySelector('.popup__card-image');
const popupCardTitle = document.querySelector('.popup__image-title');

const popupImageOpen = (e) => {
  popupCardImage.src = e.target.src;
  popupCardImage.alt = e.target.alt;
  popupCardTitle.textContent = e.target.alt;
  popupImage.classList.add('popup_opened');
}

///=======CARD TEMPLATE RENDER===========

const cardsContainer = document.querySelector('.elements__items');

const cardTemplate = document.querySelector('#cardTemplate')
  .content
  .querySelector('.card');

const createCard = (data) => {
  const { name, link } = data;
  const card = cardTemplate.cloneNode(true);

  card.querySelector('.card__img').src = link;
  card.querySelector('.card__img').alt = name;
  card.querySelector('.card__name').textContent = name;

  card.querySelector('.card__like-btn').addEventListener('click', likedCard);

  card.querySelector('.card__trash-btn').addEventListener('click', removeCard);

  card.querySelector('.card__img').addEventListener('click', popupImageOpen);

  return card;
};

const renderCards = (cards) => {
  const fragment = document.createDocumentFragment();
  for(let i = 0; i < cards.length; i++) {
    const cardElement = createCard(initialCards[i]);
    fragment.append(cardElement);
  }

  cardsContainer.append(fragment);
};

renderCards(initialCards);

///========ADD NEW CARD=============

const formAddPlace = document.querySelector('.form_modal_place');
const inputPlaceName = document.querySelector('.form__input_place_name');
const inputPlaceLink = document.querySelector('.form__input_place_link');

function handlePlaceFormSubmit (evt) {
	evt.preventDefault();
  let name = inputPlaceName.value;
  let link = inputPlaceLink.value;
  createNewCard(name, link);
  closePopup();
}

const createNewCard = (name, link) => {
  const card = cardTemplate.cloneNode(true);

  card.querySelector('.card__img').src = link;
  card.querySelector('.card__img').alt = name;
  card.querySelector('.card__name').textContent = name;

  card.querySelector('.card__like-btn').addEventListener('click', likedCard);

  card.querySelector('.card__trash-btn').addEventListener('click', removeCard);

  card.querySelector('.card__img').addEventListener('click', popupImageOpen);

  return cardsContainer.insertAdjacentElement('afterBegin', card);

};

formAddPlace.addEventListener('submit', handlePlaceFormSubmit);
