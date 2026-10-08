import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

// Componente contenedor: estructura general de la página.
// Navbar y Footer siempre aparecen; en "children" llega lo que escribimos
// entre <Layout> y </Layout> en App.jsx (en este caso, Hero y Galeria).
// Los <> </> (fragmento) agrupan varios elementos sin agregar un div extra.
function Layout({ marca, opcionesMenu, redesSociales, copyright, children }) {
  return (
    <>
      <Navbar marca={marca} opciones={opcionesMenu} />
      <main>
        {children}
      </main>
      <Footer redes={redesSociales} copyright={copyright} />
    </>
  )
}

export default Layout
