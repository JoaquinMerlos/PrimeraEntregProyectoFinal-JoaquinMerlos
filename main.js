let prendas =[
    {"Tipo":"remera", "precioRemera":2600},
    {"Tipo":"campera", "precioCampera":4499},
    {"Tipo":"buzo", "precioBuzo":7899}
]

let sumaCompra = 0

let volverAComprar = "si"

function compra(){ 

    while (volverAComprar == "si"){ 

        let remera = prompt ("REMERA precio: $2600. Para agregar al carrito escriba 'si', para continuar a la próxima prenda, escriba 'siguiente':")
        let campera = prompt ("CAMPERA precio: $4500. Para agregar al carrito escriba 'si', para continuar a la próxima prenda, escriba 'siguiente':")
        let buzo= prompt ("BUZO precio: $7900. Para agregar buzo al carrito escriba 'si', para finalizar, escriba 'listo'.")  

        if(remera== "si" && campera =="siguiente" && buzo == "listo"){
            sumaCompra = prendas[0].precioRemera
            volverAComprar = "no"
        }
            
        else if(campera == "si" && remera =="siguiente" && buzo == "listo") {
            sumaCompra = prendas[1].precioCampera
            volverAComprar = "no"
        }

        else if (buzo =="si" && remera =="siguiente" && campera == "siguiente"){
            sumaCompra = prendas[2].precioBuzo
            volverAComprar = "no"
        }
    
        else if (remera == "si" && campera == "si" && buzo == "si"){
            sumaCompra = prendas[2].precioBuzo + prendas[1].precioCampera + prendas[0].precioRemera
            volverAComprar = "no"
        }
        else if (remera == "si" && campera == "si" && buzo == "listo"){
            sumaCompra = prendas[1].precioCampera + prendas[0].precioRemera
            volverAComprar = "no"
        }

        else if (remera == "si" && buzo == "si" && campera =="siguiente"){
            sumaCompra = prendas[0].precioRemera + prenda[2].precioBuzo
            volverAComprar = "no"
        }

        else if(campera == "si" && buzo == "si" && remera == "siguiente"){
            sumaCompra = prendas[1].precioCampera + prendas[2].precioBuzo
            volverAComprar = "no"
        }
        else {
         volverAComprar = prompt ("No se ha seleccionado ninguna prenda, si desea volver a seleccionar, escriba 'si', para salir, escriba 'no'")
        }
        
    }

    if (sumaCompra === 0){
        console.log("No compraste ninguna prenda")
    }
    else {
        console.log("El total a pagar es: $",sumaCompra)
    }

}
compra();