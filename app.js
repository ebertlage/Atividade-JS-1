////ATIVIDADE 1
//let pessoa = {
//    nome: "João",
//    idade: 15,
//    cidade: "Rio de Janeiro"
//}
//
////ATIVIDADE 2
//function nomeCidadao(objeto){
//    return objeto.nome;
//}
//console.log(nomeCidadao(pessoa));


////ATIVIDADE 3
// let turma1 = [
// {
//     nome: "Pedro",
//     notas: [10,7,8]
//  },
//  {
//     nome: "Lucas",
//     notas: [7,5,9.4]
//  }
// ]

// const mediaTotalTurma = (turma) =>{
//     var nAluno = 0;
//     nome = turma[nAluno].nome;
//     notasQtd = turma[nAluno].notas[0] + turma[nAluno].notas[1] + turma[nAluno].notas[2];
//     media = notasQtd / 3;
//     mediaPrimeiroAluno = media;
//     console.log("A nota média do aluno " + nome + " é " + media);

//     var nAluno = 1;
//     nome = turma[nAluno].nome;
//     notasQtd = turma[nAluno].notas[0] + turma[nAluno].notas[1] + turma[nAluno].notas[2];
//     media = notasQtd / 3;
//     mediaSegundoAluno = media;
//     console.log("A nota média do aluno " + nome + " é " + media);
    
//     mediaSala = (mediaPrimeiroAluno + mediaSegundoAluno) / 2
//     console.log("A nota média da sala é " + mediaSala);
// }

// mediaTotalTurma(turma1);


//ATIVIDADE 4
//Número é PAR ou ÍMPAR?
//function main(n){
//    var result = n % 2;
//    console.log(result);
//    if (result == 1){
//        console.log("O número " + n + " é ÍMPAR.")
//    }
//    else{
//        console.log("O número " + n + " é PAR.")
//    }
//
//}
//console.log(main(30));

//ATVIDADE 5
//function far(celsius){
//    f = (celsius * 9/5) + 32;
//    return f;
//}
//
//console.log(far(50));

//ATIVIDADE 6
//Área do retangulo
//let altura,largura;
//
//
//function area(alt, larg){
//    a = alt * larg;
//    console.log("Um retângulo de " + alt + " por " + larg + " tem uma área de " + a);
//    return a;
//}
//area(10, 20);



//ATIVIDADE 7 // VERIFICAR SE UM NUMERO É PRIMO

let numero = 20;
let contador = numero;
let primo = 0;

do{
    if(numero % contador ==0){
        primo++
    }

    contador--
}while(contador > 0)

if(primo == 2){
    //é primo
    console.log(numero + " é primo");
}
else {
    //não é primo
    console.log(numero+ " não é primo");
}

//ATIVIDADE 8 // CALCULAR O DESCONTO EM UM PRODUTO
//FUNÇÃO: RECEBE O PRECO DO PRODUTO E O % DE DESCONTO.    // RETORNA O PREÇO COM DESCONTO

// function desc(preco, desc){
//     desconto = preco * (desc / 100);
//     novoPreco = preco - desconto;
//     console.log("O produto custava R$" + preco + " e com o desconto de " + desc + "%, o valor final é de R$" + novoPreco)
//     return novoPreco;
// }
// desc(100, 10);