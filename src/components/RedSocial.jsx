// Componente individual: icono de una red social con dos textos.
// Props:
//   icono     (string) -> clase de Font Awesome (ej: "fa-brands fa-facebook")
//   url       (string) -> link de la red social
//   titulo    (string) -> primer texto
//   subtitulo (string) -> segundo texto
function RedSocial({ icono, url, titulo, subtitulo }) {
  return (
    <div className="red-item">
      <a href={url}><i className={icono}></i></a>
      <span>{titulo}</span>
      <span>{subtitulo}</span>
    </div>
  )
}

export default RedSocial
