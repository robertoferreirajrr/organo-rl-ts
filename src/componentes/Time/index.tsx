import Colaborador from "../Colaborador";
import hexToRgba from "hex-to-rgba";
import "./Time.css";
import { IColaborador } from "../../shared/interfaces/IColaborador";
import { ITime } from "../../shared/interfaces/ITime";

interface TimeProps {
  colaboradores: IColaborador[];
  time: ITime;
  aoFavoritar: (idDoColaborador: string) => void;
  mudarCor: (cor: string, idTime: string | undefined) => void;
  aoDeletar: (idDoColaborador: string | undefined) => void;
}
const Time = ({
  time,
  colaboradores,
  aoDeletar,
  mudarCor,
  aoFavoritar,
}: TimeProps) => {
  const css = { backgroundColor: hexToRgba(time.cor, "0.3") };

  return (
    //Para o JSX é tudo uma linha só! Para ele se deu false ele nem roda o da direita!
    //ou (props.colaboradores.length) ? '' : '' -> operador ternário
    /**
     *
     *
     * este retorna:
     * <Componente onClick={() => executarFuncao()}
     * este executa (Closures (as chaves) - este pedaço usa um bloco então se eu preciso retornar sou obrigado a usar return):
     * <Componente onClick={() => { executarFuncao() }}
     */
    colaboradores.length > 0 ? (
      <section className="time" style={css}>
        <input
          type="color"
          value={time.cor}
          onChange={(evento) => {
            mudarCor(evento.target.value, time.id);
          }}
          className="input-cor"
        />
        <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
        <div className="colaboradores">
          {colaboradores.map((colaborador) => {
            //Para o react o componente é um objeto
            const colaboradorComponente = (
              <Colaborador
                colaborador={colaborador}
                corDeFundo={time.cor}
                key={colaborador.id}
                aoDeletar={aoDeletar}
                aoFavoritar={aoFavoritar}
              />
            );
            //console.log(colaboradorComponente)
            return colaboradorComponente;
          })}
        </div>
      </section>
    ) : <></>
  );
};

export default Time;
