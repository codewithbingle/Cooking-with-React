import React, { useState } from 'react';
// ./ means we are on the current folder we are on, we are importing another file
import Counter from './Counter'
import CounterHooks from './CounterHooks'

export const ThemeContext = React.createContext()

function App() {
  console.log("Render App")
  const [theme, setTheme] = useState('red')
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
    Counter
    <Counter initialCount={0}/>

    Counter Hooks
    <CounterHooks initialCount={0} />
    <button onClick={() => setTheme(prevTheme => {
      return prevTheme === 'red' ? 'blue' : 'red'
    })}>Toggle Theme</button>
    </ThemeContext.Provider>
  )
}

export default App;
