import React, { useState } from "react";
import styles from "./Saida.module.css";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Saida() {
  const [saidas, setSaidas] = useState([]);
  const [tipo, setTipo] = useState("material");
  const [descricao, setDescricao] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [valor, setValor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!descricao || (!quantidade && !valor)) {
      alert("Preencha todos os campos corretamente.");
      return;
    }

    const novaSaida = {
      id: Date.now(),
      tipo,
      descricao,
      quantidade: tipo === "material" ? `${quantidade} kg` : "-",
      valor: tipo === "dinheiro" ? `R$ ${valor}` : "-",
    };

    setSaidas([...saidas, novaSaida]);

    setDescricao("");
    setQuantidade("");
    setValor("");
  };

  const removerSaida = (id) => {
    setSaidas(saidas.filter((saida) => saida.id !== id));
  };

  return (
    <>
      <Header />
      <Container>
        <h2 className={styles.title}>Registro de Saída de Recursos</h2>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            <span>Tipo de Saída:</span>
            <select
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              className={styles.selectBox}
            >
              <option value="material">Material Reciclável</option>
              <option value="dinheiro">Dinheiro</option>
            </select>
          </label>

          <label>
            <span>Descrição:</span>
            <input
              type="text"
              placeholder="Ex: Plástico, Vidro, Pagamento"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              required
            />
          </label>

          {tipo === "material" && (
            <label>
              <span>Quantidade (kg):</span>
              <input
                type="number"
                placeholder="Quantidade em kg"
                value={quantidade}
                onChange={(e) => setQuantidade(e.target.value)}
                required
              />
            </label>
          )}

          {tipo === "dinheiro" && (
            <label>
              <span>Valor (R$):</span>
              <input
                type="number"
                placeholder="Valor em reais"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
                required
              />
            </label>
          )}

          <button type="submit" className={styles.submitButton}>
            Registrar Saída
          </button>
        </form>

        {/* Tabela de Saídas */}
        <h3 className={styles.subtitle}>Saídas Registradas</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Descrição</th>
              <th>Quantidade</th>
              <th>Valor</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {saidas.length > 0 ? (
              saidas.map((saida) => (
                <tr key={saida.id}>
                  <td>{saida.tipo === "material" ? "Material" : "Dinheiro"}</td>
                  <td>{saida.descricao}</td>
                  <td>{saida.quantidade}</td>
                  <td>{saida.valor}</td>
                  <td>
                    <button
                      className={styles.removeButton}
                      onClick={() => removerSaida(saida.id)}
                    >
                      Remover
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">Nenhuma saída registrada.</td>
              </tr>
            )}
          </tbody>
        </table>
      </Container>
      <Footer />
    </>
  );
}

export default Saida;
