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
        <div className='taskForm'>
            <h3>New Task</h3><hr />
            <form onSubmit={handleAdd}>
                <input type="text" name="title" placeholder="Label of the task" value={todo.title} className='titleInput' onChange={e => handleChange({...todo,[e.target.name]:e.target.value})}/>
                <textarea name="description" placeholder="Description of the task..." className='titleInput' value={todo.description} onChange={e => handleChange({...todo,[e.target.name]:e.target.value})}></textarea>
                <div>
                    <label className='radio'><input type="radio" name="status" value="Todo" onChange={e => handleChange({...todo,[e.target.name]:e.target.value})}/> Todo</label>
                    <label className='radio'><input type="radio" name="status" value="Doing" onChange={e => handleChange({...todo,[e.target.name]:e.target.value})}/> Doing</label>
                    <label className='radio'><input type="radio" name="status" value="Done" onChange={e => handleChange({...todo,[e.target.name]:e.target.value})}/> Done</label>
                </div>
                <button type="submit" className='btnAdd'>Add</button>
            </form>
        </div>
    );
};

export default AddTodo;