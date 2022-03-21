// Targets toggle CSS Class
const targetsToggleCssClass = ($selectorOfTargets, cssClass) => {

  let _cssClass = cssClass;
  let $targets = document.querySelectorAll($selectorOfTargets);

  const removeCssClass = () => {
    $targets.forEach((e) => {
      e.classList.remove(_cssClass);
    });
  }

  $targets.forEach((e) => {
    e.addEventListener('click', () => {
      removeCssClass();
      e.classList.add(_cssClass);
    });
  });

}

export { targetsToggleCssClass };
