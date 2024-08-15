📜 Máquina de Turing Matemática em JavaScript
Contextualização do Projeto
🎯 Objetivo: Desenvolver uma função em JavaScript que simula o comportamento de uma Máquina de Turing para realizar operações matemáticas básicas, como soma, subtração, multiplicação, divisão e divisão com resto. A Máquina de Turing é um modelo matemático teórico fundamental na teoria da computação, usado para entender os limites da computação algorítmica.

Neste projeto, implementamos uma função que pode interpretar e executar uma sequência de operações matemáticas fornecidas em um array, retornando os resultados esperados e manipulando números e operadores conforme a ordem das operações.

Tecnologias Utilizadas
JavaScript: Linguagem de programação usada para implementar a função e realizar os cálculos matemáticos.
Node.js (opcional): Ambiente de execução JavaScript fora do navegador para testar a função no terminal.
Navegador Web (opcional): Para testar a função diretamente no console do navegador.
Passo a Passo para a Execução do Projeto
1. Preparar o Ambiente
Antes de executar o código, você precisa preparar o ambiente onde o código será executado. Você pode optar por usar um navegador web ou Node.js.

2. Criar os Arquivos Necessários
Arquivo HTML (opcional, para teste em navegador):

Crie um arquivo chamado index.html com o conteúdo do arquivo HTML fornecido.
Arquivo JavaScript:

Crie um arquivo chamado turingMachine.js com o código JavaScript fornecido.
3. Executar o Código
No Navegador:
Abra o arquivo index.html em um navegador web (Google Chrome, Firefox, etc.).
Abra o Console do navegador para ver a saída. Você pode acessar o console com Ctrl + Shift + J (ou Cmd + Option + J no macOS).
No Node.js:
Instale o Node.js, se ainda não estiver instalado, a partir do site oficial do Node.js.

Abra um terminal e navegue até o diretório onde você salvou o arquivo turingMachine.js.

Execute o arquivo com o comando:

bash
Copiar código
node turingMachine.js
Veja a saída no terminal.

Exemplo de Uso
Aqui está um exemplo de como você pode usar a função da Máquina de Turing para realizar operações matemáticas:

javascript
Copiar código
const result = turingMachine([ '3', '+', '5', '*', '2' ]);
console.log(result); // Saída esperada: 16
