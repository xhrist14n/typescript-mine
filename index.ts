// Import stylesheets
import './style.css';

// Write TypeScript code!
const message = 'Hola Mundo';
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = '<h1 class="display-1">'+message+'</h1>';