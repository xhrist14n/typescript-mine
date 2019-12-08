// Import stylesheets
import './style.css';

// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

// CommonJS
const Swal = require('sweetalert2')

// Write TypeScript code!
const message = 'Hola Mundo';
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = '<h1 class="display-1 text-center text-primary">'+message+'</h1>';

Swal.fire({
  title: 'Error!',
  text: 'Do you want to continue',
  icon: 'error',
  confirmButtonText: 'Cool'
})