function App() {
  const produtos = [
    { id: 1, nome: "Notebook", preco: 3800, imagem: "imagens/notebook.png"},
    { id: 2, nome: "Mouse Gamer", preco: 80, imagem: "imagens/mouse.png" },
    { id: 3, nome: "Teclado LED", preco: 150, imagem: "imagens/teclado.png" },
    { id: 4, nome: "Monitor 27'' Curvo", preco: 1400, imagem: "imagens/monitor.png"},
    { id: 5, nome: "Pc Game", preco: 7200, imagem: "imagens/pc.png"},
    { id: 6, nome: "Fone sem fio", preco: 380, imagem: "imagens/fone.png"}
  ];

  const [carrinho, setCarrinho] = React.useState([]);

  function adicionarAoCarrinho(produto) {
    const produtoExistente = carrinho.find(item => item.id === produto.id);

    if (produtoExistente) {
      const novoCarrinho = carrinho.map(item =>
        item.id === produto.id
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      );
      setCarrinho(novoCarrinho);
    } else {
      setCarrinho([...carrinho, { ...produto, quantidade: 1 }]);
    }
  }

  function diminuirQuantidade(id) {
    const novoCarrinho = carrinho
      .map(item =>
        item.id === id
          ? { ...item, quantidade: item.quantidade - 1 }
          : item
      )
      .filter(item => item.quantidade > 0);

    setCarrinho(novoCarrinho);
  }

  function removerItem(id) {
    const novoCarrinho = carrinho.filter(item => item.id !== id);
    setCarrinho(novoCarrinho);
  }

  const total = carrinho.reduce(
    (soma, item) => soma + item.preco * item.quantidade,
    0
  );

  return (
    <div className="container">
      <h1>Loja Virtual</h1>

      <h2>Produtos</h2>
      <div className="produtos">
        {produtos.map(produto => (
          <div key={produto.id} className="card">
            <img src={produto.imagem} alt={produto.nome} />
            <h3>{produto.nome}</h3>
            <p>R$ {produto.preco}</p>
            <button onClick={() => adicionarAoCarrinho(produto)}>
              Adicionar
            </button>
          </div>
        ))}
      </div>

      <h2>Carrinho</h2>

      {carrinho.length === 0 ? (
        <p>Nenhum produto no carrinho</p>
      ) : (
        <ul>
          {carrinho.map(item => (
            <li key={item.id}>
              {item.nome} - R$ {item.preco}  
              <strong> x {item.quantidade}</strong>

              <button onClick={() => adicionarAoCarrinho(item)}>
                +
              </button>

              <button onClick={() => diminuirQuantidade(item.id)}>
                -
              </button>

              <button
                className="btn-remover"
                onClick={() => removerItem(item.id)}
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}

      <h3>Total: R$ {total}</h3>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);