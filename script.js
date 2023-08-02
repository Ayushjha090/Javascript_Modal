"use strict";
const showModalBtns = document.querySelectorAll(".modal-btn");
// console.log(showModalBtns);

const modal = document.querySelector(".modal");
// console.log(modal);

const overlay = document.querySelector(".overlay");
// console.log(overlay);

const modalCloseBtn = document.querySelector(".close");
// console.log(modalCloseBtn);

let modalIsVisible = false;

const showModal = () => {
  if (!modalIsVisible) {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    modalIsVisible = true;
  } else {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    modalIsVisible = false;
  }
};

// Adding Click event listener on modal button divs
showModalBtns.forEach((btn) => {
  btn.addEventListener("click", showModal);
});

// Adding click event listener on close button
modalCloseBtn.addEventListener("click", showModal);
