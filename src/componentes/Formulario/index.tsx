import "./Formulario.css";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";
import { IColaborador } from "../../shared/interfaces/IColaborador";
import { ITime } from "../../shared/interfaces/ITime";

interface FormularioProps {
  aoColaboradorCadastrado: (colaborador: IColaborador) => void
  times: string[]
  onTimeCadastrado: (time: ITime) => void
}

const Formulario = (props: FormularioProps) => {
  //Um hook é um gancho. É algo que o React nos entrega para que seja possível manter um estado dentro de uma função.
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");

  const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    console.log("Formulário foi submetido", cargo, nome, imagem, time);
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });


    setNome('')
    setCargo('')
    setImagem('')
  };

  const aoSalvarTime = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    props.onTimeCadastrado({
      nome: nomeTime,
      cor: corTime
    });
    setNomeTime('')
    setCorTime('')
  }
  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <Campo
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
        />
        <Campo
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite o cargo"
        />
        <Campo
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
          label="Imagem"
          placeholder="Entre com o endereço da imagem"
        />
        <ListaSuspensa
          valor={time}
          aoAlterado={(valor) => {console.log('setando time', valor); setTime(valor)}}
          label="Times"
          itens={props.times}
        />
        <Botao>Criar Colaborador</Botao>
      </form>
      <form onSubmit={aoSalvarTime}>
        <Campo
          valor={nomeTime}
          aoAlterado={(valor) => setNomeTime(valor)}
          obrigatorio
          label="Nome"
          placeholder="Digite o nome do time"
        />
        <Campo
          type='color'
          valor={corTime}
          aoAlterado={(valor) => setCorTime(valor)}
          obrigatorio
          label="Cor"
          placeholder="Digite a cor do gime"
        />
        <Botao>Criar Time</Botao>
      </form>
    </section>
  );
};

export default Formulario;
