// Target toggle CSS Class
import { toggleCSSClass } from './toggleCssClass';

const targetToggleCssClass = ($selectorOfInitiator, $selectorOfTarget, cssClass) => {

	let $target = document.querySelector($selectorOfInitiator);

	$target.addEventListener('click', (e) => {
		toggleCSSClass($selectorOfTarget, cssClass);
	});

}

export { targetToggleCssClass };
