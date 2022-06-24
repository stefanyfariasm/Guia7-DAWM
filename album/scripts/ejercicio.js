/*llamando a la función ejecutarCodigo*/
ejecutarCodigo = () => {
    alert('¡Hola, mundo!')
}

/*llamando a la función ejecutarCodigo*/
ejecutarCodigo();

/*identificador titulo1 */
let elementT = document.getElementById('titulo1');
elementT.textContent= "Album de Fotos";

/* Seleccione los elementos con la clase text-muted */
let elementTM = document.getElementsByClassName('text-muted');

let description =`
  <span> En este sitio encontrarás un album de fotos inspirado en el snippet de 
    <a href="https://codepen.io/taj1uddin/pen/eYVrLKy">
      Codepen - Taj Uddin</a>.
  </span>`
elementTM[1].outerHTML = description;