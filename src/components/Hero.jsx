import Formulario from './Formulario.jsx'
import Card from './Card.jsx'

// Componente contenedor: seccion principal con imagen de fondo,
// el formulario y las cards.
// Props:
//   imagenFondo (string) -> ruta de la imagen de fondo
//   servicios   (array)  -> opciones del select del formulario
//   cards       (array)  -> lista de { imagen, texto }
function Hero({ imagenFondo, servicios, cards }) {
  return (
    <section className="hero" id="inicio">
      <img className="hero-img" src={imagenFondo} alt="Imagen de IA" />
      <div className="hero-content">
        <Formulario servicios={servicios} />

        <section className="cards-container" id="portafolio">
          {cards.map((card) => (
            <Card key={card.texto} imagen={card.imagen} texto={card.texto} />
          ))}
        </section>
      </div>
    </section>
  )
}

export default Hero
