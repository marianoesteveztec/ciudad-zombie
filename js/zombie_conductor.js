/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov, direccion) {
  /* Completar constructor a partir de Enemigo */
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
  this.direccion = direccion;

}


/* Completamos la creacion del objeto asignando su prototipo y la funcion
constructor para poder usarla con 'new' al crear nuevos Zombies Conductor */
ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;

/* Completar metodos para el movimiento y el ataque */

ZombieConductor.prototype.mover = function() {
  if (this.direccion == "h") {
     this.x -= this.velocidad;
     /* Revierto la posicion horizontal si toco limite.*/
        if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)){
          this.velocidad *= -1;
        }
     // Si sobrepasa el rangoY, lo manda al centro entre ambos rangos
     if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)) {
       this.y = this.rangoMov.desdeY + (this.rangoMov.hastaY - this.rangoMov.desdeY)/2;
     }
   } else if(this.direccion == "v") {
     this.y += this.velocidad;
     /* E Revierto la posicion vertical si toco limite.*/
     if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)){
       this.velocidad *= -1;
     }
     // Si sobrepasa el rangoY, lo manda al centro entre ambos rangos
     if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)) {
       this.x = this.rangoMov.desdeX + (this.rangoMov.hastaX - this.rangoMov.desdeX)/2;
     }
 }
}


ZombieConductor.prototype.atacar = function(jugador) {
  jugador.perderVidas(5);
}
