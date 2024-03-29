import "./App.css";
import Avaliacao from "./components/Avaliacao";
import Cabecalho from "./components/Cabecalho";
import Container from "./components/Container";
import Grafico from "./components/Grafico";
import Rodape from "./components/Rodape";
import Tabela from "./components/Tabela";
import Titulo from "./components/Titulo";
import useDadosConsulta from "./useDadosConsulta";
import useDadosProfissional from "./useDadosProfissional";

function App() {
  const { dados: consultas, erro: consultasErro } = useDadosConsulta();
  const { dados: profissionais, erro: profissionaisErro } =
    useDadosProfissional();

  if (profissionaisErro || consultasErro) {
    console.log("Erooouuuuu, REQUISICAO TOORTA EM DEV");
  }
  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Área Administrativa</Titulo>
        <Tabela consultas={consultas} />
        <Grafico consultas={consultas} profissionais={profissionais}></Grafico>
      </Container>
      <Avaliacao profissionais={profissionais} />
      <Rodape />
    </>
  );
}

export default App;
