import { useState } from "react";

export default function Todo() {
    const [todoData, setTodoData] = useState(preTodoData);
    const [addTask, setAddTask] = useState("");
    const [isEdit, setIsEdit] = useState(null);
    const [saveTask, setSaveTask] = useState("");
    const [isChecked, setIsChecked] = useState(false);

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

    function handleIsChecked(checked, id) {
        setTodoData(prevData => {
            prevData.map(data => {
                return data.id === id ? { ...data, done: checked } : data
            })
        })
    }

    function handleDeleteTask(id) {
        setTodoData(todoData.filter((d) => d.id != id));
    }

    return (
        <>
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
                    <select name="" id="">
                        <option value="filter">All</option>
                        <option value="filter">Active</option>
                        <option value="filter">Done</option>
                    </select>
                </>
            )}

            <ol>
                {todoData.map((todo) => {
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
                                        onChange={() => handleIsChecked(todo.id)}
                                    />
                                    <p>{todo.text}</p>
                                    <button onClick={(e) => handleEditTask(todo.id, e.target.checked)}>Edit</button>
                                </>
                            )}
                            <button onClick={() => handleDeleteTask(todo.id)}>Delete</button>
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
