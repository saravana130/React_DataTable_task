import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from 'react';


export default class DataTableaxios extends React.Component {
  
 
  componentDidMount() {
    axios.get(`https://5fdb963891f19e00173348b7.mockapi.io/items`)
      .then(res => {
        const items = res.data;
        this.setState({ items });
      })

      console.log('fetching data');
  }
  render (){
    return(
  
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
    )};


}
