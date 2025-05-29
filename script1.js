const overlay = document.getElementById("overlay");
const formPopup = document.getElementById("formPopup");
const successPopup = document.getElementById("successPopup");

document.querySelectorAll('.section01__btn, .header__btn, .program-btn').forEach(button => {
  button.addEventListener('click', () => {
    formPopup.style.display = "block";
    successPopup.style.display = "none";
    overlay.style.display = "block";

    document.body.classList.add("popup-open");
  });
});

document.getElementById("jazzForm").addEventListener("submit", function (e) {
  e.preventDefault();
  formPopup.style.display = "none";
  successPopup.style.display = "block";

  // popup-open останется, так как successPopup всё ещё виден
});

const closeAllPopups = () => {
  formPopup.style.display = "none";
  successPopup.style.display = "none";
  overlay.style.display = "none";
  document.body.classList.remove("popup-open");
};

overlay.addEventListener('click', closeAllPopups);

document.querySelectorAll(".popup-close").forEach((btn) => {
  btn.addEventListener("click", closeAllPopups);
});


