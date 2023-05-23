// este es el array que sostendra lso items de la lista de -to do-
let todoItems= [];

//Esta funcion creara un nuevo objeto -to do- 
//basado en el texto que fue ingresado en la
//entrada de texto y lo empujara hacia 
//el array "todoItems"
function addTodo (text) {
    const todo ={
        text,
        checked: false,
        id: Date.now(),
    };

    todoItems.push(todo);
    console.log(todoItems)
}

//seleciona el elemento form
const form = document.querySelector('.js-form');
//Agregar un detector de eventos de envío
//Add a submit event listener
form.addEventListener('submit', event => {
    // evita que la pagina se recargue
    event.preventDefault();
    // seleciona el texto ingresado en el formulario
    const form = document.querySelector('.js-form');

    //obten el valor de la entrada y remueves el espacio en blanco
    const text = input.value.trim();
    if (text !== '') {
        addTodo(text);
        imput.value = '';
        input.focus();
    }
});