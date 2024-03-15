import {iosVhFix} from './utils/ios-vh-fix';
import { initAccordions } from './modules/accordion/init-accordion';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  initAccordions();

  function equalizeHeaderHeights() {
    const headers = document.querySelectorAll('.links__list p');
    const maxHeight = Math.max(...Array.from(headers).map(header => header.offsetHeight));
    headers.forEach(header => header.style.height = maxHeight + 'px');
  }

  window.addEventListener('load', equalizeHeaderHeights);
  window.addEventListener('resize', equalizeHeaderHeights);

  const cookieSetButton = document.querySelector('.cookie-settings');
  const cookieSubmitButton = document.querySelector('.cookie-submit');

  if (cookieSetButton) {
    cookieSetButton.addEventListener('click', function () {
      document.querySelector('.cookie').classList.add('visually-hidden')
      document.querySelector('.cookie-set').classList.remove('visually-hidden')
    })
  }

  const cookieModal = document.querySelector('.modal-cookie');
  if (cookieModal) {
    if (cookieModal.classList.contains('active')) {
      cookieModal.querySelector('.cookie').classList.remove('visually-hidden');
      document.querySelector('.wrapper').classList.add('dark');
    }
  }


  const cookieButtons = document.querySelector('.cookies-form-buttons');
  if (cookieButtons) {
    const allowButton = cookieButtons.querySelector('button[type="button"]');
    if (allowButton) {
      allowButton.addEventListener('click', function () {
        document.querySelectorAll('input[name="cookie-types"]').forEach(i => {
          i.checked = true;
        });
      })
    }

    const saveButtons = document.querySelectorAll('button[type="submit"]');
    if (saveButtons) {
      saveButtons.forEach(saveButton => {
        saveButton.addEventListener('click', function (evt) {
          evt.preventDefault()
          document.querySelector('.wrapper').classList.remove('dark');
          cookieModal.classList.remove('active');
          cookieModal.querySelector('.cookie').classList.add('visually-hidden');
          cookieModal.querySelector('.cookie-set').classList.add('visually-hidden');
        })
      });
    }
  }



  // ---------------------------------

});



// // Получаем ссылки на элементы меню и контейнера
// const menu = document.querySelector('.menu');
// const menuContainer = document.querySelector('.menu-container');

// // Функция для закрытия меню
// function closeMenu(event) {
//   // Проверяем, что клик был сделан вне области меню
//   if (!menu.contains(event.target) && !menuContainer.contains(event.target)) {
//     // Закрываем меню (например, удаляем класс 'open')
//     menu.classList.remove('open');
//     // Удаляем обработчик события с документа
//     document.removeEventListener('click', closeMenu);
//   }
// }

// // Функция для открытия меню
// function openMenu() {
//   // Открываем меню (например, добавляем класс 'open')
//   menu.classList.add('open');
//   // Добавляем обработчик события клика на документ
//   document.addEventListener('click', closeMenu);
// }

// // Вызываем функцию openMenu при необходимости
// // (например, при клике на кнопку или ссылку)
