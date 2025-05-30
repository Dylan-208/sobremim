/* eslint-disable jsx-a11y/alt-text */
import styles from "./Banner.module.css";
import circuloColorido from "assets//imagens/circulo_colorido.png";
import minhaFoto from "assets//imagens/minha_foto.jpeg";

export default function Banner() {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.apresentacao}>
          <h1 className={styles.titulo}>Modelo site</h1>

          <p className={styles.paragrafo}>
            Sou um profissional em transição de carreira em busca de uma
            oportunidade de emprego na área de Front-End. Aqui você encontra-la
            alguns projetos que realizei.
          </p>
        </div>

        <div className={styles.imagens}>
          <img
            className={styles.circuloColorido}
            src={circuloColorido}
            aria-hidden={true}
          />

          <img
            className={styles.minhaFoto}
            src={minhaFoto}
            alt="Foto do Dylan Santos"
          />
        </div>
      </div>
    </>
  );
}
