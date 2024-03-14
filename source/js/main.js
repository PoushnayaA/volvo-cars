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

  // setTimeout(initAccordions(), 1000);

  // ---------------------------------

});
