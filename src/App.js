import './App.css';
import { Experiencia } from './componentes/Experiencia';
import { Principal } from './componentes/Principal';

export default function App() {
  const imprimir = () => {
    window.print()
  }
  return (
    <div className='App'>
      <div className="d-flex flex-column align-items-center">
        <div className='my-5 acoes'>
          <button className='btn btn-outline-primary' onClick={imprimir}><i className='bi bi-printer me-2'></i>Imprimir</button>
        </div>
        <Principal />
        <Experiencia />
      </div>
    </div>
  )
}
