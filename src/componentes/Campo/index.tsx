import "./Campo.css";

interface CampoProps {
  aoAlterado: (valor:string) => void
  type?: string
  placeholder: string
  label: string
  valor: string
  obrigatorio?: boolean
}

const Campo = ({type = 'text', label, placeholder, valor, aoAlterado, obrigatorio = false}: CampoProps) => {

  
  const aoDigitar = (evento: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(evento.target.value)
  };

  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        value={valor}
        onChange={aoDigitar}
        required={obrigatorio}
        placeholder={`${placeholder}...`}
      />
    </div>
  );
};

export default Campo;
