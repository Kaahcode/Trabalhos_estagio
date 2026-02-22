# -----------------------------
# LISTA DE CONVIDADOS
# -----------------------------

convidados = ["Julia", "Renato", "Maria"]

print("Convidados que ainda não confirmaram")
for nome in convidados:
    print(nome)


# -----------------------------
# CORES E POSIÇÕES
# -----------------------------

cores = ["vermelho", "roxo", "azul", "rosa", "amarelo"]

print("\nEnviando lembretes para os convidados que ainda não confirmaram")
for posicao, cor in enumerate(cores):
    print(f"Posição = {posicao}, cor = {cor}")


# -----------------------------
# FUNÇÃO PARA CALCULAR MÉDIA
# -----------------------------

def calcular_media(notas):
    if len(notas) == 0:
        print("A lista de notas não pode estar vazia.")
        return None
    return sum(notas) / len(notas)


# -----------------------------
# TESTANDO A FUNÇÃO
# -----------------------------

notas = [3.0, 7.6]
media = calcular_media(notas)

if media is not None:
    print("\nMédia:", media)


# Teste com lista vazia
notas_vazias = []
media_vazia = calcular_media(notas_vazias)

if media_vazia is not None:
    print("Média:", media_vazia)