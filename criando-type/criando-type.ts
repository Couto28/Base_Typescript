type User = {
    nome : string,          // Os typo particulares são importantes quando o nosso código tem muitos tipos .
    idade : number          // é ideal cria-los para deixar o código mais compacto, deixar ele mais limpo e organizado .
}                           // nesse caso podemos usar tanto Type ou interface .

function open (usurario: User){
    return `Olá${usurario}, você tem ${usurario.idade}, anos !`;
}

open ( {
    nome : "Diogo",
    idade : 36
})

/* 

DIFERENÇA ENTRE USO DE TYPE / INTERFACE 

Com o TYPE ele não é alteravel .

Com o INTERFACE é possivel alterar 

*/