// Import stylesheets
import './style.css';
import $ from "jquery";
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
// Write TypeScript code!


$(
  function(){

    let message:String = 'Proyecto Uno';
    message = message.toUpperCase();
    console.log(message);
    var html:string = '<h1 class="display-1 text-center text-primary text-uppercase">'+message+'</h1>';
    var appDiv = $("#app");
    appDiv.html(html);

  }
);

$(
  function(){
    Swal.fire(
      {
        title: 'Exito!',
        text: 'Iniciando con Typescript',
        icon: 'success',
        confirmButtonText: 'Preciso'
      }
    );
  }
);