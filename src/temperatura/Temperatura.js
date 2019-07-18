import React, { Component } from 'react'
import './Temperatura.css';
import axios from 'axios';

class Temperatura extends Component {
  intervalID;
  state = {
    retorno: {},
    last: {},
    records: {}
  };

  sort = data => {
    if (data) {
      let last = data[0];
      for (let i = 0; i < data.length; i++) {
        if (last.db_id < data[i].db_id) {
          last = data[i];
        }
      }
      this.setState({ last: last });
    } else {
      return undefined;
    }
  }

  componentWillUnmount() {
    clearTimeout(this.intervalID);
  }

  async componentDidMount() {
    this.getData();
  };

  getData = () => {
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
      this.sort(dados);
      this.setState({ retorno: dados[dados.length - 1] });
      this.setState({ records: dados.length });
      this.intervalID = setTimeout(this.getData.bind(this), 60000);
    });
  }

  render() {
    let state = this.state;
    let last = state.last;
    let records = state.records;

    return (
      <div>
        <nav>
          <div class="nav-wrapper blue-grey darken-1">
            <a href="/#" class="brand-logo">Temperatura</a>
          </div>
        </nav>

        <div class="row">
          <div class="col s12 m2">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">Dispositivo {last.id}</span>
                <p><b>Temperatura: </b>{last.temp} ºC</p>
                <p><b>Tensão: </b>{last.volts} v</p>
                <p><b>Record Id: </b>{last.db_id}</p>
                <p><b>Records: </b>{records}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default Temperatura;
