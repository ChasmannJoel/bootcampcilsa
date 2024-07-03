var element = document.getElementById('color-theme');
var modo = document.getElementById('mode');
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
}