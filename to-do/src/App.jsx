import { useState } from 'react'
import Todo from './components/todo';
import Todoform from './components/Todoform';
import './App.css'

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

//todos.map percorre todos os objetos de todos (acima) para que possam ser acessados pelos métodos próprios utilizando . e o tipo do objeto (todo.text, todo.category...)

  return (
    <div className="app">
      <h1>Lista de tarefas</h1>
        <div className="todo-list">
          {todos.map((todo) =>(
            <Todo todo={todo} />
          ))}
        </div>
        {/* formulário para os To Do */}
        <Todoform />
    </div>
  );
}

export default App;
