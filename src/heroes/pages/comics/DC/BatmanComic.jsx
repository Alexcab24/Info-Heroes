import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';


export const BatmanComic = () => {
  return (
  <>
<Accordion className = "col-md-9" >
      <Accordion.Item eventKey="0">
        <Accordion.Header >Comic</Accordion.Header>
        <Accordion.Body className = "sm-6">
       

        <Carousel interval = {100000000000}>
      <Carousel.Item>
      <img src="https://i.ibb.co/n8LczzP/picture1.png" 
      alt="picture1" 
      width = "100%" />
      </Carousel.Item>

      <Carousel.Item>
     <img src="https://i.ibb.co/8Yr0dXH/picture2.png" 
     alt="picture2" 
     width = "100%"/>
      </Carousel.Item>

      <Carousel.Item>
     <img src="https://i.ibb.co/HY6s2BG/picture3.png" 
     alt="picture3" 
     width = "100%" />
      </Carousel.Item>

      <Carousel.Item>
     <img src="https://i.ibb.co/CM4RWCz/picture4.png" 
     alt="picture4" 
     width  = "100%"/>
      </Carousel.Item>

      <Carousel.Item>
     <img src="https://i.ibb.co/rw9bpNS/picture5.png" 
     alt="picture5" 
     width = "100%" />
      </Carousel.Item>

      <Carousel.Item>
      <img src="https://i.ibb.co/F5dKBhs/picture6.png" 
      alt="picture6" 
      width = "100%"/>
      </Carousel.Item>

      <Carousel.Item>
   <img src="https://i.ibb.co/25TT8fB/picture7.png" 
   alt="picture7" 
  width = "100%" />
      </Carousel.Item>






 
     
     
      
    </Carousel>
       
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>


  
  </>
  )
}
