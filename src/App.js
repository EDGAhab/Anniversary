// App.js
import React, { Component } from 'react';
import './App.css';
import iconurl from './icon/爱心.png';
import Main from './Main';
import Gallery from './Gallery';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import url from './audio/gbqq.mp3';

class App extends Component {
  state = {
    class: 'bounceInLeft',
    show: false,
  };

  componentDidMount() {
    this.audio = new Audio(url);
    this.audio.loop = true;

    // Adding event listener to play audio on first click
    const playAudio = () => {
      this.audio.play().catch((error) => {
        console.log('Playback prevented:', error);
      });
      window.removeEventListener('click', playAudio);
    };

    window.addEventListener('click', playAudio, { once: true });
  }

  render() {
    return (
      <Router>
        <div>
          <div className={"envelope animated " + this.state.class}>
            <div className="triangle-down"></div>
            <img className="heart" src={iconurl} alt="heart icon" onClick={() => {
              this.setState({ class: 'bounceOutRight', show: true });
            }} />
            <div className="triangle-up"></div>
            <div className="text">这里有一封信，给达令！</div>
          </div>
          {this.state.show && (
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          )}
        </div>
      </Router>
    );
  }
}

export default App;
