function Supermercado(nombre, anoDeFundacion, proveedores, activo) {
    let supermercado = {};

    supermercado.nombre = nombre;
    supermercado.anoDeFundacion = anoDeFundacion;
    supermercado.proveedores = proveedores;
    supermercado.activo = activo;

    supermercado.mostrarSupermercado = function () {
        console.log("============================");
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Año de fundación: ${this.anoDeFundacion}`);
        console.log(`Proveedores: ${this.proveedores}`);
        console.log(`Activo: ${this.activo}`);
    }

    supermercado.cambiarNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    }

    supermercado.inaugurar = function () {
        this.activo = true;
    }

    supermercado.cerrar = function () {
        this.activo = false;
    }

    supermercado.contratarProveedor = function (proveedor) {
        this.proveedores.push(proveedor);
    }

    return supermercado;
}
const nombreSupermercado = "Mercadona";
const anoSupermercado = 1977;
const proveedorSupermercado = ["Hacendado", "Nestlé", "Rexona", "H&S", "Carnicerías Paco"];
const activoSupermercado = true;
const supermercado = Supermercado(nombreSupermercado, anoSupermercado, proveedorSupermercado, activoSupermercado);

supermercado.mostrarSupermercado();

supermercado.cambiarNombre("Mercadona 2.0");

supermercado.mostrarSupermercado();

supermercado.cerrar();

supermercado.mostrarSupermercado();

supermercado.inaugurar();

supermercado.mostrarSupermercado();

supermercado.contratarProveedor("Telepizza");

supermercado.mostrarSupermercado();

