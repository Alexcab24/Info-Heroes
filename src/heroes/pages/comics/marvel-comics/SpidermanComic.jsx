import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
export const SpidermanComic = () => {
  return (
    <>

{/* <object className="pdfview" type="application/pdf" data="https://whynotcomicbooks.files.wordpress.com/2020/06/amazing-fantasy-15.pdf" ></object> */}
<Accordion className = "col-md-9" >
      <Accordion.Item eventKey="0">
        <Accordion.Header >Comic</Accordion.Header>
        <Accordion.Body className = "sm-6">
       

        <Carousel interval = {100000000000}>
      <Carousel.Item>
     <img src="https://i.ibb.co/fnkwtyR/Picture1.png" 
     alt="Picture1" 
     width = "100%"
     />
      
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://i.ibb.co/vvMfRzm/Picture2.png" 
      alt="Picture2" 
      width = "100%%" />

     
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://i.ibb.co/7GCRj69/Picture3.png" 
      alt="Picture3" 
      width = "100%"/>

      
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://i.ibb.co/LZLV3gD/Picture4.png" 
      alt="Picture4" 
      width = "100%" />

      
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://i.ibb.co/SR0rvYb/Picture5.png" 
      alt="Picture5" 
     width = "100%" />

      
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://i.ibb.co/s93ydvC/Picture6.png" 
      alt="Picture6" 
      width = "100%"/>

      
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://i.ibb.co/XynmB0s/Picture7.png" 
      alt="Picture7" 
     width = "100%" />

      
      </Carousel.Item>

      <Carousel.Item>
      <img src="https://i.ibb.co/CBDKy5Q/Pictur8.png" 
      alt="Pictur8" 
      width = "100%" />

      
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://i.ibb.co/SmpLsWc/Picture9.png" 
      alt="Picture9" 
      width = "100%" />

      
      </Carousel.Item>

      <Carousel.Item>
    <img src="https://i.ibb.co/ZdLqnPG/Picture10.png" 
    alt="Picture10" 
    width = "100%" />

      
      </Carousel.Item>

      <Carousel.Item>
   <img src="https://i.ibb.co/hBhjLyH/Picture11.png" 
   alt="Picture11" 
   width = "100%"/>

      
      </Carousel.Item>

      <Carousel.Item>
     <img src="https://i.ibb.co/3cShKrd/Picture12.png" 
     alt="Picture12" 
     width = "100%" />
      
      </Carousel.Item>
      
      
    </Carousel>
       
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>







    </>
  )
}

export default SpidermanComic
