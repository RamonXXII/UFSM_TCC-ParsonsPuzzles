# TCC-ParsonsPuzzles
 
Nesse repositório será armazenado o progresso do ambiente web desenvolvido para o Trabalho de Conclusão de Curso do (ex)aluno, agora graduado, João Vitor Forgearini Beltrame.



|            Etapa           |
|----------------------------|
| 1. Aprendendo a usar js-parsons e desenvolvendo alguns problemas próprios utilizando o site oficial como norte. [Clique aqui.](/1.%20Aprendendo%20js-parsons/) |
| 2. Testando JS-Parsons com uma UI um pouco mais amigável. [Clique aqui.](/2.%20Testando%20js-parsons%20(com%20UI)/) |
| 3. Testando com vários tipos diferentes de exercícios (testes unitários e vartests). [Clique aqui.](/3.%20Versão%20do%20deploy%20e%20interpretador%20online/) |
| 4. Versão com back e front-end, API com exercícios, remodelando o UI para ser mais amigável. [Clique aqui.](/4.%20TODO%20Versão%20com%20backend%20e%20interpretador%20online/) |
| 5. Autenticação de usuário utilizando Google OAuth 2.0 adicionado. [Clique aqui.](/5.%20Versão%20com%20back-end%20e%20autenticação%20de%20usuário/) |
| 6. Salvamento de histórico adicionado e funcional. [Clique aqui.](/6.%20Versão%20com%20salvamento%20de%20histórico/) |
| 7. Hotjar (para testes com usuários) adicionado. [Clique aqui.](/7.%20Hotjar%20adicionado/) |

Mais informações sobre o design [clicando aqui](/Testando%20Designs/).


## Anotações importantes sobre o uso de JS-Parsons

**Caso queira testar o valor de retorno e ver se uma função está executando da forma certa**  
  * usar unittests (ver [toggle-example.html](/1.%20Aprendendo%20js-parsons/examples/toggle-example.html) e [unittestexample.html](/1.%20Aprendendo%20js-parsons/examples/unittestexample.html))

**Caso queira testar o valor de cada variável no final do código**  
  * usar vartests (ver [toggle-variable-grader-example.html](/1.%20Aprendendo%20js-parsons/examples/toggle-variable-grader-example.html))
  
--------------------------
## "Documentação"
_Como a documentação oficial da biblioteca js-parsons é, por vezes, incompleta e parte dela se encontra dentro do código da lib, em forma de comentários, resumi abaixo algumas informações importantes sobre o uso da biblioteca._  

_**Atenção**: A biblioteca oficial **não possui suporte para feedback em português brasileiro, então eu mesmo o adicionei** nos arquivos da biblioteca para utilizar neste TCC. **Para acessar essa versão da lib, é só [clicar aqui](/0.%20Versão%20do%20js-parsons%20utilizada/).** Para utilizá-la, basta colocá-la na pasta do seu projeto e incluir o caminho relativo das mesmas nas suas importações no código._  

**Argumentos a serem mandados para a função ```new ParsonsWidget()``` em forma de objeto**  

* ```'trashId'```: O ID usado na ```<div>``` HTML que vai conter os elementos a serem organizados.
* ```'sortableId'```: O ID usado na ```<div>``` HTML que vai conter a solução após as linhas de código serem organizadas.
* ```'lang'```: A biblioteca possui vários idiomas disponíveis para feedback, avisos, etc, e foi adicionado mais um *(ptbr)* para o uso neste trabalho.
* ```'max_wrong_lines'```: O máximo de linhas erradas (distratores) que serão mostradas pro usuário. Caso você tenha colocado mais de ```<max_wrong_lines>``` distratores, o script irá escolher a quantidade ```<max_wrong_lines>``` deles aleatóriamente para mostrar ao usuário.
* ```'feedback_cb'```: Referência à uma função definida por você para mostrar os erros retornados do exercício, caso haja algum. Exemplo:
    ```javascript
    function displayErrors(fb) {
      if (fb.errors.length > 0) {
        alert(fb.errors[0]);
      }
    }
    ```

* ```'unittests'```: Os testes unitários a serem realizados (para ver como são feitos, veja [toggle-example.html](/1.%20Aprendendo%20js-parsons/examples/toggle-example.html) e [unittestexample.html](/1.%20Aprendendo%20js-parsons/examples/unittestexample.html)).
* ```'initcode'```: Código a ser executado antes do código do desafio.
* ```'code'```: Código a ser executado após o código do desafio.
* ```'toggleTypeHandlers'```: Objeto com os tipos de variáveis disponíveis para dar *toggle* no exercício, geralmente necessita testes unitários (ver [toggle-example.html](/1.%20Aprendendo%20js-parsons/examples/toggle-example.html)).
  * A ```class``` no código do desafio deve ser definida com ```jsparsons-toggle```.
  * O ```data-type``` no código do desafio deve ter o mesmo nome do objeto que contem a lista de variáveis a serem escolhidas, veja as imagens abaixo.
  *A definição é feita desta forma no meio do código a ser embaralhado:*  
  ```javascript
  "return <span class='jsparsons-toggle' data-type='abc'></span>\n"
  ```

  *A chamada é feita desta forma:*
  ```javascript
  var parson = new ParsonsWidget({
    'sortableId':'sortable',
    'trashId':'sortableTrash',
    'unittests':unittests,
    'lang':'ptbr',
    'toggleTypeHandlers': { abc: ["a", "b", "c"] }
  });
  ```

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
```javascript
  'vartests': [{ unitcode: "x = 0\ny = 0", code: "", message: "Testing with initial variable values x = 0 and y = 2", variables: {x: 2} }];
  ```

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
