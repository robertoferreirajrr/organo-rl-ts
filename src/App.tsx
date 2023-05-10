import Banner from "./componentes/Banner";
import { useState } from "react";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";
import { v4 as uuidv4 } from "uuid";
import { ITime } from "./shared/interfaces/ITime";
import { IColaborador } from "./shared/interfaces/IColaborador";

/*Componente react*/
function App() {
  //Usando destruct para facilitar, useState retorna um objeto com duas props times[0] e times [1]
  const [times, setTimes] = useState<ITime[]>([
    {
      id: uuidv4(),
      nome: "Front-End",
      cor: "#82CFFA",
    },
    { id: uuidv4(), nome: "Data Sciense", cor: "#A6D157" },
    { id: uuidv4(), nome: "Devops", cor: "#E06B69" },
    { id: uuidv4(), nome: "UX e Design", cor: "#D86EBF" },
    { id: uuidv4(), nome: "Mobile", cor: "#FEBA05" },
    { id: uuidv4(), nome: "Inovação e Gestão", cor: "#FF8A29" },
  ]);

  const [colaboradores, setColaboradores] = useState<IColaborador[]>([
    {
      id: uuidv4(),
      favorito: false,
      nome: "Roberto Ferreira",
      cargo: "Analista de Sistemas",
      imagem: "https://github.com/robertoferreirajrr.png",
      time: "Front-End",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Roberto Ferreira",
      cargo: "Analista de Sistemas",
      imagem: "https://github.com/robertoferreirajrr.png",
      time: "Front-End",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Roberto Ferreira",
      cargo: "Analista de Sistemas",
      imagem: "https://github.com/robertoferreirajrr.png",
      time: "Front-End",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Roberto Ferreira",
      cargo: "Analista de Sistemas",
      imagem: "https://github.com/robertoferreirajrr.png",
      time: "Mobile",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Roberto Ferreira",
      cargo: "Analista de Sistemas",
      imagem: "https://github.com/robertoferreirajrr.png",
      time: "Mobile",
    },
  ]);

  const onColaboradorCadastrar = (colaborador: IColaborador) => {
    debugger;
    colaborador.id = uuidv4();
    setColaboradores([...colaboradores, colaborador]);
  };

  const onTimeCadastrar = (time: ITime) => {
    debugger;
    console.log("novo time", time)
    //Interessante -> Eu havia feito time.id = uuidv4() e passado time, mas ele fez {...time, id: uuidv4()}
    setTimes([...times, {...time, id: uuidv4()}]);
  };

  const resolverFavorito = (id: string) => {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id){
        colaborador.favorito = !colaborador.favorito;
      }
      return colaborador;
    }))
  }

  const deletarColaborador = (idDoColaborador: string | undefined) => {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== idDoColaborador))
  }

  const mudarCorDoTime = (cor: string, id: string | undefined) => {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  };

  return (
    <div className="App">
      <Banner enderecoImagem="./imagens/banner.png" textoAlternativo="Banner principal"/>
      <Formulario
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) =>
          onColaboradorCadastrar(colaborador)
        }
        onTimeCadastrado={(time) => {onTimeCadastrar(time)}}
      />
      {times.map((time) => (
        <Time
          time={time}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
          aoDeletar={deletarColaborador}
          aoFavoritar={resolverFavorito}
          mudarCor={mudarCorDoTime}
          key={time.id}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
