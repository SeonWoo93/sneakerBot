import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import UserContainer from './containers/UserContainer.js';
import HomeContainer from './containers/HomeContainer.js';
import { Component } from 'react';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className='App'>
                <BrowserRouter>
                    <Route path='/' component={UserContainer} exact />
                    <Route path='/home' component={HomeContainer} />
                </BrowserRouter>
            </div>
            )
    }
}

export default App;
