import { useReducer } from "react"

const plus = 'Plus'
const minus = 'Minus'

const reducerCount = (prevState, action) => {
    if(action.type === plus) {
        return prevState + 1
    }
    if(action.type === minus) {
        return prevState - 1
    }
}

export const Counter = () => {
    const [counter, dispatchCount] = useReducer(reducerCount, 0)

    const plusHandler = () => {
        dispatchCount({type: plus}) //action
    }

    const minusHandler = () => {
        dispatchCount({type: minus}) //action
    }

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={plusHandler}>+</button>
            <button onClick={minusHandler}>-</button>
        </div>
    )
}
