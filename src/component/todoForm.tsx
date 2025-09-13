import {useTodoStore} from "../store/TodoStore";   
import { useState } from "react";

const TodoForm = () => {
    const { addTodo } = useTodoStore();
    const [inputValue, setInputValue] = useState("");
    
    const handleSubmit = (e: React.FormEvent) => {  
        e.preventDefault();
        if (inputValue.trim()) {
            addTodo(inputValue);
            setInputValue("");
        }
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter a todo item"
            />
            <button type="submit">Add Todo</button>
        </form>
    );
};

export default TodoForm;