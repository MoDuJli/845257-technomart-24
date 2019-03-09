var link = document.querySelectorAll(".modal-link");
var popup = document.querySelector(".modal");
var popupClose = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=e-mail]");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("login");
} catch (err) {                                  
    isStorageSupport = false;
}

for(var i=0;i<link.length;i++) {    
    link[i].addEventListener("click", function(evt) {  
        evt.preventDefault();                          
        popup.classList.add("modal-show");   
        if (storage) {
            login.value = storage;
            email.focus();
        } else {
            login.focus();
        }
    })
};

popupClose.addEventListener("click", function(evt) {
    evt.preventDefault();                         
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error"); 
});

if (form) {
    form.addEventListener("submit", function(evt) {
        if (!login.value || !email.value) {
            evt.preventDefault();
            popup.classList.remove("modal-error");      
            popup.offsetWidth = popup.offsetWidth;
            popup.classList.add("modal-error");
        } else {
            if (isStorageSupport) {
                localStorage.setItem("login", login.value);
            }
        }
    })
};

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {  
            evt.preventDefault();
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
}); 

/*Карта*/ 

var mapLink = document.querySelector(".map-link");
var map = document.querySelector(".modal-map");
if(map) {
    var mapClose = map.querySelector(".modal-close");

    mapLink.addEventListener("click", function(evt) {
        evt.preventDefault();
        map.classList.add("modal-show");
    })

    mapClose.addEventListener("click", function(evt) {
        evt.preventDefault();
        map.classList.remove("modal-show");
    });

    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            if (map.classList.contains("modal-show")) { 
                evt.preventDefault();
                map.classList.remove("modal-show");
            }
        }
    })
}; 