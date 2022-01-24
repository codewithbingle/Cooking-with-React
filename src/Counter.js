//we need to import React (will allow us to use JSX) and because we also need to import a Component (which allow us to create a class) section  of React, we will import it from 'react'.
import React, { Component } from 'react'
import { ThemeContext } from './App'

export default class Counter extends Component { // Counter is the same as our filename
  constructor(props) {
    super(props)

    this.state = {
      count: props.initialCount
    }

  }

  render() { // anything inside of rendered will return in our application
    console.log("Render Counter")
    return (
      <ThemeContext.Consumer>
        {style => (
          <div>
            <button style={style} onClick={() => this.changeCount(-1)}>-</button>
            <span>{this.state.count}</span>
            <button style={style} onClick={() => this.changeCount(1)}>+</button>
          </div>
        )}

      </ThemeContext.Consumer>
    )
  }

  changeCount(amount) {

    this.setState(prevState => {
      return { count: prevState.count + amount }
    })
  }
}
