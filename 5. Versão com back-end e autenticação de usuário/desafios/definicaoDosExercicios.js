exercicios = {
    ex1:
        "tamanho = len('mensagem') \n" +
        "if (tamanho > 10):\n" +
        "  print('Condicao verdadeira!')\n" +
        "print('Cheguei no final')\n",
    ex2:
        'def classifimc(p, h):\n' +
        '  imc = p/h**2\n' +
        '  if imc < 18.5:\n' +
        '    return "Magreza"\n' +
        '  else:\n' +
        '    if imc <= 24.9:\n' +
        '      return "Peso normal"\n' +
        '    else:\n' +
        '      if imc <= 29.9:\n' +
        '        return "Sobrepeso"\n' +
        '      else:\n' +
        '        if imc <= 34.9:\n' +
        '          return "Obesidade grau I"\n' +
        '        else:\n' +
        '          if imc <= 40:\n' +
        '            return "Obesidade grau II"\n' +
        '          else:\n' +
        '            return "Obesidade grau III"\n',
    ex3:
        'def classifimc(p, h):\n'+
        '  imc = p/h**2\n'+
        '  if imc < 18.5:    return "Magreza"\n'+
        '  elif imc <= 24.9: return "Peso normal"\n'+
        '  elif imc <= 29.9: return "Sobrepeso"\n'+
        '  elif imc <= 34.9: return "Obesidade grau I"\n'+
        '  elif imc <= 40:   return "Obesidade grau II"\n'+
        '  else:             return "Obesidade grau III"\n',
    ex4:
        '$$toggle::peso::altura$$ = 80\n' +
        '$$toggle::peso::altura$$ = 1.80\n' +
        'print(classifimc()) #distractor\n' +
        'print(classifimc(peso,altura))\n',
    ex5:
        '',
}

enunciados = {
    ex1: "Compare se o tamanho da string é maior que 10 e, depois, continue o fluxo de execução do programa.",
    ex2: "Crie uma função que calcule o IMC baseado no peso e altura e retorne uma string indicando sua classificação segundo o IMC." +
    "<br>Abaixo de 18.5 = magreza, entre 18.6 e 24.9 = peso normal, entre 25 e 29.9 = sobrepeso, acima disso são os consecutivos graus de obesidade.",
    ex3: "Crie a mesma função do exercício anterior, mas utilizando o comando Elif ao invés de Else If.",
    ex4: "Chame, da forma correta, a função criada anteriormente.",
    ex5: "",
}

dicas = {
    ex1: '<span class="dicaLabel">Dica:</span> Atenção com a identação do código',
    ex2: '<span class="dicaLabel">Dica:</span> Atenção com a identação do código',
    ex3: '<span class="dicaLabel">Dica:</span> Atenção com a identação do código',
    ex4: '<span class="dicaLabel">Dica:</span> Nem todas as linhas precisam ser utilizadas',
    ex5: '',
}