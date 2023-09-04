# TCC-ParsonsPuzzles
 
Nesse repositório será armazenado o progresso do ambiente web desenvolvido para o TCC. Mais informações sobre o design [clicando aqui](/Testando%20Designs/).

|            Etapa           |
|----------------------------|
| [Entender e aprender a usar js-parsons e desenvolver alguns problemas próprios usando o site oficial como norte.](/1.%20Aprendendo%20js-parsons/) |
| [Testar JS-Parsons com uma UI um pouco mais amigável.](/2.%20Testando%20js-parsons%20(com%20UI)/) |
| [Testar com vários tipos diferentes de exercícios (testes unitários e vartests) e publicar na web de alguma forma.](/3.%20Versão%20do%20deploy%20e%20interpretador%20online/) |
| [Versão com Back e Front end, API com exercícios, remodelar o front para ser mais amigável](/4.%20TODO%20Versão%20com%20backend%20e%20interpretador%20online/) |

## Anotações importantes sobre o uso de JS-Parsons

**Caso queira testar o valor de retorno e ver se uma função está executando da forma certa**  
  * usar unittests (ver [toggle-example.html](/1.%20Aprendendo%20js-parsons/examples/toggle-example.html) e [unittestexample.html](/1.%20Aprendendo%20js-parsons/examples/unittestexample.html))

**Caso queira testar o valor de cada variável no final do código**  
  * usar vartests (ver [toggle-variable-grader-example.html](/1.%20Aprendendo%20js-parsons/examples/toggle-variable-grader-example.html))
  
--------------------------
## "Documentação"
**Argumentos a serem mandados para a função ```new ParsonsWidget()``` em forma de objeto**  

* ```'trashId'```: O ID usado na ```<div>``` HTML que vai conter os elementos a serem organizados.
* ```'sortableId'```: O ID usado na ```<div>``` HTML que vai conter a solução após as linhas de código serem organizadas.
* ```'lang'```: A biblioteca possui vários idiomas disponíveis para feedback, avisos, etc, e foi adicionado mais um *(ptbr)* para o uso neste trabalho.
* ```'unittests'```: Os testes unitários a serem realizados (para ver como são feitos, veja [toggle-example.html](/1.%20Aprendendo%20js-parsons/examples/toggle-example.html) e [unittestexample.html](/1.%20Aprendendo%20js-parsons/examples/unittestexample.html)).
* ```'initcode'```: Código a ser executado antes do código do desafio.
* ```'code'```: Código a ser executado após o código do desafio.
* ```'toggleTypeHandlers'```: Objeto com os tipos de variáveis disponíveis para dar *toggle* no exercício, geralmente necessita testes unitários (ver [toggle-example.html](/1.%20Aprendendo%20js-parsons/examples/toggle-example.html)).
  * A ```class``` no código do desafio deve ser definida com ```jsparsons-toggle```.
  * O ```data-type``` no código do desafio deve ter o mesmo nome do objeto que contem a lista de variáveis a serem escolhidas, veja as imagens abaixo.
  *A definição é feita desta forma no meio do código a ser embaralhado:*  
  <img src="/assets/toggleTypeHandlersExemplo2.png" width="650"> 

  *A chamada é feita desta forma:*
  <img src="/assets/toggleTypeHandlersExemplo.png" width="650"> 

  * O ```'toggleTypeHandlers'``` possui alguns tipos padrão já definidos, são eles:
    ```javascript
    {
      boolean: ["True", "False"],
      compop: ["<", ">", "<=", ">=", "==", "!="],
      mathop: ["+", "-", "*", "/"],
      boolop: ["and", "or"]
    }
    ```
    Para estes, não é preciso definir seus valores no ```toggleTypeHandlers```, apenas settar o ```data-type``` como ```boolean```, ```compop```, ```mathop``` ou ```boolop```.
* ```'message'```: Uma mensagem textual do teste que seu código será submetido, para ser mostrada ao usuário.
* ```'vartests'```: Lista de objetos com os dados necessários para fazer testes de valores com variáveis, para verificar se variável ```x``` está com valor ```2``` após a execução do código, por exemplo. (ver [toggle-variable-grader-example.html](/1.%20Aprendendo%20js-parsons/examples/toggle-variable-grader-example.html))
<img src="/assets/vartestsExemplo.png" width="650">

  **Aqui você pode enviar:**
  * ```'variables'```: Um objeto com as propriedades para cada variável que será testada.
  **OU**
  * ```'variable'```: O nome da variável que será testada.
  * ```'expected'```: O valor esperado para a variável após a execução do código.

**Para setar o código a ser executado, é necessário escrever o código inteiro como uma string e enviá-la através da chamada de função ```.init(codigo)``` e, logo após, embaralhar as linhas com ```.shuffleLines()```:**
```javascript
var parson = new ParsonsWidget({
    // parametros aqui
  });
parson.init(codigo);
parson.shuffleLines();
```
