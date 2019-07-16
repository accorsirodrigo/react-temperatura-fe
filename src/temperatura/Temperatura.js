import React, { Component } from 'react'
import './Temperatura.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Temp extends Component {
  state = { retorno: {} };


  async componentDidMount() {
    let url = 'https://temperatura-1fa4.restdb.io/rest/tempetarura';
    let config = {
      headers: {
        'cache-control': 'no-cache',
        'x-apikey': '5d28ce3ce25f837b3b80a3e2'
      }
    };

    const response = axios.get(url, config);
    response.then(res => {
      let dados = res.data;
      console.log(dados[dados.length - 1]);
      this.setState({ retorno: dados[dados.length - 1] });
    });

  };

  render() {
    return (
      <div>
        <div className="card">
          <div className="container">
            <h2><b>Temperatura</b></h2>
            <p><b>ID: </b>{this.state.retorno.id}</p>
            <p><b>Temp: </b>{this.state.retorno.temp} ºC</p>
            <p><b>Volts: </b>{this.state.retorno.volts} v</p>
          </div>
        </div>
        <div className="App">
          <Link to="/">HOME</Link>
        </div>
      </div>
    );
  };
}

export default Temp;
