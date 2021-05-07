
/*import React, { useState, useEffect} from 'react';
import axios from 'axios';
import "./_video.css";

class Name extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: '', age: ''};
  
      this.handleChange = this.handleChange.bind(this);

      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({name: event.target.value});
    }
    
    handleSubmit(event) {
      //alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        this.setState({phrase: ax()})
        console.log(this.state.name);
        //const [name, setName] = useState("");
        //this.getName();

    }
    /*
    getName () {
        axios.get("https://api.agify.io/?name=")
        .then((response) => {
            setName("Based on your name, " + response.data.name + ' you are likely to be ' + response.data.age )})
    };
  
    render() {
      return (
        <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.name} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h2>{this.state.phrase}</h2>
        </div>
      );
    }
  }
  function ax (props) {
    const [name, setName] = useState("");
    const url = "https://api.agify.io/?name=" + props.name

    const getName = () => {
        axios.get("https://api.agify.io/?name=")
        .then((response) => {
            setName("Based on your name, " + response.data.name + ' you are likely to be ' + response.data.age )})
    };
    return (
        <div> 
           <p>{getName}</p> 
        </div>
    )
  }

  export default Name;
  */
/*
function Name( props ) {
    const [name, setName] = useState("");
    const url = "https://api.agify.io/?name=" + props.name

    const getName = () => {
        axios.get("https://api.agify.io/?name=")
        .then((response) => {
            setName("Based on your name, " + response.data.name + ' you are likely to be ' + response.data.age )})
    };
    return (
        <div> 
           <button class = "button" onClick = {getName}></button>{name} 
        </div>
    )
}

export default Name;*/