import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time'
import Rodape from './componentes/Rodape';

function App() {

  const times = [
    {
      value: 'Front-End',
      label: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      value: 'Data Science',
      label: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      value: 'Devops',
      label: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      value: 'UX e Design',
      label: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
    },
    {
      value: 'Mobile',
      label: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      value: 'Inovação e Gestão',
      label: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    }
  ]

  const [colaboradores, setColaboradores] = useState([]);

  const colaboradorDeletado = {};

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
    console.log('colaboradores ', colaboradores)

  }

  const deletarColaborador = (oColaborador) => {
    setColaboradores(colaboradores.filter(colaborador => colaborador !== oColaborador))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times = {times} aoColaboradorCadastrado = {aoNovoColaboradorAdicionado} />
        {times.map((time) => 
          <Time
            nome={time.value}
            key={time.value}
            deletarColaborador = {deletarColaborador}
            colaboradores = {colaboradores.filter(colaborador => colaborador.time === time.value)}
            corPrimaria = {time.corPrimaria}
            corSecundaria = {time.corSecundaria}
          />)}
      <Rodape/>
    </div>
  );
}

export default App;
