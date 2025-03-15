import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Container from "../../components/Container";
import { useState } from "react";
import styles from "./Clientes.module.css";
import { useForm } from "react-hook-form";
import { pfRegisterFetch } from "./clienteService";
import { useNavigate } from "react-router-dom";

function Clientes() {
  const [tipoPessoa, setTipoPessoa] = useState("DEFAULT");
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handleSelectChange = (e) => {
    setTipoPessoa(e.target.value);
  };

  const onSubmit = (data) => {
    pfRegisterFetch(data, navigate);
  };

  return (
    <>
      <Header />
      <Container>
        <section className={styles.clientesPage}>
          <div className={styles.clientesForm}>
            <h2>Cadastro de Pessoas</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="tipoPessoa">Tipo de Pessoa</label>
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

              {tipoPessoa === "fisica" && (
                <>
                  <label htmlFor="nome">Nome</label>
                  <input
                    {...register("pfNome")}
                    className={styles.textInput}
                    type="text"
                    placeholder="João Silva"
                    autoComplete="off"
                  />
                  <label htmlFor="cpf">CPF</label>
                  <input
                    {...register("cpf")}
                    className={styles.textInput}
                    type="text"
                    placeholder="12345678999"
                    autoComplete="off"
                  />
                  <label htmlFor="identidade">Identidade/RG</label>
                  <input
                    {...register("identidade")}
                    className={styles.textInput}
                    type="text"
                    placeholder="12345677"
                    autoComplete="off"
                  />
                  <label htmlFor="email">Email</label>
                  <input
                    {...register("email")}
                    className={styles.textInput}
                    type="text"
                    placeholder="joaosilva@example.com"
                    autoComplete="off"
                  />
                  <label htmlFor="telefone">Telefone</label>
                  <input
                    {...register("telefone")}
                    className={styles.textInput}
                    type="text"
                    placeholder="12345677"
                    autoComplete="off"
                  />
                </>
              )}

              {tipoPessoa === "juridica" && (
                <>
                  <label htmlFor="razaoSocial">Razão Social</label>
                  <input
                    className={styles.textInput}
                    type="text"
                    placeholder="Empresa XYZ"
                    autoComplete="off"
                  />
                  <label htmlFor="cnpj">CNPJ</label>
                  <input
                    className={styles.textInput}
                    type="text"
                    placeholder="12345678000199"
                    autoComplete="off"
                  />
                  <label htmlFor="nomeFantasia">Nome Fantasia</label>
                  <input
                    className={styles.textInput}
                    type="text"
                    placeholder="XYZ Comércio"
                    autoComplete="off"
                  />
                  <label htmlFor="inscricaoEstadual">Inscrição Estadual</label>
                  <input
                    className={styles.textInput}
                    type="text"
                    placeholder="123456789"
                    autoComplete="off"
                  />
                  <label htmlFor="endereco">Endereço</label>
                  <input
                    className={styles.textInput}
                    type="text"
                    placeholder="Rua XYZ, 123"
                    autoComplete="off"
                  />
                  <label htmlFor="email">Email</label>
                  <input
                    className={styles.textInput}
                    type="text"
                    placeholder="empresa@example.com"
                    autoComplete="off"
                  />
                </>
              )}

              <button className={styles.loginButton} type="submit">
                Enviar
              </button>
            </form>
          </div>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Clientes;
