


var nome = window.prompt('nome');
var cognome = window.prompt('cognome');
var eta = window.prompt('età');
var citta = window.prompt('citta');
var email = window.prompt('email');


document.getElementById('nome').innerHTML = nome;
document.getElementById('cognome').innerHTML = cognome;
document.getElementById('età').innerHTML = eta;
document.getElementById('città').innerHTML = citta;
document.getElementById('email').innerHTML = email;



let start = Date.now(1); // memorizziamo il momento di partenza

let_timer = setInterval(function (train) {
    
    let timePassed = Date.now(start) - start;

    if (timePassed >= 2000) {
        clearInterval(timer); 
        return;
    }

    
    draw(timePassed);

}, 20);


function draw(timePassed) {
    train.style.left = timePassed / 5 + 'px';
}


window.alert(nome+' '+cognome+' '+eta+' '+citta+' '+'('+email+')');
console.log(nome + ' ' + cognome + ' ' + eta + ' ' + citta + ' ' + '(' + email + ')');
document.write(nome + ' ' + cognome + ' ' + eta + ' ' + citta + ' ' + '(' + email + ')');