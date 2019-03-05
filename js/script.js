/*Попап обратной связи на главной*/ 

var link = document.querySelector(".link-modal-feedback");
var popup = document.querySelector(".modal-feedback");
var popupClose = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=e-mail]");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("login");
} catch (err) {                                     /*Проверяем работу localStorage */
    isStorageSupport = false;
}

link.addEventListener("click", function(evt) {  
    evt.preventDefault();                           /*Открываем попап */
    popup.classList.add("modal-show");   
    if (storage) {
        login.value = storage;
        email.focus();
    } else {
        login.focus();
    }
});

popupClose.addEventListener("click", function(evt) {
    evt.preventDefault();                           /*Закрываем попап */
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error"); 
});

form.addEventListener("submit", function(evt) {
    if (!login.value || !email.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");      /*Проверяем заполнение форм */
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", login.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-show") || map.classList.contains("modal-show") || catalogPopup.classList.contains("modal-show")) {  /*Закрыаем формы через ESC*/
            evt.preventDefault();
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
            map.classList.remove("modal-show");
            catalogPopup.classList.remove("modal-show");
        }
    }
}); 

/*Карта*/ 

var mapLink = document.querySelector(".map-link");
var map = document.querySelector(".modal-map");
var mapClose = map.querySelector(".modal-close");

mapLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    map.classList.add("modal-show");
})

mapClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    map.classList.remove("modal-show");
});

/*Попап в каталоге */ 

var catalogPopupLink = document.querySelectorAll(".to-buy");
var catalogPopup = document.querySelector(".modal-added-in-basket");
var catalogClose = catalogPopup.querySelector(".modal-close");

catalogPopupLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    catalogPopup.classList.add("modal-show");
})

catalogClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    map.classList.remove("modal-show");
});