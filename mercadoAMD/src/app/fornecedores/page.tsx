import React from "react";
import LayoutBase from "../../componentes/Base";
import styles from "../fornecedores/styles.module.css";

export default function Fornecedores() {
  return (
    <LayoutBase>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.title}>Cadastro de Fornecedores</p>
        </div>

        <form action="./grupo" method="get">
          <div className={styles.formularios}>
            <p>Nome do Fornecedor</p>
            <input type="text" name="nome" placeholder="Digite o nome do fornecedor" />

            <p>CNPJ</p>
            <input type="text" name="cnpj" placeholder="Digite o CNPJ" />

            <p>Endereço</p>
            <input type="text" name="endereco" placeholder="Digite o endereço" />

            <p>Telefone</p>
            <input type="tel" name="telefone" placeholder="Digite o telefone" />

            <button type="submit" className={styles.button}>Cadastrar</button>
          </div>
        </form>
      </div>
    </LayoutBase>
  );
}
