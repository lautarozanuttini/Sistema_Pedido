function myOnLoad() {
    cargar_gusto()
    cantidad()
}
//Cargamos los gustos

function cargar_gusto() {
    const gustos = ["Jamon y queso", "Jamon, queso y nuez", "Bondiola", "Vacio", "Calabaza", "Cebolla caramelizada", "Pollo a la barbacoa", "Degustacion"];
    var select = document.getElementById("gustos");

    for (var i = 0; i < gustos.length; i++) {
        var optionGustos = document.createElement("option"); //Creamos la opcion
        optionGustos.innerHTML = gustos[i]; //Metemos el texto en la opción
        select.appendChild(optionGustos); //Metemos la opción en el select
    }
}

//Cargamos la cantidad de pedidos sobre un gusto

function cantidad() {
    var cantidad = document.getElementById("cantidad");

    for (var i = 0; i < 11; i++) {
        var option = document.createElement("option"); //Creamos la opcion
        option.innerHTML = [i]; //Metemos el texto en la opción
        cantidad.appendChild(option); //Metemos la opción en el select
    }
}

//agregamos un gusto 

var numeros = 0;

function agregar_gusto() {
    var cargaPedidos = document.getElementById("cargaPedidos");
    var nuevoGusto = cargaPedidos.cloneNode(true);
    nuevoGusto.id = "cargaPedidos";
    form.appendChild(nuevoGusto);
    sumarNumeros();
}

function sumarNumeros() {
    numeros = numeros + 1;
    console.log(numeros)
}

function eliminar_gusto() {
    if (numeros >= 1) {
        form.removeChild(form.children[13]);
        numeros = numeros - 1;
    } else {
        alert("No se puede eliminar más pedidos")
    }
}
