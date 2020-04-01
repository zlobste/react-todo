import React from 'react';
import TodoList from "./components/TodoList";
import Context from "./context";
import AddTodo from "./components/AddTodo";


function App() {
    const [todos, setTodos] = React.useState([
        {id:1, title: 'Сделать уроки', completed: false},
        {id:2, title: 'Купить хлеб', completed: false},
        {id:3, title: 'Вынести мусор', completed: false},
        {id:4, title: 'Прочитать книгу', completed: false},
    ]);



    function toggleTodo(id){
        setTodos(
            todos.map(todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        )
    }

    function removeTodo(id){
        setTodos(
            todos.filter(todo => todo.id !== id)
        )
    }

    function addTodo(title) {
        setTodos(
            todos.concat([
                {
                    title,
                    id: Date.now(),
                    completed: false
                }
            ])
        )
    }

  return (
      <Context.Provider value={{removeTodo}}>
        <div className='wrapper'>
          <h1>React Todo</h1>

                <AddTodo onCreate={addTodo} />

            {todos.length ?  <TodoList todos = {todos} onToggle={toggleTodo} /> : <p>No todos!</p>}
        </div>
      </Context.Provider>
  );
}

export default App;
