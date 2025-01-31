import './Time.css';
import Colaborador from '../Colaborador';

const Time = (props) => {

    const backgroundColor = { backgroundColor: props.corSecundaria}
    const underlineColor = { borderColor: props.corPrimaria }

    return(
        props.colaboradores.length >= 1 &&
        <section className='time' style = {backgroundColor}>
            <h3 style = {underlineColor} >{props.nome}</h3>
            <div className='colaboradorContainer'>
            {props.colaboradores.map(colaborador => 
                <Colaborador
                    colaborador = {colaborador}
                    key = {colaborador.nome}
                    nome = {colaborador.nome}
                    cargo = {colaborador.cargo}
                    imagem = {colaborador.imagem}
                    corPrimaria = {props.corPrimaria}
                    corSecundaria = {props.corSecundaria}
                    deletarColaborador = {props.deletarColaborador}

                />
            )}
            </div>
        </section>       
    )
}

export default Time;