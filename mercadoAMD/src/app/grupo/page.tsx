"use client";

import LayoutBase from "../../componentes/Base"; 

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import styles from "../grupo/styles.module.css";

export default function Grupo() {
    return (
        <Suspense fallback={<p>Carregando...</p>}>
            <GrupoContent />
        </Suspense>
    );
}

function GrupoContent() {
    const dados = useSearchParams();
    const nome = dados.get("nome");
    const endereco = dados.get("endereco");
    const cidade = dados.get("cidade");
    const telefone = dados.get("telefone");

    return (
        <LayoutBase>
        <div className={styles.container}>
            <div className={styles.header}>
                <p className={styles.title}>gRUPO</p>
            </div>

            <div className={styles.information}>
                <p><strong>Nome:</strong> {nome} </p>
                <p><strong>Endereço:</strong> {endereco} </p>
                <p><strong>Cidade:</strong> {cidade} </p>
                <p><strong>Telefone:</strong> {telefone} </p>
            </div>
        </div>
        </LayoutBase>
    );
}
