import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleName = this.handleName.bind(this);
  }

  handleName() {
    alert(this.props.name + ' from method with binding');
  }

  // second method without binding the method. 
  handleClick() {
      alert(this.props.name + ' No binding - callback is called when user clicks on the button ');
  }


  render() {
    return (
      <div style={{textAlign: 'center'}}>
        {/* Method 1: if you want to refer a method without ( ) after it such as 
        onClick = {this.handleClick},  you should bind that callback */}
        <button onClick={this.handleName}>Method with binding</button>
        
        {/* Method 2: The callback is called when user click on the button.
        In this case you don't need to bind the callback */}
        <button onClick={(e) => this.handleClick(e)}>No binding - callback is called when user clicks on the button</button>
      </div>
    );
  }
}

ReactDOM.render(<App name="An Luong" />, document.getElementById("root"));
registerServiceWorker();