import styles from "./Rodape.module.css";
import marcarRegistrada from "assets/imagens/marca_registrada.svg";
export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <img src={marcarRegistrada} alt="Marca Registrada" />
      Desenvolvido por Dylan Santos
    </footer>
  );
}
