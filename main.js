class Producto {
    constructor(codigo, producto, descripcion, cantidad, costo){
        this.codigo = codigo
        this.producto = producto
        this.descripcion = descripcion
        this.cantidad = cantidad
        this.costo = costo
        this.siguiente = null
        this.anterior = null 
    }

    calcularPrecio(){
        let producto = this.cantidad
        let costoProducto = this.costo
        let costoTotal = producto * costoProducto
        return costoTotal
    }
}

class Almacen {
    constructor(){
        this.capacidad = []
        this.capacidadMaxima = 30
        this.size = 0
        this.start = null
        this.end = null
    }

    agregarProducto(producto){
        if(this.end == null){
            this.start = producto 
            this.end = producto
        } else {
            let pod = this.end
            while(pod.siguiente !== null) {
                pod = pod.siguiente 
            }
            pod.end = producto
        }
        this.size++
        return producto.producto
            
    }
    
    insertarProducto(producto, place){
        if(place<0 || this.capacidad.length >= this.size){
            return false
        }else{
            let pod = this.start
            let anterior 

            if(place==0){
                producto.siguiente = pod
                this.start = producto
            }else{
                for(let i=0; i<place; i++){
                    anterior = pod
                    pod = pod.siguiente
                }
                producto.siguiente = pod
                anterior.siguiente = producto
            }
            this.size++
        } return producto.producto
    }
    borrarProducto(idProducto){
        if(idProducto<0 || idProducto>this.size){
            return false
        }
        let pod = this.start
        let anterior = null 

        if(idProducto == 0){
            this.head = pod.siguiente
        }else{
            for(let i=0; i<idProducto; i++){
                anterior = pod
                pod = pod.siguiente
            }
            anterior.siguiente = pod.siguiente
        }
        this.size--
        return pod.producto
    }

    buscarProductoID(codPrducto){
        if(codPrducto<0 || codPrducto>=this.size){
            return false
        }
        let pod = this.start
        let anterior = null 
            if(codPrducto == 0){
                return pod.producto
            } else{
                for(let i=0; i<codPrducto; i++){
                    anterior = pod
                    pod = pod.siguiente
                }
                return pod.producto
            }
        }   

    listarProductos(){
        let pod = this.start
        let list = " "
        while(pod){
            list += pod.producto += ","
            pod = pod.siguiente
        }
        list += " Fin de lista"
        return list
        }
} // final

let pruebaAlmacen = new Almacen()
let a1 = new Producto(556,"agua","agua ciel", 8, 20)
let a2 = new Producto(557,"coca","coca-cola ", 2, 20)
let a3 = new Producto(558,"papas","sabritas", 2, 20)
let a4 = new Producto(559,"fruta","manzana", 1, 20)
console.log(a4)
console.log(pruebaAlmacen.agregarProducto(a1))
pruebaAlmacen.agregarProducto(a2)
pruebaAlmacen.agregarProducto(a3)
pruebaAlmacen.insertarProducto(a4,1)

console.log(pruebaAlmacen.buscarProductoID(3))
console.log(pruebaAlmacen.listarProductos())

///
    

var almacen = new Almacen()
var btnAgregar = document.querySelector("#btnAgregar")
var btnCalcular = document.querySelector("#btnCalcular")
var btnInsertar = document.querySelector("#btnInsertar")
var btnBorrar = document.querySelector("#btnBorrar")
var btnBuscar = document.querySelector("#btnBuscar")
var btnListar= document.querySelector("#btnListar")

let b1 = new Producto(556,"agua","agua ciel", 8, 20)
let b2 = new Producto(557,"coca","coca-cola ", 2, 20)
let b3 = new Producto(558,"papas","sabritas", 2, 20)
let b4 = new Producto(559,"fruta","manzana", 1, 20)
almacen.agregarProducto(b1)
almacen.agregarProducto(b2)
almacen.agregarProducto(b3)
almacen.agregarProducto(b4)

btnAgregar.addEventListener("click", () => { 
    let codigo = document.querySelector("#codigo").value
    let nombreProducto = document.querySelector("#nombre").value
    let descripcion = document.querySelector("#descripcion").value
    let cantidad = document.querySelector("#cantidad").value
    let precio = document.querySelector("#costo").value
    
    let producto = new Producto(codigo, nombreProducto, descripcion, cantidad, precio)
    alert(almacen.agregarProducto(producto) + " se ha añadido al almacen.")
})

btnCalcular.addEventListener("click", () => {
    let codigo = document.querySelector("#codigo").value
    let nombreProducto = document.querySelector("#nombre").value
    let descripcion = document.querySelector("#descripcion").value
    let cantidad = document.querySelector("#cantidad").value
    let precio = document.querySelector("#costo").value

    let producto = new Producto(codigo, nombreProducto, descripcion, cantidad, precio)
    alert(producto.calcularPrecio())
})
btnInsertar.addEventListener("click", () => {
    let codigo = document.querySelector("#codigo").value
    let nombreProducto = document.querySelector("#nombre").value
    let descripcion = document.querySelector("#descripcion").value
    let cantidad = document.querySelector("#cantidad").value
    let precio = document.querySelector("#costo").value
    let posicion = document.querySelector("#posicion").value

    let producto = new Producto(codigo, nombreProducto, descripcion, cantidad, precio)
    alert(almacen.insertarProducto(producto, posicion))
})
btnBorrar.addEventListener("click", () => {
    let codigo = document.querySelector("#codBorrar").value
    alert(almacen.borrarProducto(codigo))
})
btnBuscar.addEventListener("click", () => {
    let codigo = document.querySelector("#codBuscar").value
    alert(almacen.buscarProductoID(codigo))
})
btnListar.addEventListener("click", () => {
    let lista = document.querySelector("#lista1")
    let nuevoProd = document.createElement("li")
    nuevoProd.textContent = almacen.listarProductos()
    lista.appendChild(nuevoProd)
})