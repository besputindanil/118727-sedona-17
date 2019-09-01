var form = document.querySelector(".feedback__form");
var link = form.querySelector(".feedback__button");
var successPopup = document.querySelector(".success-popup");
var failurePopup = document.querySelector(".failure-popup");
var successClose = successPopup.querySelector(".success-popup__button");
var failureClose = failurePopup.querySelector(".failure-popup__button");
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (form.checkValidity()) {
    successPopup.classList.add("popup--show");
  } else {
    failurePopup.classList.add("popup--show");
  }
});
successClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  successPopup.classList.remove("popup--show");
});
failureClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  failurePopup.classList.remove("popup--show");
});
