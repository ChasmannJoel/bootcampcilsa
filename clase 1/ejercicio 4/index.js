var element = document.getElementById('color-theme');
var modo = document.getElementById('mode');
var mail = document.getElementById('mail')
var light_styles = 'index.css';
var dark_styles  = 'dark-index.css';

var theme = 'light';

function swapDayAndNight()
{
    event.preventDefault();
    if (theme == 'light') {
        theme = 'dark';
        element.setAttribute('href', dark_styles);
        modo.innerText  = "Light Mode";
    } else {
        theme = 'light';
        element.setAttribute('href', light_styles);
        modo.innerText = "Dark mode";
    }
}

function denegar(){
    event.preventDefault();
    document.getElementById("myform").reset();
    alert("Gracias por completar el formulario :) ")
}

function validarEmail(valor) {
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
     alert("La dirección de email " + valor + " es correcta!.");
    } else {
     alert("La dirección de email es incorrecta!.");
    }   
  }

  mail.addEventListener('blur', function() {
    validarEmail(mail.value);
});