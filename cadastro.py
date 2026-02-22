import matplotlib.pyplot as plt


# ------------------ CLASSE ------------------ #
class Livro:
    def __init__(self, titulo, autor, genero, quantidade):
        self.titulo = titulo
        self.autor = autor
        self.genero = genero
        self.quantidade = quantidade

    def mostrar(self):
        return f"Título: {self.titulo} | Autor: {self.autor} | Gênero: {self.genero} | Quantidade: {self.quantidade}"


# ------------------ LISTA DA BIBLIOTECA ------------------ #
biblioteca = []


# ------------------ FUNÇÕES ------------------ #
def cadastrar_livro():
    titulo = input("Digite o título do livro: ")
    autor = input("Digite o autor: ")
    genero = input("Digite o gênero: ")

    try:
        quantidade = int(input("Digite a quantidade: "))
    except ValueError:
        print("Quantidade inválida. Use apenas números.")
        return

    novo_livro = Livro(titulo, autor, genero, quantidade)
    biblioteca.append(novo_livro)

    print(f"{titulo} cadastrado com sucesso!")


def listar_livros():
    if not biblioteca:
        print("Nenhum livro cadastrado.")
    else:
        print("\n📚 Lista de Livros:")
        for livro in biblioteca:
            print(livro.mostrar())


def remover_livro():
    titulo = input("Digite o título do livro que deseja remover: ")

    for livro in biblioteca:
        if livro.titulo.lower() == titulo.lower():
            biblioteca.remove(livro)
            print("Livro removido com sucesso!")
            return

    print("Livro não encontrado.")


def mostrar_grafico():
    if not biblioteca:
        print("Nenhum livro cadastrado para gerar gráfico.")
        return

    titulos = [livro.titulo for livro in biblioteca]
    quantidades = [livro.quantidade for livro in biblioteca]

    plt.bar(titulos, quantidades)
    plt.xlabel("Livros")
    plt.ylabel("Quantidade")
    plt.title("Quantidade de Livros na Biblioteca")
    plt.xticks(rotation=45)
    plt.tight_layout()
    plt.show()


# ------------------ MENU PRINCIPAL ------------------ #
while True:
    print("\n====== SISTEMA DE BIBLIOTECA ======")
    print("1 - Cadastrar livro")
    print("2 - Listar livros")
    print("3 - Remover livro")
    print("4 - Mostrar gráfico")
    print("5 - Sair")

    opcao = input("Escolha uma opção: ")

    if opcao == "1":
        cadastrar_livro()

    elif opcao == "2":
        listar_livros()

    elif opcao == "3":
        remover_livro()

    elif opcao == "4":
        mostrar_grafico()

    elif opcao == "5":
        print("Encerrando sistema...")
        break

    else:
        print("Opção inválida.")
