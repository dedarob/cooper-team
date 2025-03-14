import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import { useForm } from "react-hook-form";
import { fetchMateriais } from "./materiaisService";
import { Navigate } from "react-router-dom";

import "./Materiais.module.css"; // Certifique-se de que este arquivo contém o novo estilo.

function Materiais() {
  const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
      fetchMateriais(data);
    };

  return (
    <>
      <Header />
      <Container>
        <h2>Cadastro de Materiais</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <span>Nome do Material:</span>
            <input
              {...register("nomeMaterial")}
              type="text"
              placeholder="Digite o nome do material"
              required
            />
          </label>
          <label>
            <span>Descrição:</span>
            <input
            {...register("descricao")} 
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
