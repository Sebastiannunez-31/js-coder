

const items = document.getElementById('items')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment(); //* fragment evita reflow o que se recorra de manera innecesaria un arreglo
let carrito = {}


document.addEventListener('DOMContentLoaded', () => {
    fetchData();
})

items.addEventListener('click', e => {

    addCarrito(e)
})

const fetchData = async () => {

    try {

        const res = await fetch('../../api.json');
        const data = await res.json();
        //console.log(data);
        pintarCards(data);
    } catch (error) {
        console.log(error)
    }
}

const pintarCards = data => {

    data.forEach(item => {
        templateCard.querySelector('h5').textContent = item.title
        templateCard.querySelector('p').textContent = item.precio
        templateCard.querySelector('img').setAttribute("src", item.url);
        templateCard.querySelector('.btn-dark').dataset.id = item.id;
        const clone = templateCard.cloneNode(true);//*clona el elemento para ser agregado al fragment
        fragment.appendChild(clone)//* fragment evita reflow, asi no se recorre innecesariamente el arreglo
    });

    items.appendChild(fragment);

}




const addCarrito = e => {
    /*  console.log(e.target)
     console.log(e.target.classList.contains('btn-dark')); */
    if (e.target.classList.contains('btn-dark')) {//*target que detecta el boton- devuelve un valor true si se preciona en la clase indicada(boton)
        //  console.log(e.target.parentElement)//*empuja el contenido completo del div card al carrito
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()//* evita que el evento se propague a las demas etiquetas del html(si se hace click en precio u otro)
}

const setCarrito = objeto => {

    const producto = {
        id: objeto.querySelector('.btn-dark').dataset.id,
        tittle: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('p').textContent,
        cantidad: 1
    }

    if (carrito.hasOwnProperty(producto.id)) {//*si se detecta que se agrega el mismo producto lo aumentara en uno en su cantidad total
        producto.cantidad = carrito[producto.id].cantidad + 1

    
    }

    carrito[producto.id] = { ...producto }//*sprite operations - buscar mas informacion 
    //* se accede a la informacion de carrito y se copia

    console.log(carrito)
}