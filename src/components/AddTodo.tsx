import React, { FormEventHandler } from 'react';
import {Todo} from "../model";

interface Props {
    todo: Todo;
    handleChange: React.Dispatch<React.SetStateAction<Todo>>;
    handleAdd: React.FormEventHandler<HTMLFormElement>;
}
const AddTodo: React.FC<Props> = ({todo, handleChange, handleAdd}) => {
    // console.log(todo)
    return (
        <div>
            <form onSubmit={handleAdd}>
                <input type="text" name="title" placeholder="Libelé" value={todo.title} onChange={e => handleChange({...todo,[e.target.name]:e.target.value})}/>
                <textarea name="description" placeholder="Description de la tache a faire..." value={todo.description} onChange={e => handleChange({...todo,[e.target.name]:e.target.value})}></textarea>
                <div>
                    <label><input type="radio" name="status" value="Todo" onChange={e => handleChange({...todo,[e.target.name]:e.target.value})}/> A faire</label>
                    <label><input type="radio" name="status" value="Doing" onChange={e => handleChange({...todo,[e.target.name]:e.target.value})}/> En cours</label>
                    <label><input type="radio" name="status" value="Done" onChange={e => handleChange({...todo,[e.target.name]:e.target.value})}/> Fait</label>
                </div>
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
};

export default AddTodo;