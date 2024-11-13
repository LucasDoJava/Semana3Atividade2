a = [1, 2, 3, 4, 5], b = [6, 7, 8, 9, 10]

let soma = (acumulador, item) => {
    acumulador+= item 
    return acumulador
};

let somarTudo = a.reduce(soma, b.reduce(soma, 0))
console.log(somarTudo);

 