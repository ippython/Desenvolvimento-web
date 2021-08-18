function calcular(tipo, valor) {

  if (tipo === "acao") {

    if (valor === "c") {

      limpar()
    }
    if (valor === "+" || valor === "-" || valor === "*" || valor === "/" || valor === ".") {
      document.getElementById("visor").value += valor;
    }
    else if ( valor === "=") {

      var valor_campo = eval(document.getElementById("visor").value)
      document.getElementById("visor").value = valor_campo

    }


  } else if (tipo === "numero") {
    document.getElementById("visor").value += valor;

  }
}


//Limpa o visor
function limpar() {
  document.getElementById("visor").value = "";
}