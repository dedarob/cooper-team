import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Container from "../../components/Container";
import { FaTrash, FaPlus, FaPen } from "react-icons/fa";
import styles from "./HistoricoColetas.module.css";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

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

function HistoricoColetas() {
  return (
    <>
      <Header />

      <Container>
        <section className={styles.historico_coletas_pagina}>
          <div className={styles.around_botoes_acao}>
            <button>
              <FaPlus className={styles.icon} />
            </button>
            <button>
              <FaPen className={styles.icoin} />
            </button>
            <button className={styles.icon_trash}>
              <FaTrash />
            </button>
          </div>
          <div className={styles.tabela_historico_coletas}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              checkboxSelection
              autoHeight
            />
          </div>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default HistoricoColetas;
