var element = document.getElementById('color-theme');
var modo = document.getElementById('mode');
var mail = document.getElementById('mail');
const envioForm = document.getElementById('envio-form');
var light_styles = 'index.css';
var dark_styles  = 'dark-index.css';


var theme = 'light';

function swapDayAndNight(event)
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

function denegar(event){
    event.preventDefault();
    const form = document.getElementById("myform");
    if(form.checkValidity()){
        form.reset();
        alert("Gracias por completar el formulario :) ")
    }
    else {
        alert("Error");
        form.reportValidity();
    }
}

envioForm.addEventListener('click', denegar)
modo.addEventListener("click", swapDayAndNight);