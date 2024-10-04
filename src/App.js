import React, { Component } from 'react';
import './App.css';
import data from './data/destinations.json';

class DestinationCard extends Component {
  render() {
    const { name, image, description } = this.props;
    return (
      <div className="card">
        <img src={image} alt={name} />
        <div className="card-content">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <div className="nav-bar">
          <span className="logo">LG TOURS</span>
          <ul className="menu">
            <li><a href="./1.htm">Home</a></li>
            <li><a href="./tours.html">Tours</a></li>
            <li><a href="./pakage.html">Package</a></li>
            <li><a href="./blog.html">Blog</a></li>
            <li><a href="./aboutus.html">About Us</a></li>
            <li><a href="./contactus.html">Contact Us</a></li>
            <li><a href="./login.html">Login</a></li>
          </ul>
        </div>

        <div className="main_content">
          <img className="background_image" src={require('./images/background.jpg')} alt="background" />
          <div className="overlay"></div>
          <div className="content">
            <h1>Find your Next Tour!</h1>
            <form action="#">
              <select name="dest" id="dest">
                <option selected disabled>Where do you want to go?</option>
                {data.destinations.map((dest) => (
                  <option key={dest.id} value={dest.name}>{dest.name}</option>
                ))}
              </select>
              <button type="submit">Search</button>
            </form>
          </div>
        </div>

        <div className="destinations">
          <h2>Popular Destinations</h2>
          <div className="card-container">
            {data.destinations.map((dest) => (
              <DestinationCard
                key={dest.id}
                name={dest.name}
                image={require(`${dest.image}`)}
                description={dest.description}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
