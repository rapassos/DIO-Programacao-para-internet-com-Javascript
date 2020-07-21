
// Aula 1
function aula1() {
    var nome = "Rafael Passos";
    var idade = 38;
//    alert("Bem vindo " + nome);
    console.log("Bem vindo " + nome);
    console.log("Sua idade é " + idade + " anos");


    var valor1 = idade;
    var valor2 = 10;
    console.log(valor1 + " + " + valor2 + " = " + (valor1 + valor2));

    var frase = "O Japão é o melhor time do mundo!!!";
    console.log(frase);
    console.log(frase.replace("Japão", "Brasil"));
    frase = frase.replace("Japão", "Brasil");
    console.log(frase.toLocaleUpperCase());
}

//Aula 2
function aula2() {
    var frutas = ["Maçã", "Pera", "Laranja"];
    console.log(frutas);
    console.log("Lista de frutas: " + frutas);
    console.log("A lista de frutas tem " + frutas.length + " elementos.");
    console.log("A primeira fruta é: " + frutas[0]);
    console.log("A segunda fruta é: " + frutas[1]);

    frutas.push("Uva"); //Inclusão de itens
    console.log("Lista de frutas: " + frutas);
    console.log("A lista de frutas tem " + frutas.length + " elementos.");
    console.log("A quarta fruta é: " + frutas[3]);

    frutas = frutas.reverse(); //Inverte a sequencia dos itens
    console.log("Lista de frutas invertida: " + frutas);
    console.log("A lista de frutas tem " + frutas.length + " elementos.");

    frutas.pop(); //Remove o ultimo item da lista
    console.log("Lista de frutas: " + frutas);
    console.log("A lista de frutas tem " + frutas.length + " elementos.");

    frutas.sort();
    console.log("Lista de frutas ordenada: " + frutas);
    console.log("A lista de frutas tem " + frutas.length + " elementos.");
    
    console.log(frutas.toString());
    console.log(frutas.join(" | "));
    
    var fruta = {nome:"Maçã",cor:"Vermelha"};
    console.log(fruta);
    console.log("A " + fruta.nome + " é " + fruta.cor + ".");
    
    var lstFrutas = [{nome:"Maçã",cor:"Vermelha"},{nome:"Melancia",cor:"Verde"},{nome:"Laranja",cor:"Laranja"},{nome:"Uva",cor:"Roxa"}];
    console.log(lstFrutas);
    console.log(lstFrutas[0].nome);
    console.log(lstFrutas[2].nome);
}

// Execução
// 
// aula1();
aula2();
