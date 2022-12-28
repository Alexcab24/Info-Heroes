import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';

export const IronManComic = () => {
  return (
   <>
   <Accordion className = "col-md-9" >
      <Accordion.Item eventKey="0">
        <Accordion.Header >Comic</Accordion.Header>
        <Accordion.Body className = "sm-6">
       

        <Carousel interval = {100000000000}>
      <Carousel.Item>
      <img src="https://i.ibb.co/xfC5MYm/Picture1.png" 
      alt="Picture1" 
     width = "100%"/>
      
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://i.ibb.co/4PKS3cb/Picture2.png" 
      alt="Picture2" 
      width = "100%" />
      
      </Carousel.Item>
      <Carousel.Item>
    <img src="https://i.ibb.co/KhpkMcv/Picture3.png" 
    alt="Picture3" 
    width = "100%"/>
      
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://i.ibb.co/yRMVv7G/Picture4.png" 
      alt="Picture4" 
      width = "100%"/>
      
      </Carousel.Item>
      <Carousel.Item>
     <img src="https://i.ibb.co/swSm0X9/Picture5.png" 
     alt="Picture5" 
    width = "100%" />
      
      </Carousel.Item>

      <Carousel.Item>
    <img src="https://i.ibb.co/9sTSxLs/Picture6.png" 
    alt="Picture6" 
    width = "100%"/>
      
      </Carousel.Item>

      <Carousel.Item>
     <img src="https://i.ibb.co/5kjKKTQ/Picture7.png" 
     alt="Picture7" 
     width = "100%" />
      
      </Carousel.Item>

      <Carousel.Item>
      <img src="https://i.ibb.co/vVyHbRh/Picture8.png" 
      alt="Picture8" 
      width = "100%" />
      
      </Carousel.Item>

      <Carousel.Item>
      <img src="https://i.ibb.co/zHkmr86/Picture9.png" 
      alt="Picture9"
       width = "100%" />
      
      </Carousel.Item>


      <Carousel.Item>
      <img src="https://i.ibb.co/QPn9CK6/Picture10.png" 
      alt="Picture10" 
      width = "100%"/>
      </Carousel.Item>


      <Carousel.Item>
      <img src="https://i.ibb.co/PFSMRSw/Picture11.png" 
      alt="Picture11" 
      width = "100%"/>
      </Carousel.Item>

      <Carousel.Item>
      <img src="https://i.ibb.co/kx91Jdk/Picture12.png" 
      alt="Picture12" 
      width = "100%" />
      </Carousel.Item>

      <Carousel.Item>
     <img src="https://i.ibb.co/Fh3HwGP/Picture13.png" 
     alt="Picture13" 
     width = "100%" />
      </Carousel.Item>

      <Carousel.Item>
      <img src="https://i.ibb.co/7vJrgYd/Picture14.png" 
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
