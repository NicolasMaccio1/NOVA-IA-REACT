import CampoFormulario from './CampoFormulario.jsx'
import Boton from './Boton.jsx'

// Componente contenedor: formulario de contacto.
// Props:
//   servicios (array) -> lista de { valor, nombre } para el select
function Formulario({ servicios }) {
  return (
    <form className="form_items">
      <CampoFormulario id="nombre" etiqueta="Nombre:" tipo="text" placeholder="Ingrese su nombre" />
      <CampoFormulario id="email" etiqueta="Email:" tipo="email" placeholder="Ingrese su email" />
      <CampoFormulario id="telefono" etiqueta="Teléfono:" tipo="tel" placeholder="Ingrese su teléfono" />

      <div className="form-group">
        <span className="form-label">¿Tiene 18 años o más?</span>
        <div className="radio-group">
          <label className="radio-option">
            <input type="radio" name="edad" value="si" required /> Sí
          </label>
          <label className="radio-option">
            <input type="radio" name="edad" value="no" /> No
          </label>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="mensaje">Mensaje:</label>
        <textarea className="input-edit" id="mensaje" name="mensaje" placeholder="Ingrese su mensaje"></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="servicio">Servicio:</label>
        <select className="select_edit" name="servicio" id="servicio" required>
          <option value="">Seleccione un servicio</option>
          {servicios.map((servicio) => (
            <option key={servicio.valor} value={servicio.valor}>
              {servicio.nombre}
            </option>
          ))}
        </select>
      </div>

      <div className="button-group">
        <Boton clase="button_enviar" tipo="submit" texto="Enviar" />
        <Boton clase="button_limpiar" tipo="reset" texto="Limpiar" />
      </div>
    </form>
  )
}

export default Formulario
