// Import the CSS
import "../../../assets/css/main.css";

// Import the components
import { openMenu } from "../components/openMenu";
import { playVideo } from "../components/playVideo";

// Wrapper the funcions
const initTheCode = () => {
	// This open and close the menu.
	openMenu();
  // When click in the video the image cover is removed.
  playVideo();
}

// Start de functions
window.addEventListener('load', (e) => {
	initTheCode();
	console.log('\n Hello there!!! \n Kenobi! I was waiting for you! \n');
});
