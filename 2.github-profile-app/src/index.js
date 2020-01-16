import React from "react"; 
import ReactDOM from "react-dom"; 


class Card extends React.Component {
  render() {
    return (
      <div className = "github-profile">
        <img src = "./images/card.png" />
        <div className = "info">
          <div className = "name">Name </div>
          <div className = "company">Company</div>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    const { title } = this.props; 
    return (
      <div id="container">
        <div className = "header">{ title }</div>
        <Card />
      </div>
    );
  }  
}

ReactDOM.render(
  <App title = "GitHub Profile App" />,
  document.getElementById("app"),
);