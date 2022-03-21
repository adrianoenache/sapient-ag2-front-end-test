// Open Menu
import { toggleCSSClass } from "../common/targetToggleCssClass";

const openMenu = () => {
	const $menuButtom = document.querySelector('#menu-button');
  $menuButtom.addEventListener('click', (e) => {
		toggleCSSClass("#menu", "-active");
	});
}

export { openMenu };
