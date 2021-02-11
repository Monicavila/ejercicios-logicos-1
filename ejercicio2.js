// 2. Arreglo de múltiplos
// Crea una función que toma dos números como argumentos (num, length) y regresa un arreglo de múltiplos de num hasta que la longitud del arreglo alcance el valor de length.

// Por ejemplo: 
// Input = (7, 5)
// Output = [7, 14, 21, 28, 35]

// Input = (12, 10)
// Output = [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]


function arrayOfMultiples (num, length) {
	let i = 1;
    let array = [];

    while(i <= length) {
        let multlipy = num * i;
        array.push(multlipy);
        i++;
    }
	return array;
}

module.exports = {
    arrayOfMultiples
}