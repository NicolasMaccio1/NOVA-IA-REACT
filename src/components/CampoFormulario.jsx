// Componente individual: un campo del formulario (label + input).
// Props:
//   id          (string) -> id y name del input
//   etiqueta    (string) -> texto del label
//   tipo        (string) -> tipo de input (text, email, tel...)
//   placeholder (string) -> texto de ayuda dentro del input
function CampoFormulario({ id, etiqueta, tipo, placeholder }) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{etiqueta}</label>
      <input
        className="input-edit"
        type={tipo}
        id={id}
        name={id}
        required
        placeholder={placeholder}
      />
    </div>
  )
}

export default CampoFormulario
