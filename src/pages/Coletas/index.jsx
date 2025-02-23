import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import styles from "./Coletas.module.css"; // Importando o módulo CSS

function Coletas() {
  const [coletas, setColetas] = useState([]);
  const [entregador, setEntregador] = useState("");
  const [material, setMaterial] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [funcionario, setFuncionario] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (entregador && material && quantidade && funcionario) {
      const novaColeta = { entregador, material, quantidade, funcionario };
      setColetas([...coletas, novaColeta]);
      setEntregador("");
      setMaterial("");
      setQuantidade("");
      setFuncionario("");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <h2>Coletas</h2>

        {/* Formulário para registrar coletas */}
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <label>
            <span>Nome do Entregador:</span>
            <input
              type="text"
              placeholder="Digite o nome do entregador"
              value={entregador}
              onChange={(e) => setEntregador(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
          <label>
            <span>Material:</span>
            <input
              type="text"
              placeholder="Digite o material coletado"
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
          <label>
            <span>Quantidade (kg):</span>
            <input
              type="number"
              placeholder="Digite a quantidade (em kg)"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
              required
              min="0.1"
              step="0.1"
              className={styles.inputField}
            />
          </label>
          <label>
            <span>Funcionário que Recebeu:</span>
            <input
              type="text"
              placeholder="Digite o nome do funcionário"
              value={funcionario}
              onChange={(e) => setFuncionario(e.target.value)}
              required
              className={styles.inputField}
            />
          </label>
          <button type="submit" className={styles.submitButton}>Adicionar Coleta</button>
        </form>

        {/* Tabela para exibir as coletas */}
        <table>
          <thead>
            <tr>
              <th>Entregador</th>
              <th>Material</th>
              <th>Quantidade (kg)</th>
              <th>Funcionário que Recebeu</th>
            </tr>
          </thead>
          <tbody>
            {coletas.map((coleta, index) => (
              <tr key={index}>
                <td>{coleta.entregador}</td>
                <td>{coleta.material}</td>
                <td>{coleta.quantidade}</td>
                <td>{coleta.funcionario}</td>
              </tr>
            ))}
            {coletas.length === 0 && (
              <tr>
                <td colSpan="4">Nenhuma coleta registrada</td>
              </tr>
            )}
          </tbody>
        </table>
      </Container>
      <Footer />
    </>
  );
}

export default Coletas;
