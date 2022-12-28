import Accordion from 'react-bootstrap/Accordion';

export const Acordion = () => {
  return (
    <>
 <Accordion className = "acordion-sm-6" >
      <Accordion.Item eventKey="0">
        <Accordion.Header >Marvel Comics</Accordion.Header>
        <Accordion.Body className = "sm-6">
        <strong>Marvel Worldwide, Inc.</strong>, conocida como <strong>Marvel Comics, </strong> es una editorial de historietas
         estadounidense creada en 1939, inicialmente con el nombre de Timely Publications. 
         Entre sus personajes emblemáticos del género superheroico se encuentran Spider-Man, 
         Wolverine, X-Men, Capitán América, Iron Man, Hulk, Thor, Los 4 Fantásticos, Daredevil, 
         Punisher, Los Vengadores, entre otros.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header >DC Comics</Accordion.Header>
        <Accordion.Body bg = "danger">
       <strong>DC Comics</strong> es una editorial de cómics estadounidense. Forma parte de <strong>DC Entertainment</strong>,
         una de las empresas que conforman <strong>Warner Bros. Entertainment</strong>, la cual a su vez es propiedad de <strong>Warner Bros. Discovery. </strong> 
           Fue fundada en 1934 bajo el nombre National Allied Publications, para luego tomar el nombre de <strong>DC Comics</strong> en 1937.<br/>
<br />
            Entre algunos de sus personajes más emblemáticos se encuentran Superman, Batman, Mujer Maravilla, Flash,
             Linterna Verde, Aquaman, Hombre Halcón, Chica Halcón, Flecha Verde, Shazam, Detective Marciano, Starfire,
              Nightwing, Raven, Cyborg, Canario Negro, Doctor Destino, Robin, Chico Bestia, Zatanna, Hombre Plástico,
               Catwoman, Supergirl, El Joker y Harley Quinn.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>


    </>
  )
}

export default Acordion
