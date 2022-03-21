// Open Menu
import { targetToggleCssClass } from "../common/targetToggleCssClass";

const playVideo = () => {
  targetToggleCssClass('#video-player', '#video-cover', '-inactive');
}

export { playVideo };
