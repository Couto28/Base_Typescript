// implementação da function 
function resumo(usuario: {nome: string, idade: number }){                     // em tsc devemos colocar os types de cada propriedade do  objetos como paramentro .
    return `Olá${usuario.nome}, tudo bem? você tem ${usuario.idade} anos`;  // Template string para concatenar os itens do objetos .
};


// criando o objeto .

let u = {
    nome: 'Diogo',
    idade: 36
};
resumo(u);


// types em objetos .

