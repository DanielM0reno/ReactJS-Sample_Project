// Importacion de los assets
import socialIcon from './assets/social.svg'
import gitIcon from './assets/github.svg'

// Importacion del CSS
import './App.css'

// Importamos los componentes personalizados
import ComponenteContador from './componentes/componente.jsx'
import ComponenteFollow from './componentes/componenteFollow.jsx'

function App() {
  return (
    <>
      <div>
        <a href="https://github.com/DanielM0reno" target="_blank">
          <img src={gitIcon} className="logo" alt="Vite logo" /> <h2>DanielM0reno</h2>
        </a>
      </div>
      <h1>Componente 1:</h1>
      <div className="contenedor">
        <ComponenteContador/>
      </div>
      
      <hr />
      <h1>Componente 2:</h1>
      <div className="contenedor">
        <ComponenteFollow username='daniM0reno' initialIsFollowing>
          DaniM0reno
        </ComponenteFollow>
        <br />
        <ComponenteFollow username='joseluiiis' initialIsFollowing = {false}>
          ErJoseluiii
        </ComponenteFollow>
      </div>
      <hr />
    </>
  )
}

export default App
