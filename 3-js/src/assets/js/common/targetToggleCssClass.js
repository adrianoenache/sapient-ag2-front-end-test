// Target toggle CSS Class
import { toggleCSSClass } from './toggleCssClass';

const targetToggleCssClass = ($selectorOfInitiator, $selectorOfTarget, cssClass) => {
	const $menuButtom = document.querySelector($selectorOfInitiator);
  $menuButtom.addEventListener('click', (e) => {
		toggleCSSClass($selectorOfTarget, cssClass);
	});
}

export { targetToggleCssClass };

