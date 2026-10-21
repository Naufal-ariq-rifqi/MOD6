import './App.css'
import KartuMenu from './Component/KartuMenu.jsx'
import Panel from './Component/Panel.jsx'

function App() {
  const jd = {
    color: 'black'
  }

  const N = 59;
  const jam = 9;
  return (
    <div>
      <h2 className='judul' style={jd}>KANTIN Naufal</h2>
       <p>{
        jam < 12 ? "Selamat Pagi" : "Selamat Siang"
        }
      </p>
      <p>Saldo awal kartu kantin: Rp {N * 1000}</p>
      <button disabled>Bayar</button>
      <Panel judul="Menu Hari Ini">
        <KartuMenu nama="Nasi Goreng" harga={15000} />
        <KartuMenu nama="Es Teh" harga={5000} kategori="Minuman" />
        <KartuMenu nama="Ayam Bakar" harga={20000} />
      </Panel>
    </div>
  )
}

export default App
