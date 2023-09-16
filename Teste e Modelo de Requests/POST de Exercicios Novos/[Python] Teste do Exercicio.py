def decompoe(valor, cedulas):
    resultado = []
    for c in cedulas:
        num = valor // c
        if (num > 0):
            resultado.append(f'{num} de {c}')
        valor = valor % c
    return resultado
