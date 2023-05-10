import { IColaborador } from "../../shared/interfaces/IColaborador";
import "./Colaborador.css";
import { AiFillCloseCircle,AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface ColaboradorPros {
  colaborador: IColaborador
  corDeFundo: string
  aoFavoritar: (idDoColaborador: string) => void
  aoDeletar: (idDoColaborador: string | undefined) => void
}
const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }: ColaboradorPros) => {
  
  const favoritar = () => {
    if(colaborador.id)
    {
      aoFavoritar(colaborador.id);
    }
  }

  const propsFavoritos = {
    size: 25,
    onClick: favoritar
  }

  return (
    <div className="colaborador">
      <AiFillCloseCircle size={25} className="deletar" onClick={() => aoDeletar(colaborador.id)} />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={colaborador.imagem} alt={colaborador.nome} />
      </div>
      <div className="rodape">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
        <div className="favoritar">{colaborador.favorito ?  <AiFillHeart {...propsFavoritos} color='red'/> : <AiOutlineHeart {...propsFavoritos}/>}</div>
      </div>
    </div>
  );
};

export default Colaborador;
