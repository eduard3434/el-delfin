
//variables que identifican el html
var cajaSlide = document.getElementById('slide-fotos');
var fotosSlide = document.querySelectorAll('#slide-fotos > img')
var span1= document.getElementById('span1');
var span2= document.getElementById('span2');
//variables
var fotosTotales=fotosSlide.length;
var fotoActual= 0;
var numFotoAnterior;

//funcion detecta rueda del raton

function detectarRuedaRaton(event) {
	event.preventDefault();
	ruedaRaton = event.deltaY;
	console.log(fotoActual)
	if (ruedaRaton > 0 && fotoActual > 0) {
		fotoActual--;
		numFotoAnterior= fotoActual+1
	} else if (ruedaRaton < 0 && fotoActual < 6) {
		fotoActual++;
		numFotoAnterior= fotoActual-1;
	}else if(ruedaRaton < 0 && fotoActual < 7){
		fotoActual=0;
		numFotoAnterior= fotosTotales-1;
	}else if(ruedaRaton > 0 && fotoActual < 1){
		fotoActual= fotosTotales-1;
		numFotoAnterior= 0;
	}
	cambiarFoto(fotoActual);
}

//funcion detecta teclas para moverse entre imagenes

function detectarTecla(evento) {
	var tecla = evento.key;

	if (tecla == 'ArrowLeft' && fotoActual > 0) {
		fotoActual--;
		numFotoAnterior= fotoActual+1;
	} else if (tecla == 'ArrowRight' && fotoActual < 6) {
		fotoActual++;
		numFotoAnterior= fotoActual-1;
	}else if(tecla == 'ArrowRight' && fotoActual < 7){
		fotoActual=0;
		numFotoAnterior= fotosTotales-1;
	}else if(tecla == 'ArrowLeft' && fotoActual < 1){
		fotoActual= fotosTotales-1
		numFotoAnterior= 0;
	}
	cambiarFoto(fotoActual);
}
//funcion derecha
function izquierdaDerecha(evento){
	
	if(evento == '+' && fotoActual < 6){
		fotoActual++;
		numFotoAnterior= fotoActual-1;
	}else if(evento == '-' && fotoActual > 0){
		fotoActual--;
		numFotoAnterior= fotoActual+1;
	}else if(evento == '+' && fotoActual < 7){
		fotoActual=0;
		numFotoAnterior= fotosTotales-1;
	}else if(evento == '-' && fotoActual < 1){
		fotoActual= fotosTotales-1;
		numFotoAnterior= 0;
	}
	cambiarFoto(fotoActual);
}


//funcion que cambia la foto
function cambiarFoto(numFoto) {
	//cambia el src de la imagen ampliada
	for(let i=0;i<fotosTotales; i++){
		fotosSlide[i].removeAttribute('class');
	}
	
		fotosSlide[fotoActual].classList.add('mostrarFoto');
		fotosSlide[numFotoAnterior].classList.add('quitarFoto');
	
	
	
}

//detecta error en imagenes

for(let i= 0; i < fotosSlide.length ; i++){
	fotosSlide[i].addEventListener('error', function () {
		errorCargaFoto(this);
	}) 
}


//funcion que cambia el src si alguna foto da error
function errorCargaFoto(foto) {
	foto.setAttribute('src', 'imagenes-slide/foto-error.png');
} 

//detecta rueda raton y teclas
cajaSlide.addEventListener('wheel', detectarRuedaRaton);
document.addEventListener('keydown', detectarTecla);
//detecta span para cambiar fotos
span1.addEventListener('click', function(){
	izquierdaDerecha('+');
});
span2.addEventListener('click', function(){
	izquierdaDerecha('-');
});



