import posts from "json/posts.json";
import styles from "./Inicio.module.css";
import PostCard from "components/PostCard";
function Inicio() {
  return (
    <>
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Inicio;
