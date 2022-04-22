// TYPES PARA FUNCTIN MATEMATICAS

type MathFunction = (n1: number, n2: number) => number;   // criamos um typo e definimos as quais valores vamos trabalhar

const somar: MathFunction = ( n1, n2) => {    // O nosso typo ja definil que vamos trabalhar apenas com number , então só precisamos atribuir o typo no valor da const 
    return n1 + n2 ;
};


const subtrair: MathFunction = (n1, n2) => {
    return n1 - n2;
}

const multiplicar: MathFunction = (n1, n2) => {
    return n1 * n2;
}

const dividir: MathFunction = (n1, n2) => {       // quando colocamos o Type na const devemos seguir a regra .
    return n1 / n2;
}