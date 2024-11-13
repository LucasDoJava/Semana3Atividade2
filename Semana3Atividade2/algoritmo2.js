//criando uma lista com 3 listas dentro
const letras = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
   ];
   
  //usou o flat para criar uma nova lista com todas as sub listas dentro
  //onde usando o reduce, percorremos a lista e usamos um if para contar quantas letras a lista possui  
   let resultado = letras.flat().reduce((objeto, numero) => {
    if (objeto[numero]) {
      objeto[numero] += 1;
    } else {
      objeto[numero] = 1;
    }
    return objeto;
   }, {});
   
   console.log(resultado);
   