function cambiarImagen() {
	var imagen = document.getElementById('botonOcultarMostrarBarra').getAttribute('src');
	if (imagen == 'icons/imagen1.svg') {
		imagen.setAttribute('src', 'icons/imagen2.svg');
	} else {
		imagen.setAttribute('src', 'icons/imagen1.svg');
	}
}