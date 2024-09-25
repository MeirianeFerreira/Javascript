//funções

function minhaFuncao(){
    console.log("teste de função");
}

minhaFuncao();//chama a função para ser exibida
minhaFuncao(); //reaproveitamento

//função na variável
const minhaFuncaonaVariavel = function(){
    console.log("teste de função na varável");
}

minhaFuncaonaVariavel();

//função por parâmetro
function funcaonoParametro(text){
    console.log(`Exibindo ${text}`);
}

funcaonoParametro('Teste de função no parâmetro');

//return
const a = 5;
const b = 6;
const c = 10;
const d = 40;

function soma( n1, n2){
    return n1 + n2
}

const resultado = soma (a,b)
console.log (resultado);

console.log(soma(c,d));

//escopo aninhado (função dentro de outra funçaõ)
let m = 15;

function escopoAninhado(){
    let m = 30;
    
    if(true){
        let m = 35;

        if(true){
            let m = 40; 
            console.log(m) 
        }
        console.log(m) 
    }
    console.log(m);
}

escopoAninhado();

console.log (m);

//arrow function
const quadrado = (numero) => numero * numero;
console.log(quadrado(5));

//mais uma arrow function
const raizQuadrada = (x) => {
    return x * x;
}
console.log(raizQuadrada(4));

const raizQuadrada2 = (x) => x * x;
console.log(raizQuadrada2(5));
console.log(raizQuadrada2(12));