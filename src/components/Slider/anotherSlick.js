div className="slider-container">
      {props.slideCount !== 0 ? <BackArrow onClick={props.previousImage}/> : ''}
      <div className="slide">
        {props.photos.map((photo, key) => {

          return (
            <div className="slide-images"  key={photo.id} 
                  style={{
                    margin: '0 auto',
                    width: `${props.selectedGif.images.downsized_medium.width + 'px'}`,
                    height: `${props.selectedGif.images.downsized_medium.height + 'px'}`
                  }}>

            
              <img src={ props.selectedGif.images.downsized_medium.url } alt={props.selectedGif.images.downsized_small.title} />
            </div>
          )
        })}
      </div>
      
    {props.slideCount !== (props.photos.length - 1) ? <NextArrow onClick={props.nextImage} /> : ''} 
      </div>