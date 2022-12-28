import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';

export const ThorComics = () => {
  return (
   <>
<Accordion className = "col-md-9" >
      <Accordion.Item eventKey="0">
        <Accordion.Header >Comic</Accordion.Header>
        <Accordion.Body className = "sm-6">
       

        <Carousel interval = {100000000000}>
      <Carousel.Item>
      <img src="https://i.ibb.co/dQVJtDT/picture1.jpg" 
      alt="picture1" 
      width = "100%" />
      
      </Carousel.Item>

      <Carousel.Item>
      <img src="https://i.ibb.co/2jLmB5N/picture2.jpg" 
      alt="picture2" 
      width = "100%" />
      
      </Carousel.Item>

      <Carousel.Item>
      <img src="https://i.ibb.co/RD2Yj7k/picture3.jpg" 
      alt="picture3" 
     width = "100%"/>
      
      </Carousel.Item>

      <Carousel.Item>
     <img src="https://i.ibb.co/wWJvQ6f/picture4.jpg"
      alt="picture4"
      width = "100%"/>
      
      </Carousel.Item>

      <Carousel.Item>
      <img src="https://i.ibb.co/gRhHbtL/picture5.jpg" 
      alt="picture5" 
      width = "100%" />
      
      </Carousel.Item>

      <Carousel.Item>
      <img src="https://i.ibb.co/7QNPp7q/picture6.jpg" 
      alt="picture6" 
      width = "100%"/>
      
      </Carousel.Item>

      <Carousel.Item>
      <img src="https://i.ibb.co/hd9FP3H/picture7.jpg" 
      alt="picture7" 
    width = "100%" />
      
      </Carousel.Item>

      <Carousel.Item>
    <img src="https://i.ibb.co/5cDNZc1/picture8.jpg" 
    alt="picture8" 
    width = "100%" />
      
      </Carousel.Item>

      <Carousel.Item>
   <img src="https://i.ibb.co/mDJVH3H/picture9.jpg"
    alt="picture9" 
    width = "100%" />

      
      </Carousel.Item>

      <Carousel.Item>
     <img src="https://i.ibb.co/hKGWGXD/picture10.jpg"
      alt="picture10" 
      width = "100%"/>

      
      </Carousel.Item>

      <Carousel.Item>
      <img src="https://i.ibb.co/34Scqcw/picture11.jpg" 
      alt="picture11"
       width = "100%" />
      
      </Carousel.Item>

      <Carousel.Item>
    <img src="https://i.ibb.co/0JwdMHb/picture12.jpg" 
    alt="picture12" 
    width = "100%" />
      
      </Carousel.Item>

      <Carousel.Item>
      <img src="https://i.ibb.co/N25RFkj/picture13.jpg" 
      alt="picture13" 
      width = "100%" />
      
      </Carousel.Item>
     
      <Carousel.Item>
      <img src="https://i.ibb.co/qBbx1TV/picture14.jpg" 
      alt="picture14" 
      width = "100%" />
      
      </Carousel.Item>
    </Carousel>
       
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>






   </>
  )
}
