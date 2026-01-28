export function counterReducer(state, action) {
    if(action.type === 'INCREMENT'){
        const updatedCount = [...state.count ]
        updatedCount + 1
     return updatedCount
    }
    if(action.type === 'DECREMENT'){
     return state.count-1
    }
    if(action.type === 'RESET'){
     return state.count = 0
    }
    return state;
}

function App() {
    const [counterState, CounterDispatch] = React.useReducer(
        counterReducer,
        {
            count: 0
        }
    )
    
    
    function handleIncrement(count){
        counterReducer({
            type: 'INCREMENT',
            payload: count
        })
    }
    
    function handleDecrement(count){
        counterReducer({
            type: 'DECREMENT',
            payload: count
        })
    }
    function handleReset(count){
        counterReducer({
            type: 'RESET',
            payload: count
        })
    }
    
  return (
    <div id="app">
      <h1>The (Final?) Counter</h1>
      <p id="actions">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </p>
      <p id="counter">{counterState.count}</p>
    </div>
  );
}

export default App;
