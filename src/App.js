import React from 'react'

import Ninjas from './Ninjas'

class App extends React.Component {
  state = {
    name: 'Perry',
    age: 30
  }

  handleChange = (e) =>  {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('form submitted', this.state.name)
  }
 
  render(){
    return (
      <div className="app-content">
        <Ninjas name="Mensa" age ="35" belt ="black" />   

        <h1>My name is {this.state.name}</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text"/>
          <button>Submit</button>
        </form>
      </div>
    ) 
  }
}

export default App