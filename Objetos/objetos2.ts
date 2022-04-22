// implementação da function 
function resumo2 (usuario: {nome: string, idade?: number }){        // metodo para definir que a propriedade idade é opcional .
    if(usuario.idade !== undefined) {
    return `Olá${usuario.nome}, tudo bem? você tem ${usuario.idade} anos`;  
    }else{
        return`Olá ${usuario.nome}, tudo bem !`;
    }
};


// criando o objeto .

let u2 = {
    nome: 'Diogo',
  
};
resumo2 (u2);


// types em objetos2 .

