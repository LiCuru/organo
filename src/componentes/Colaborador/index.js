import './Colaborador.css';

const Colaborador = (props) => {

    const cardColor = { backgroundColor : props.corPrimaria }
    const deleteButtonColor = {backgroundColor : props.corSecundaria}
    console.log(cardColor)

    const aoDeletar = () => {
        props.deletarColaborador(props.colaborador)
    }

    return(
        <div className='colaborador' >
            <div className='cabecalho' style = {cardColor}>
            <div className='deletar' style = {deleteButtonColor} onClick={aoDeletar}>
                <div>
                X
                </div>
                
            </div>
                <img src={props.imagem} alt=''/>
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
            
        </div>
    )
}

export default Colaborador;