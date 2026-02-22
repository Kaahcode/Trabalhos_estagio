function App() {

  const voos = [
    // NACIONAIS
    { id: 1, origem: "São Paulo (GRU)", destino: "Rio de Janeiro (GIG)", preco: 350, tipo: "Nacional", empresa: "LATAM", imagem: "imagens/rio.jpg"},
    { id: 2, origem: "São Paulo (GRU)", destino: "Brasília (BSB)", preco: 580, tipo: "Nacional", empresa: "GOL" , imagem: "imagens/brasilia.png"},
    { id: 3, origem: "São Paulo (GRU)", destino: "Salvador (SSA)", preco: 900, tipo: "Nacional", empresa: "Azul" , imagem: "imagens/salvador.png" },
    { id: 4, origem: "São Paulo (GRU)", destino: "Fortaleza (FOR)", preco: 1200, tipo: "Nacional", empresa: "LATAM" , imagem: "imagens/fortaleza.png"},
    { id: 5, origem: "São Paulo (GRU)", destino: "Manaus (MAO)", preco: 1500, tipo: "Nacional", empresa: "GOL", imagem: "imagens/manaus.png" },

    // INTERNACIONAIS
    { id: 6, origem: "São Paulo (GRU)", destino: "Lisbon (LIS) - Portugal", preco: 3900, tipo: "Internacional", empresa: "TAP Air Portugal" , imagem: "imagens/portugal.png"},
    { id: 7, origem: "São Paulo (GRU)", destino: "Madrid (MAD) - Espanha", preco: 4500, tipo: "Internacional", empresa: "Iberia" , imagem: "imagens/iberia.png"},
    { id: 8, origem: "São Paulo (GRU)", destino: "Paris (CDG) - França", preco: 4800, tipo: "Internacional", empresa: "Air France" , imagem: "imagens/paris.png"},
    { id: 9, origem: "São Paulo (GRU)", destino: "New York (JFK) - EUA", preco: 5200, tipo: "Internacional", empresa: "American Airlines", imagem: "imagens/ny.png"},
    { id: 10, origem: "São Paulo (GRU)", destino: "Buenos Aires (EZE) - Argentina", preco: 2500, tipo: "Internacional", empresa: "LATAM" , imagem: "imagens/ag.png"}
  ];

  const [selecionado, setSelecionado] = React.useState(null);
  const [abaAtiva, setAbaAtiva] = React.useState("Nacional");

  return (
    <div className="container">
      <h1>Sistema de Passagens Aéreas</h1>

      <div className="abas">
        <button 
          className={abaAtiva === "Nacional" ? "ativa" : ""}
          onClick={() => setAbaAtiva("Nacional")}
        >
          Voos Nacionais
        </button>

        <button 
          className={abaAtiva === "Internacional" ? "ativa" : ""}
          onClick={() => setAbaAtiva("Internacional")}
        >
          Voos Internacionais
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Origem</th>
            <th>Destino</th>
            <th>Empresa</th>
            <th>Preço</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {voos
            .filter((voo) => voo.tipo === abaAtiva)
            .map((voo) => (
              <tr key={voo.id}>
                <td>{voo.origem}</td>
                <td>{voo.destino}</td>
                <td>{voo.empresa}</td>
                <td>
                  {voo.preco.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                  })}
                </td>
                <td>
                  <button 
                    className="selecionar"
                    onClick={() => setSelecionado(voo)}
                  >
                    Selecionar
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>


      {selecionado && (
        <div className="resumo">
          <h2>Voo Selecionado</h2>
          <p><strong>Origem:</strong> {selecionado.origem}</p>
          <p><strong>Destino:</strong> {selecionado.destino}</p>
          <p><strong>Empresa:</strong> {selecionado.empresa}</p>
          
          <p>
            <strong>Preço:</strong>{" "}
            {selecionado.preco.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL"
            })}
            </p>
          <img
            src={selecionado.imagem}
            alt="Destino"
            style={{
              width: "50%",
              marginTop: "18px",
              borderRadius: "15px"
            }}
          />
        </div>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);