import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import styles from "./Coletas.module.css";
import { Link } from "react-router-dom";
import { fetchSomenteNomeMateriais } from "./coletasService";
import { FaSearch } from "react-icons/fa";
import SearchBar from "../../components/SearchBar";
import { fetchColetaEnviar } from "./coletasService"; // Importando a função fetchColetaEnviar

function Coletas() {
  const [coletas, setColetas] = useState([]);
  const [materiais, setMateriais] = useState([]);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchType, setSearchType] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const onSubmit = (data) => {
    // Enviar dados para a função fetchColetaEnviar
    fetchColetaEnviar(data, reset);
  };

  useEffect(() => {
    const fetchMateriais = async () => {
      try {
        const data = await fetchSomenteNomeMateriais();
        setMateriais(data);
      } catch (error) {
        console.error("Erro ao buscar materiais:", error);
      }
    };

    fetchMateriais();
  }, []);

  const handleSearchClick = (type) => {
    setSearchType(type);
    setShowSearchBar(true);
  };

  const handleSelectPerson = (value) => {
    setValue(searchType, value);
    setShowSearchBar(false);
  };

  return (
    <>
      <Header />
      <Container>
        <div className={styles.caixaPrimaria}>
          <div>
            <h2>Coletas</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>
                <span>Codigo do Entregador:</span>
                <div className={styles.bothIconArea}>
                  <input
                    type="text"
                    placeholder="Código do entregador"
                    {...register("entregador", {
                      required: "Este campo é obrigatório",
                    })}
                    className={styles.inputField}
                  />
                  <button
                    type="button"
                    onClick={() => handleSearchClick("entregador")}
                  >
                    <FaSearch />
                  </button>
                </div>
                {errors.entregador && (
                  <p className={styles.error}>{errors.entregador.message}</p>
                )}
              </label>

              <label>
                <span>Material:</span>
                <select
                  {...register("material", {
                    required: "Este campo é obrigatório",
                  })}
                >
                  <option value="">Selecione um material</option>
                  {materiais.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.nomeMaterial}
                    </option>
                  ))}
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
                <span>Código do Funcionário que Recebeu:</span>
                <div className={styles.bothIconArea}>
                  <input
                    type="text"
                    placeholder="Digite o código do funcionário"
                    {...register("funcionario", {
                      required: "Este campo é obrigatório",
                    })}
                    className={styles.inputField}
                  />
                  <button
                    type="button"
                    onClick={() => handleSearchClick("funcionario")}
                  >
                    <FaSearch />
                  </button>
                </div>
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
          </div>

          {showSearchBar && (
            <SearchBar
              onSelectPerson={handleSelectPerson}
              searchType={searchType}
            />
          )}
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Coletas;
