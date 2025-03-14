import React, { useState } from "react";
import styles from "./Saida.module.css";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

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
          <Link to="/historico-saidas" className={styles.toHistoricoLink}>
            Ver Histórico de Saidas
          </Link>
        </form>

      
      </Container>
      <Footer />
    </>
  );
}

export default Saida;
