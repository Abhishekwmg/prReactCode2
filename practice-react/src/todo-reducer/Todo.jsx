import { useReducer, useState } from "react";
import { todoReducer } from "./TodoReducer";
import { preTodoData } from "./todo-data";

export default function Todo() {
    const [todos, dispatch] = useReducer(todoReducer, preTodoData);

    const [addTask, setAddTask] = useState("");
    const [editId, setEditId] = useState(null);
    const [draftText, setDraftText] = useState("");
    const [filter, setFilter] = useState("all");

    function handleAddTask() {
        if (!addTask.trim()) return;

        dispatch({
            type: "todo/added",
            id: Date.now(),
            text: addTask,
        });

        setAddTask("");
    }

    function handleEdit(todo) {
        setEditId(todo.id);
        setDraftText(todo.text);
    }

    function handleSave(todoId) {
        dispatch({
            type: "todo/edited",
            id: todoId,
            text: draftText,
        });

        setEditId(null);
        setDraftText("");
    }

    function handleToggle(todoId, checked) {
        dispatch({
            type: "todo/toggled",
            id: todoId,
            done: checked,
        });
    }

    function handleDelete(todoId) {
        dispatch({
            type: "todo/deleted",
            id: todoId,
        });
    }

    const filteredTodos = todos.filter(todo => {
        if (filter === "active") return !todo.done;
        if (filter === "done") return todo.done;
        return true;
    });

    return (
        <>
            <h1>Todo List (useReducer)</h1>

            {editId === null && (
                <>
                    <input
                        value={addTask}
                        onChange={e => setAddTask(e.target.value)}
                        placeholder="Add a task"
                    />
                    <button onClick={handleAddTask}>Add</button>

                    <select value={filter} onChange={e => setFilter(e.target.value)}>
                        <option value="all">All</option>
                        <option value="active">Active</option>
                        <option value="done">Done</option>
                    </select>
                </>
            )}

            <ol>
                {filteredTodos.map(todo => (
                    <li
                        key={todo.id}
                        style={{
                            display: "flex",
                            gap: "10px",
                            alignItems: "center",
                        }}
                    >
                        {editId === todo.id ? (
                            <>
                                <input
                                    value={draftText}
                                    onChange={e => setDraftText(e.target.value)}
                                />
                                <button onClick={() => handleSave(todo.id)}>Save</button>
                            </>
                        ) : (
                            <>
                                <input
                                    type="checkbox"
                                    checked={todo.done}
                                    onChange={e => handleToggle(todo.id, e.target.checked)}
                                />

                                <p style={{ textDecoration: todo.done ? "line-through" : "" }}>
                                    {todo.text}
                                </p>

                                {!todo.done && (
                                    <button onClick={() => handleEdit(todo)}>Edit</button>
                                )}
                            </>
                        )}

                        <button onClick={() => handleDelete(todo.id)}>Delete</button>
                    </li>
                ))}
            </ol>
        </>
    );
}
