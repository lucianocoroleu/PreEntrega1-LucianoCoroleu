const BUZO = 5500;
const REMERA = 1200;
const CAMISA = 2500;
const PANTALON = 3200;
let cantidad;
let opcion;
let total = 0;
let agregar;

function calculo(total, precio, cantidad) {
  return total + precio * cantidad;
}

function mostrarPrecioTotal() {
  alert("El total a pagar de su compra es de: $" + total);
}

alert("Bienvenido a Auténtico. Haz clic en aceptar para ver nuestro catálogo.");

do {
  opcion = parseInt(prompt(
    "Indica la opción correspondiente a la prenda que deseas agregar al carrito:\n" +
    "1. Buzo: $" + BUZO + "\n" +
    "2. Remera: $" + REMERA + "\n" +
    "3. Camisa: $" + CAMISA + "\n" +
    "4. Pantalón: $" + PANTALON));

  if (isNaN(opcion) || opcion < 1 || opcion > 4) {
    alert("Ingresa una opción válida del catálogo (1-4)");
    continue;
  }

  cantidad = parseInt(prompt("Ingrese la cantidad"));

  if (isNaN(cantidad) || cantidad <= 0) {
    alert("Ingresa una cantidad válida (mayor que 0)");
    continue;
  }

  switch (opcion) {
    case 1:
      total = calculo(total, BUZO, cantidad);
      break;

    case 2:
      total = calculo(total, REMERA, cantidad);
      break;

    case 3:
      total = calculo(total, CAMISA, cantidad);
      break;

    case 4:
      total = calculo(total, PANTALON, cantidad);
      break;
  }

  agregar = prompt("¿Qué deseas hacer?\n1. Finalizar\n2. Seguir comprando");

  if (agregar === "1") {
    mostrarPrecioTotal();
    total = 0;
    agregar = "no";
  } else if (agregar !== "2") {
    alert("Ingresa una opción válida (1 o 2)");
    agregar = "no";
  }

} while (agregar === "2");

alert("Gracias por tu compra. ¡Hasta luego!");