import { Component } from "react";
import "./Navbar.css";
import img from "../Assets/logo.png";
class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <nav>
          <a href="/">
          <img src={img} style={{width:120,height:50}} className='imglogo'/>
          </a>
          <div>
            <ul
              id="compo"
              className={this.state.clicked ? "#compo active" : "#compo"}
            >
              <li>
                <a href="/" className="navLink">Home</a>
              </li>
              <li>
                <a href="/AboutUs" className="navLink">About</a>
              </li>
              <li>
                <a href="/Contact" className="navLink">Contact</a>
              </li>
              <li>
                <a href="/Contact" className="navLink">Size Guide</a>
              </li>
            </ul>
          </div>
          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
