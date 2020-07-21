
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
// aula1();

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

    var fruta = {nome: "Maçã", cor: "Vermelha"};
    console.log(fruta);
    console.log("A " + fruta.nome + " é " + fruta.cor + ".");

    var lstFrutas = [{nome: "Maçã", cor: "Vermelha"}, {nome: "Melancia", cor: "Verde"}, {nome: "Laranja", cor: "Laranja"}, {nome: "Uva", cor: "Roxa"}];
    console.log(lstFrutas);
    console.log(lstFrutas[0].nome);
    console.log(lstFrutas[2].nome);
}
//aula2();


//Aula 3
function aula3() {
    var nome = prompt("Entre com o seu nome: ");
    var idade = prompt("Qual a sua idade: ");
    var pessoa = {nome: nome, idade: idade}
    console.log(pessoa.nome + " tem " + pessoa.idade + " anos.");
    if (pessoa.idade >= 18) {
        console.log(pessoa.nome + " é maior de idade.");
    } else {
        console.log(pessoa.nome + " é menor de idade.");
    }

    var count = 0;
    while (count < 5) {
        console.log(count);
        //count = count+1;
        //count += 1;
        count++;
    }

    for (var i = 0, max = 5; i < max; i++) {
        console.log(i);
    }

    var pessoas = [{nome: "Larissa", idade: 7}, {nome: "Arthur", idade: 12}, {nome: "Cleide", idade: 37}, {nome: "Rafael", idade: 38}];
    for (i in pessoas) {
        var p = pessoas[i];
        console.log(p.nome + " tem " + p.idade + " anos.");
        if (p.idade >= 18) {
            console.log(p.nome + " é maior de idade.");
        } else {
            console.log(p.nome + " é menor de idade.");
        }
    }
    
    var d = new Date();
    console.log(d);
    
    console.log(d.getMonth()+1);
    console.log(d.getDay());
    console.log(d.getMinutes());
    
}
//aula3();




