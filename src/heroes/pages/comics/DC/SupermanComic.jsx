import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';


export const SupermanComic = () => {
  return (
   <>
<Accordion className = "col-md-9" >
      <Accordion.Item eventKey="0">
        <Accordion.Header >Comic</Accordion.Header>
        <Accordion.Body className = "sm-6">
       

        <Carousel interval = {100000000000}>
      <Carousel.Item>
     <img src="https://i.ibb.co/8Y1XGzK/Picture1.png" 
     alt="Picture1" 
    width = "100%"/>
      </Carousel.Item>

      <Carousel.Item>
    <img src="https://i.ibb.co/SsRCqQS/Picture2.png" 
    alt="Picture2" 
    width = "100%" />
      </Carousel.Item>

      <Carousel.Item>
    <img src="https://i.ibb.co/9bYV59G/Picture3.png" 
    alt="Picture3" 
   width = "100%" />
      </Carousel.Item>

      <Carousel.Item>
      <img src="https://i.ibb.co/4jvt8KW/Picture4.png" 
      alt="Picture4" 
      width = "100%"/>
      </Carousel.Item>

      <Carousel.Item>
      <img src="https://i.ibb.co/Ms6s6rw/Picture5.png" 
      alt="Picture5" 
      width = "100%" />
      </Carousel.Item>

      <Carousel.Item>
     <img src="https://i.ibb.co/WgJVSbc/Picture6.png" 
     alt="Picture6" 
     width = "100%"/>
      </Carousel.Item>

      <Carousel.Item>
   <img src="https://i.ibb.co/1XNkyG6/Picture7.png" 
   alt="Picture7" 
  width = "100%" />
      </Carousel.Item>

      <Carousel.Item>
 <img src="https://i.ibb.co/pZ76C7H/Picture8.png" 
 alt="Picture8" 
 width = "100%" />
      </Carousel.Item>

      <Carousel.Item>
     <img src="https://i.ibb.co/1TqzyGj/Picture9.png" 
     alt="Picture9" 
     width = "100%" />
      </Carousel.Item>

      <Carousel.Item>
     <img src="https://i.ibb.co/5x5jG8p/Picture10.png" 
     alt="Picture10" 
     width = "100%" />
      </Carousel.Item>

      <Carousel.Item>
      <img src="https://i.ibb.co/T0rMtDg/Picture11.png" 
      alt="Picture11" 
      width = "100%"/>
      </Carousel.Item>

      <Carousel.Item>
 <img src="https://i.ibb.co/DDY6gdz/Picture12.png" 
 alt="Picture12" 
 width = "100%"/>
      </Carousel.Item>

      <Carousel.Item>
      <img src="https://i.ibb.co/PMymmDQ/Picture13.png" 
      alt="Picture13" 
      width = "100%" />
      </Carousel.Item>

      <Carousel.Item>
     <img src="https://i.ibb.co/z4drFk7/Picture14.png" 
     alt="Picture14" 
     width = "100%" />
      </Carousel.Item>
      
    </Carousel>
       
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>




   </>
  )
}
