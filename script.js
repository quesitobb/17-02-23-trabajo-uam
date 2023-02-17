console.log("suma");
var a=1;
var b=2;
var r=a+b;
console.log("resultado: " + r)

console.log("multiplicacion");
var a=4;
var b=7;
var r=a*b;
console.log("resultado: " + r)

console.log("raiz cuadrada con decimales");
var raiz = Math.sqrt(1244);
console.log("resultado: " + raiz);

console.log("raiz cuadrada sin decimales");
var f= Math.trunc(raiz)
console.log("resultado: " + f)

console.log("Los numero primos hasta el 500.000 son: " + numerosPrimos);
var c = 10;
var j = 2;
var numerosPrimos = [];

for (; j < c; j++) {

  if (primo(j)) {
    numerosPrimos.push(j);
  }
  
}

console.log("Los numero primos hasta el 500.000 son: " + numerosPrimos);

function primo(numero) {

  for (var i = 2; i < numero; i++) {

    if (numero % i === 0) {
      return false;
    }

  }

  return numero !== 1;
}





