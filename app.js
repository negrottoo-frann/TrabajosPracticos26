let nombres = [ "alvaro" , "ignacio" , "bruno"]
nombres [1] = "leon"
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
