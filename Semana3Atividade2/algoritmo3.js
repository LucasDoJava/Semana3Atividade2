//criando uma lista de 4 objetos
const estudantes = [
    { nome: 'Alice', notas: [100, 60, 92] },
    { nome: 'João', notas: [75, 30, 85] },
    { nome: 'Charles', notas: [90, 95, 85] },
    { nome: 'Paulo', notas: [100, 100, 100] },
   ];
   
   //uma função criada para pegar as médias dos estudantes
   //onde usamos o map para iterar os elementos e o reduce para somar as notas e após isso pegar a média 
   const estudantesMedias = estudantes.map((estudante) => {
    //reduce para somar as notas e em seguida pegar a média
    const total = estudante.notas.reduce((soma, nota) => soma + nota);
    let {nome} = estudante;
    return { nome, media: total / estudante.notas.length };
   });
   
   //com esse filter, permitimoso apenas a passagem do aluno  com uma média maior que 90
   const melhoresMedias = estudantesMedias.filter(
    (student) => student.media > 90,
   );

   console.log(estudantesMedias);
   console.log(melhoresMedias);
   
   