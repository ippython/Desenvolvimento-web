
document.querySelector('#form').onchange = function(){
    let valor = Number(document.getElementById("valor").value);
    var porcentagem = document.getElementById("barraPorcentagemGorgeta").value;
    document.getElementById("porcentagemGorgeta").innerHTML = `<span id="porcentagemGorgeta">${porcentagem}%</span>`

    var valorPorcentagem = (valor/100)*porcentagem
    var valorFinal = valor + valorPorcentagem


    var gorgeta = document.getElementById("gorgeta")
    gorgeta.value = valorPorcentagem.toFixed(2)
    
    var valorTotal = document.getElementById("valorTotal")
    valorTotal.value = valorFinal.toFixed(2)


/*     document.getElementById("valorTotal").innerHTML = `<span id="valorTotal">R$: ${valorFinal}</span>` */

/*     console.log(valorFinal)
 */    
}
