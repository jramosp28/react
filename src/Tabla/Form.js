import React, { useState } from 'react';

const Form = (props) => {
    const [formulario, setFormulario] = useState({ nombre: "", apellido: ""});

    const gestionarCambio = (event) => {
        const { name, value } = event.target;
        setFormulario ((prevFormulario) => ({
            ...prevFormulario,
            [name]: value,
        }))
    };

    const enviarFormulario = () => {
        props.enviarFormulario(formulario);
        setFormulario({ nombre: "", apellido: ""});
    };

    return (
        <forms>
            <div className='form-group'>
                <label htmlFor='nombre'>Nombre</label>
                <input
                    type='text'
                    name='nombre'
                    id='nombre'
                    className='form-control'
                    value={formulario.nombre}
                    onChange={gestionarCambio}
                />
            </div>
            <div className='form-group'>
                <label htmlFor='apellido'>Apellido</label>
                <input
                    type='text'
                    name='apellido'
                    id='apellido'
                    className='form-control'
                    value={formulario.apellido}
                    onChange={gestionarCambio}
                />
            </div>
            <input type='button' value='Enviar' onClick={enviarFormulario}></input>
        </forms>
    );
};

export default Form;