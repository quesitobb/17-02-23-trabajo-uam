console.log("entramos");

var items = document.getElementsByClassName("item");
var cantidad = items.length;

console.log ("cantidad de listas " + cantidad);

var div=document.createElement("div");
div;
div.innerText="aprendiendo javascript";

var divuno=document.getElementById("uno");
divuno.appendChild(div);

var lista=document.getElementById("lista");

var hijo=document.createElement("li");
hijo.innerText="li nuevo";
lista.appendChild(hijo);


var parrafo=document.getElementById("par").style.color="#CC0033";
var lista=document.getElementById("lista").style.color="#33FF99";
