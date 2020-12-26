import React from 'react'

import Ninjas from './Ninjas'

class App extends React.Component {
 state = {
   ninjas :[
     {name:'james', age: 30, belt:'black', id:1 },
     {name:'john', age: 20, belt:'green', id:2 },
     {name:'moses', age: 50, belt:'white', id:3 },
     {name:'mathew', age: 60, belt:'pink', id:4 },
     ]
 }
 
  render(){
    return (
      <div className="app-content">
        <h1>Welcome ninjas</h1>
        <Ninjas ninjas={this.state.ninjas}></Ninjas>
      </div>
    ) 
  }
}

export default App