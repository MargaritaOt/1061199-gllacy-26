var form = document.querySelector('#js-button');
var popup = document.querySelector('.modal-direction');
var close = popup.querySelector('.form-close');
var nameUser = popup.querySelector('[name=nameuser]');
var emailUser = popup.querySelector('[name=emailuser]');

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem('emailuser');
} catch (err) {
  isStorageSupport = false;
}

form.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');
  if (storage) {
     emailUser.value = storage;
   }
  nameUser.focus();
});

close.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
});

form.addEventListener('submit', function(evt) {
  if (!nameUser.value || !emailUser.value) {
    evt.preventDefault();
    console.log('Нужно ввести ваше имя и почту');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('emailuser', emailUser.value);
    }
  }
});
