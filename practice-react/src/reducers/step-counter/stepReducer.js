export function stepReducer(state, action) {
    switch (action.type) {
        case "increment":
            return {
                ...state,
                count: state.count + state.step
            }
        case "decrement":
            return {
                ...state,
                count: state.count - state.step
            }

        case "step":
            return {
                ...state,
                step: state.step + 1
            }
        default: return state
    }
}