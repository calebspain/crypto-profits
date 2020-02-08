import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Caleb'
    }
  }

  render() {
    return (
      <div className='home'>
        <div className='container'>
          <header>
            <div className='logo'>
              crypto profits
            </div>
            <nav className='menu'>
              <a href='#'>Register</a>
            </nav>
          </header>
        </div>
      </div>
    )
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
