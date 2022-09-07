
//Añadir Producto Al carrito

class Carrito {

  comprarProducto(e) {
    e.preventDefault();
    if (e.target.classList.contains("agregar-carrito")) {
      const producto = e.target.parentElement.parentElement;

      this.leerDatosProducto(producto);
    }
  }
  leerDatosProducto(producto) {
    const infoProducto = {

      titulo: producto.querySelector('h3').textContent,
      precio: producto.querySelector('.precioo').textContent,
      id: producto.querySelector('a').getAttribute('data-id'),
      cantidad: 1

    }

  
    this.insertarCarrito(infoProducto)



  }

  insertarCarrito(producto) {
    const row = document.createElement('tr');

    row.innerHTML = `
            <td>
            
            
            </td>
            <td>${producto.titulo}</td>
            <td>${producto.precio}</td>
            <td>
            <a href="#" class="eliminar-producto fas fa-times-circle" data-id="${producto.id}"></a>
            </td>


            `;

    listaProductos.appendChild(row);


  }

}




