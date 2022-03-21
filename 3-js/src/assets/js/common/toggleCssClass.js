// Target Toggle CSS Class
const toggleCSSClass = (myTarget, cssClass) => {
	const $myTarget = document.querySelector(myTarget);
	$myTarget.classList.toggle(cssClass);
}

export { toggleCSSClass };
