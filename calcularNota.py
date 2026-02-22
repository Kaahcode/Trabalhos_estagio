
nome = input("Digite um nome:")

print(nome)

#F-string
print(f"Olá {nome}, Seja bem-vindo (a)!  Confira a sua nota aqui")

Nota_1 = int(input("Digite a primeira nota:"))
Nota_2 = int(input("Digite a segunda nota:"))
Nota_3 = int(input("Digite a terceira nota:"))
Nota_4 = int(input("Digite a quarta nota:"))
#observe que utilizamos a função int(), pois sem ela, o python entederia que as notas seriam string

#condição para nota aprovada do aluno
media = (Nota_1+Nota_2+Nota_3+Nota_4)/4

if media >= 7:
  situacao = "Aprovado (a)"
else:
  situacao = "Reprovado (a)"

print (f"A média das notas é: {media}")
print (f"Situação do aluno: {situacao}")

#Digite a sua média
media = float(input("Por favor digite a sua media:"))

#verificar a situação da nota
if media < 7:
    print("Sinto muito, você foi reprovado! (a)")
elif media >= 7:
    print("Parabéns: Você foi aprovado! (a)")