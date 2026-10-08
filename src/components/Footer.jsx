import RedSocial from './RedSocial.jsx'

// Componente contenedor: pie de pagina con redes sociales.
// Props:
//   redes     (array)  -> lista de { icono, url, titulo, subtitulo }
//   copyright (string) -> texto de derechos reservados
function Footer({ redes, copyright }) {
  return (
    <footer id="contacto">
      <div className="redes-sociales">
        {redes.map((red) => (
          <RedSocial
            key={red.titulo}
            icono={red.icono}
            url={red.url}
            titulo={red.titulo}
            subtitulo={red.subtitulo}
          />
        ))}
      </div>
      <p>{copyright}</p>
    </footer>
  )
}

export default Footer
