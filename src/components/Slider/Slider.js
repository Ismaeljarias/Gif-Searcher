import React, { Component } from 'react';
import Slider from "react-slick";

import './Slider.css';

class MySlider extends Component {

  constructor(props){
    super(props);

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next = () => {
    this.slider.slickNext();
    
  }
  previous = () => {
    this.slider.slickPrev();
  }

  render(){
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      
      <div className="slider-container">
        <Slider 
          ref={c => (this.slider = c)} {...settings}>
          {this.props.photos.map((photo, key) => {
            return (
              <img key={photo.id} src={ photo.images.downsized_medium.url } alt=  {photo.images.downsized_medium.title} />
            )
            
          })}
        </Slider>
        <div style={{ textAlign: "center" }}>
          <button className="button" onClick={this.previous}>
            Previous
          </button>
          <button className="button" onClick={this.next}>
            Next
          </button>
        </div>
      </div>
  
    );
  }
}

export default MySlider;
