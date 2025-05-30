import PostModelo from "components/PostModelo";
import fotoCapa from "assets/imagens/sobre_mim_capa.png";
import styles from "./SobreMim.module.css";
import foto from "assets/imagens/minha_foto.jpeg";
function SobreMim() {
  return (
    <>
      <PostModelo titulo={"Sobre mim"} fotoCapa={fotoCapa}>
        <img src={foto} alt="Minha foto" className={styles.fotoSobreMim} />

        <p className={styles.paragrafo}>
          Meu nome é Dylan da Silva Santos, tenho 28 anos e sou formado em
          Engenharia Metalúrgica na Universidade Federal do Ceará. Atualmente
          estou em transição de carreira para a área de tecnologia. Meu
          interesse na área começou durante o curso quando tive meu primeiro
          contato com tecnologia na disciplina de programação, em que aprendi o
          básico de Python. Porém, segui com a formação do curso.
        </p>

        <p className={styles.paragrafo}>
          Antes de me formar atuei no ramo eólico como analista de qualidade.
          Trabalhei durante 2 anos na Aeris Energy. Lá novamente tive contado
          com a área de tecnologia mas especificamente a area de dados. Construi
          diversos relatórios no PowerBI, aplicativos no PowerApps e planilhas
          de controle no Excel. Tive a oportunidade de viajar para Portugal pela
          empresa para adquirir habilidade para um novo processo que seria
          implementado. Trabalhei na empresa por 2 anos.
        </p>

        <p className={styles.paragrafo}>
          Depois quis entrar de fato na minha área de formação e atuei por 2
          anos como analista de produção na Gerdau. Eu era responsável pelo
          pátio de sucatas. Realizava todo o controle de estoque que alimentava
          a Aciaria e também criava a receitas de carga fria para ser utilizada
          no processo. Além de realizar tratativas de falhas junto com os
          coodenadores e também liderar o time na ausência do coodenador. Além
          disso, eu realizava toda a gestão de consumos do pátio e controlava os
          custos da Aciaria utilizando SAP, PowerBI e excel.
        </p>

        <p className={styles.paragrafo}>
          Por fim, tive a curiosidade de entender mais profundamente sobre os
          programas que eu utlizava na empresa e descobri o desenvolvimento web.
          Tive bastante interesse e estou estudando atualmente na área. Minhas
          habilidades hoje são, JavaScript, TypeScript, HTML, CSS e React.
        </p>
      </PostModelo>
    </>
  );
}

export default SobreMim;
