import { useState } from 'react';

export default function Todo({ item, onUpdate, onDelete }) {

    const [isEdit, setIsEdit] = useState(false);

    function FormEdit() {

        const [newValue, setnewValue] = useState(item.title);
        function handleSubmit(e) {
            e.preventDefault();

        }

        function handleChange(e) {
            const value = e.target.value;
            setnewValue(value);
        }

        function handleClickGuardar() {
            onUpdate(item.id, newValue);
            setIsEdit(false);
        }

        return (
            <form className="todoGuardarForm" onSubmit={handleSubmit}>
                <input type="text"
                    className="todoInput"
                    onChange={handleChange}
                    value={newValue} />
                <button onClick={handleClickGuardar}>Guardar</button>
            </form>
        );
    }


    function TodoElement() {
        return (
            <div className="todoInfo">
                <span className="todoTitle">{item.title}</span>
                 <button className="button" onClick={() => setIsEdit(true)}>Editar</button>
                <button className="buttonDelete" onClick={(e) => onDelete(item.id)} >Eliminar</button>
            </div>
        )
    }

    return (

        <div className="todo">
            {isEdit ? <FormEdit /> : <TodoElement />}
        </div>
    );
}