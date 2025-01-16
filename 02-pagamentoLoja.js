// elaborar um programa para uma loja , que leia o preço de um produto e 
// informe as opções de pagamento. calcule e informe a valor para o
//  pagamento á vista com desconto de 10% e a parcela de 3x

let precoProduto = 500
let percentualVista = 10
let vista = (percentualVista / 100) * precoProduto
let valorPagarVista =  precoProduto - vista
let parcelaTresVezes = precoProduto / 3


console.log(`o valor a vista com ${percentualVista} % de desconto é: R$ ${valorPagarVista}`)
console.log(`Se optar por parcelar de 3X o valor sera R$ ${parcelaTresVezes.toFixed(2)}`)