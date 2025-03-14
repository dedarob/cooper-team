import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import styles from "./Coletas.module.css";
import { Link } from "react-router-dom";

function Coletas() {
  const [coletas, setColetas] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setColetas([...coletas, data]);
    reset();
  };

  return (
    <>
      <Header />
      <Container>
        <h2>Coletas</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            <span>Nome do Entregador:</span>
            <input
              type="text"
              placeholder="Digite o nome do entregador"
              {...register("entregador", {
                required: "Este campo é obrigatório",
              })}
              className={styles.inputField}
            />
            {errors.entregador && (
              <p className={styles.error}>{errors.entregador.message}</p>
            )}
          </label>
          <label>
            <span>Material:</span>
            <select
              className={styles.selectBox}
              value={tipoPessoa}
              onChange={handleSelectChange}
              id="tipoPessoa"
              name="tipoPessoa"
            >
                            <option value="DEFAULT" disabled>
                              Selecione uma opção
                            </option>
                            <option value="fisica">Física</option>
                            <option value="juridica">Jurídica</option>
                          </select>
            {errors.material && (
              <p className={styles.error}>{errors.material.message}</p>
            )}
          </label>
          <label>
            <span>Quantidade (kg):</span>
            <input
              type="number"
              placeholder="Digite a quantidade (em kg)"
              {...register("quantidade", {
                required: "Este campo é obrigatório",
                min: { value: 0.1, message: "O valor mínimo é 0.1" },
                valueAsNumber: true,
              })}
              className={styles.inputField}
            />
            {errors.quantidade && (
              <p className={styles.error}>{errors.quantidade.message}</p>
            )}
          </label>
          <label>
            <span>Funcionário que Recebeu:</span>
            <input
              type="text"
              placeholder="Digite o nome do funcionário"
              {...register("funcionario", {
                required: "Este campo é obrigatório",
              })}
              className={styles.inputField}
            />
            {errors.funcionario && (
              <p className={styles.error}>{errors.funcionario.message}</p>
            )}
          </label>
          <button type="submit" className={styles.submitButton}>
            Adicionar Coleta
          </button>
          <Link to="/historico-coletas" className={styles.toHistoricoLink}>
            Ver Histórico de Coletas
          </Link>
        </form>
      </Container>
      <Footer />
    </>
  );
}

export default Coletas;
