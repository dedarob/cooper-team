import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Container from "../../components/Container";
import styles from "../HistoricoColetas/HistoricoColetas.module.css";
import Tabela from "../../components/Tabela";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "entregador", headerName: "Entregador", width: 150 },
  { field: "material", headerName: "Material", width: 250 },
  { field: "quantidade", headerName: "Quantidade", width: 250 },
  { field: "funcionario", headerName: "Funcionario Que Recebeu", width: 250 },
  { field: "data", headerName: "Data", width: 200 },
];

const rows = [
  {
    id: 1,
    entregador: "João",
    material: "Plástico",
    quantidade: "50",
    funcionario: "Roberto",
    data: "2025-02-23",
  },
  {
    id: 2,
    entregador: "João",
    material: "Plástico",
    quantidade: "50",
    funcionario: "Roberto",
    data: "2025-02-23",
  },
];

function HistoricoSaidas() {
  return (
    <>
      <Header />

      <Container>
        <section className={styles.historico_coletas_pagina}>
          
          <Tabela rows={rows} columns={columns} />
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default HistoricoSaidas;