const feedbackLink = document.querySelector(".contacts-button");
const contactPopup = document.querySelector(".modal");
const contactClose = contactPopup.querySelector(".modal-close");
const popupOverlay = document.querySelector(".overlay");


feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactPopup.classList.add("modal-show");
  popupOverlay.classList.add("modal-show");
});

contactClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactPopup.classList.remove("modal-show");
  popupOverlay.classList.remove("modal-show");
});
