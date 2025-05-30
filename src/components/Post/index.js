import { Route, Routes, useParams } from "react-router";
import posts from "json/posts.json";
import PostModelo from "components/PostModelo";
import ReactMarkdown from "react-markdown";
import "./post.css";
import NotFound from "pag/404";
import PaginaPadrao from "components/PaginaPadrao";
import PostCard from "components/PostCard";
export default function Post() {
  const parametros = useParams();

  const postsDiferentes = posts.filter((post) => {
    return post.id !== Number(parametros.id);
  });

  const postFiltrado = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  console.log(postsDiferentes.sort((a, b) => b.id - a.id));

  if (!postFiltrado) {
    return <NotFound />;
  }
  return (
    <>
      <Routes>
        <Route path="*" element={<PaginaPadrao />}>
          <Route
            index
            element={
              <PostModelo
                fotoCapa={`/assets/posts/${postFiltrado.id}/capa.png`}
                titulo={postFiltrado.titulo}
              >
                <div className="post-markdown-container">
                  <ReactMarkdown>{postFiltrado.texto}</ReactMarkdown>
                </div>
                <div className="alinhar">
                  <h1>Talvez você possa se interessar</h1>
                </div>

                <ul className="containerSugestao">
                  {postsDiferentes
                    .map((post) => {
                      return (
                        <li>
                          <PostCard post={post} />
                        </li>
                      );
                    })
                    .sort((a, b) => b.id - a.id)
                    .slice(0, 4)}
                </ul>
              </PostModelo>
            }
          />
        </Route>
      </Routes>
    </>
  );
}
