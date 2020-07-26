import React from 'react';
import logo from './logo.svg';
import './App.css';


/** React.CreateElement */
const Wrapper = children => React.createElement("div", {className: "App"}, children);


/** React.Component */
export class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        {this.props.children}
      </header>
    );
  }
};


/** React.PureComponent */
export class Logotype extends React.PureComponent {
  render() {
    return (
      <img src={logo} className="App-logo" alt="logo" />
    );
  }
};


/** Functional Components */
const paragraph = () => <p>Edit <code>src/App.js</code> and save to reload.</p>;
const anchor = () => <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>;


/** Rendering all components together */
function App() {
  return Wrapper(
    <Header>
      <Logotype />
      {paragraph()}
      {anchor()}
    </Header>
  );
}

export default App;
