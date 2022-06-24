/*llamando a la función ejecutarCodigo*/
ejecutarCodigo = () => {
    alert('¡Hola, mundo!')
}

/*llamando a la función ejecutarCodigo*/
ejecutarCodigo();

/*identificador titulo1 */
let elementT = document.getElementById('titulo1');
elementT.textContent= "Album de Fotos";

/* elementos con la clase text-muted */
let  seleccionTM= document.getElementsByClassName('text-muted');
let description =`
  <span> En este sitio encontrarás un album de fotos inspirado en el snippet de 
    <a href="https://codepen.io/taj1uddin/pen/eYVrLKy">
      Codepen - Taj Uddin</a>.
  </span>`
  seleccionTM[1].outerHTML = description;

/*elementos con la etiqueta p. */
let seleccionP = document.getElementsByTagName('p');
seleccionP[1].setAttribute('class','d-none');

/* Reemplazar svg por img y añadir el arreglo con las URLs a las imagenes*/ 
let imagen = [
    { url: 'https://images.unsplash.com/photo-1653942786759-f3caff948222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', 
     alt: 'camino'}, 
    { url: 'https://images.unsplash.com/photo-1653988235129-842891001e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', 
    alt: 'energia'}, 
    { url: 'https://images.unsplash.com/photo-1648737963540-306235c8170e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', 
    alt: 'papá'},
    { url: 'https://images.unsplash.com/photo-1653936999234-6574484abc38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', 
    alt:'cartel'},
    { url: 'https://images.unsplash.com/photo-1653559260129-d4347e4c8df0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMjJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
     alt:'casa'},
    { url: 'https://images.unsplash.com/photo-1648737962619-16e5cd465d2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyOTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
     alt:'comedor'},
    { url: 'https://images.unsplash.com/photo-1578255321055-d9ed6a976af5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', 
    alt:'perro'},
    { url: 'https://images.unsplash.com/photo-1654006018654-9f03ad2a02b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
     alt:'restaurant'},
    { url: 'https://images.unsplash.com/photo-1654002300319-6c882ad161ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', 
    alt:'coctel'}  ];

let svgArray = document.querySelectorAll('svg');

for(var i = 1; i < svgArray.length ; i++) {
  let img = document.createElement('img');
  img.setAttribute('src',imagen[i-1]['url']);
  img.setAttribute('alt',imagen[i-1]['alt']);
  svgArray[i].replaceWith(img)
}
