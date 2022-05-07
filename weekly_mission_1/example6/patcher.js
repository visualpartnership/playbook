<<<<<<< HEAD
/*
 * Ten en cuenta:
 *    - require('./logger') te dará el objeto creado
 *    - require('./logger').Logger te regresará la clase
 *
 * En este caso estamos agregando una función más al objeto instanciado, no a la clase.
 * */
require('./logger').customMessage = function () {
    console.log('This is a new functionality')
=======
/*
 * Ten en cuenta:
 *    - require('./logger') te dará el objeto creado
 *    - require('./logger').Logger te regresará la clase
 *
 * En este caso estamos agregando una función más al objeto instanciado, no a la clase.
 * */
require('./logger').customMessage = function () {
    console.log('This is a new functionality')
>>>>>>> 76940b6beec1b41b0df99462f13db7ad0de64494
}