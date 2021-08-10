const formulario = document.querySelector('#formulario');
const listaNotas = document.querySelector('#listaNotas');
let arreglo = [];

formulario.addEventListener('submit', e => {
    e.preventDefault();

    let est = document.getElementById('nom').value;
    let per1 = document.getElementById('p1').value;
    let per2 = document.getElementById('p2').value;
    let per3 = document.getElementById('p3').value;

    crearRegistro(est, per1, per2, per3);
    guardarDatos();
})

const crearRegistro = (nom, p1, p2, p3) => {
    let registro = {
        nombre: nom,
        periodo1: p1,
        periodo2: p2,
        periodo3: p3
    }

    arreglo.push(registro);
   
}

const guardarDatos = () => {
    localStorage.setItem('Notas',JSON.stringify(arreglo));
    listarDatos();
}


const listarDatos = () => {
    listaNotas.innerHTML = '';
    arreglo = JSON.parse(localStorage.getItem('Notas'));
    arreglo.forEach(element => {
        const {nombre, periodo1, periodo2, periodo3} = element;
        listaNotas.innerHTML += `
        <div class="alert alert-primary" 
        role="alert"><i class="material-icons float-left mr-2">accessibility</i>
        <span>${nombre}</span><b>${periodo1}</b>
        <span> ${periodo2}</span><span>${periodo3}</span>
        <i class="material-icons">delete</i></span></div></div>
        `   
     })
 }


 document.addEventListener('DOMContentLoaded',listarDatos);

 listaNotas.addEventListener('click', (e) =>{
    let texto = e.path[1].childNodes[2].innerHTML;

      if(e.target.innerHTML === 'delete'){
         eliminarDatos(texto);
       }
})

const eliminarDatos = (estudiante) => {

    let indexArreglo;

    arreglo.forEach((elemento,index) => {
        if(elemento.nombre === estudiante){
             indexArreglo = index;
        }

    })

    arreglo.splice(indexArreglo,1);
    guardarDatos();

 }