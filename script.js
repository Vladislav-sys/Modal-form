
const modal = document.querySelector(".modal");
const openBtn = document.querySelector(".container .btn");

const closeBtn = modal.querySelector(".modal__close-btn")
const modalForm = modal.querySelector(".modal__form");

openBtn.addEventListener("click", function () {
    modal.classList.add("modal--open");
});


closeBtn.addEventListener("click", function () {
    modal.classList.remove("modal--open");
});

modalForm.addEventListener("submit", function(e) {
    e.preventDefault();

    setTimeout(() => {  

        const title = modal.querySelector(".modal__title");
        const text = modal.querySelector(".modal__text");

        const btn = modal.querySelector(".modal__submit-btn");

        title.textContent = "Thank You!";
        text.textContent = "Thank you for subscribing to our exclusive newsletter.";

        modalForm.remove();
        btn.remove();

    }, 300)
    
});


