import React, {FormEvent, useEffect, useState} from 'react';
import {Todo} from "./model";
import AddTodo from "./components/AddTodo"
import './App.css'

const App: React.FC = () => {
    
    const initialTodo: Todo = {
        id: 0,
        title: "",
        description: "",
        status: ""
    }
    const [todo, setTodo] = useState<Todo>(initialTodo);
    const [todos, setTodos] = useState<Todo[]>([]);
    
    const handleAdd = (e: FormEvent) => {
        e.preventDefault();
        if(todo.title !== "" && todo.status !== "") {
            setTodo({...todo, id: Date.now()});
            setTodos([...todos, todo]);
            setTodo(initialTodo);
        }
    }

    return (
        <div className='container'>
            <AddTodo todo={todo} handleChange={setTodo} handleAdd={handleAdd} />
        </div>
    );
};

export default App;