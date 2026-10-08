// Componente individual: una card con imagen y texto.
// Props:
//   imagen (string) -> ruta de la imagen
//   texto  (string) -> texto que aparece abajo de la card
function Card({ imagen, texto }) {
  return (
    <article className="card">
      <img className="card-img" src={imagen} alt={texto} />
      <div className="card-text">{texto}</div>
    </article>
  )
}

export default Card
