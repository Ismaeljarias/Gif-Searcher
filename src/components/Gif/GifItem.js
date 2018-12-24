import React from 'react';

const GifItem = ({gif, onGifSelect}) => {
  return (
    <div className="gif-item"
         onClick={onGifSelect.bind(this, gif)}
         >
      <img src={gif.images.downsized_medium.url} alt={gif.images.downsized_medium.title} />
    
    </div>
  )
};

export default GifItem;