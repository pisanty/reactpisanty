import React, { useState, useRef } from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function Todos() {
    const [todo, setTodo] = useState({desc: '', date: '', priority: ''});
    const [todos, setTodos] = useState([]);

    const gridRef = useRef();

    const addTodo = () => {
        setTodos([todo, ...todos]);
    }

    const inputChange = (event) => {
        setTodo({...todo, [event.target.name]: event.target.value});
    }

    const deleteTodo = (row) => {
        if (gridRef.current.getSelectedNodes().length > 0)
            setTodos(todos.filter((todo, index) => index !== gridRef.current.getSelectedNodes()[0].childIndex));
        else
            alert('Select a row first!');
    }

    const columns = [
        {field: 'desc', sortable: true, filter: true, floatingFilter: true},
        {field: 'date', sortable: true, filter: true, floatingFilter: true},
        {field: 'priority', sortable: true, filter: true, floatingFilter: true,
        cellStyle: params=> params.value ===  "High" ? {color: 'red'}: {color: 'black'}}
    ];

    return(
        <div>
            <input placeholder="Description" name="desc" value={todo.desc} onChange={inputChange} />
            <input type="date" name="date" value={todo.date} onChange={inputChange} />
            <input placeholder="Priority" name="priority" value={todo.priority} onChange={inputChange} />
            <button onClick={addTodo}>Add</button>
            <button onClick={() => deleteTodo()}>Delete</button>
            <div className="ag-theme-material" style={{height: 500, width: 600, margin: 'auto'}}>
                <AgGridReact
                    ref={gridRef}
                    onGridReady={params => gridRef.current = params.api}
                    rowData={todos}
                    columnDefs={columns}
                    rowSelection="single"
                />
            </div>
        </div>
    );
}

export default Todos;