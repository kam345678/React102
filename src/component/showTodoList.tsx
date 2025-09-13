import { useTodoStore } from "../store/TodoStore";  
const ShowTodoList = () => {
    const { message, todoList, removeTodo, clearTodos } = useTodoStore();
    
    return (
        <div>
            <h2>{message}</h2>
            {todoList.length === 0 ? (
                <p>No todos available</p>
            ) : (
                <ul>
                    {todoList.map((todo, index) => (
                        <li key={index}>
                            {todo} 
                            <button onClick={() => removeTodo(index)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            {todoList.length > 0 && (
                <button onClick={clearTodos}>Clear All Todos</button>
            )}
        </div>
    );
}
export default ShowTodoList;
