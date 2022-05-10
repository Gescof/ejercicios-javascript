function Usuario(nombre, edad, genero, correoelectronico, contrasena) {
    let usuario = {};

    usuario.nombre = nombre;
    usuario.edad = edad;
    usuario.genero = genero;
    usuario.correoelectronico = correoelectronico;
    usuario.contrasena = contrasena;

    usuario.mostrarUsuario = function () {
        console.log("============================");
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Género: ${this.genero}`);
        console.log(`Correo electrónico: ${this.correoelectronico}`);
        console.log(`Contraseña: ${this.contrasena}`);
    }

    usuario.estaRegistrado = function (nombreDeUsuario, contrasena) {
        if (this.nombre == nombreDeUsuario && this.contrasena == contrasena) {
            console.log("Identificado correctamente");
            return true;
        }
        console.log("El nombre de usuario y/o la contraseña no están registrados");
        return false;
    }
    
    return usuario;
}

console.log("===========================");
console.log("Registro de Usuario:");

const usuario1 = Usuario("Gescof", 26, "Masculino", "gescof@mail.com", "1234abc");

usuario1.mostrarUsuario();

// Caso correcto
console.log("===========================");
console.log("Login de Usuario 1:");

const loginNombreDeUsuario1 = "Gescof";
const loginContraseniaDeUsuario1 = "1234abc";

console.log("Nombre de usuario: " + loginNombreDeUsuario1);
console.log("Contraseña: " + loginContraseniaDeUsuario1);

usuario1.estaRegistrado(loginNombreDeUsuario1, loginContraseniaDeUsuario1);

// Caso de error
console.log("===========================");
console.log("Login de Usuario 2:");

const loginNombreDeUsuario2 = "Gescof";
const loginContraseniaDeUsuario2 = "ABC1234";

console.log("Nombre de usuario: " + loginNombreDeUsuario2);
console.log("Contraseña: " + loginContraseniaDeUsuario2);

usuario1.estaRegistrado(loginNombreDeUsuario2, loginContraseniaDeUsuario2);

