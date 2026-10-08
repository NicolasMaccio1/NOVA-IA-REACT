// Componente individual: boton reutilizable.
// Props:
//   clase (string) -> clase CSS del boton
//   tipo  (string) -> submit o reset
//   texto (string) -> texto del boton
function Boton({ clase, tipo, texto }) {
  return (
    <button className={clase} type={tipo}>
      {texto}
    </button>
  )
}

export default Boton
