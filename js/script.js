const feedbackLink = document.querySelector(".contacts-button");
const contactPopup = document.querySelector(".modal");
const contactClose = loginPopup.querySelector(".modal-close");


feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactPopup.classList.add("modal-show");
});

contactClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactPopup.classList.remove("modal-show");
});
