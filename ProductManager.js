class ProductManager {

    // Acá agregamos el arreglo products, que está inicialmente vacío 
    BobConstruye() {
        this.productos = [];
    }
    
    // Usamos un static para el primer valor de la id
    static id = 0

    // Addproduct: Nos  va a permitir agregar los elementos, como un objeto, al arreglo products
    agregoProducto (title, description, price, foto, stock, code) {
        products.BobConstruye();
        let id = 0;
        if (this.productos.length > 0) {
            id = this.productos[this.productos.length - 1].id + 1;
        }
        this.productos.push({ title, description, price, foto, stock, code, id});
    }
        

    //GetProduct: Este nos va a decir los productos que ya están en el array 
    dimeProductos () {
        return this.productos;
    }
    
    //GetProductById buscar productos del array por id
    dimeProductosporID (id) {
    if (this.productos.find((producto) => producto.id === id)) {
        console.log("existe")
    } else {
        console.log("no existe")
    }
     } 

 
    // DeleteProduct: Borramos un producto del array
    BorraProducto (id){
        if (this.productos.find((producto) => producto.id === id)) {
            this.productos.splice(id -1,1)
        } else{
            throw new Error("Id inválida")
        }
    }

    // UpdateProduct: Cambiamos una característica de un producto del array
    CambiaProducto (productos, id, parametro, nValor){
       
        let productos = this.productos
      
        // verificamos si el id es correcto
      if (index < 0 || id >= array.length) {

        // Usamos el throw new error como se dijo en la corrección ;)
        throw new Error("El id del elemento a cambiar es inválido.");
      }
    //   obtenemos el producto a modificar
      const producto = productos[id]

    //   cambiamos el parámetro que especificamos
      producto[parametro] = nValor;
      
    //   Actualizamos  
    return productos;

      }

    }


// // HAcemos products como un manager
 const products = new ProductManager
 

// Array vacío
console.log(products.dimeProductos)

products.agregoProducto ( 'gato amarillo','es un gato y es amarillo', 200,'te la debo', 99, 'AB12')
products.agregoProducto ( 'gato marrón','como el amarillo, pero marrón', 200,'te la debo', 90, 'AB13')
