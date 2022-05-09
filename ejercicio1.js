function dividir (num1, num2) {
    if (num1 > 0 && num2 > 0) {
        if (num1 > num2) {
            return num1 / num2;
        }
        console.log("El dividendo no es mayor que el divisor")
    }
    if (num1 <= 0) {
        console.log("El dividendo no es mayor que 0")
    } 
    if (num2 <= 0) {
        console.log("El divisor no es mayor que 0")
    }
}

const dividendo = 1;
const divisor = 2;
const resultado = dividir(dividendo, divisor);
console.log(`Dividimos ${dividendo} entre ${divisor}`)
console.log("El resultado de la divisón es: " + resultado)
