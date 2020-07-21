
// Aula 1
function aula1() {
    console.log("Aula 1");
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
    console.log("Aula 2");
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
    console.log("Aula 3");
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

    console.log(d.getMonth() + 1);
    console.log(d.getDay());
    console.log(d.getMinutes());

}
//aula3();

//Aula 4
function aula4() {
    console.log("Aula 4");
    function soma(a, b) {
        return a + b;
    }
    var n1 = parseInt(prompt("Entre com o primeiro número: "));
    var n2 = parseInt(prompt("Entre com o primeiro número: "));

    console.log("A soma de " + n1 + " e " + n2 + " é: " + soma(n1, n2));

    function validaMaioridade(idade) {
        var maioridade = 18; //variável local
        return idade >= maioridade ? true : false;
    }

    var maioridade = validaMaioridade(prompt("Informe a sua idade: ")); //variável global

    var retorno;
    //Condifional if em sua forma normal
    /*
     if(maioridade){
     retorno = "Vocẽ é maior de idade!";
     }else{
     retorno = "Vocẽ é menor de idade!";
     }
     * 
     */

    // Condicional if em sua forma reduzida (simplificada)
    retorno = maioridade ? "Vocẽ é maior de idade!" : "Vocẽ é menor de idade!";

    console.log(retorno);
}
//aula4();

//Aula 5
console.log("Aula 5");
function botao() {
    //console.log("Obrigado por clicar.");
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
}

function redirecionar(){
    //window.open("https://www.github.com/rapassos/");
    window.location.href = "https://www.github.com/rapassos/";
}
function trocar(el){
    el.innerHTML = "Obrigado por passar o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse aqui";
    //console.log("Trocar texto");
}

function voltar(el){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!!!";
    el.innerHTML = "Passe o mouse aqui!!!";
}
function loading(){
    console.log("Exemplo de onload");
}
function opcaoAlterada(el){
    console.log("Foi selecionada a opção: " + el.value);
}
function opcaoAlterada2(el){
    var txt = el.checked?"Sim":"Não";
    console.log("A caixa de seleção está selecionada: " + txt);
}