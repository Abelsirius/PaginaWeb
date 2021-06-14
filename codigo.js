// const fecha = new Date.now();

// console.log(fecha.years());
  window.sr = ScrollReveal();
    sr.reveal('.txtInfo' , {
      duration: 3500,
      origin: 'left',
      distance:'50px'
    });
        sr.reveal('.imgBe' , {
      duration: 3500,
      origin: 'right',
      distance:'50px'
    });
    sr.reveal('.loginScroll' , {
      duration: 3500,
      origin: 'bottom',
      distance:'-110px'
    });
    sr.reveal('.imgLogin', {
      duration: 3500,
      origin: 'left',
      distance:'50px'
    });

    sr.reveal('.imgLogin2', {
      duration: 3500,
      origin: 'right',
      distance:'50px'
    });
    sr.reveal('.content', {
      duration: 3500,
      origin: 'bottom',
      distance:'-110px'
    });

   	window-addEventListener("scroll",function(){
   		const header = document.querySelector("header");
   		header.classList.toggle("sticky",window.scrollY > 0);
   	})



  let calle = document.querySelector(".calle");


 calle.addEventListener("click",function(){
 	window.open("https://www.google.com/maps/place/ITN+-+CIBERTEC/@-8.0989106,-79.0209027,17z/data=!4m9!1m2!2m1!1scibertec!3m5!1s0x91ad3d89f9a6a815:0x813002e20fc27bd4!8m2!3d-8.0998806!4d-79.0198614!15sCghjaWJlcnRlY5IBEWNvbW11bml0eV9jb2xsZWdl")
 })


const menuToggle = document.querySelector(".icon-menu");
const menuDos = document.querySelector(".menu-toggle");
const head =  document.querySelector("header");
let tamañoIdeal= 550;
menuToggle.onclick = function(){
	menuToggle.classList.toggle("active");
	mostrarMenu();
}

function mostrarMenu(){
       menuDos.classList.toggle("active")

}

function cerrar(){
     menuDos.classList.remove("active");
     menuToggle.classList.remove("active");  
}


setInterval(function(){
    cierrateMrd();
},400);


menuDos.addEventListener("scroll",cierrateMrd)

function cierrateMrd(){
	let tamaño = menuDos.clientWidth;
	// console.log(tamaño)
	if ( tamañoIdeal < tamaño) {
		menuToggle.classList.remove("active");
	    menuDos.classList.remove("active");}

}

const IDBRequest = window.indexedDB.open("abelBase",1);
console.log(IDBRequest)
IDBRequest.addEventListener("upgradeneeded",()=>{
       const db = IDBRequest.result;
       db.createObjectStore("nombres",{
       	    autoIncrement: true,
       })
})

IDBRequest.addEventListener("success",()=>{
	console.log("to nice");
})
IDBRequest.addEventListener("error",()=>{
	console.log("to faltal");
})


const addObjetos = objeto =>{
         const db = IDBRequest.result;
         const IDBtransaction = db.transaction("nombres","readwrite")
         const objectStore = IDBtransaction.objectStore("nombres");
         objectStore.add(objeto);
         IDBtransaction.addEventListener("complete",()=>{
         	console.log("objeto agregado correctamente")
         })

}
const modificarObjeto =( key ,objeto) =>{
         const db = IDBRequest.result;
         const IDBtransaction = db.transaction("nombres","readwrite")
         const objectStore = IDBtransaction.objectStore("nombres");
         objectStore.put(key, objeto);
         IDBtransaction.addEventListener("complete",()=>{
            console.log("objeto modificado correctamente")
         })

}
const eliminarObjeto =(key) =>{
         const db = IDBRequest.result;
         const IDBtransaction = db.transaction("nombres","readwrite")
         const objectStore = IDBtransaction.objectStore("nombres");
         objectStore.delete(key);
         IDBtransaction.addEventListener("complete",()=>{
            console.log("objeto Eliminado correctamente")
         })

}

