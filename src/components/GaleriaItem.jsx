// Componente individual: un elemento de la galeria.
// Props:
//   imagen (string) -> ruta de la imagen
//   titulo (string) -> texto que aparece sobre la imagen
function GaleriaItem({ imagen, titulo }) {
  return (
    <div className="galeria-item">
      <img src={imagen} alt={titulo} />
      <div className="card_galeria">{titulo}</div>
    </div>
  )
}

export default GaleriaItem
