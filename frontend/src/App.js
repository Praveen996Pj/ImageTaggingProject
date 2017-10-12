import React, { Component } from 'react';
import './App.css';
import Containor from './Containor'

const BASE_URL = '127.0.0.1:8000';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dbdata : [],
    }
  }


  componentDidMount(){
     fetch(`http://${BASE_URL}/res1/`).then((res) => {
      return res.json();
    }).then((res) =>{
      //console.log(res)
      this.setState({ dbdata: res})
    });
  }

  render() {
    return (
      <div>
        {
          this.state.dbdata.length > 0 &&
          this.state.dbdata.map((item) => {
            return (
              
              <Containor
                data={item}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
