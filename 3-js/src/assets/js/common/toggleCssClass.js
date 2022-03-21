// Target Toggle CSS Class
const toggleCSSClass = (myTarget, cssClass) => {

	let $myTarget = document.querySelector(myTarget);

	$myTarget.classList.toggle(cssClass);

}

export { toggleCSSClass };
