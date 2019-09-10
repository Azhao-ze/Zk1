import React, { Component } from 'react';
import axios from "axios"
import "./mock/index"
class App extends Component {
  render() {
    return (
      <div>

      </div>
    );
  }
  componentDidMount(){
    // console.log(mock)
    axios.post('/goodList',{page:3,pageSize:5}).then((res)=>{
            console.log(res.data);
         });
  }
}

export default App;