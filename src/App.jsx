import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const jd = {
    color: 'black'
  }

  const N = 59;
  const jam = 9;
  return (
    <body>
      <h2 className='judul' style={jd}>KANTIN Naufal</h2>
       <p>{
        jam < 12 ? "Selamat Pagi" : "Selamat Siang"
        }
      </p>
      <p>Saldo awal kartu kantin: Rp {N * 1000}</p>
      <button disabled>Bayar</button>
    </body>
  )
}

export default App
