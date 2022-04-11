/*
 * Ten en cuenta:
 *    - require('./logger') te dará el objeto creado
 *    - require('./logger').Logger te regresará la clase
 */

require('./logger').customMessage = function(){
    console.log('This is an new functionality')
}