/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,
  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades
  perderVidas(cantVidas){
    this.vidas = this.vidas - cantVidas;
  },
  moverJugador(tecla){
    // El movimiento esta determinado por la velocidad del jugador
    if (tecla == 'izq') {
      this.ancho = 30;
      this.alto = 15;
      this.sprite = "imagenes/auto_rojo_izquierda.png";
      this.x = this.x - this.velocidad;
    }else if (tecla == 'arriba') {
      this.ancho = 15;
      this.alto = 30;
      this.sprite = 'imagenes/auto_rojo_arriba.png';
      this.y = this.y - this.velocidad;
    }else if (tecla == 'der') {
      this.ancho = 30;
      this.alto = 15;
      this.sprite = 'imagenes/auto_rojo_derecha.png';
      this.x = this.x + this.velocidad;
    }else if (tecla == 'abajo') {
      this.ancho = 15;
      this.alto = 30;
      this.sprite = 'imagenes/auto_rojo_abajo.png';
      this.y = this.y + this.velocidad;
    }
  }

}
