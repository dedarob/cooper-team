import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import "./Materiais.module.css"; // Certifique-se de que este arquivo contém o novo estilo.

function Materiais() {
  return (
    <>
      <Header />
      <Container>
        <h2>Cadastro de Materiais</h2>
        <form>
          <label>
            <span>Nome do Material:</span>
            <input
              type="text"
              placeholder="Digite o nome do material"
              required
            />
          </label>
          <label>
            <span>Descrição:</span>
            <textarea
              placeholder="Digite a descrição do material"
              required
            />
          </label>
          <button type="submit">Salvar</button>
        </form>
      </Container>
      <Footer />
    </>
  );
}

export default Materiais;
