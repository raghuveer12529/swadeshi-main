// import logo from './logo.svg';
// import './App.css';

//feature-1
import React from 'react';
import data from "./data.json";
import Products from "./components/Products"

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      products : data.products,
      size :"",
      sort : ""
    }
  }
  render(){
  return (
    <div className = "grid-container">
      <header>
        <a href = "/" >Swadeshi Weavers</a>
      </header>

      <main>
        <div className = "content">
          <div className = " main">
           <Products products={this.state.products}></Products>

          </div>
          <div className = "sidebar">
            Cart Items
          </div>
        </div>
      </main>

      <footer>
        All rights are reserved.
      </footer>
    </div>
   
  );
}
}

export default App;
