import Botao from "components/Botao";
import styles from "./Post.module.css";
import { Link } from "react-router";

export default function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img
          className={styles.capa}
          src={`/assets/posts/${post.id}/capa.png`}
          alt="imagem de capa do post"
        />
        <h2 className={styles.titulo}>{post.titulo}</h2>

        <Botao>Ler</Botao>
      </div>
    </Link>
  );
}
