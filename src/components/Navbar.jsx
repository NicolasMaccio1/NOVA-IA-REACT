// Componente contenedor: nombre de la marca + menú de navegación.
// Recibe la lista de opciones y la recorre con .map() para armar cada <li>.
// "key" es un identificador único que React pide en cada elemento de una lista.
// Props:
//   marca    (string) -> texto del logo
//   opciones (array)  -> lista de { nombre, url } para el menu
function Navbar({ marca, opciones }) {
  return (
    <header>
      <div className="nombre_marca">
        <h1>{marca}</h1>
      </div>
      <nav>
        <ul className="menu-list">
          {opciones.map((opcion) => (
            <li key={opcion.nombre}>
              <a href={opcion.url}>{opcion.nombre}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
