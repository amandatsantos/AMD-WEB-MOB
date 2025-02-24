import { ReactNode } from "react";
import Link from "next/link";
import styles from "../styles/Base.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.title}> Mercado AMD</h2>
      <nav className={styles.navLinks}>
        <Link href="/cliente" className={styles.link}>Cliente</Link>
        <Link href="/grupo" className={styles.link}>Grupo</Link>
        <Link href="/venda" className={styles.link}>Vendas</Link>
        <Link href="/fornecedores" className={styles.link}>Fornecedores</Link>
      </nav>
    </div>
  );
};

const Base = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Base;
