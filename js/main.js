
const productsArray = [
    {
        Id: "01",
        name: "Hands Free",
        price: "$US 50.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: "assets/audifonos.png",
    },
    {
        Id: "02",
        name: "PlayStation 4",
        price: "$US 150.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: "assets/PlayStation_4.png",
    },
    {
        Id: "03",
        name: "Hands Free",
        price: "$US 50.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: "assets/audifonos.png",
    },
    {
        Id: "04",
        name: "PlayStation 4",
        price: "$US 150.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: "assets/PlayStation_4.png",
    },
    {
        Id: "05",
        name: "Hands Free",
        price: "$US 50.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: "assets/audifonos.png",
    },
    {
        Id: "06",
        name: "PlayStation 4",
        price: "$US 150.00",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        image: "assets/PlayStation_4.png",
    }
]

function agregar(){
 let botonAgregar = document.querySelectorAll('agregar-carrito')
 for (let i = 0; i < botonAgregar.length; i++) {
    var button = botonAgregar[i]
    button.addEventListener('click', addToCartClicked)
  }
}

function addToCartClicked(event) {
    let buttonClicked = event.target
    let shopItem = buttonClicked.parentElement.parentElement
    let title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    let price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    let imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
  }
  