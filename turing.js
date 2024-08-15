function turingMachineMath(arr) {
  // Aqui se armazena os resultados
  const results = [];

  //Aqui verifica se o array está vazio
  if (arr.length === 0) {
    return results;
  }

  // Iterador que percorre o array
  let i = 0;

  // Iterador: Um objeto que permite percorrer uma coleção de dados de forma sequencial.
  // Função Principal: Acessar elementos da coleção um a um

  // Inicializa o valor atual
  let currentValue = arr[i];

  while (i < arr.length) {
    if (typeof currentValue === "number") {
      results.push(currentValue);
    } else if (["+", "-", "*", "/", "%"].includes(currentValue)) {
      const operator = currentValue;
      i++;
      if (i < arr.length && typeof arr[i] === "number") {
        // Aplicação da operação matemática
        switch (operator) {
          case "+":
            currentValue = results.pop() + arr[i];
            break;
          case "-":
            currentValue = results.pop() - arr[i];
            break;
          case "*":
            currentValue = results.pop() * arr[i];
            break;
          case "/":
            currentValue = results.pop() / arr[i];
            break;
          case "%":
            currentValue = results.pop() % arr[i];
            break;
        }
        results.push(currentValue);
      }
    }
    i++;
    // Atualiza o valor atual
    currentValue = arr[i];
  }

  return results;
}

// Área de testes -->

// os comentários ao lado de cada operação são exemplos de resultados
console.log(turingMachineMath([1, "+", 2])); // [3]
console.log(turingMachineMath([1, "+", 2, 3, "*", 3])); // [3, 9]
console.log(turingMachineMath([5, "*", 2, "+", 3])); // [13]
console.log(turingMachineMath([10, "/", 2, "-", 1])); // [4]
console.log(turingMachineMath([7, "%", 3, "+", 5])); // [6]
