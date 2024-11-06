alert("Bem Vindo ao Jogo do Numero Secreto!");

let numeroMaximo = 200;

let numeroSecreto = parseInt( Math.random () * numeroMaximo + 1);

console.log(numeroSecreto);

let chute;

let tentativas = 1

while (chute != numeroSecreto) {
    chute = prompt(`Insira um Numero de 1 a ${numeroMaximo}`);

    if (chute == numeroSecreto) {
        break;
    } else {
            if ( chute > numeroSecreto) {
                alert(`o numero secreto é menor que ${chute}`);
    } else {
            alert(`o numero secreto é maior que ${chute}`);
    }   
        tentativas++
  }   
}

    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

    alert(`Você acertou o Numero Secreto! Que é o Numero ${numeroSecreto}, com ${tentativas} ${palavraTentativa}!`)



    //if (tentativas > 1) {
       // alert(`Você acertou o Numero Secreto! Que é o Numero ${numeroSecreto}! com ${tentativas} tentativas!`)
   // } else {
       // alert(`Você acertou o Numero Secreto! Que é o Numero ${numeroSecreto}! com ${tentativas} tentativa!`)
    //}
    
