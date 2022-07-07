import React, {FormEvent, useEffect, useState} from 'react';
import {Todo} from "./model";
import AddTodo from "./components/AddTodo"
import './App.css'
import Board from './components/Board';
import Card from './components/Card';

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
            <main className='flexbox'>
                <Board id="Todo" className="board todo">
                    <div className='titleBoard'>
                        <h4>Todo</h4><hr />
                    </div>
                    <Card id='test' className='card' draggable={true}>
                        <p>TEpr</p>
                    </Card>
                </Board>
                <Board id="Doing" className="board doing">
                    <div className='titleBoard'>
                        <h4>Doing</h4><hr />
                    </div>
                    <Card id='tet' className='card' draggable={true}>
                        <p>TEpr</p>
                    </Card>
                    <Card id='tet' className='card' draggable={true}>
                        <p>TEpr</p>
                    </Card>
                </Board>
                <Board id="Done" className="board done">
                    <div className='titleBoard'>
                        <h4>Done</h4><hr />
                    </div>
                    <Card id='ta' className='card' draggable={true}>
                        <p>TEpr</p>
                    </Card>
                </Board>
            </main>
        </div>
    );
};

export default App;