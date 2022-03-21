// Open Menu
import { targetToggleCssClass } from "../common/targetToggleCssClass";

const openWikiModal = () => {
  targetToggleCssClass('#button-modal', '.modal-wiki', '-active');
  targetToggleCssClass('#button-modal', 'body', '-overlay');
}

const closeWikiModal = () => {
  targetToggleCssClass('#close-modal', '.modal-wiki', '-active');
  targetToggleCssClass('#close-modal', 'body', '-overlay');
}

export { openWikiModal, closeWikiModal };
