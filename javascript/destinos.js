

const cards = document.getElementById('cards')
const items = document.getElementById('items')
const footer = document.getElementById('footerCarrito')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment(); //* fragment evita reflow o que se recorra de manera innecesaria un arreglo
const templateCanvas = document.getElementById('template-canvas').content//*template footer
const templateCarrito = document.getElementById('template-carrito').content
let carrito = {}


document.addEventListener('DOMContentLoaded', () => {
    fetchData();

    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        pintarCarrito()

    }
})

cards.addEventListener('click', e => {

    addCarrito(e)


})

items.addEventListener('click', e => {
    btnAccion(e)
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

    cards.appendChild(fragment);

}




const addCarrito = e => {
    /*  console.log(e.target)
     console.log(e.target.classList.contains('btn-dark')); */
    if (e.target.classList.contains('btn-dark')) {//*target que detecta el boton- devuelve un valor true si se preciona en la clase indicada(boton)
        //  console.log(e.target.parentElement)//*empuja el contenido completo del div card al carrito
        setCarrito(e.target.parentElement)
        //*alert de producto agregado

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
        producto.cantidad = carrito[producto.id].cantidad + 1;


    }

    carrito[producto.id] = { ...producto }//*spread operations 
    //* se accede a la informacion de carrito y se copia


    const Toast = Swal.mixin({
        toast: true,
        position: 'top-start',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'success',
        title: `Has agregado ${producto.tittle} al carrito`
    })
    pintarCarrito()


}


const pintarCarrito = () => {

    /*  console.log(carrito); */
    items.innerHTML = ''
    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector('th').textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent = producto.tittle
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id
        templateCarrito.querySelector('.btn-warning').dataset.id = producto.id
        templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio


        const clone = templateCarrito.cloneNode(true)

        fragment.appendChild(clone)


    })

    items.appendChild(fragment)

    pintarCanvas()

    localStorage.setItem('carrito', JSON.stringify(carrito))//* set carrito en el localStorage

}


const pintarCanvas = () => {//* pinta el producto en el carrito con la cantidad y el detalle de este

    footer.innerHTML = ''

    if (Object.keys(carrito).length === 0) {//*indica si el carrito esta vacio 
        footer.innerHTML = `<th scope="row" colspan="5">Carrito vacío - Compra y disfruta tu destino</th>`

        return

    }

    const totalQuantity = Object.values(carrito).reduce((acc, { cantidad }) => acc + cantidad, 0)//*suma la cantidad de productos
    const totalPrice = Object.values(carrito).reduce((acc, { cantidad, precio }) => acc + cantidad * precio, 0)//*suma la cantidad y el precio total del producto

    templateCanvas.querySelectorAll('td')[0].textContent = totalQuantity
    templateCanvas.querySelector('span').textContent = totalPrice/* 
    templateCanvas.querySelector('p').textContent = innerHTML = `Carrito vacío`  */

    const clone = templateCanvas.cloneNode(true)

    fragment.appendChild(clone)
    footer.appendChild(fragment)

    const btnVaciar = document.getElementById('vaciar-carrito')

    btnVaciar.addEventListener('click', () => {

        carrito = {}
        pintarCarrito()

    })

    const pagarCarrito = document.getElementById('pagar-carrito')

    pagarCarrito.addEventListener('click', () => {


        Swal.fire({
            title: 'Deseas pagar este destino?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, deseo pagarlo !'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Pagado!',
                    'Tu destino ha sido pagado',
                    'success'
                )
            }


        })

    })

}
//*accion de los botones
const btnAccion = e => {/* 
    console.log(carrito[e.target.dataset.id]) */
    if (e.target.classList.contains('btn-info')) {//*aumentar cantidad

        const producto = carrito[e.target.dataset.id]
        producto.cantidad++
        carrito[e.target.dataset.id] = { ...producto }

        pintarCarrito()
    }

    if (e.target.classList.contains('btn-danger')) {//*dismunuir cantidad

        const producto = carrito[e.target.dataset.id]
        producto.cantidad--
        carrito[e.target.dataset.id] = { ...producto }

        if (producto.cantidad === 0) {
            delete carrito[e.target.dataset.id]
        }
        pintarCarrito()

    }

    if (e.target.classList.contains('_eliminar')) {//*eliminar del carrito

        delete carrito[e.target.dataset.id]
        pintarCarrito()
    }

    e.stopPropagation()
}




