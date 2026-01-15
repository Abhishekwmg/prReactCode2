import { useState } from "react";
import TodoReducer from "./TodoReducer";

export default function Todo() {
    const [todoData, setTodoData] = useState(preTodoData);
    const [addTask, setAddTask] = useState("");
    const [isEdit, setIsEdit] = useState(null);
    const [saveTask, setSaveTask] = useState("");
    const [filter, setFilter] = useState("all");

    function handleAddTask() {
        if (!addTask) return;
        setTodoData((prevData) => [
            ...prevData,
            {
                id: Date.now(),
                text: addTask,
                done: false,
            },
        ]);
        setAddTask("");
    }

    function handleEditTask(todo) {
        setIsEdit(todo.id);
        setSaveTask(todo.text);
    }

    function handleSaveTask(todo) {
        setTodoData((prevData) =>
            prevData.map((data) => {
                return data.id === todo.id ? { ...todo, text: saveTask } : data;
            })
        );
        setIsEdit(null);
    }

    function handleIsChecked(id, checked) {
        setTodoData((prevData) => {
            return prevData.map((data) => {
                return data.id === id ? { ...data, done: checked } : data;
            });
        });
    }

    function handleDeleteTask(id) {
        setTodoData(todoData.filter((d) => d.id != id));
    }

    const filterTodoData = todoData.filter((data) => {
        if (filter === "active") return !data.done;
        if (filter === "done") return data.done;
        return data;
    });

    return (
        <>
            <TodoReducer />
            <h1>Todo List (Strict)</h1>
            {!isEdit && (
                <>
                    <input
                        value={addTask}
                        onChange={(e) => setAddTask(e.target.value)}
                        type="text"
                        placeholder="Add items to list"
                    />
                    <button onClick={handleAddTask}>Add</button>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="all">All</option>
                        <option value="active">Active</option>
                        <option value="done">Done</option>
                    </select>
                </>
            )}

            <ol>
                {filterTodoData.map((todo) => {
                    return (
                        <li
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                            key={todo.id}
                        >
                            {isEdit === todo.id ? (
                                <>
                                    <input
                                        type="text"
                                        value={saveTask}
                                        onChange={(e) => setSaveTask(e.target.value)}
                                    />
                                    <button onClick={() => handleSaveTask(todo)}>Save</button>
                                </>
                            ) : (
                                <>
                                    <input
                                        type="checkbox"
                                        checked={todo.done}
                                        onChange={(e) => handleIsChecked(todo.id, e.target.checked)}
                                    />
                                    {todo.done ? (
                                        <p style={{ color: "green" }}>
                                            <s>{todo.text}</s>
                                        </p>
                                    ) : (
                                        <>
                                            <p style={{ color: "yellow" }}>{todo.text}</p>
                                            <button onClick={() => handleEditTask(todo)}>Edit</button>
                                        </>
                                    )}
                                </>
                            )}
                            <button
                                onClick={() => handleDeleteTask(todo.id)}
                                style={{ color: "#000000", background: "#ff0000" }}
                            >
                                Delete
                            </button>
                        </li>
                    );
                })}
            </ol>
        </>
    );
}

const preTodoData = [
    {
        id: 1,
        text: "Buy Avocado",
        done: false,
    },
    {
        id: 2,
        text: "Get Milk",
        done: false,
    },
    {
        id: 3,
        text: "Run Marathon",
        done: false,
    },
    {
        id: 4,
        text: "Get Healthy",
        done: false,
    },
    {
        id: 5,
        text: "Start Business",
        done: false,
    },
];
