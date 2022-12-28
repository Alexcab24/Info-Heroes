import { Carousel } from 'react-bootstrap'

export const Carrusel = () => {
  return (
   <>
   <div className="carru animate__animated animate__fadeIn ">

<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/3hnkqT8/wallhaven-n6xx76.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/b6NTv7Q/wallhaven-2ez1l9.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/L1d0bxj/wallhaven-4xo3gz.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   </div>





   </>
  )
}

export default Carrusel
