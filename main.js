/*
Exercício de Hoje

Montar um script que pergunte:
Nome
Idade
Profissão

E logo após obter essas informações exiba uma mensagem dizendo "Olá me chamo {NOME}, tenho ${IDADE} e atualmente trabalho com ${PROFISSÃO}"
*/

let userName = prompt('Qual seu nome? ')
let age = prompt('Qual a sua idade? ')
let profession = prompt('Qual é a sua profissão? ')
const message = `Olá me chamo ${userName}, tenho ${age} e atualmente trabalho com ${profession}` 
alert(message)


