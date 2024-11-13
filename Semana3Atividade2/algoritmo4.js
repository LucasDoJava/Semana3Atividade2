//criando uma lista de 3 objetos
const funcionarios = [
    { nome: 'João', salario: 30000, departamento: 'TI' },
    { nome: 'Janete', salario: 70000, departamento: 'RH' },
    { nome: 'Sofia', salario: 100000, departamento: 'RH' },
   ];
//função criada usando o reduce para acumular os elemtntos em um único valor
//usando do reduce para pegar a lista de funcionários de cada departamento e separar eles por listas
   const funcionariosPorDepartamento = funcionarios.reduce(
    (acumulador, funcionario) => {
      const departamento = funcionario.departamento;
      //fazendo uma comparação para separar os departamentos por listas
      if (!acumulador[departamento]) {
        acumulador[departamento] = [];
      }
      //adicinando a lista departamento a funcionario
      acumulador[departamento].push(funcionario);
      return acumulador;
    },
    {},
   );
   //função criada para calcular a média de salário por departamento
   const mediasSalarioPorDepartamento = Object.keys(
    funcionariosPorDepartamento,
    //iterando os elementos de departamento e usando o reduce
    //para somar os salários e em seguida calcular a média de salário
   ).map((departamento) => {
    const total = funcionariosPorDepartamento[departamento].reduce(
      (acumulador, funcionario) => acumulador + funcionario.salario,
      0,
    );
//retornando a média por departamento
    return {
      departamento: departamento,
      media: total / funcionariosPorDepartamento[departamento].length,
    };
   });
   
   //usando filter para deixar passar apenas o com a maior média de salário
   //que seria os departamentos que recebem acima de 65000
   const maioresPagamentos = mediasSalarioPorDepartamento.filter(
    (departamento) => departamento.media > 65000,
   );
      

   console.log(maioresPagamentos);
   console.log(mediasSalarioPorDepartamento);
   console.log(funcionariosPorDepartamento);
   
   
   