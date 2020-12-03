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
           producto.anterior = this.end
           this.end.siguiente = producto
           this.end =producto
        }
        this.size++
        return producto.producto
            
    }
    
    insertarProducto(producto, place){
        if(place<0 || place >= this.size){
            return false
        }else{
            let pod = this.start
            let anterior 

            if(place==0){
                producto.siguiente = pod
                pod.anterior = producto
                this.start = producto
            }else{
                for(let i=0; i<place; i++){
                    anterior = pod
                    pod = pod.siguiente
                }
                producto.siguiente = pod
                producto.anterior = anterior
                anterior.siguiente = producto
                pod.anterior = producto
            }
            this.size++
        } return producto.producto
    }

    borrarStart(){
        if (this.start == null){
            return false
        } else {
            let productoX = this.start.producto
            if(this.size == 1){
                this.start = null
                this.end = null
            }else{
                this.start = this.start.siguiente
                this.start.anterior = null
            }
            this.size--
            return productoX
        }
    }

    borrarEnd(){
        if (this.end == null){
            return false
        } else {
            let productoE = this.end.producto
            if(this.size == 1){
                this.start = null
                this.end = null
            }else{
                this.end = this.end.anterior
                this.end.siguiente = null
            }
            this.size--
            return productoE
        }
    }


    borrarProducto(codProducto){
        let productoIncg = this.buscarProductoID(codProducto)
        let anterior = null
        if(productoIncg==this.start){
            this.borrarStart()
            return productoIncg.producto
        } else if(productoIncg==this.end){
            this.borrarEnd()
            return productoIncg.producto
        } else{
            if(productoIncg !== false){
                anterior = productoIncg.anterior
                anterior.siguiente = productoIncg.siguiente
                productoIncg.siguiente.anterior = anterior
                this.size--
                return productoIncg.producto
            }
        }
        return false
    }

    buscarProductoID(codProducto){
        let pod = this.start
        let anterior = null
       
        if(codProducto == this.start.codigo){
            return pod 
        } else if(codProducto == this.end.codigo){
            pod = this.end
            return pod
        } else{
            while(pod !== null){
                if(pod.codigo == codProducto){
                    return pod
                }
                anterior = pod
                pod = pod.siguiente
            }
        }
        return false
        }   

    listarProductos(){
        let pod = this.start
        let list = " "
        while(pod){
            list += `${pod.producto}, `
            pod = pod.siguiente
        }
        list += " Fin de lista"
        return list
        }

    listarProductosInvertido(){
        let pod = this.end
        let list = " "
        while(pod){
            list += `${pod.producto}, `
            pod = pod.anterior
        }
        list += " Fin de lista"
        return list
        }


} 

// final 

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
var btnListarI= document.querySelector("#btnListarI")
var btnBorrarPrimero = document.querySelector("#btnBorrarPrimero")

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
    let mensaje = document.querySelector("#mensajeInicio")
    let prodA = almacen.agregarProducto(producto)
    mensaje.innerHTML = "Se ha añadido " + prodA
})

btnCalcular.addEventListener("click", () => {
    let codigo = document.querySelector("#codigo").value
    let nombreProducto = document.querySelector("#nombre").value
    let descripcion = document.querySelector("#descripcion").value
    let cantidad = document.querySelector("#cantidad").value
    let precio = document.querySelector("#costo").value

    let producto = new Producto(codigo, nombreProducto, descripcion, cantidad, precio)
    let mensaje = document.querySelector("#mensajeInicio")
    let prodA = producto.calcularPrecio()
    mensaje.innerHTML = prodA + " es el precio final de " + producto.producto 
})

btnInsertar.addEventListener("click", () => {
    let codigo = document.querySelector("#codigo").value
    let nombreProducto = document.querySelector("#nombre").value
    let descripcion = document.querySelector("#descripcion").value
    let cantidad = document.querySelector("#cantidad").value
    let precio = document.querySelector("#costo").value
    let posicion = document.querySelector("#posicion").value

    let producto = new Producto(codigo, nombreProducto, descripcion, cantidad, precio)
    let mensaje = document.querySelector("#mensajeInicio")
    let valor = almacen.insertarProducto(producto, posicion)
    if(valor!=false){
        mensaje.innerHTML = valor + " se ha insertado correctamente"
    } else{
        mensaje.innerHTML = "Puso una posición incorrecta"
    }
})

btnBorrar.addEventListener("click", () => {
    let codigo = document.querySelector("#codBorrar").value
    let mensaje = document.querySelector("#mensajeInicio")
    let valor = almacen.borrarProducto(codigo)
    if (valor == false){
        mensaje.innerHTML = "No se econtró el producto"
    }else{
        mensaje.innerHTML = "Se ha eliminado " + valor
    }
})

btnBorrarPrimero.addEventListener("click", () => {
    let mensaje = document.querySelector("#mensajeInicio")
    let valor = almacen.borrarStart()
    if (valor == false){
        mensaje.innerHTML = "No hay productos en el almacen"
    }else{
        mensaje.innerHTML = "Se ha eliminado " + valor
    }
})

btnBuscar.addEventListener("click", () => {
    let codigo = document.querySelector("#codBuscar").value
    let mensaje = document.querySelector("#mensajeInicio")
    let valor = almacen.buscarProductoID(codigo).producto
    if (almacen.buscarProductoID(codigo) == false){
        mensaje.innerHTML = "No se econtró el producto"
    }else{
        mensaje.innerHTML = "Se ha encontrado " + valor
    }
})

btnListar.addEventListener("click", () => {
    let lista = document.querySelector("#lista1")
    let nuevoProd = document.createElement("li")
    nuevoProd.textContent = almacen.listarProductos()
    lista.appendChild(nuevoProd)
})

btnListarI.addEventListener("click", () => {
    let lista = document.querySelector("#lista2")
    let nuevoProd = document.createElement("li")
    nuevoProd.textContent = almacen.listarProductosInvertido()
    lista.appendChild(nuevoProd)
})