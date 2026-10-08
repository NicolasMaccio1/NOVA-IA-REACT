import GaleriaItem from './GaleriaItem.jsx'

// Componente contenedor: galeria de servicios.
// Props:
//   items (array) -> lista de { imagen, titulo }
function Galeria({ items }) {
  return (
    <section className="galeria-cards" id="servicios">
      {items.map((item) => (
        <GaleriaItem key={item.titulo} imagen={item.imagen} titulo={item.titulo} />
      ))}
    </section>
  )
}

export default Galeria
