//Cambiando el contenido del elemento html
const parrafo = document.querySelector(".parrafo");
parrafo.textContent = "Parrafo dinámico con una constante"

//Agregando un elemento html
const agregarParrafo = document.querySelector(".parrafo");
agregarParrafo.innerHTML = "<b>Elemento agregado</b> dentro de un parrafo"

//Agregando una clase
agregarParrafo.classList.add("clase-adicional");

//Documente.createELement creando elementos html
document.body.onload = addElement;

function addElement(){
    /*Crearemos un nuevo elemento y añadiremos elementos*/
    let nuevoDiv = document.createElement("div")
    let nuevContent = document.createTextNode("Hola QUe tal")
    nuevoDiv.appendChild(nuevContent)

    let currentDiv = document.getElementById("div1")
    document.body.insertBefore(nuevoDiv,currentDiv);
}

const lista = document.getElementById("lista_dinamica")
const arrayItem = ["Item1","Item2","Item3","Item4"]
const fragment = document.createDocumentFragment();

arrayItem.forEach((item)=>{
    const li = document.createElement("li")
    li.textContent = item;

    /*Nos devuelve el primer elemento*/
    const referenceNode = fragment.firstChild;
    console.log("primer li",referenceNode)

    /*Si la referencia es nula el new node se insertara al final de la lista de nodos*/
    fragment.insertBefore(li,referenceNode);
});
lista.appendChild(fragment);