import './Colaborador.css';

const Colaborador = (props) => {

    const cardColor = { backgroundColor : props.corPrimaria }
    console.log(cardColor)

    return(
        <div className='colaborador' >
            <div className='cabecalho' style = {cardColor}>
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