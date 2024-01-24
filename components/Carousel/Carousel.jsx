import React from 'react'

const Carousel = ({images}) => {
  return (
    <div className="carousel w-full">
        {
            images.map((image, index) => (
                <div key={index} id={index} className="carousel-item flex justify-center w-full lg:w-1/2 xl:w-1/3 relative h-full my-20">
                    <img src={image} className="w-62 h-62 lg:h-96 object-cover rounded-md my-4" alt={image} />
                </div>
            ))
        }
    </div>
  )
}

export default Carousel