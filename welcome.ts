// Import stylesheets
import './style.css';

import $ from "jquery";

// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

// CommonJS
//const Swal = require('sweetalert2')

// Write TypeScript code!
let message:String = 'Hola Mundo';
message = message.toUpperCase();

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = '<h1 class="display-1 text-center text-primary text-uppercase">'+message+'</h1>';



$(
  function(){
    Swal.fire(
      {
        title: 'Exito!',
        text: 'Iniciando con Typescript',
        icon: 'success',
        confirmButtonText: 'Exacto'
      }
    );
  }
);