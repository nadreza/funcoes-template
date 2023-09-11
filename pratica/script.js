// Acompanhe a Prática 

/* 
function verificaPar (numero) {
    const par = numero % 2 === 0
    const soma = numero + 10
    const quadradoDoNumero = numero ** 2
    return `o número ${numero} `

}

const verifica10 = verificaPar (10)
console.log(verifica10) */




 //Crie uma função que receba por parâmetro um nome e imprima no console a mensagem: 
	//`Olá ${nome}` 

    function nome (nome1) {
        
        return `Olá ${nome1}`
    }
    nome ("Chapa")

    console.log (nome ("playba"))



   // Invoque esta função 3 vezes, passando 3 argumentos (nomes) diferentes

function outroNome (nomeX) {
    console.log(`${nomeX}, essa é outra função`)
}   
outroNome("JEf")
outroNome("Pri")
outroNome("Pam")    

   /* Refaça o exercício com a sintaxe de expressão de função (função não-nomeada) */


/*    Crie uma função que receba um número como parâmetro e:
   verifique se ele é par
   some com o número 10
   multiplique por ele mesmo */


 /*   Retorne `o número ${numero} é par? ${resultado}. Somado com 1O é igual a ${soma} e multiplicado por ele mesmo é  ${multiplica}`
   Refaça o exercício com a sintaxe de expressão de função
 */

   function variasAcoes (number){
   let par = number % 2 === 0
   let soma = number + 10
   let quadrado = number ** 2

   return `o número ${number} é par? ${par}. Somado com 10 é igual a ${soma} e multiplicado por ele memo é ${quadrado}`
}
let verifica10 = variasAcoes(8)

console.log(verifica10)

//EXERCÍCIO 3
/* 
Faça uma função que receba como parâmetros, login e senha. 
No corpo da função declare duas variáveis:
loginArmazenado = astrodev
senhaArmazenada = bananinha123

Usaremos essas variáveis para verificar se são iguais às que estamos recebendo como parâmetro. Retorne true se as duas variáveis forem verdadeiras. 
Refaça o exercício com a sintaxe de Arrow Function */

function loginCerto (user, password){
let loginArmazenado = "astrodev"
let senhaArmazenada = "bananinha123"
return user === loginArmazenado && password === senhaArmazenada
}

console.log("usuario logou?", loginCerto("marcelinho", "bananinha123"))
console.log("usuario logou?", loginCerto("astrodev", "bananinha123"))
console.log("usuario logou?", loginCerto("marcelinho", "bananinha223"))


//ARROW FUNCTION

function loginCertoArrow (user, password) {
    let loginArmazenado = "astrodev"
    let senhaArmazenada = "bananinha123"
    return user === loginArmazenado && password === senhaArmazenada
}

const usuario1 = loginCertoArrow("astrodev", "bananinha123")
console.log("usuário conseguiu logar?", usuario1)

/* Declare uma função que:
Receba um nome, um ano de nascimento e o ano atual 
Retorne uma string com um boleano true para se o usuário for maior de idade e false para se for menor de idade. 
A string retornada deve ter a seguinte mensagem:
“Fulano é maior de idade? true”
Chame a função duas vezes, passando como argumento nomes e anos de nascimento diferentes. */

//PRÁTICA EXTRA

const verificaMaiorIdade = (nome, anoNascimento, anoAtual) =>{
    const idade = anoAtual - anoNascimento
    const maioridade = idade >= 18
    return `${nome} é maior de idade? ${maioridade}`

}

console.log(verificaMaiorIdade("Marcelinho", 2004, 2023))


