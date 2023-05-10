import './ListaSuspensa.css'

interface ListaSuspensaProps {
    valor: string
    label: string
    aoAlterado: (valor: string) => void
    itens: string[]
}
const ListaSuspensa = ({valor, label, aoAlterado, itens} : ListaSuspensaProps) => {

    return (<div className='lista-suspensa'>
        <label>{label}</label>
        <select onChange={evento => aoAlterado(evento.target.value)}>
            <option value="">Selecione...</option>
            {itens.map(item => <option key={item}>{item}</option>)}
        </select>
    </div>)
}

export default ListaSuspensa;