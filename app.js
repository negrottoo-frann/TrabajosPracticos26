let nombres = [ "alvaro" , "ignacio" , "bruno"]
let notasprog = [90, 75, 80]
let notased = [100, 50, 100]
let dni = ["67", "6767" , "6" ]

let InputDni = document.querySelector ("#inputDNI")
let boton = document.querySelector ("button")
let p = document.querySelector ("p")

boton.onclick = function () {}
let pos = dni.indexOf (InputDni.value)
p.textContent = "el estudiante es" + nombres [pos] + "tiene un" + notasprog [pos]


nombres [3] = "facu"
//agregar al final de la lista
nombres.push ("galo")
//agregar al inicio
nombres.unshift ("barrozo")
//eliminar 1er elemento
nombres.shift [0]
//eliminar ultimo elemento
nombres.pop

h1. textContent = nombres [0] + "y" + nombres [1] + "estan aprobados"
//cantidad de elementos
nombres.length



b1.onclick = function () {
    nombres.unshift ()
}
