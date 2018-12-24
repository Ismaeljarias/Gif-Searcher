import React, { Component } from 'react';
import './App.css';

import Modal from './components/Modal/Modal';
import SearchBar from './components/SearchBar/SearchBar';
import GifList from './components/Gif/GifList';
import MySlider from './components/Slider/Slider';

const key = 'IVt5a0XVGalhIh9XXfdVhshhXIy7vyKA';
// const url = `http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=${key}&limit=5`;

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      gifs: [],
      error: null,
      isLoaded: false,
      selectedGif: null,
      modalIsOpen: false
    }

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  };

  next = () => {
    this.slider.slickNext();
  }
  previous = () => {
    this.slider.slickPrev();
  }

  openModal = (gif) => {
    this.setState({
      modalIsOpen: true,
      selectedGif: gif,
    });
  }

  closeModal = () => {
    this.setState({
        modalIsOpen: false,
        selectedGif: null
    });
  }

  handleTermChange = (term) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=${key}&limit=15`;

    fetch(url)
    .then(res => res.json())
    .then((result) => {
      this.setState({
        isLoaded: true,
        gifs: result.data
      });
    },
    (error) => {
      this.setState({
        isLoaded: true,
        error
      });
    }
    );
  }

  render() {

    let list = '';
    if(this.state.error){
      list = ( <h1 style={{textAlign: 'center'}}>Oh Oh there is an issue in the app</h1> );
      
    }else if (!this.state.isLoaded) {
      list = ( <h1 style={{textAlign: 'center'}}>Please insert a search text</h1> );
    }
    else{
      list = <GifList 
              gifs={this.state.gifs} 
              onGifSelect={selectedGif => this.openModal(selectedGif)} />
    }

    return (
      <div className="app">
        <h1 onClick={this.openModal}>Gif</h1>
        <Modal 
          show={this.state.modalIsOpen} 
          modalClosed={this.closeModal}
          selectedGif={this.state.selectedGif} >
            <MySlider
              selectedGif={this.state.selectedGif}
              photos={this.state.gifs} 
            />
          </Modal>

        <SearchBar onTermChange={this.handleTermChange} />
        { list }
      </div>
    );
  }
}

export default App;
