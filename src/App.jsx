import Layout from './components/Layout.jsx'
import Hero from './components/Hero.jsx'
import Galeria from './components/Galeria.jsx'

// ===== DATOS DEL SITIO =====
// Acá están las listas de datos (menú, servicios, cards, galería y redes).
// Los componentes las reciben por props y las recorren con .map().

// Cada url apunta al id de una sección de la página:
// #inicio -> Hero, #servicios -> Galeria, #portafolio -> cards del Hero, #contacto -> Footer.
const opcionesMenu = [
  { nombre: 'Inicio', url: '#inicio' },
  { nombre: 'Servicios', url: '#servicios' },
  { nombre: 'Portafolio', url: '#portafolio' },
  { nombre: 'Contacto', url: '#contacto' },
]

const servicios = [
  { valor: 'desarrollo_web', nombre: 'Desarrollo Web' },
  { valor: 'marketing_digital', nombre: 'Marketing Digital' },
  { valor: 'consultoria_ia', nombre: 'Consultoría en IA' },
]

const cardsHero = [
  { imagen: '/Activos/cards.2.jpg', texto: 'Automatización de tareas con implementación de IA' },
  { imagen: '/Activos/cards1.2.jpg', texto: 'Modelos de IA integrados' },
]

const itemsGaleria = [
  { imagen: '/Activos/Imagen1.jpg', titulo: 'Automatización de procesos con IA' },
  { imagen: '/Activos/Imagen2.jpg', titulo: 'Chatbots inteligentes y asistentes' },
  { imagen: '/Activos/Imagen3.jpg', titulo: 'Análisis de datos avanzado' },
  { imagen: '/Activos/Imagen4.jpg', titulo: 'Visión artificial y reconocimiento' },
  { imagen: '/Activos/Imagen5.jpg', titulo: 'Procesamiento de lenguaje natural' },
  { imagen: '/Activos/Imagen6.jpg', titulo: 'IA generativa para contenido' },
  { imagen: '/Activos/Imagen7.avif', titulo: 'Asistentes virtuales empresariales' },
  { imagen: '/Activos/Imagen8.jpg', titulo: 'Ciberseguridad potenciada por IA' },
]

// Datos de contacto ficticios (la empresa es inventada para el trabajo práctico).
const redesSociales = [
  { icono: 'fa-brands fa-facebook', url: '#', titulo: 'NovaIA Facebook', subtitulo: '@novaia' },
  { icono: 'fa-brands fa-instagram', url: '#', titulo: 'NovaIA Instagram', subtitulo: '@nova.ia' },
  { icono: 'fa-brands fa-whatsapp', url: '#', titulo: '+54 9 11 1234-5678', subtitulo: 'WhatsApp' },
  { icono: 'fa-regular fa-envelope', url: '#', titulo: 'contacto@novaia.com', subtitulo: 'Envíenos un correo' },
]

function App() {
  return (
    <Layout
      marca="NOVA IA"
      opcionesMenu={opcionesMenu}
      redesSociales={redesSociales}
      copyright="© 2026 NOVA IA. Todos los derechos reservados."
    >
      <Hero
        imagenFondo="/Activos/robot.png"
        servicios={servicios}
        cards={cardsHero}
      />
      <Galeria items={itemsGaleria} />
    </Layout>
  )
}

export default App
