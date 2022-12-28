import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';

export const FlashComics = () => {
  return (
   <>
<Accordion className = "col-md-9" >
      <Accordion.Item eventKey="0">
        <Accordion.Header >Comic</Accordion.Header>
        <Accordion.Body className = "sm-6">
       

        <Carousel interval = {100000000000}>
      <Carousel.Item>
    <img src="https://i.ibb.co/rZZNkSV/Picture1.jpg" 
    alt="Picture1" 
    width = "100%" />
      </Carousel.Item>

      <Carousel.Item>
      <img src="https://i.ibb.co/g9vntmL/Picture2.jpg" 
      alt="Picture2" 
      width = "100%"/>
      </Carousel.Item>

      <Carousel.Item>
     <img src="https://i.ibb.co/0DrMWR1/Picture3.jpg" 
     alt="Picture3" 
    width = "100%" />
      </Carousel.Item>

      <Carousel.Item>
  <img src="https://i.ibb.co/ww0RX8j/Picture4.jpg" 
  alt="Picture4" 
  width = "100%"/>
      </Carousel.Item>

      <Carousel.Item>
     <img src="https://i.ibb.co/4tGY2Wg/Picture5.jpg" 
     alt="Picture5" 
     width = "100%" />
      </Carousel.Item>

      <Carousel.Item>
    <img src="https://i.ibb.co/F3zQGVs/Picture6.jpg" 
    alt="Picture6" 
   width = "100%"/>
      </Carousel.Item>
      <Carousel.Item>
     <img src="https://i.ibb.co/9nBSPxP/Picture7.jpg" 
     alt="Picture7" 
     width = "100%" />
      </Carousel.Item>

      <Carousel.Item>
   <img src="https://i.ibb.co/DWFwZsF/Picture8.jpg" 
   alt="Picture8" 
  width = "100%" />
      </Carousel.Item>

      <Carousel.Item>
  <img src="https://i.ibb.co/9gx36Mw/Picture9.jpg" 
  alt="Picture9" 
  width = "100%"/>
      </Carousel.Item>

      <Carousel.Item>
<img src="https://i.ibb.co/GJs92h9/Picture10.jpg" 
alt="Picture10" 
width = "100%" />
      </Carousel.Item>

      <Carousel.Item>
   <img src="https://i.ibb.co/W30SpHy/Picture11.jpg" 
   alt="Picture11" 
   width = "100%"/>
      </Carousel.Item>

      <Carousel.Item>
 <img src="https://i.ibb.co/rMHq4yK/Picture12.jpg" 
 alt="Picture12" 
width = "100%" />
      </Carousel.Item>

      <Carousel.Item>
<img src="https://i.ibb.co/Tgcx3Mz/Picture13.jpg" 
alt="Picture13" 
width = "100%" />
      </Carousel.Item>

      <Carousel.Item>
  <img src="https://i.ibb.co/VYLpcpn/Picture14.jpg" 
  alt="Picture14" 
width = "100%" />
      </Carousel.Item>

      <Carousel.Item>
     <img src="https://i.ibb.co/5K0N3YR/Picture15.jpg" 
     alt="Picture15" 
     width = "100%" />
      </Carousel.Item>

      <Carousel.Item>
     <img src="https://i.ibb.co/ry2xw8s/Picture16.jpg" 
     alt="Picture16" 
    width = "100%"/>
      </Carousel.Item>

    
    </Carousel>
       
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>




   </>
  )
}
