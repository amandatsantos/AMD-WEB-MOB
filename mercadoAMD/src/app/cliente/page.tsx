import React from "react";
import LayoutBase from "../../componentes/Base"; 
import styles from "./styles.module.css";

export default function Cliente() {
  return (
    <LayoutBase>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.title}>Página Cliente</p>
        </div>

        <form action="./grupo" method="get">
          <div className={styles.formularios}>
            <div className={styles.name}>
              <p>Nome</p>
              <input name="nome" />
            </div>

            <div className={styles.end}>
              <p>Endereço</p>
              <input type="text" name="endereco" placeholder="Digite seu endereço" id="endereco" />
            </div>

            <div className={styles.cidade}>
              <p>Cidade</p>
              <input type="text" name="cidade" placeholder="Digite sua cidade" id="cidade" />
            </div>

            <div className={styles.telefone}>
              <p>Telefone</p>
              <input type="number" name="telefone" placeholder="Digite seu telefone" id="tel" />
            </div>

            <button type="submit" className={styles.button}>Cadastrar</button>
          </div>
        </form>
      </div>
    </LayoutBase>
  );
}