const  leerObjetos = ()=>{
         const db = IDBRequest.result;
         const IDBtransaction = db.transaction("nombres","readonly")
         const objectStore = IDBtransaction.objectStore("nombres");
          const cursor = objectStore.openCursor();
        cursor.addEventListener("success",()=>{
         	if (cursor.result) {
         		cursor.result.continue()
         	}else console.log("todos los datos fueron leidos");
         })

}
let nombre = document.querySelector(".nombre");
let numero = document.querySelector(".numero");
let  contraseña = document.querySelector(".contraseña");
let snd = document.querySelector(".snd");
var modalEntradaLogin = document.querySelector(".Modal");
   
    snd.addEventListener("click",function(e){
    if (nombre.value.length >= 4 & numero.value.length >= 4 & contraseña.value.length >= 5) {
    modalEntradaLogin.classList.add("active"); 
    let mostrarNombre = document.querySelector(".mostrar-nombre")
    let nombreCompleto = document.createTextNode(nombre.value);
     mostrarNombre.appendChild(nombreCompleto)
     e.preventDefault();
    }else{
        alert("pone tu nombre pavazo , Perdon completa el Formulario por favor :v")
    } 
})

let botonModalEntrada = document.querySelector(".entrada-time");

botonModalEntrada.addEventListener("click",function(){
    modalEntradaLogin.classList.remove("active");
    window.open("file:///C:/Users/PC-011/OneDrive%20-%20CIBERTEC/Desktop/CSS,%20JS%20Y%20HTML/Pagina%20de%20papitas%20rellenas/entradaYsalida.html");
    location.reload();
})







    window-addEventListener("scroll",function(){
        const header = document.querySelector("header");
        header.classList.toggle("sticky",window.scrollY > 0);
    })




// function smoothScroll(target, duration){
//     var target = document.querySelector(target);
//     var targetPosition = target.getBoundingClientRect().top;
//     var startPosition = window.pageYOffset;
//     var distance = targetPosition - startPosition;
//     var startTime = null;
//          console.log(startTime)

//     function animation(currentTime){
//     if (startTime === null) 

//         startTime = currentTime;
//         var timeElapsed = currentTime - startTime;
//         var run = ease(timeElapsed,startPosition,distance,duration);
//         window.scrollTo(0 , run);
//         if (timeElapsed < duration) requestAnimationFrame(animation);   
//     }

//   function ease (t, b, c, d) {
//     t /= d/2;
//     if (t < 1) return c/2*t*t + b;
//     t--;
//     return -c/2 * (t*(t-2) - 1) + b;
// };
//    requestAnimationFrame(animation);

// }

// var section1 = document.querySelector(".section1");
// var section2 = document.querySelector(".section2");
// section1.addEventListener("click",function(){
//   smoothScroll(".section2",1750);
// });



// section3.addEventListener("click",function(){

//   smoothScroll(".section4",1750);
// });
// section4.addEventListener("click",function(){

//   smoothScroll(".section3",1750);
// });

const slider = document.querySelector(".slider-content");
const sliderIndi = document.querySelectorAll(".slider-test");
let contador = 1;


let intervalo = 3500;

setInterval(function tiempo(){
      slides();
},intervalo);

function slides(){

  let tamañoWidth = sliderIndi[0].clientWidth;
    slider.style.transform = "translate("+ ( - tamañoWidth * contador) + "px";
    slider.style.transition = "transform 1.5s";
    contador++;
    if (contador === sliderIndi.length) {
         
         contador = 0;

         setTimeout(function(){
      slider.style.transform = "translate(0px)";
    slider.style.transition = "transform 0s";
         },3200)
    }

}




// boton.type = "text";

// boton.type = "password";


var  direccion  = document.querySelector(".calle");


direccion.addEventListener("mouseover",mostrarInformacion);

function mostrarInformacion ( ){
    let direccionAparecer = document.querySelector(".spanInfo");
    direccionAparecer.style.opacity = ".8";
      direccionAparecer.style.visibility = "visible";
      direccionAparecer.style.transform = "translateY(-3px)";
      direccionAparecer.style.transition = " 1s";
}
direccion.addEventListener("mouseout",function(){
        let direccionAparecer = document.querySelector(".spanInfo");
         direccionAparecer.style.opacity = "0";
               direccionAparecer.style.transform = "translateY(5px)";
      direccionAparecer.style.visibility = "hidden";
});
