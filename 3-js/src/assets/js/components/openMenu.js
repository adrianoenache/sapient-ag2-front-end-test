// Open Menu
import { targetToggleCssClass } from "../common/targetToggleCssClass";

const openMenu = () => {
  targetToggleCssClass('#menu-button', '#menu', '-active');
}

export { openMenu };
