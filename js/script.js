'use strict'

var socios = new Array()

function socio(nombre_in, apellidos_in, foto_in, funciones_in, telefono_in) {
    this.nombre = nombre_in;
    this.apellidos = apellidos_in;
    this.foto = foto_in;
    this.funciones = funciones_in;
    this.telefono = telefono_in;
}

socios[0] = new socio("Eduardo", "Pérez Ruiz", "./img/eduardo.png", "Juegos", "111111111");
socios[1] = new socio("Martín", "Ruiz Dom", "./img/martin.png", "Futbolín", "222222222");
socios[2] = new socio("Juana", "Ramos Díaz", "./img/juana.png", "Cerveza", "333333333");
socios[3] = new socio("Miguel", "Fisher Ruiz", "./img/miguel.png", "Fútbol Americano", "444444444");
socios[4] = new socio("Daniel", "Sánchez López", "./img/noel.png", "Ordenadores", "555555555");

function nuevaVentana() {
    window.open('./nuevoSocio.html', 'Crar nuevo socio', 'top=300px, left=500px, height=300px, width=500px');
    console.log(socios);
}

function guardar() {
    var ventana_que_abre = window.opener;

    var nombre = document.getElementById('txtnom').value;
    var apellidos = document.getElementById('txtape').value;
    var foto = document.getElementById('txtfoto').value;
    var funciones = document.getElementById('txtfunc').value;
    var telefono = document.getElementById('txttel').value;

    ventana_que_abre.crearNuevoSocio(nombre, apellidos, foto, funciones, telefono);
    this.close();
}

function crearNuevoSocio(nombre_in, apellidos_in, foto_in, funciones_in, telefono_in) {
    socios.push(new socio(nombre_in, apellidos_in, foto_in, funciones_in, telefono_in));
    console.log(socios);
    refrescarDOM()
}

// const refrescarDOM = ()=>{
//     var select = document.formu.lista;
    
//     socios.map((socio, index)=>{
//         select.innerHTML += `
//             <option value=${index}>${socio.nombre}</option>
//         `
//     })
    
//     console.log(select);
// }

function refrescarDOM(){
    var select = document.formu.lista;

    select.innerHTML = '';
    for(var i = 0; i < socios.length; i++){
        select.innerHTML += '<option value=' + i  +'>' + socios[i].nombre + '</option>'
        console.log(socios[i], i);
    }

    mostrarInfo()

    console.log(select);
}

function mostrarInfo() {
    var personaPosicion = document.formu.lista.value;

    document.formu.nomape.value = socios[personaPosicion].nombre
    document.formu.apellidos.value = socios[personaPosicion].apellidos
    // document.formu.foto_img.src = socios[personaPosicion].foto
    // document.getElementById("img_f").firstChild.src = socios[personaPosicion].foto;
    document.getElementById('img_f').innerHTML = `<img src=${socios[personaPosicion].foto} id="fotos" alt="foto_img">`
    document.formu.funcion.value = socios[personaPosicion].funciones
    document.formu.telefono.value = socios[personaPosicion].telefono
}
//función para validar el teléfono, evento bidireccional, cada vez que presionas una tecla te devuelve true o false
function validarTelefonoEvento(e){
	let tecla = e.which || e.charCode;
    if((tecla >= 48 && tecla <= 57) || (tecla == 8) || (tecla == 46)  || (tecla >= 37 && tecla <= 40) || (tecla == 9))
    {	
        return true; 
    }
    else 
    { 
        return false; 
    }
}

/*function cambioUsuario()
{
    var personaPosicion = document.formu.lista.value;
    socios[personaPosicion].mostrar();
}*/

function modificarDatos() {
    var personaPosicion = document.formu.lista.value;

    socios[personaPosicion].nombre = document.formu.nomape.value; 
    socios[personaPosicion].apellidos = document.formu.apellidos.value;
    // socios[personaPosicion].foto = document.getElementById("img_f").firstChild.src;
    socios[personaPosicion].funciones = document.formu.funcion.value;
    socios[personaPosicion].telefono = document.formu.telefono.value;

    alert("Datos modificados");
}
