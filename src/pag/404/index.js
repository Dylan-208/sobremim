import Botao from "components/Botao";
import styles from "./404.module.css";
import imagemCachorro from "assets/imagens/erro_404.png";
import { useNavigate } from "react-router";
function NotFound() {
  const navegar = useNavigate();
  return (
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>404</span>
        <h1 className={styles.titulo}>Ops! Página não encontrada</h1>

        <p className={styles.paragrafo}>
          Tem certeza que era isso mesmo que você estava procurando?
        </p>

        <p className={styles.paragrafo}>
          Recarrege a página ou volte para a página incial
        </p>

        <div className={styles.botaoContainer} onClick={() => navegar(-1)}>
          <Botao tamanho="lg">Voltar</Botao>
        </div>
        <img
          className={styles.imagemCachorro}
          src={imagemCachorro}
          alt="Imagem de um cachorro com óculos"
        />
      </div>

      <div className={styles.espacoEmBranco}></div>
    </>
  );
}

export default NotFound;
