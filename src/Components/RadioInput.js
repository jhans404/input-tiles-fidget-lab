import React, {Component} from 'react';

class ButtonInput extends Component{
  constructor(props){
    super(props);
    this.state = {
      text: null
    }
  };

  handleChange = (event) => {
    if(event.target.value === "1"){
      this.setState({text: "1"});
    }
    else if(event.target.value === "2"){
      this.setState({text: "2"});
    }
    else if(event.target.value === "3"){
      this.setState({text: "3"});
    }
    else if(event.target.value === "4"){
      this.setState({text: "4"});
    }
    else if(event.target.value === "5"){
      this.setState({text: "5"});
    }
  } 

  render(){
    return(
      <li className="RadioInput cards-item">
            <div className="card">
              <div className="card-content">
                <div className="card-title">Radio</div>
                <p className="card-text">
                  <div className="input" onChange={this.handleChange}>
                    <input type="radio" name="radioInput" value="1" className="checkboxInput" />
                    <input type="radio" name="radioInput" value="2" className="checkboxInput" />
                    <input type="radio" name="radioInput" value="3" className="checkboxInput" />
                    <input type="radio" name="radioInput" value="4" className="checkboxInput" />
                    <input type="radio" name="radioInput" value="5" className="checkboxInput" />
                  </div>
                  <div className="output">
                    <label for="radioOutput">State: {this.state.text} </label>
                    <span name="radioOutput"></span>
                  </div>
                </p>
              </div>
            </div>
          </li>
    )
  }
}

export default ButtonInput;