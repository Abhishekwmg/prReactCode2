export function todoReducer(state, action) {
    switch (action.type) {
        case "todo/added": {
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    done: false,
                },
            ];
        }

        case "todo/edited": {
            return state.map(todo =>
                todo.id === action.id
                    ? { ...todo, text: action.text }
                    : todo
            );
        }

        case "todo/toggled": {
            return state.map(todo =>
                todo.id === action.id
                    ? { ...todo, done: action.done }
                    : todo
            );
        }

        case "todo/deleted": {
            return state.filter(todo => todo.id !== action.id);
        }

        default: {
            return state;
        }
    }
}
