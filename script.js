// TEMA: ARTICULOS DE VENTA EN UNA LIBRERIA

// cod: Codigo de producto
// prod: producto
// cantidad: cantidad disponible de stock por producto
// precio: de venta por producto
// marca: del producto seleccionado
do{
// CREACION DEL CONSTRUCTOR
class Stock{
    constructor(cod, prod, precio, cantidad, marca){
        this.cod = cod;
        this.prod = prod;
        this.precio = precio;
        this.cantidad = cantidad;
        this.marca = marca;
    }
}

//STOCK DE ARTICULOS
const articulos = []

articulos.push(new Stock(01, "Cuaderno", 6, 48, "Standford"))
articulos.push(new Stock(02, "Cuaderno", 4.5, 24, "Loro"))
articulos.push(new Stock(03, "Cuaderno", 5, 24, "College"))
articulos.push(new Stock(04, "Coloresx12", 7, 24, "Faber castell"))
articulos.push(new Stock(05, "Coloresx24", 12, 12, "Layconsa"))
articulos.push(new Stock(06, "Tijera", 2, 20, "Layconsa"))
articulos.push(new Stock(07, "Borrador", 1, 20, "Layconsa"))
articulos.push(new Stock(08, "Plastilina", 9, 25, "Layconsa"))
articulos.push(new Stock(09, "PapelBondx500", 11, 15, "Report"))
articulos.push(new Stock(10, "Temperax7", 8, 12, "Faber castell"))
articulos.push(new Stock(11, "Lapicero", 1, 24, "Faber castell"))
articulos.push(new Stock(12, "Lapicero", 2.5, 24, "Pilot"))

console.log(articulos)

//AGREGAR ARTICULOS DE LIBRERIA
let newArticulo = 0
while (newArticulo < 2){
    let pregunta = new Stock(Number(prompt("Ingrese el código del producto")),
                            prompt("Ingrese el nombre del producto"),
                            Number(prompt("Ingrese el precio del producto")),
                            Number(prompt("Ingrese la cantidad del producto")),
                            prompt("Ingrese la marca del producto"))
    articulos.push(pregunta)
    console.log(articulos)
    newArticulo++
}
console.log(articulos)

//filtro
const filtrarPorCod = cod => articulos.filter(propiedades => propiedades.cod<= Number(cod))
let cod =prompt("Ingrese el cod de producto a filtrar: Mostrara la lista de productos hasta el cod elegido")
console.log(filtrarPorCod(cod))

//Ordenar de la A-Z
articulos.sort((a,b) => {
    if (a.prod > b.prod) {
        return 1;
        }
        if (a.prod < b.prod) {
        return -1;
        }
        return 0;
});
console.log(articulos)

}while(confirm("Desea agregar más articulos")){
    
}
alert("Se han guardado los cambios")