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

//=========OPEN/CLOSE POPUP==================

const openPopup = (item) => {
  item.classList.add('popup_opened');
};

const closePopup = (item) => {
  item.classList.remove('popup_opened');
};

const popups = document.querySelectorAll('.popup');
const closeButtons = document.querySelectorAll('.popup__close-btn');

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

//=========OPEN MODAL EDIT PROFILE===========

const popupProfile = document.querySelector('.popup_modal_profile');
const editBtn = document.querySelector('.profile__edit-btn');

const openPopupProfile = () => {
  nameInput.value = profileName.textContent;
  descriptionInput.value = profileDescription.textContent;
  openPopup(popupProfile);
}

editBtn.addEventListener('click', openPopupProfile);

//=========EDIT FORM SUBMIT PROFILE=============

function handleProfileFormSubmit (evt) {
	evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileDescription.textContent = descriptionInput.value;
  closePopup(popupProfile);
}

formProfile.addEventListener('submit', handleProfileFormSubmit);

///============ADD PLACE MODAL OPEN==================

const addPlaceBtn = document.querySelector('.profile__add-btn');
const popupAddPlace = document.querySelector('.popup_modal_place');

const openPopupAddPlace = () => {
  openPopup(popupAddPlace);
}

addPlaceBtn.addEventListener('click', openPopupAddPlace);

///=========LIKE BTN===========

const likeCard = (e) => {
  e.target.classList.toggle('card__like-btn_active');
};

///===========REMOVE CARD================

const removeCard = (e) => {
  const card = e.target.closest('.card');
  card.remove();
};

///=========IMAGE POPUP OPEN==================

const cardImage = document.querySelector('.card__img');
const popupImage = document.querySelector('.popup_modal_image');
const popupCardImage = document.querySelector('.popup__card-image');
const popupCardTitle = document.querySelector('.popup__image-title');

const openPopupImage = (e) => {
  popupCardImage.src = e.target.src;
  popupCardImage.alt = e.target.alt;
  popupCardTitle.textContent = e.target.alt;
  openPopup(popupImage);
}

///=======CARD TEMPLATE RENDER===========

const cardsContainer = document.querySelector('.elements__items');

const cardTemplate = document.querySelector('#cardTemplate')
  .content
  .querySelector('.card');

const createCard = (name, link) => {
  const card = cardTemplate.cloneNode(true);

  card.querySelector('.card__img').src = link;
  card.querySelector('.card__img').alt = name;
  card.querySelector('.card__name').textContent = name;

  card.querySelector('.card__like-btn').addEventListener('click', likeCard);
  card.querySelector('.card__trash-btn').addEventListener('click', removeCard);
  card.querySelector('.card__img').addEventListener('click', openPopupImage);

  return card;
};

const renderCards = (cards) => {
  const fragment = document.createDocumentFragment();
  for(let i = 0; i < cards.length; i++) {
    const cardElement = createCard(initialCards[i].name, initialCards[i].link);
    fragment.append(cardElement);
  }

  cardsContainer.append(fragment);
};

renderCards(initialCards);

///========ADD NEW CARD=============

const formAddPlace = document.querySelector('.form_modal_place');
const inputPlaceName = document.querySelector('.form__input_place_name');
const inputPlaceLink = document.querySelector('.form__input_place_link');

function createAddNewPlaceCard() {
  const name = inputPlaceName.value;
  const link = inputPlaceLink.value;
  cardsContainer.insertAdjacentElement('afterBegin', createCard(name, link));
  inputPlaceName.value = '';
  inputPlaceLink.value = '';
}

function handlePlaceFormSubmit (evt) {
	evt.preventDefault();
  createAddNewPlaceCard();
  closePopup(popupAddPlace);
}

formAddPlace.addEventListener('submit', handlePlaceFormSubmit);
