var numeros = [ 100, 200, 300, 400, 500, 600, 700, 800 ];
var numerosMas1 = numeros.map(function (numero) {
	return numero + 1;
})
console.log(numerosMas1);

var numerosMas2 = numeros.map(n => n + 2)
console.log(numerosMas2);
