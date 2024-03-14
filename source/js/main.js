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

  // ---------------------------------

});
