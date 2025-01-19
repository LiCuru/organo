import './ListaSuspensa.css';
import { useState } from 'react'
import Select from "react-select";

const ListaSuspensa = (props) => {

    const css = {backgroundColor: '#FFF',
                 boxShadow: '10px 10px 30px rgba(0, 0, 0, 0.06)',
                 width: '100%',
                 border: 'none',
                 fontSize: '24px',
                 padding: '24px',
                 boxSizing: 'border-box'}

    const options = props.itens.map(item => item)

    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleChange = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <Select 
                onChange={handleChange}
                required={props.required}
                value = {props.aoAlterado(selectedOption.value)}   
                options = {options}
                defaultValue={options[1]}
                style = {css}
            />
        </div>
    )
}

export default ListaSuspensa