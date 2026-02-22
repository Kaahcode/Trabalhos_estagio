
nome = input("Digite um nome")

print(nome)

#formadores de caracteres
print("Olá %s, bem-vindo a disciplina de programação. Parabéns pelo seu primeiro hello world"% (nome))

#F-string
print(f"Olá {nome}, bem-vindo a disciplina de programação. Parabéns pelo seu primeiro hello world")

Nota_1 = int(input("Digite a primeira nota:"))
Nota_2 = int(input("Digite a segunda nota:"))
Nota_3 = int(input("Digite a terceira nota:"))
Nota_4 = int(input("Digite a quarta nota:"))
#observe que utilizamos a função int(), pois sem ela, o python entederia que as notas seriam string

#condição para nota aprovada do aluno
media = (Nota_1+Nota_2+Nota_3+Nota_4)/4

if media >= 6:
  situacao = "Aprovada"
else:
  situacao = "Reprovado"

#dados as notas mostramos a média final e a situação do aluno
print(f"A média da notas é: {media}")