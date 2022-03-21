// Import the CSS
import "../../../assets/css/main.css";

// Import the components
import { openMenu } from "../components/openMenu";
import { playVideo } from "../components/playVideo";
import { openWikiModal, closeWikiModal } from "../components/openCloseWikiModal";

// Wrapper the funcions
const initTheCode = () => {
	// This open and close the menu.
	openMenu();
  // When click in the video the image cover is removed.
  playVideo();
  // The button will open the modal and the overlay
  openWikiModal();
  // The button will close the modal and the overlay
  closeWikiModal();
}

// Start de functions
window.addEventListener('load', (e) => {
	initTheCode();
	console.log('\n Hello there!!! \n Kenobi! I was waiting for you! \n');
});
